import SectionHeader from "../components/SectionHeader.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

export default function Contact() {
  const { t } = useLang();
  const s = strings.contact;

  return (
    <section className="w-full pb-6 md:pb-10">
      <SectionHeader title={t(s.title)} description={t(s.eyebrow)} lede={t(s.lede)} />

      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-6">
        <ul className="grid gap-4 sm:grid-cols-2">
          {s.channels.map((channel, index) => (
            <li key={channel.href} className="stagger-item" style={{ "--stagger": 0.4 + index * 0.1 }}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="surface surface--interactive group flex h-full flex-col gap-4"
              >
                <span className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03]">
                    <img src={channel.icon} alt="" width="16" height="16" className="h-4 w-4 object-contain" loading="lazy" decoding="async" />
                  </span>
                  <span className="txt-4 transition group-hover:txt-1" aria-hidden="true">↗</span>
                </span>

                <span className="grid gap-1">
                  <span className="eyebrow eyebrow--quiet">{t(channel.label)}</span>
                  <span className="break-all text-[0.95rem] font-medium txt-1">{channel.value}</span>
                  <span className="meta-text">{t(channel.hint)}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <aside className="stagger-item surface grid content-start gap-4" style={{ "--stagger": 0.9 }}>
          <header className="block-head !mb-0">
            <p className="eyebrow">{t(s.availEyebrow)}</p>
            <h2 className="block-head-title">{t(s.availTitle)}</h2>
          </header>
          <dl className="def-grid">
            {s.avail.map((row) => (
              <div key={t(row.dt)}>
                <dt>{t(row.dt)}</dt>
                <dd>{t(row.dd)}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
