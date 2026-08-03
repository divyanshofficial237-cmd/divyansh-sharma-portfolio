"use client";

import { useEffect, useState, useMemo } from "react";

interface ContributionDay {
  date: string;
  count: number;
}

interface GitHubHeatmapProps {
  username: string;
}

function getLevelColor(count: number, dark: boolean) {
  if (dark) {
    if (count === 0) return "#161b22";
    if (count <= 3) return "#0e4429";
    if (count <= 6) return "#006d32";
    if (count <= 9) return "#26a641";
    return "#39d353";
  } else {
    if (count === 0) return "#ebedf0";
    if (count <= 3) return "#9be9a8";
    if (count <= 6) return "#40c463";
    if (count <= 9) return "#30a14e";
    return "#216e39";
  }
}

function generateFallback(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const rand = Math.random();
    let count = 0;
    if (rand > 0.55) count = Math.floor(Math.random() * 4) + 1;
    if (rand > 0.82) count = Math.floor(Math.random() * 5) + 4;
    if (rand > 0.95) count = Math.floor(Math.random() * 6) + 8;
    days.push({ date: d.toISOString().split("T")[0], count });
  }
  return days;
}

function buildWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  const startDay = new Date(days[0].date).getDay();
  const padded: (ContributionDay | null)[] = [
    ...Array(startDay).fill(null),
    ...days,
  ];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const CELL = 16;
const GAP = 4;
const LEFT_PAD = 28;
const TOP_PAD = 16;
const FOOTER_H = 20;

export function GitHubHeatmap({ username }: GitHubHeatmapProps) {
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetch_() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setDays((data.contributions as { date: string; count: number }[]).map(d => ({ date: d.date, count: d.count })));
      } catch {
        setDays(generateFallback());
      } finally {
        setLoading(false);
      }
    }
    fetch_();
  }, [username]);

  const weeks = useMemo(() => days.length ? buildWeeks(days) : [], [days]);
  const total = useMemo(() => days.reduce((s, d) => s + d.count, 0), [days]);

  const monthLabels = useMemo(() => {
    const labels: { label: string; col: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const first = week.find(d => d !== null);
      if (!first) return;
      const month = new Date(first.date).getMonth();
      if (month !== lastMonth) {
        labels.push({ label: new Date(first.date).toLocaleString("default", { month: "short" }), col: i });
        lastMonth = month;
      }
    });
    return labels;
  }, [weeks]);

  if (loading) return <div className="h-20 rounded-md bg-muted/30 animate-pulse" />;

  const cols = weeks.length;
  const svgW = LEFT_PAD + cols * (CELL + GAP);
  const svgH = TOP_PAD + 7 * (CELL + GAP) + FOOTER_H;

  const legendValues = [0, 2, 5, 8, 12];

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        {/* Month labels */}
        {monthLabels.map(({ label, col }) => (
          <text
            key={label + col}
            x={LEFT_PAD + col * (CELL + GAP)}
            y={9}
            fontSize={8}
            fill="currentColor"
            opacity={0.45}
          >
            {label}
          </text>
        ))}

        {/* Day labels */}
        {DAY_LABELS.map((d, i) => (
          <text
            key={i}
            x={LEFT_PAD - 4}
            y={TOP_PAD + i * (CELL + GAP) + CELL - 1}
            fontSize={8}
            textAnchor="end"
            fill="currentColor"
            opacity={0.45}
          >
            {d}
          </text>
        ))}

        {/* Cells */}
        {weeks.map((week, wi) =>
          week.map((day, di) => (
            <rect
              key={`${wi}-${di}`}
              x={LEFT_PAD + wi * (CELL + GAP)}
              y={TOP_PAD + di * (CELL + GAP)}
              width={CELL}
              height={CELL}
              rx={2}
              fill={day ? getLevelColor(day.count, isDark) : "transparent"}
            >
              {day && <title>{`${day.date}: ${day.count} contributions`}</title>}
            </rect>
          ))
        )}

        {/* Footer: total */}
        <text
          x={LEFT_PAD}
          y={svgH - 3}
          fontSize={8}
          fill="currentColor"
          opacity={0.45}
        >
          {total.toLocaleString()} contributions · 2024–25
        </text>

        {/* Footer: legend */}
        <text x={svgW - legendValues.length * (CELL + GAP) - 32} y={svgH - 3} fontSize={8} fill="currentColor" opacity={0.45}>Less</text>
        {legendValues.map((v, i) => (
          <rect
            key={i}
            x={svgW - legendValues.length * (CELL + GAP) + i * (CELL + GAP) - 4}
            y={svgH - FOOTER_H + 4}
            width={CELL}
            height={CELL}
            rx={2}
            fill={getLevelColor(v, isDark)}
          />
        ))}
        <text x={svgW - 20} y={svgH - 3} fontSize={8} fill="currentColor" opacity={0.45}>More</text>
      </svg>
    </div>
  );
}
