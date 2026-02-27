import { Link, useParams } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import IphoneMockupCarousel from "../components/IphoneMockupCarousel.jsx";
import { projects } from "../data/projects.js";

const mobileScreenshotModules = import.meta.glob(
  "../assets/projects/*/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

const folderFromPath = (path) => {
  const match = path.match(/\/projects\/([^/]+)\//);
  return match?.[1] ?? "";
};

const fileNameFromPath = (path) => path.split("/").pop() ?? "";

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base"
});

const mobileScreenshotsByFolder = Object.entries(mobileScreenshotModules).reduce(
  (acc, [path, src]) => {
    const folder = folderFromPath(path);
    if (!folder) return acc;

    if (!acc[folder]) {
      acc[folder] = [];
    }

    acc[folder].push({
      src,
      path
    });
    return acc;
  },
  {}
);

Object.keys(mobileScreenshotsByFolder).forEach((folder) => {
  mobileScreenshotsByFolder[folder] = mobileScreenshotsByFolder[folder]
    .sort((a, b) => collator.compare(fileNameFromPath(a.path), fileNameFromPath(b.path)))
    .map((item, index) => ({
      src: item.src,
      label: `Mockup ${index + 1}`
    }));
});

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="space-y-6 pb-16 pt-8 md:pt-0">
        <SectionHeader title="Projeto não encontrado" description="Erro 404" />
        <p className="text-sm text-muted">
          Não foi possível localizar o projeto solicitado.
        </p>
        <Link
          to="/projetos"
          className="inline-flex items-center rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink"
        >
          Voltar para projetos
        </Link>
      </section>
    );
  }

  const folderMockups = project.mobileGalleryFolder
    ? mobileScreenshotsByFolder[project.mobileGalleryFolder] || []
    : [];
  const fallbackMockups = project.mobileMockups || [];
  const resolvedMobileMockups =
    folderMockups.length > 0 ? folderMockups : fallbackMockups;
  const spotlightStack = project.techStack.slice(0, 4);
  const executionList = project.responsibilities.slice(0, 5);
  const primaryPitch = project.shortDescription || project.overview;

  return (
    <section className="space-y-12 pb-12 pt-8 md:space-y-16 md:pt-28">
      <header
        className="stagger-item border-b border-white/10 pb-12 md:pb-14"
        style={{ "--stagger": 0.6 }}
      >
        <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start md:gap-10">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {project.status}
            </p>
            <h1 className="max-w-4xl font-display text-3xl font-semibold leading-[1.05] text-ink md:text-6xl">
              {project.name}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-ink/92 md:text-xl">
              {primaryPitch}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-muted">
              {project.overview}
            </p>
          </div>

          <aside className="space-y-4 md:border-l md:border-white/12 md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt">
              Mensagem-chave
            </p>
            <h2 className="max-w-md font-display text-2xl font-semibold leading-tight text-ink">
              Produto pensado para virar resultado real.
            </h2>
            <ul className="space-y-3 text-base leading-relaxed text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-burnt/80" />
                <span>Clareza no fluxo principal desde o primeiro acesso.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-burnt/80" />
                <span>Experiência orientada por progresso e continuidade.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-burnt/80" />
                <span>Arquitetura pronta para evolução de funcionalidades.</span>
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {spotlightStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink/90"
            >
              {item}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-5">
        <div className="stagger-item space-y-3" style={{ "--stagger": 0.75 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Prova visual
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Veja o produto em uso real
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-muted">
            A navegação abaixo mostra telas reais do aplicativo em execução, com
            foco em usabilidade, hierarquia visual e fluxo contínuo.
          </p>
        </div>
        <IphoneMockupCarousel
          images={resolvedMobileMockups}
          projectSlug={project.mobileGalleryFolder || project.slug}
          stagger={0.85}
        />
      </div>

      <div className="grid gap-10 border-t border-white/10 pt-8 md:grid-cols-2">
        <section className="stagger-item space-y-3" style={{ "--stagger": 1.1 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Cenário inicial
          </p>
          <h3 className="font-display text-2xl font-semibold text-ink">
            O desafio de negócio
          </h3>
          <p className="text-base leading-relaxed text-muted">{project.problem}</p>
        </section>

        <section className="stagger-item space-y-3" style={{ "--stagger": 1.6 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Resposta aplicada
          </p>
          <h3 className="font-display text-2xl font-semibold text-ink">
            A solução estratégica
          </h3>
          <p className="text-base leading-relaxed text-muted">{project.solution}</p>
        </section>
      </div>

      <div className="grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.1fr_0.9fr]">
        <section className="stagger-item space-y-3" style={{ "--stagger": 0.9 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Execução
          </p>
          <h3 className="font-display text-2xl font-semibold text-ink">
            O que foi entregue na prática
          </h3>
          <ul className="space-y-3 text-base text-muted">
            {executionList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-burnt/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="stagger-item space-y-3" style={{ "--stagger": 1.4 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Base técnica
          </p>
          <h3 className="font-display text-2xl font-semibold text-ink">
            Stack e sustentação do produto
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink/90"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="border-l border-white/12 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              Status atual
            </h4>
            <p className="mt-2 text-base leading-relaxed text-muted">
              {project.statusDetail}
            </p>
          </div>
        </section>
      </div>

      <div
        className="stagger-item flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"
        style={{ "--stagger": 2.1 }}
      >
        <p className="text-base font-semibold text-ink">
          Quer ver outro case com foco em impacto de negócio?
        </p>
        <Link
          className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-white/40"
          to="/projetos"
        >
          Voltar para projetos
        </Link>
      </div>
    </section>
  );
}
