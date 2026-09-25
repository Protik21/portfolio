import type { CSSProperties } from "react";

interface Beam {
  axis: "x" | "y";
  /**
   * Grid line the beam runs along, multiplied by --grid-size.
   * Vertical beams count from the horizontal centre (negative = left of centre),
   * horizontal beams count down from the top of the hero.
   */
  line: number;
  /** Full cycle in seconds: the pass takes about two thirds, then the beam rests. */
  duration: number;
  delay: number;
  reverse?: boolean;
}

// Fixed values (not random) so server and client render identically. On desktop the vertical
// lines sit in the side margins and the gutter beside the headline, so they don't cut through copy.
const beams: Beam[] = [
  { axis: "y", line: -12, duration: 9, delay: 1.6 },
  { axis: "y", line: -10, duration: 11, delay: 4.2 },
  { axis: "y", line: 1, duration: 7.5, delay: 0.4 },
  { axis: "y", line: 6, duration: 10, delay: 2.9 },
  { axis: "y", line: 10, duration: 8.5, delay: 1.1 },
  { axis: "y", line: 12, duration: 12, delay: 5.4 },
  { axis: "x", line: 2, duration: 12, delay: 0.8 },
  { axis: "x", line: 2, duration: 15, delay: 7.5, reverse: true },
  { axis: "x", line: 9, duration: 13, delay: 3.6, reverse: true },
];

/** Brand-green light streaks that travel along the hero grid. Hidden for reduced-motion visitors. */
export function GridBeams() {
  return (
    <div aria-hidden className="grid-beams absolute inset-0 overflow-hidden motion-reduce:hidden">
      {beams.map((beam, i) => (
        <span
          key={i}
          className={`beam beam-${beam.axis}${beam.reverse ? " beam-reverse" : ""}`}
          style={
            {
              "--beam-line": beam.line,
              "--beam-duration": `${beam.duration}s`,
              "--beam-delay": `${beam.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
