// src/i18n/translations.js
// Todas as strings do site em PT e EN

export const translations = {
  PT: {
    // ── Navbar ──────────────────────────────────────
    nav: {
      services:      'Serviços',
      projects:      'Projetos',
      how:           'Como funciona',
      differentials: 'Diferenciais',
      contact:       'Contato',
      cta:           'Começar projeto',
    },

    // ── Hero ─────────────────────────────────────────
    hero: {
      badge:       'Agência Digital Premium',
      titleLine1:  'Sites que geram',
      titleLine2:  'resultados reais',
      typedPrefix: 'Criamos ',
      typedPhrases: [
        'sites que convertem visitantes em clientes.',
        'e-commerces de alta performance.',
        'landing pages que geram leads.',
        'experiências digitais memoráveis.',
        'design que vende 24 horas por dia.',
      ],
      description:  'Criamos experiências digitais que convertem visitantes em clientes. Design estratégico, tecnologia de ponta e foco total no crescimento do seu negócio.',
      cta1:         '🚀 Solicitar proposta',
      cta2:         'Ver projetos →',
      stat1Num:     '150+',
      stat1Label:   'Projetos entregues',
      stat2Num:     '98%',
      stat2Label:   'Clientes satisfeitos',
      stat3Num:     '3×',
      stat3Label:   'Aumento médio em vendas',
      card1:        'Aumento de conversão',
      card2:        'Performance 100/100',
      card3:        'Design estratégico',
      card4:        'Segurança avançada',
    },

    // ── Services ──────────────────────────────────────
    services: {
      tag:   'O que fazemos',
      title: 'Soluções digitais completas\npara o seu negócio',
      desc:  'Do planejamento estratégico à entrega do projeto, cuidamos de cada detalhe para garantir resultados que superam expectativas.',
      items: [
        { icon: '🌐', title: 'Sites Institucionais',  desc: 'Criamos sites modernos, responsivos e otimizados que representam sua marca com profissionalismo e geram confiança nos visitantes.' },
        { icon: '🛒', title: 'E-commerce',            desc: 'Lojas virtuais de alta conversão com experiências de compra fluidas, integração de pagamentos e gestão simplificada de produtos.' },
        { icon: '📱', title: 'Landing Pages',         desc: 'Páginas de captura e vendas desenvolvidas com foco total em conversão, testes A/B e otimização contínua de resultados.' },
        { icon: '⚡', title: 'Otimização SEO',        desc: 'Estratégias técnicas e de conteúdo para posicionar seu site no topo do Google e atrair clientes orgânicos qualificados.' },
        { icon: '🎨', title: 'UI/UX Design',          desc: 'Interfaces intuitivas e esteticamente impactantes que encantam usuários, reduzem a taxa de rejeição e aumentam o tempo de sessão.' },
        { icon: '🔧', title: 'Manutenção & Suporte',  desc: 'Suporte técnico contínuo, atualizações de segurança, monitoramento de performance e backups automáticos para seu projeto.' },
      ],
    },

    // ── How It Works ──────────────────────────────────
    how: {
      tag:   'Processo',
      title: 'Como transformamos\nsua visão em realidade',
      desc:  'Um processo claro e transparente, do primeiro contato até a entrega final com acompanhamento pós-lançamento.',
      steps: [
        { num: '01', title: 'Briefing & Estratégia', desc: 'Entendemos profundamente seu negócio, público-alvo e objetivos para criar uma estratégia digital sólida.' },
        { num: '02', title: 'Design & Protótipo',    desc: 'Criamos wireframes e protótipos de alta fidelidade, validando a experiência antes do desenvolvimento.' },
        { num: '03', title: 'Desenvolvimento',       desc: 'Codificamos com as melhores tecnologias, garantindo performance, segurança e escalabilidade.' },
        { num: '04', title: 'Lançamento & Suporte',  desc: 'Publicamos seu site, monitoramos os resultados e oferecemos suporte contínuo para seu crescimento.' },
      ],
    },

    // ── Projects ──────────────────────────────────────
    projects: {
      tag:   'Portfólio',
      title: 'Projetos que\ngeram resultados',
      desc:  'Cada projeto é uma história de sucesso. Veja como transformamos negócios através do design estratégico.',
      cta:   'Ver case completo →',
      items: [
        { tag: 'E-commerce',         emoji: '🏪', title: 'Boutique Fashion Store', desc: 'Loja virtual com experiência premium, aumentando as vendas em 280% nos primeiros 3 meses após o lançamento.' },
        { tag: 'Landing Page',       emoji: '🏋️', title: 'Academia ProFit',       desc: 'Landing page de alta conversão que triplicou as matrículas mensais, com integração de sistema de agendamento online.' },
        { tag: 'Site Institucional', emoji: '🏢', title: 'Construtora Omega',     desc: 'Site institucional sofisticado com catálogo de empreendimentos interativo, aumentando 400% os leads qualificados.' },
      ],
    },

    // ── Differentials ─────────────────────────────────
    differentials: {
      tag:   'Por que OwlCodex',
      title: 'O que nos torna diferentes de todos os outros',
      desc:  'Não somos apenas uma agência. Somos parceiros estratégicos comprometidos com o sucesso real do seu negócio.',
      items: [
        { icon: '🦉', title: 'Visão estratégica 360°',  desc: 'Analisamos seu mercado, concorrência e público-alvo antes de criar qualquer pixel. Cada decisão é baseada em dados.' },
        { icon: '⚡', title: 'Performance extrema',      desc: 'Sites com pontuação 95+ no Google PageSpeed. Performance não é opcional — é o ponto de partida.' },
        { icon: '📊', title: 'Foco em conversão',       desc: 'Cada elemento do design é pensado para guiar o visitante em direção à ação que você deseja. Menos arte, mais resultado.' },
        { icon: '🤝', title: 'Parceria de longo prazo', desc: 'Não entregamos projetos e sumimos. Acompanhamos seu crescimento e evoluímos sua presença digital continuamente.' },
      ],
    },

    // ── Metrics ───────────────────────────────────────
    metrics: [
      { count: 150, suffix: '+', label: 'Projetos Entregues' },
      { count: 98,  suffix: '%', label: 'Satisfação dos Clientes' },
      { count: 320, suffix: '%', label: 'Aumento Médio em Leads' },
      { count: 5,   suffix: '',  label: 'Anos de Experiência' },
    ],

    // ── Testimonials ──────────────────────────────────
    testimonials: {
      tag:   'Depoimentos',
      title: 'O que nossos clientes dizem',
      desc:  'Histórias reais de negócios que transformamos com design e estratégia digital.',
      items: [
        { initials: 'CM', name: 'Carlos Mendes',      role: 'CEO — Grupo Mendes Construtora', text: '"A OwlCodex transformou completamente a presença digital da nossa empresa. Em apenas 2 meses após o lançamento, triplicamos os leads e as vendas online superaram todas as expectativas."' },
        { initials: 'AL', name: 'Ana Lima',           role: 'Fundadora — Boutique Eleganza',  text: '"Profissionalismo impecável do início ao fim. O site ficou exatamente como imaginei, mas muito melhor. A taxa de conversão da nossa loja online aumentou 180% em 60 dias."' },
        { initials: 'RF', name: 'Roberto Figueiredo', role: 'Diretor — Academia ProFit',       text: '"Além de entregarem um produto incrível, a OwlCodex nos ajudou a entender melhor nosso público. O suporte pós-entrega é diferenciado — parecem parte do nosso time."' },
      ],
    },

    // ── Contact ───────────────────────────────────────
    contact: {
      tag:         'Fale conosco',
      title:       'Vamos construir algo incrível juntos?',
      desc:        'Conte-nos sobre seu projeto. Nossa equipe analisará sua demanda e retornará com uma proposta personalizada em até 24 horas.',
      emailLabel:  'E-mail',
      phoneLabel:  'WhatsApp',
      hoursLabel:  'Atendimento',
      hoursValue:  'Seg–Sex, 9h às 18h',
      form: {
        nameLabel:    'Nome completo',
        namePh:       'João Silva',
        emailLabel:   'E-mail',
        emailPh:      'joao@empresa.com',
        companyLabel: 'Empresa',
        companyPh:    'Minha Empresa',
        phoneLabel:   'WhatsApp',
        phonePh:      '(11) 99999-0000',
        typeLabel:    'Tipo de projeto',
        typePh:       'Selecione...',
        typeOptions:  ['Site Institucional', 'E-commerce', 'Landing Page', 'Outro'],
        msgLabel:     'Conte-nos sobre seu projeto',
        msgPh:        'Descreva seus objetivos, prazo e orçamento...',
        submit:       '🚀 Enviar mensagem',
        successTitle: 'Mensagem enviada!',
        successDesc:  'Nossa equipe retornará em até 24 horas com uma proposta personalizada.',
      },
    },

    // ── Footer ────────────────────────────────────────
    footer: {
      desc:     'Agência de criação de sites focada em gerar engajamento e aumentar as vendas dos nossos clientes.',
      servCol:  'Serviços',
      compCol:  'Empresa',
      legalCol: 'Legal',
      servLinks:  ['Sites Institucionais', 'E-commerce', 'Landing Pages', 'SEO & Performance', 'UI/UX Design'],
      compLinks:  ['Sobre nós', 'Portfólio', 'Cases', 'Contato'],
      legalLinks: ['Privacidade', 'Termos de uso', 'Cookies'],
      copy:     '© 2025 OwlCodex. Todos os direitos reservados.',
    },
  },

  // ════════════════════════════════════════════════════
  EN: {
    nav: {
      services:      'Services',
      projects:      'Projects',
      how:           'How it works',
      differentials: 'Why us',
      contact:       'Contact',
      cta:           'Start a project',
    },
    hero: {
      badge:       'Premium Digital Agency',
      titleLine1:  'Websites that generate',
      titleLine2:  'real results',
      typedPrefix: 'We create ',
      typedPhrases: [
        'websites that convert visitors into customers.',
        'high-performance e-commerce stores.',
        'landing pages that generate leads.',
        'memorable digital experiences.',
        'design that sells 24 hours a day.',
      ],
      description:  'We craft digital experiences that convert visitors into customers. Strategic design, cutting-edge technology, and full focus on growing your business.',
      cta1:         '🚀 Request a proposal',
      cta2:         'View projects →',
      stat1Num:     '150+',
      stat1Label:   'Projects delivered',
      stat2Num:     '98%',
      stat2Label:   'Satisfied clients',
      stat3Num:     '3×',
      stat3Label:   'Average sales increase',
      card1:        'Conversion boost',
      card2:        '100/100 Performance',
      card3:        'Strategic design',
      card4:        'Advanced security',
    },
    services: {
      tag:   'What we do',
      title: 'Complete digital solutions\nfor your business',
      desc:  'From strategic planning to project delivery, we take care of every detail to ensure results that exceed expectations.',
      items: [
        { icon: '🌐', title: 'Institutional Websites', desc: 'We create modern, responsive, optimized websites that represent your brand professionally and build trust with visitors.' },
        { icon: '🛒', title: 'E-commerce',             desc: 'High-conversion online stores with seamless shopping experiences, payment integrations, and simplified product management.' },
        { icon: '📱', title: 'Landing Pages',          desc: 'Capture and sales pages developed with full focus on conversion, A/B testing, and continuous results optimization.' },
        { icon: '⚡', title: 'SEO Optimization',       desc: 'Technical and content strategies to rank your site at the top of Google and attract qualified organic customers.' },
        { icon: '🎨', title: 'UI/UX Design',           desc: 'Intuitive, aesthetically impactful interfaces that delight users, reduce bounce rates, and increase session time.' },
        { icon: '🔧', title: 'Maintenance & Support',  desc: 'Continuous technical support, security updates, performance monitoring, and automatic backups for your project.' },
      ],
    },
    how: {
      tag:   'Process',
      title: 'How we turn your vision\ninto reality',
      desc:  'A clear and transparent process, from first contact to final delivery with post-launch follow-up.',
      steps: [
        { num: '01', title: 'Briefing & Strategy', desc: 'We deeply understand your business, target audience, and goals to create a solid digital strategy.' },
        { num: '02', title: 'Design & Prototype',  desc: 'We create high-fidelity wireframes and prototypes, validating the experience before development.' },
        { num: '03', title: 'Development',         desc: 'We code with the best technologies, ensuring performance, security, and scalability.' },
        { num: '04', title: 'Launch & Support',    desc: 'We publish your site, monitor results, and offer continuous support for your growth.' },
      ],
    },
    projects: {
      tag:   'Portfolio',
      title: 'Projects that\ndeliver results',
      desc:  'Each project is a success story. See how we transform businesses through strategic design.',
      cta:   'View full case →',
      items: [
        { tag: 'E-commerce',         emoji: '🏪', title: 'Boutique Fashion Store', desc: 'Premium online store experience, increasing sales by 280% in the first 3 months after launch.' },
        { tag: 'Landing Page',       emoji: '🏋️', title: 'ProFit Gym',            desc: 'High-conversion landing page that tripled monthly enrollments, with integrated online scheduling system.' },
        { tag: 'Institutional Site', emoji: '🏢', title: 'Omega Construction',    desc: 'Sophisticated institutional website with interactive property catalog, increasing qualified leads by 400%.' },
      ],
    },
    differentials: {
      tag:   'Why OwlCodex',
      title: 'What makes us different from everyone else',
      desc:  'We are not just an agency. We are strategic partners committed to the real success of your business.',
      items: [
        { icon: '🦉', title: '360° Strategic vision',  desc: 'We analyze your market, competition, and target audience before creating any pixel. Every decision is data-driven.' },
        { icon: '⚡', title: 'Extreme performance',     desc: 'Sites scoring 95+ on Google PageSpeed. Performance is not optional — it\'s the starting point.' },
        { icon: '📊', title: 'Conversion focus',       desc: 'Every design element is crafted to guide the visitor toward the action you want. Less art, more results.' },
        { icon: '🤝', title: 'Long-term partnership',  desc: 'We don\'t deliver projects and disappear. We follow your growth and continuously evolve your digital presence.' },
      ],
    },
    metrics: [
      { count: 150, suffix: '+', label: 'Projects Delivered' },
      { count: 98,  suffix: '%', label: 'Client Satisfaction' },
      { count: 320, suffix: '%', label: 'Average Lead Increase' },
      { count: 5,   suffix: '',  label: 'Years of Experience' },
    ],
    testimonials: {
      tag:   'Testimonials',
      title: 'What our clients say',
      desc:  'Real stories of businesses we transformed with design and digital strategy.',
      items: [
        { initials: 'CM', name: 'Carlos Mendes',      role: 'CEO — Grupo Mendes Construction', text: '"OwlCodex completely transformed our company\'s digital presence. In just 2 months after launch, we tripled our leads and online sales exceeded all expectations."' },
        { initials: 'AL', name: 'Ana Lima',           role: 'Founder — Boutique Eleganza',     text: '"Impeccable professionalism from start to finish. The site turned out exactly as I imagined, but much better. Our online store conversion rate increased 180% in 60 days."' },
        { initials: 'RF', name: 'Roberto Figueiredo', role: 'Director — ProFit Gym',            text: '"Beyond delivering an incredible product, OwlCodex helped us better understand our audience. Post-delivery support is outstanding — they feel like part of our team."' },
      ],
    },
    contact: {
      tag:         'Contact us',
      title:       'Shall we build something amazing together?',
      desc:        'Tell us about your project. Our team will analyze your request and get back with a personalized proposal within 24 hours.',
      emailLabel:  'Email',
      phoneLabel:  'WhatsApp',
      hoursLabel:  'Support hours',
      hoursValue:  'Mon–Fri, 9am to 6pm',
      form: {
        nameLabel:    'Full name',
        namePh:       'John Smith',
        emailLabel:   'Email',
        emailPh:      'john@company.com',
        companyLabel: 'Company',
        companyPh:    'My Company',
        phoneLabel:   'WhatsApp',
        phonePh:      '+1 (555) 000-0000',
        typeLabel:    'Project type',
        typePh:       'Select...',
        typeOptions:  ['Institutional Website', 'E-commerce', 'Landing Page', 'Other'],
        msgLabel:     'Tell us about your project',
        msgPh:        'Describe your goals, timeline, and budget...',
        submit:       '🚀 Send message',
        successTitle: 'Message sent!',
        successDesc:  'Our team will get back to you within 24 hours with a personalized proposal.',
      },
    },
    footer: {
      desc:      'Web design agency focused on generating engagement and increasing sales for our clients.',
      servCol:   'Services',
      compCol:   'Company',
      legalCol:  'Legal',
      servLinks:  ['Institutional Websites', 'E-commerce', 'Landing Pages', 'SEO & Performance', 'UI/UX Design'],
      compLinks:  ['About us', 'Portfolio', 'Cases', 'Contact'],
      legalLinks: ['Privacy', 'Terms of use', 'Cookies'],
      copy:      '© 2025 OwlCodex. All rights reserved.',
    },
  },
};
