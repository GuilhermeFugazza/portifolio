export default function SectionHeader({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = ""
}) {
  return (
    <div className={`mb-10 space-y-3 text-center ${className}`.trim()}>
      <p
        className={`stagger-item text-xs font-semibold uppercase tracking-[0.3em] text-burnt ${descriptionClassName}`.trim()}
        style={{ "--stagger": 0.6 }}
      >
        {description}
      </p>
      <h2
        className={`stagger-item font-display text-3xl font-semibold text-ink md:text-4xl ${titleClassName}`.trim()}
        style={{ "--stagger": 0.2 }}
      >
        {title}
      </h2>
    </div>
  );
}
