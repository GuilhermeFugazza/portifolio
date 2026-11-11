# Portfólio de Guilherme Fugazza

Site pessoal em português e inglês, publicado em [guilherme.ftechworks.com.br](https://guilherme.ftechworks.com.br) pelo Cloudflare Pages a cada push na `main`.

Mostra os dois produtos em uso (Poupfy e Comandafy), a Mensageria de Condomínios, a trajetória e as perguntas de quem contrata.

## Como rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/ com o HTML pronto de cada página
npm run preview    # serve dist/ em http://localhost:4173
```

## Como funciona

- **Vite e React 18**, com CSS próprio (sem framework de CSS). Cada página tem o seu escopo: `.p` (comum), `.p-home`, `.p-case`, `.p-pf` e `.p-cf`, em `src/styles/`.
- **HTML pronto no build.** `npm run build` gera o pacote do navegador, depois o do servidor, e `scripts/gerar-paginas.mjs` escreve o HTML de cada rota com título, descrição, idiomas alternativos e Open Graph. O navegador recebe a página já desenhada e o React só assume os controles (`hydrateRoot`).
- **Rotas:**

  | Português | Inglês |
  |---|---|
  | `/` | `/en` |
  | `/projetos/poupfy` | `/en/projects/poupfy` |
  | `/projetos/comandafy` | `/en/projects/comandafy` |

  Endereços do site antigo redirecionam em `public/_redirects`. Qualquer outro endereço cai no `404.html`.
- **Texto:** todo o conteúdo fica em `src/content/pt.jsx` e `src/content/en.jsx`, com a mesma forma. Cada idioma é um pacote separado.
- **Tempo de experiência:** calculado a partir de março de 2024 (`src/lib/tempo.js`). O HTML sai com o mês do build e o navegador atualiza.

## Arquivos que se geram uma vez

| Comando | O que faz |
|---|---|
| `npm run imagens` | Gera AVIF, WebP e JPEG das telas de `src/assets/originais` em `src/assets/img`. |
| `npm run icones` | Junta os ícones de `src/assets/icones` no sprite `src/assets/icones.svg`. |
| `node scripts/og/gerar.mjs` | Gera `public/og/pt.png` e `public/og/en.png`, a imagem do link compartilhado. Usa o Chrome instalado. |

## Currículo

Os PDFs em `public/cv/` saem da fonte em `Profissional/curriculo/` (fora deste repositório). A versão em português baixa o PDF em A4; a versão em inglês baixa o PDF em Carta, sem foto.

## Licenças

Fontes Bricolage Grotesque, Inter Tight e JetBrains Mono: SIL Open Font License 1.1 (`public/fonts/LICENCA.txt`). Ícones: Simple Icons, CC0 (`src/assets/icones/LICENCA-simple-icons.md`).
