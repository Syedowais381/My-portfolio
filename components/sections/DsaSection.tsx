import Reveal from "@/components/Reveal";

const progress = [
  { topic: "Arrays", value: 82 },
  { topic: "Strings", value: 78 },
  { topic: "Sliding Window", value: 72 },
  { topic: "HashMap", value: 80 },
  { topic: "Stack", value: 76 },
  { topic: "Recursion", value: 68 },
  { topic: "Backtracking", value: 64 },
  { topic: "DP", value: 61 },
  { topic: "Graph", value: 58 },
  { topic: "Tree", value: 70 },
  { topic: "Greedy", value: 66 },
];

export default function DsaSection() {
  return (
    <section id="dsa" className="section dsa-section">
      <div className="container">
        <Reveal>
          <h2>DSA Progress</h2>
        </Reveal>
        <div className="progress-list">
          {progress.map((item, index) => (
            <Reveal key={item.topic} delayMs={index * 45} className="progress-item">
              <div className="progress-head">
                <h3>{item.topic}</h3>
                <span>{item.value}%</span>
              </div>
              <div className="progress-track" role="progressbar" aria-label={item.topic} aria-valuenow={item.value}>
                <div className="progress-fill" style={{ width: `${item.value}%` }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
