# 🦉 OwlCodex — Site Oficial

Projeto React da OwlCodex, agência digital de criação de sites.

---

## 🚀 Como rodar no VS Code

### Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior
- npm (já incluso com o Node)

### Passos

```bash
# 1. Entre na pasta do projeto
cd owlcodex

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm start
```

O site abre automaticamente em **http://localhost:3000**

---

## 📁 Estrutura do projeto

```
owlcodex/
├── public/
│   └── index.html              # HTML base (Poppins carregada aqui)
│
└── src/
    ├── index.js                # Ponto de entrada React
    ├── index.css               # CSS global, variáveis, reset, keyframes
    │
    ├── App.jsx                 # Componente raiz — monta todas as seções
    │
    ├── context/
    │   └── AppContext.js       # Estado global: tema (dark/light) e idioma (PT/EN)
    │
    ├── hooks/
    │   ├── useScrollReveal.js  # Anima elementos .reveal ao entrar na viewport
    │   ├── useTyped.js         # Efeito de texto digitando no Hero
    │   └── useCountUp.js       # Animação de contagem nos Metrics
    │
    ├── i18n/
    │   └── translations.js     # Todo o conteúdo do site em PT e EN
    │
    ├── assets/
    │   └── svgs/
    │       └── LogoOwlCodex.jsx  # Logos SVG como componentes React
    │
    └── components/
        ├── ParticlesCanvas.jsx / (sem CSS)  — Canvas de partículas animadas
        ├── Navbar.jsx     / Navbar.css       — Navegação + tema + idioma
        ├── Hero.jsx       / Hero.css         — Seção hero com typewriter
        ├── Services.jsx   / Services.css     — 6 cards de serviços
        ├── HowItWorks.jsx / HowItWorks.css   — 4 etapas do processo
        ├── Projects.jsx   / Projects.css     — Portfólio (3 projetos)
        ├── Differentials.jsx / Differentials.css — Diferenciais com orb
        ├── Metrics.jsx    / Metrics.css      — Contadores animados
        ├── Testimonials.jsx / Testimonials.css — 3 depoimentos
        ├── Contact.jsx    / Contact.css      — Formulário de contato
        └── Footer.jsx     / Footer.css       — Rodapé completo
```

---

## ✏️ Como personalizar

### Trocar textos / traduzir
Edite `src/i18n/translations.js` — todos os textos estão centralizados lá,
separados por seção e idioma (PT / EN).

### Mudar cores
Edite as variáveis em `src/index.css`:
```css
:root {
  --bg-primary:    #111821;
  --bg-secondary:  #0B1F3B;
  --accent:        #006AFC;
  --text-primary:  #E2E2E2;
  /* ... */
}
```

### Adicionar/remover projetos
Edite o array `projects.items` em `src/i18n/translations.js`.

### Integrar formulário com backend
Abra `src/components/Contact.jsx` e substitua o `setTimeout` dentro de
`handleSubmit` pela sua chamada real (fetch, axios, EmailJS, etc).

### Conectar redes sociais
Abra `src/components/Footer.jsx` e troque os `href` dos `.social-btn`.

---

## 🛠️ Tecnologias

| Tech | Uso |
|------|-----|
| React 18 | Framework de UI |
| CSS Modules (arquivos .css por componente) | Estilização isolada |
| CSS Custom Properties | Paleta e temas |
| Canvas API | Partículas animadas |
| IntersectionObserver | Scroll reveal + count-up |
| Google Fonts (Poppins) | Tipografia |

---

## 📦 Build para produção

```bash
npm run build
```
Gera a pasta `build/` pronta para hospedar em Vercel, Netlify, ou qualquer servidor estático.
