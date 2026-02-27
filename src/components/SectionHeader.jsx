export default function SectionHeader({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = ""
}) {
  return (
    <div className={`mb-10 space-y-2 pt-6 text-center ${className}`.trim()}>
      <p
        className={`stagger-item text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-burnt md:text-xs md:tracking-[0.3em] ${descriptionClassName}`.trim()}
        style={{ "--stagger": 0.6 }}
      >
        {description}
      </p>
      <h2
        className={`stagger-item font-display text-[2rem] font-semibold leading-[1.08] text-ink md:text-4xl ${titleClassName}`.trim()}
        style={{ "--stagger": 0.2 }}
      >
        {title}
      </h2>
    </div>
  );
}
