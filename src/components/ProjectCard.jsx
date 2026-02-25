import { Link } from "react-router-dom";

const staggerOffsets = [0.6, 1.4, 0.9, 1.8];

const techBrandAssets = {
  React: {
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    alt: "Logo do React"
  },
  "React Native": {
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    alt: "Logo do React Native"
  },
  Expo: {
    icon: "https://cdn.simpleicons.org/expo/FFFFFF",
    alt: "Logo do Expo"
  },
  Node: {
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    alt: "Logo do Node.js"
  },
  "Node.js": {
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    alt: "Logo do Node.js"
  },
  PostgreSQL: {
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    alt: "Logo do PostgreSQL"
  },
  SQLite: {
    icon: "https://cdn.simpleicons.org/sqlite/0F80CC",
    alt: "Logo do SQLite"
  },
  n8n: {
    icon: "https://cdn.simpleicons.org/n8n/EA4B71",
    alt: "Logo do n8n"
  },
  Linux: {
    icon: "https://cdn.simpleicons.org/linux/FCC624",
    alt: "Logo do Linux"
  }
};

const statusClassByText = (status = "") => {
  const normalized = status
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  if (normalized.includes("produc")) {
    return "border-emerald-300/30 bg-emerald-500/[0.12] text-emerald-100/92";
  }
  if (normalized.includes("desenvolv")) {
    return "border-amber-300/30 bg-amber-500/[0.12] text-amber-100/92";
  }
  return "border-white/15 bg-white/[0.04] text-ink/86";
};

const getTechAsset = (techName) => techBrandAssets[techName] || null;

export default function ProjectCard({ project, index = 0 }) {
  const stagger = staggerOffsets[index % staggerOffsets.length];

  return (
    <li className="stagger-item py-5 md:py-6" style={{ "--stagger": stagger }}>
      <article className="grid gap-4 md:grid-cols-[15.2rem_minmax(0,1fr)] md:gap-8">
        <header>
          <p
            className={`inline-flex rounded-full border px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] ${statusClassByText(
              project.status
            )}`}
          >
            {project.status}
          </p>

          <h3 className="mt-2 font-display text-[1.35rem] leading-[1.1] tracking-[-0.015em] text-ink/92 md:text-[1.52rem]">
            {project.name}
          </h3>
        </header>

        <div className="min-w-0">
          <p className="text-[0.93rem] leading-[1.58] text-ink/84 md:text-[0.97rem]">
            {project.shortDescription}
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <ul className="flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.name}`}>
              {project.stack.map((item) => {
                const asset = getTechAsset(item);

                return (
                  <li
                    key={item}
                    className="inline-flex min-h-8 items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1"
                    title={item}
                    aria-label={item}
                  >
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-white/[0.03]">
                      {asset ? (
                        <img
                          src={asset.icon}
                          alt={asset.alt}
                          className="h-3.5 w-3.5 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="text-[0.54rem] font-bold text-ink/78">{item[0]}</span>
                      )}
                    </span>
                    <span className="text-[0.75rem] font-medium text-ink/78">{item}</span>
                  </li>
                );
              })}
            </ul>

            <Link
              to={`/projetos/${project.slug}`}
              className="inline-flex min-h-10 w-fit items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/[0.04] px-4 text-sm font-semibold text-white transition hover:border-white/36 hover:bg-white/[0.1] md:justify-self-end"
            >
              Clique para ver detalhes
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}
