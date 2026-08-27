export default function SectionHeader({
  title,
  description,
  lede,
  aside,
  className = "",
  titleClassName = "",
  descriptionClassName = ""
}) {
  return (
    <header className={`page-head ${className}`.trim()}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
        <div className="grid gap-2">
          <p
            className={`stagger-item eyebrow ${descriptionClassName}`.trim()}
            style={{ "--stagger": 0.6 }}
          >
            {description}
          </p>
          <h1
            className={`stagger-item page-head-title ${titleClassName}`.trim()}
            style={{ "--stagger": 0.2 }}
          >
            {title}
          </h1>
        </div>

        {aside && (
          <div className="stagger-item shrink-0" style={{ "--stagger": 0.9 }}>
            {aside}
          </div>
        )}
      </div>

      {lede && (
        <p className="stagger-item lede" style={{ "--stagger": 0.8 }}>
          {lede}
        </p>
      )}
    </header>
  );
}
