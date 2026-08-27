// Um único mapa de ícones para todo o site. Antes havia três cópias
// divergentes (Home, ProjectCard, About) com URLs e cores diferentes.
const SI = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

const icons = {
  React: SI("react", "61DAFB"),
  "React Native": SI("react", "61DAFB"),
  Expo: SI("expo", "FFFFFF"),
  "Tailwind CSS": SI("tailwindcss", "06B6D4"),
  Tailwind: SI("tailwindcss", "06B6D4"),
  TypeScript: SI("typescript", "3178C6"),
  "Node.js": SI("nodedotjs", "5FA04E"),
  Node: SI("nodedotjs", "5FA04E"),
  NestJS: SI("nestjs", "E0234E"),
  Fastify: SI("fastify", "FFFFFF"),
  Express: SI("express", "FFFFFF"),
  Prisma: SI("prisma", "5A67D8"),
  PostgreSQL: SI("postgresql", "4169E1"),
  SQLite: SI("sqlite", "0F80CC"),
  Redis: SI("redis", "FF4438"),
  Stripe: SI("stripe", "635BFF"),
  WebSocket: SI("socketdotio", "FFFFFF"),
  IndexedDB: SI("databricks", "FF3621"),
  Docker: SI("docker", "2496ED"),
  Nginx: SI("nginx", "009639"),
  Linux: SI("linux", "FCC624"),
  "Linux Server": SI("linux", "FCC624"),
  Cloudflare: SI("cloudflare", "F38020"),
  "GitHub Actions": SI("githubactions", "2088FF"),
  Python: SI("python", "3776AB"),
  Pandas: SI("pandas", "8A7FD6"),
  n8n: SI("n8n", "EA4B71"),
  Webhooks: SI("zapier", "FF4F00"),
  "REST APIs": SI("openapiinitiative", "6BA539"),
  "APIs REST": SI("openapiinitiative", "6BA539"),
  "Multi-tenant": SI("databricks", "FF3621"),
  "Integrações financeiras": SI("stripe", "635BFF"),
  zod: SI("zod", "3E67B1"),
  Caddy: SI("caddy", "1F88C0")
};

export const techIcon = (name) => icons[name] || null;
