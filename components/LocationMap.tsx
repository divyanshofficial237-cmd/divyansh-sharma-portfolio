"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function LocationMap() {
  const location = {
    city: "Jabalpur",
    state: "Madhya Pradesh",
    country: "India",
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm p-6">
      {/* India Map SVG - Outline only */}
      <svg
        viewBox="0 0 800 1000"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Actual India map outline path */}
        <path
          d="M 500 100
             L 520 120 L 540 140 L 560 170 L 570 200
             L 575 230 L 577 260 L 578 290 L 577 320
             L 575 350 L 570 380 L 563 410 L 555 440
             L 545 470 L 533 500 L 520 530 L 505 560
             L 490 590 L 475 620 L 460 650 L 445 680
             L 432 710 L 422 740 L 415 770 L 410 800
             L 407 830 L 405 860 L 405 890
             L 380 870 L 360 850 L 345 825 L 335 800
             L 325 770 L 318 740 L 313 710 L 310 680
             L 308 650 L 307 620 L 307 590 L 308 560
             L 310 530 L 313 500 L 318 470 L 325 440
             L 333 410 L 343 380 L 355 350 L 370 320
             L 385 290 L 400 260 L 415 230 L 430 200
             L 445 170 L 460 140 L 475 120 Z"
          className="fill-none stroke-foreground/20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Jabalpur pin - positioned in central India (Madhya Pradesh) */}
        <g transform="translate(440, 450)">
          {/* Animated pulse rings */}
          <motion.circle
            cx="0"
            cy="0"
            r="30"
            className="fill-primary/10"
            animate={{
              r: [20, 40, 60],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.circle
            cx="0"
            cy="0"
            r="30"
            className="fill-primary/10"
            animate={{
              r: [20, 40, 60],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />

          {/* Pin outer circle */}
          <circle
            cx="0"
            cy="0"
            r="15"
            className="fill-primary"
            opacity="0.9"
          />
          
          {/* Pin inner dot */}
          <circle
            cx="0"
            cy="0"
            r="6"
            className="fill-background"
          />
        </g>
      </svg>

      {/* Location info card at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/95 backdrop-blur-sm p-4 border border-border/50 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold">{location.city}</p>
            <p className="text-xs text-muted-foreground">
              {location.state}, {location.country}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
