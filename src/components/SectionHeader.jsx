export default function SectionHeader({ title, description }) {
  return (
    <div className="mb-10 space-y-3">
      <p
        className="stagger-item text-xs font-semibold uppercase tracking-[0.3em] text-burnt"
        style={{ "--stagger": 0.6 }}
      >
        {description}
      </p>
      <h2
        className="stagger-item font-display text-3xl font-semibold text-ink md:text-4xl"
        style={{ "--stagger": 0.2 }}
      >
        {title}
      </h2>
    </div>
  );
}
