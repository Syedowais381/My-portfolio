import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export default function SectionHeading({ index, kicker, title, intro }: SectionHeadingProps) {
  return (
    <div className="sec-head">
      <Reveal>
        <div className="sec-topline">
          <span className="sec-kicker mono">{kicker}</span>
          <span className="sec-index">{index}</span>
        </div>
      </Reveal>
      <Reveal delayMs={90}>
        <h2>{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delayMs={160}>
          <p className="sec-intro">{intro}</p>
        </Reveal>
      ) : null}
      <Reveal delayMs={220}>
        <div className="sec-rule" />
      </Reveal>
    </div>
  );
}
