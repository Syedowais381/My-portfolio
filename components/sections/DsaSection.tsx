import CountUp from "@/components/CountUp";
import ProgressRing from "@/components/ProgressRing";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const progress = [
  { topic: "Arrays", value: 82 },
  { topic: "HashMap", value: 80 },
  { topic: "Strings", value: 78 },
  { topic: "Stack", value: 76 },
  { topic: "Sliding Window", value: 72 },
  { topic: "Tree", value: 70 },
  { topic: "Recursion", value: 68 },
  { topic: "Greedy", value: 66 },
  { topic: "Backtracking", value: 64 },
  { topic: "DP", value: 61 },
  { topic: "Graph", value: 58 },
];

const average = Math.round(progress.reduce((sum, item) => sum + item.value, 0) / progress.length);
const strongest = progress.reduce((best, item) => (item.value > best.value ? item : best));

export default function DsaSection() {
  return (
    <section id="dsa" className="section">
      <div className="container">
        <SectionHeading
          index="05 / 06"
          kicker="Fundamentals"
          title="DSA progress"
          intro="Consistent practice across the core problem-solving patterns — tracked honestly, including the topics still in progress."
        />

        {/* single gradient definition shared by every ring */}
        <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="dsaGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffd089" />
              <stop offset="50%" stopColor="#ff9d2e" />
              <stop offset="100%" stopColor="#e2541f" />
            </linearGradient>
          </defs>
        </svg>

        <Reveal>
          <div className="dsa-summary">
            <div className="dsa-stat">
              <span className="dsa-stat-value">
                <CountUp to={progress.length} />
              </span>
              <span className="dsa-stat-label">Topics tracked</span>
            </div>
            <div className="dsa-stat">
              <span className="dsa-stat-value">
                <CountUp to={average} suffix="%" />
              </span>
              <span className="dsa-stat-label">Average coverage</span>
            </div>
            <div className="dsa-stat">
              <span className="dsa-stat-value">{strongest.topic}</span>
              <span className="dsa-stat-label">Strongest area</span>
            </div>
          </div>
        </Reveal>

        <div className="dsa-grid">
          {progress.map((item, index) => (
            <ProgressRing key={item.topic} value={item.value} label={item.topic} delayMs={index * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
