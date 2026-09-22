type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  // The track is duplicated so the -50% scroll loop is seamless.
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
