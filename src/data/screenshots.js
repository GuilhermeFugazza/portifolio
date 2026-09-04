// Índice único das capturas de tela, compartilhado entre a lista de projetos
// (capa do card) e a página de detalhe (galeria). Ordem vem do prefixo numérico.
const modules = import.meta.glob("../assets/projects/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default"
});

const folderFromPath = (path) => path.match(/\/projects\/([^/]+)\//)?.[1] ?? "";
const fileNameFromPath = (path) => path.split("/").pop() ?? "";

// "2-cardapio-kiosk.jpg" -> "Cardapio kiosk". Sem nome legível, cai no índice.
const labelFromPath = (path, index) => {
  const base = fileNameFromPath(path).replace(/\.[^.]+$/, "");
  const cleaned = base.replace(/^\d+[-_]?/, "").replace(/[-_]+/g, " ").trim();
  if (!cleaned) return `Tela ${index + 1}`;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

export const screenshotsByFolder = Object.entries(modules).reduce((acc, [path, src]) => {
  const folder = folderFromPath(path);
  if (!folder) return acc;
  (acc[folder] ||= []).push({ src, path });
  return acc;
}, {});

Object.keys(screenshotsByFolder).forEach((folder) => {
  screenshotsByFolder[folder] = screenshotsByFolder[folder]
    .sort((a, b) => collator.compare(fileNameFromPath(a.path), fileNameFromPath(b.path)))
    .map((item, index) => ({
      src: item.src,
      label: labelFromPath(item.path, index),
      file: fileNameFromPath(item.path)
    }));
});

const labelEn = {
  Comandas: "Tabs",
  "Cardapio kiosk": "Kiosk menu",
  "Tema escuro": "Dark theme",
  Login: "Sign in",
  Dashboard: "Dashboard",
  Analytics: "Analytics",
  Equipe: "Team",
  Inicio: "Home",
  Encomendas: "Packages",
  Avisos: "Notices",
  Reservas: "Bookings",
  Perfil: "Profile"
};

export const galleryFor = (project, lang = "pt") => {
  const folder = project.desktopGalleryFolder || project.mobileGalleryFolder;
  const list = folder ? screenshotsByFolder[folder] || [] : [];
  if (lang !== "en") return list;
  return list.map((item) => ({ ...item, label: labelEn[item.label] || item.label }));
};

// A capa é a primeira captura, salvo quando o projeto aponta outra por
// `coverFile` (prefixo do nome do arquivo): a primeira nem sempre é a que
// melhor vende o sistema.
export const coverFor = (project) => {
  const list = galleryFor(project);
  if (project.coverFile) {
    const hit = list.find((item) => item.file?.startsWith(project.coverFile));
    if (hit) return hit.src;
  }
  return list[0]?.src ?? null;
};
