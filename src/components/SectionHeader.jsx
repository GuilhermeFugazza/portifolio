export default function SectionHeader({ title, description }) {
  return (
    <div className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        {description}
      </p>
      <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
