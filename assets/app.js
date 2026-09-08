const UFCD = {
  code: "0695",
  title: "Gestão informatizada de documentos",
  hours: "50 horas",
  action: "26109",
  driveFolder: "26109/05-0695"
};

const pendingLinks = {
  appsScriptUrl: window.UFCD0695_PENDING_LINKS?.appsScriptUrl || "PENDENTE_UFCD0695_APPS_SCRIPT_URL",
  spreadsheetId: window.UFCD0695_PENDING_LINKS?.spreadsheetId || "PENDENTE_UFCD0695_SPREADSHEET_ID",
  mentimeterEmbedUrl: "",
  mentimeterParticipationUrl: "",
  glossaryUrl: /^https?:\/\//i.test(window.UFCD0695_PENDING_LINKS?.glossaryUrl || "") ? window.UFCD0695_PENDING_LINKS.glossaryUrl : "",
  individualTaskForumUrls: Array.from({ length: 13 }, (_, index) => {
    const url = String(window.UFCD0695_PENDING_LINKS?.individualTaskForumUrls?.[index] || "").trim();
    return /^https?:///i.test(url) ? url : "";
  }),
  manualPdf: window.UFCD0695_PENDING_LINKS?.manualPdf || ""
};

const topics = [
  { id: "excel", title: "Excel", menuTitle: "Excel", cardTitle: "Bases de dados — Excel", intro: "Organizar, tratar e analisar informação em Excel como suporte à gestão documental.", image: "", url: "conteudos/excel.html" },
  { id: "access", title: "Access", menuTitle: "Access", cardTitle: "Bases de dados — Access", intro: "Criar e utilizar bases de dados relacionais para registar, consultar e organizar informação.", image: "", url: "conteudos/access.html" },
  { id: "pdf", title: "PDF", menuTitle: "PDF", cardTitle: "Documentos PDF", intro: "Criar, converter, organizar e utilizar documentos em formato PDF na gestão documental.", image: "", url: "conteudos/pdf.html" },
  { id: "digitalizacao", title: "Digitalização", menuTitle: "Digitalização", cardTitle: "Digitalização", intro: "Digitalizar documentos e aplicar procedimentos de organização, qualidade e arquivo digital.", image: "", url: "conteudos/digitalizacao.html" }
];

const contentLessons = {
  "excel": {
    summary: "O Excel pode ser usado como ferramenta de registo, organização e análise de informação documental, através de listas estruturadas, validação, filtros e fórmulas.",
    sections: [
      { title: "Estruturar dados", text: "Organizar informação em tabelas com campos, registos e critérios consistentes.", points: ["Definir cabeçalhos claros.", "Normalizar formatos.", "Evitar duplicações e incoerências."] },
      { title: "Tratar e localizar informação", text: "Utilizar ordenação, filtros, validação e fórmulas para apoiar a consulta e controlo documental.", points: ["Ordenar e filtrar.", "Validar entradas.", "Aplicar fórmulas e funções adequadas."] },
      { title: "Preparar informação", text: "Apresentar e exportar informação de forma legível e adequada ao contexto administrativo.", points: ["Formatar com consistência.", "Preparar impressão.", "Exportar quando necessário."] }
    ],
    practice: "Construir e manter uma lista de controlo documental em Excel."
  },
  "access": {
    summary: "O Access permite gerir informação estruturada através de tabelas relacionadas, consultas, formulários e relatórios.",
    sections: [
      { title: "Estrutura da base de dados", text: "Definir tabelas, campos, tipos de dados e chaves de forma coerente.", points: ["Criar campos adequados.", "Definir chave primária.", "Evitar redundância."] },
      { title: "Relações e consulta", text: "Relacionar tabelas e obter informação através de consultas.", points: ["Criar relações.", "Aplicar critérios.", "Interpretar resultados."] },
      { title: "Entrada e apresentação", text: "Utilizar formulários para registo e relatórios para apresentação da informação.", points: ["Criar formulários.", "Validar dados.", "Gerar relatórios."] }
    ],
    practice: "Criar uma pequena base de dados documental em Access com tabelas, relação, consulta e formulário."
  },
  "pdf": {
    summary: "O formato PDF facilita a preservação da apresentação, a partilha e o arquivo de documentos.",
    sections: [
      { title: "Criar e converter", text: "Gerar PDF a partir de aplicações de produtividade e converter documentos quando necessário.", points: ["Exportar para PDF.", "Confirmar paginação.", "Verificar legibilidade."] },
      { title: "Organizar documentos", text: "Reunir, separar e ordenar páginas de acordo com a finalidade documental.", points: ["Combinar ficheiros.", "Reordenar páginas.", "Extrair páginas quando necessário."] },
      { title: "Preparar para arquivo e partilha", text: "Aplicar nomenclatura e verificar conteúdo antes de guardar ou distribuir.", points: ["Usar nomes consistentes.", "Confirmar versão.", "Guardar na localização correta."] }
    ],
    practice: "Criar e organizar um conjunto de documentos PDF para arquivo digital."
  },
  "digitalizacao": {
    summary: "A digitalização converte documentos físicos em ficheiros digitais que devem ser legíveis, identificáveis e corretamente arquivados.",
    sections: [
      { title: "Preparar a digitalização", text: "Selecionar documentos, definir ordem e verificar o estado físico antes da captura.", points: ["Remover agrafos quando necessário.", "Ordenar páginas.", "Definir destino."] },
      { title: "Qualidade da captura", text: "Escolher resolução, orientação e formato adequados ao tipo de documento.", points: ["Garantir legibilidade.", "Evitar ficheiros excessivamente pesados.", "Confirmar todas as páginas."] },
      { title: "Guardar e arquivar", text: "Aplicar uma nomenclatura coerente e integrar o ficheiro no sistema de arquivo digital.", points: ["Nomear corretamente.", "Classificar.", "Confirmar localização e acesso."] }
    ],
    practice: "Digitalizar um documento, verificar a qualidade e arquivá-lo segundo a nomenclatura definida."
  }
};

const contentMenuGroups = [
  { title: "Bases de Dados", theme: "database", children: [{ topicId: "excel" }, { topicId: "access" }] },
  { title: "PDF", theme: "document", children: [{ topicId: "pdf" }] },
  { title: "Digitalização", theme: "document", children: [{ topicId: "digitalizacao" }] }
];

const DEFAULT_APPS_SCRIPT_WEB_APP_URL = "";
const DEFAULT_APPS_SCRIPT_SPREADSHEET_ID = "";
const APPS_SCRIPT_WEB_APP_URL = window.UFCD0695_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_WEB_APP_URL;
const APPS_SCRIPT_SPREADSHEET_ID = window.UFCD0695_SPREADSHEET_ID || DEFAULT_APPS_SCRIPT_SPREADSHEET_ID;

const activities = [
  { id: "controlo-teams", title: "Partilha de ecrã", menuTitle: "Partilha de ecrã", intro: "Tabela simples para acompanhar a participação prática nas sessões síncronas.", url: "atividades/controlo-teams.html" },
  { id: "mentimeter-inicial", title: "Escreve 3 palavras", menuTitle: "Brainstorming", intro: "Quando pensas em gestão informatizada de documentos, que três palavras te vêm à cabeça?", url: "atividades/mentimeter-inicial.html", focus: "Nuvem de palavras inicial", duration: "", product: "Resposta no Mentimeter: três palavras associadas à gestão informatizada de documentos.", mentimeterUrl: pendingLinks.mentimeterEmbedUrl, participationUrl: pendingLinks.mentimeterParticipationUrl, qrCode: "assets/img/mentimeter_qr_code_0695.png", steps: [{ title: "Pergunta", text: "Quando pensas em gestão informatizada de documentos, que três palavras te vêm à cabeça?" }], evidence: ["Nuvem de palavras inicial"] },
  { id: "tarefas-grupo", title: "Glossário Colaborativo", menuTitle: "Tarefas de Grupo", intro: "Atividade de grupo para construir o Glossário Colaborativo da UFCD 0695.", url: "atividades/tarefas-grupo.html", focus: "Glossário colaborativo", duration: "Dias 2 a 12", product: "Definição, exemplo e fonte para cada conceito atribuído.", steps: [{ title: "Definir", text: "Construir uma definição clara do conceito atribuído." }, { title: "Exemplificar", text: "Acrescentar um exemplo simples relacionado com a gestão informatizada de documentos." }, { title: "Referenciar", text: "Indicar a fonte utilizada." }, { title: "Partilhar", text: "Publicar a entrada no Glossário ou Padlet colaborativo." }], evidence: ["Definição", "Exemplo", "Fonte"] },
  { id: "tarefas-individuais", title: "Tarefas Individuais", intro: "Resumo das tarefas práticas realizadas nos livros Excel; as instruções completas são disponibilizadas em PDF.", url: "atividades/tarefas-individuais.html", focus: "Trabalho individual", duration: "A partir do segundo dia", product: "Livros Excel concluídos e guardados na Drive.", steps: [{ title: "Ler", text: "Consultar o enunciado e o PDF da tarefa." }, { title: "Realizar", text: "Aplicar os procedimentos no livro indicado." }, { title: "Verificar", text: "Confirmar fórmulas, resultados e apresentação." }, { title: "Guardar", text: "Guardar com o nome e na pasta definidos." }], evidence: ["Livro Excel atualizado", "Versão guardada na Drive"] },
  { id: "resolucoes-livros", parentId: "tarefas-individuais", title: "Resoluções dos Livros", menuTitle: "Resoluções dos livros", intro: "Resoluções demonstrativas dos livros práticos 1 a 3.", url: "atividades/resolucoes-livros.html" },
  { id: "projeto-final-apresentacao", title: "Projeto Final - Solução em Folha de Cálculo", menuTitle: "Projeto Final", intro: "Livro Excel funcional que integra organização, cálculos, análise, apresentação e preparação para impressão.", url: "atividades/projeto-final-apresentacao.html", focus: "Projeto individual", duration: "TI08 a TI12", product: "Livro Excel final, PDF, reflexão final e apresentação breve.", steps: [{ title: "Planear", text: "Escolher e estruturar o contexto do projeto." }, { title: "Construir", text: "Organizar dados e aplicar fórmulas, funções, formatação e análise." }, { title: "Rever", text: "Validar dados, cálculos, gráficos e impressão." }, { title: "Partilhar", text: "Guardar, apresentar e refletir sobre o resultado." }], evidence: ["XLSX final", "PDF final", "Reflexão final", "Apresentação individual"] },
  { id: "alternativas-projeto", parentId: "projeto-final-apresentacao", title: "Alternativas de Projeto", menuTitle: "Outras alternativas", intro: "Contextos alternativos para desenvolver o Projeto Final com os mesmos requisitos técnicos.", url: "atividades/alternativas-projeto.html" }
];

const evaluations = [
  { id: "avaliacao-diagnostica", title: "Avaliação Diagnóstica", menuTitle: "Diagnóstica", intro: "Avaliação inicial dos conhecimentos sobre gestão informatizada de documentos, bases de dados, PDF e digitalização.", url: "avaliacoes/avaliacao-diagnostica.html", children: ["resultados-diagnostica"], embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0695/00-diagnostico.html", embedTitle: "DIAG_1" },
  { id: "resultados-diagnostica", parentId: "avaliacao-diagnostica", title: "Resultados da Avaliação Diagnóstica", menuTitle: "Resultados", intro: "Leitura global das respostas recolhidas na avaliação diagnóstica.", url: "avaliacoes/resultados-diagnostica.html" },
  { id: "avaliacao-sumativa", title: "Avaliação Sumativa", menuTitle: "Sumativa", intro: "Avaliação final das aprendizagens da UFCD 0778.", url: "avaliacoes/avaliacao-sumativa.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0778/02-sumativa.html", embedTitle: "SUM_1" },
  { id: "autoavaliacao-final", title: "Autoavaliação Final", menuTitle: "Autoavaliação", intro: "Reflexão final sobre as competências desenvolvidas, comparável com a avaliação diagnóstica.", url: "avaliacoes/autoavaliacao-final.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0778/04-autoavaliacao-final.html", embedTitle: "AUTO_1" },
  { id: "avaliacao-entre-pares", title: "Avaliação Entre Pares - Auditoria", menuTitle: "Entre pares", intro: "Auditoria de qualidade ao projeto final de um colega.", url: "avaliacoes/avaliacao-entre-pares.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0778/03-entre-pares.html", embedTitle: "Auditoria de qualidade" },
  { id: "avaliacao-formacao", title: "Avaliação da Formação", menuTitle: "Formação", intro: "Feedback sobre a qualidade da formação, separado da autoavaliação das aprendizagens.", url: "avaliacoes/avaliacao-formacao.html", embedUrl: "https://avaliacoes-formacao.netlify.app/avaliacao-formacao.html?codigo_ufcd=0778", embedTitle: "Avaliação da formação" }
];

const groupTasks = [
  {
    "day": 2,
    "title": "Dia 2 — Excel — Interface e Folhas",
    "topic": "Excel — Interface e Folhas",
    "words": [
      [
        "Livro",
        "Grupo 1"
      ],
      [
        "Folha",
        "Grupo 2"
      ],
      [
        "Célula",
        "Grupo 3"
      ],
      [
        "Intervalo",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Excel — Interface e Folhas."
  },
  {
    "day": 3,
    "title": "Dia 3 — Excel — Dados e Formatação",
    "topic": "Excel — Dados e Formatação",
    "words": [
      [
        "Texto",
        "Grupo 1"
      ],
      [
        "Número",
        "Grupo 2"
      ],
      [
        "Data/Hora",
        "Grupo 3"
      ],
      [
        "Validação de dados",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Excel — Dados e Formatação."
  },
  {
    "day": 4,
    "title": "Dia 4 — Excel — Fórmulas e Funções",
    "topic": "Excel — Fórmulas e Funções",
    "words": [
      [
        "Fórmula",
        "Grupo 1"
      ],
      [
        "Função",
        "Grupo 2"
      ],
      [
        "Argumento",
        "Grupo 3"
      ],
      [
        "Operador",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Excel — Fórmulas e Funções."
  },
  {
    "day": 5,
    "title": "Dia 5 — Excel — Referências",
    "topic": "Excel — Referências",
    "words": [
      [
        "Referência relativa",
        "Grupo 1"
      ],
      [
        "Referência absoluta",
        "Grupo 2"
      ],
      [
        "Referência mista",
        "Grupo 3"
      ],
      [
        "Critério",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Excel — Referências."
  },
  {
    "day": 6,
    "title": "Dia 6 — Excel — Filtros e Gráficos",
    "topic": "Excel — Filtros e Gráficos",
    "words": [
      [
        "Filtro",
        "Grupo 1"
      ],
      [
        "Ordenação",
        "Grupo 2"
      ],
      [
        "Tabela",
        "Grupo 3"
      ],
      [
        "Gráfico",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Excel — Filtros e Gráficos."
  },
  {
    "day": 7,
    "title": "Dia 7 — Excel — Funções e Validação",
    "topic": "Excel — Funções e Validação",
    "words": [
      [
        "PROCV",
        "Grupo 1"
      ],
      [
        "CONCATENAR",
        "Grupo 2"
      ],
      [
        "CONTAR.VAL",
        "Grupo 3"
      ],
      [
        "Validação de dados",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Excel — Funções e Validação."
  },
  {
    "day": 8,
    "title": "Dia 8 — Access — Conceitos e Planificação",
    "topic": "Access — Conceitos e Planificação",
    "words": [
      [
        "Base de dados",
        "Grupo 1"
      ],
      [
        "SGBD",
        "Grupo 2"
      ],
      [
        "Registo",
        "Grupo 3"
      ],
      [
        "Campo",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Access — Conceitos e Planificação."
  },
  {
    "day": 9,
    "title": "Dia 9 — Access — Tabelas e Consultas",
    "topic": "Access — Tabelas e Consultas",
    "words": [
      [
        "Tabela",
        "Grupo 1"
      ],
      [
        "Chave primária",
        "Grupo 2"
      ],
      [
        "Chave estrangeira",
        "Grupo 3"
      ],
      [
        "Consulta",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Access — Tabelas e Consultas."
  },
  {
    "day": 10,
    "title": "Dia 10 — Access — Formulários, Relações e Relatórios",
    "topic": "Access — Formulários, Relações e Relatórios",
    "words": [
      [
        "Relação",
        "Grupo 1"
      ],
      [
        "Formulário",
        "Grupo 2"
      ],
      [
        "Relatório",
        "Grupo 3"
      ],
      [
        "Cabeçalho",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Access — Formulários, Relações e Relatórios."
  },
  {
    "day": 11,
    "title": "Dia 11 — PDF",
    "topic": "PDF",
    "words": [
      [
        "PDF",
        "Grupo 1"
      ],
      [
        "Anotação",
        "Grupo 2"
      ],
      [
        "Proteção",
        "Grupo 3"
      ],
      [
        "Assinatura digital",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — PDF."
  },
  {
    "day": 12,
    "title": "Dia 12 — Digitalização",
    "topic": "Digitalização",
    "words": [
      [
        "Digitalização",
        "Grupo 1"
      ],
      [
        "OCR",
        "Grupo 2"
      ],
      [
        "DPI",
        "Grupo 3"
      ],
      [
        "PDF/A",
        "Grupo 4"
      ]
    ],
    "url": "atividades/tarefas-grupo.html",
    "intro": "Glossário colaborativo — Digitalização."
  }
];

const glossaryUrl = pendingLinks.glossaryUrl;
const individualTaskForumUrls = pendingLinks.individualTaskForumUrls;

const individualTasks = [
  {
    "id": "tarefa-individual-1",
    "number": "TI01",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI01 — Expectativas",
    "intro": "Reflexão inicial sobre as expectativas para a UFCD.",
    "objective": "Identificar o que espera aprender ou melhorar, os conhecimentos e a experiência que já possui e a utilidade destas competências no seu contexto pessoal ou profissional.",
    "steps": [
      "Indicar o que espera aprender ou melhorar ao longo desta UFCD.",
      "Referir os conhecimentos ou a experiência que já possui relacionados com Excel, bases de dados, PDF e digitalização de documentos.",
      "Explicar em que situações pessoais ou profissionais estas competências lhe poderão ser úteis.",
      "Identificar algum conteúdo ou competência que tenha especial interesse em desenvolver.",
      "Guardar esta reflexão para voltar a consultá-la no final da UFCD."
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI01.pdf",
    "moodleRecord": "Publica uma mensagem curta no Fórum com uma aprendizagem ou competência que gostaria de desenvolver nesta UFCD, uma situação em que considera que a gestão informatizada de documentos lhe poderá ser útil e uma palavra ou expressão que represente a sua principal expectativa para a formação. O registo no Fórum é uma síntese da reflexão individual; não é necessário copiar todas as respostas da TI.",
    "forumButtonLabel": "Abrir Fórum Moodle",
    "workFiles": []
  },
  {
    "id": "tarefa-individual-2",
    "number": "TI02",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI02",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-3",
    "number": "TI03",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI03",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-4",
    "number": "TI04",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI04",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-5",
    "number": "TI05",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI05",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-6",
    "number": "TI06",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI06",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-7",
    "number": "TI07",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI07",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-8",
    "number": "TI08",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI08",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-9",
    "number": "TI09",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI09",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-10",
    "number": "TI10",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI10",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-11",
    "number": "TI11",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI11",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-12",
    "number": "TI12",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI12",
    "intro": "Conteúdo a definir",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "",
    "workFiles": [],
    "placeholder": true
  },
  {
    "id": "tarefa-individual-13",
    "number": "TI13",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI13 — Reflexão Final",
    "intro": "Reflexão Final",
    "objective": "",
    "steps": [],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI13.pdf",
    "workFiles": []
  }
];

individualTasks.forEach((task, index) => {
  const configuredForumUrl = individualTaskForumUrls[index] || "";
  if (configuredForumUrl) task.forumUrls = [configuredForumUrl];
});
const optionalExcelMaterials = [];
const resources = [
  {
    id: "videos-excel", title: "Vídeos",
    intro: "Vídeos de apoio para compreender as funcionalidades essenciais da folha de cálculo e desmistificar a utilização de fórmulas.",
    url: "recursos/videos-excel.html",
    videos: [
      { id: "dominar-folha-calculo", title: "Dominar a Folha de Cálculo", description: "Uma apresentação orientada das principais possibilidades da folha de cálculo e da sua utilização prática.", path: "assets/videos/Dominar_a_Folha_de_Cálculo.mp4" },
      { id: "desmistificar-formulas-excel", title: "Desmistificar Fórmulas Excel", description: "Explicação acessível para compreender a lógica das fórmulas e começar a utilizá-las com confiança.", path: "assets/videos/Desmistificar_Fórmulas_Excel.mp4" }
    ]
  },
  { id: "manual", title: "Manual de formação", intro: "Manual de Formação da UFCD 0778 em PDF.", url: "recursos/manual.html", pdfUrl: "assets/pdfs/UFCD0778_Manual.pdf" },
  {
    id: "ficheiros-excel", title: "Ficheiros Excel",
    intro: "Livros de Excel para explorar funcionalidades, acompanhar demonstrações e praticar os conteúdos da UFCD.",
    url: "recursos/ficheiros-excel.html",
    downloadFiles: [
      { id: "novo-bem-vindo-excel", title: "Novo Bem-vindo ao Excel", description: "Livro introdutório para conhecer o ambiente de trabalho e começar a utilizar o Excel.", path: "assets/ficheiros/Excel/Novo Bem-vindo ao Excel.xlsx", firstSheet: "Início" },
      { id: "web-bem-vindo-excel", title: "Bem-vindo ao Excel — versão Web", description: "Livro de apoio para explorar o Excel na versão utilizada através do navegador.", path: "assets/ficheiros/Excel/Web_Bem-vindo ao Excel.xlsx", firstSheet: "Bem-vindo ao Excel" },
      { id: "formulas-excel", title: "Tutorial de Fórmulas", description: "Livro de apoio para explorar, compreender e praticar fórmulas no Excel.", path: "assets/ficheiros/Excel/Fórmulas.xlsx", firstSheet: "Início" },
      { id: "resumo-conceitos", title: "Resumo de conceitos", description: "Livro de consulta rápida para rever e consolidar os principais conceitos de folha de cálculo.", path: "assets/ficheiros/Excel/Resumo de conceitos.xlsx", firstSheet: "Referências" },
    ]
  },
  {
    id: "assistentes-gpt", title: "Assistentes GPT", displayTitle: "Instrutor de Folha de Cálculo",
    intro: "Assistente de apoio ao estudo e à realização das atividades de folha de cálculo.",
    url: "recursos/assistentes-gpt.html",
    gptUrl: "https://chatgpt.com/g/g-68fb60e069748191baa5d607b926b5e0-instrutor-de-folha-de-calculo"
  },
  { id: "suporte-excel", title: "Suporte Microsoft Excel", menuTitle: "Suporte Excel", intro: "Página oficial de ajuda e suporte da Microsoft para o Excel.", url: "recursos/suporte-excel.html", externalUrl: "https://support.microsoft.com/pt-pt/excel" }
];
const mainMenuItems = [
  { key: "inicio", label: "Início" },
  { key: "objetivos", label: "Objetivos" },
  { key: "metodologia", label: "Metodologia" },
  { key: "conteudos", label: "Conteúdos" },
  { key: "atividades", label: "Atividades" },
  { key: "avaliacao", label: "Avaliação" },
  { key: "recursos", label: "Recursos" },
  { key: "eportfolio", label: "Site dos E-Portefólios" }
];

const siteVisibility = {
  menuPrincipal: Object.fromEntries(mainMenuItems.map((item) => [item.key, true])),
  conteudos: Object.fromEntries(topics.map((topic) => [topic.id, true])),
  atividades: Object.fromEntries(activities.map((activity) => [activity.id, true])),
  avaliacao: Object.fromEntries(evaluations.map((evaluation) => [evaluation.id, true])),
  recursos: Object.fromEntries(resources.map((resource) => [resource.id, true])),
  ficheirosExcel: Object.fromEntries(resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).map((file) => [file.id, true])),
  assistentesGpt: Object.fromEntries(resources.filter((resource) => resource.gptUrl).map((resource) => [resource.id, true])),
  tarefasGrupo: Object.fromEntries(groupTasks.map((task) => [task.title, true])),
  tarefasIndividuais: Object.fromEntries(individualTasks.flatMap((task) => [[task.id, true], [task.title, true]]))
};

const siteVisibilitySections = {
  menuPrincipal: true,
  conteudos: true,
  atividades: true,
  avaliacao: true,
  recursos: true,
  ficheirosExcel: true,
  assistentesGpt: true,
  tarefasGrupo: true,
  tarefasIndividuais: true
};

const siteVisibilitySectionMeta = {
  menuPrincipal: { secao: "menu_principal", chave: "secao-menu-principal", titulo: "Menu principal", tipo: "secao", ordem: 1 },
  conteudos: { secao: "conteudos", chave: "secao-conteudos", titulo: "Conteúdos", tipo: "secao", ordem: 10 },
  atividades: { secao: "atividades", chave: "secao-atividades", titulo: "Atividades", tipo: "secao", ordem: 20 },
  avaliacao: { secao: "avaliacao", chave: "secao-avaliacao", titulo: "Avaliação", tipo: "secao", ordem: 30 },
  recursos: { secao: "recursos", chave: "secao-recursos", titulo: "Recursos", tipo: "secao", ordem: 40 },
  ficheirosExcel: { secao: "ficheiros_excel", chave: "secao-ficheiros-excel", titulo: "Ficheiros Excel", tipo: "secao", ordem: 45 },
  assistentesGpt: { secao: "assistentes_gpt", chave: "secao-assistentes-gpt", titulo: "Assistentes GPT", tipo: "secao", ordem: 48 },
  tarefasGrupo: { secao: "tarefas_grupo", chave: "secao-tarefas-grupo", titulo: "Tarefas de grupo", tipo: "secao", ordem: 50 },
  tarefasIndividuais: { secao: "tarefas_individuais", chave: "secao-tarefas-individuais", titulo: "Tarefas individuais", tipo: "secao", ordem: 60 }
};

const SITE_VISIBILITY_STORAGE_KEY = "ufcd0695-site-visibility-v1";
const SITE_VISIBILITY_REMOTE_CACHE_KEY = "ufcd0695-site-visibility-remote-cache-v1";
const SITE_LINKS_STORAGE_KEY = "ufcd0695-site-links-v1";
const APPS_SCRIPT_SPREADSHEET_GID = "1240441816";
const SITE_CONTROL_KEY_PREFIX = `ufcd-${UFCD.code}-`;
let siteControlItems = [];
let siteControlItemsBuilding = false;
let siteVisibilityRemoteLoading = null;
let siteVisibilityRemoteReady = !APPS_SCRIPT_WEB_APP_URL;

const siteLinks = {
  gammas: Object.fromEntries(topics.map((topic) => [topic.id, topic.gammaUrl || ""])),
  glossaryUrl,
  forums: {}
};

function obterTarefaGrupoPorChave(chave, titulo = "") {
  const valores = [chave, titulo].map((valor) => String(valor || ""));
  const limpos = valores.map((valor) => valor.replace(/^tarefa-grupo-/, ""));
  return groupTasks.find((task) =>
    valores.includes(task.title)
    || limpos.includes(task.title)
  );
}

function definirVisibilidadeTarefaGrupo(task, visivel) {
  if (!task) return false;
  siteVisibility.tarefasGrupo[task.title] = visivel;
  return true;
}

function tarefaGrupoVisivel(task) {
  if (!task || !siteVisibilityRemoteReady) return false;
  return siteVisibilitySections.tarefasGrupo !== false
    && siteVisibility.tarefasGrupo[task.title] !== false;
}

function obterTarefaIndividualPorChave(chave, titulo = "") {
  const valores = [chave, titulo].map((valor) => String(valor || ""));
  const limpos = valores.map((valor) => valor.replace(/^tarefa-individual-/, ""));
  return individualTasks.find((task) =>
    valores.includes(task.id)
    || limpos.includes(task.id)
    || valores.includes(task.title)
    || limpos.includes(task.title)
  );
}

function definirVisibilidadeTarefaIndividual(task, visivel) {
  if (!task) return false;
  siteVisibility.tarefasIndividuais[task.id] = visivel;
  siteVisibility.tarefasIndividuais[task.title] = visivel;
  return true;
}

function tarefaIndividualVisivel(task) {
  if (!task || !siteVisibilityRemoteReady) return false;
  return siteVisibilitySections.tarefasIndividuais !== false
    && siteVisibility.tarefasIndividuais[task.id] !== false
    && siteVisibility.tarefasIndividuais[task.title] !== false;
}
function getBasePath() {
  const path = window.location.pathname;
  return path.includes("/conteudos/") || path.includes("/atividades/") || path.includes("/avaliacoes/") || path.includes("/recursos/") ? "../" : "";
}

function construirUrlEmbedAvaliacao(embedUrl) {
  if (/\/ufcd-0778\//.test(embedUrl)) return embedUrl;
  if (!embedUrl || !APPS_SCRIPT_SPREADSHEET_ID) return embedUrl;

  try {
    const url = new URL(embedUrl, window.location.href);
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    url.searchParams.set("spreadsheetId", APPS_SCRIPT_SPREADSHEET_ID);
    url.searchParams.set("gid", APPS_SCRIPT_SPREADSHEET_GID);
    url.searchParams.set("spreadsheet_gid", APPS_SCRIPT_SPREADSHEET_GID);
    return url.toString();
  } catch (error) {
    const separator = embedUrl.includes("?") ? "&" : "?";
    return `${embedUrl}${separator}spreadsheet_id=${encodeURIComponent(APPS_SCRIPT_SPREADSHEET_ID)}`;
  }
}

function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

function isSectionVisible(section) {
  return siteVisibilitySections[section] !== false;
}

function isItemVisible(section, key) {
  return isSectionVisible(section) && siteVisibility[section]?.[key] !== false;
}

function renderPortfolioMenuLink() {
  document.querySelectorAll(".side-nav").forEach((menu) => {
    menu.querySelectorAll(".portfolio-site-link").forEach((link) => link.remove());

    if (!isItemVisible("menuPrincipal", "eportfolio")) return;

    const link = document.createElement("a");
    link.className = "portfolio-site-link";
    link.href = "https://26109-e-portfolio.netlify.app/";
    link.textContent = "Site dos E-Portefólios";
    link.target = "_top";

    if (window.location.pathname.endsWith("/atividades/identidade-visual.html")) {
      link.classList.add("active");
      link.href = "https://26109-e-portfolio.netlify.app/";
    }

    menu.appendChild(link);
  });
}
function normalizarVisivel(value, fallback = true) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  const text = String(value || "").trim().toLowerCase();
  if (!text) return fallback;
  if (["true", "sim", "s", "1", "yes", "visivel", "visível"].includes(text)) return true;
  if (["false", "nao", "não", "n", "0", "no", "oculto"].includes(text)) return false;
  return fallback;
}

function obterChaveRemotaSite(chave) {
  const texto = String(chave || "");
  return texto.startsWith(SITE_CONTROL_KEY_PREFIX) ? texto : `${SITE_CONTROL_KEY_PREFIX}${texto}`;
}

function normalizarChaveRemotaSite(chave) {
  const texto = String(chave || "");
  if (texto.startsWith(SITE_CONTROL_KEY_PREFIX)) return texto.slice(SITE_CONTROL_KEY_PREFIX.length);
  if (/^ufcd-\d{4}-/i.test(texto)) return "";
  return texto;
}

function criarItemVisibilidade(secao, chave, titulo, url, tipo, nivel, visivel, ordem, options = {}) {
  const linkValue = options.linkValue || "";
  return {
    secao,
    chave,
    titulo,
    url: url || "",
    gammaUrl: linkValue,
    tipo,
    nivel,
    visivel: visivel !== false,
    ordem,
    linkValue,
    linkLabel: options.linkLabel || "",
    linkPlaceholder: options.linkPlaceholder || ""
  };
}

function obterConstituicaoVisibilidadeSite() {
  const itens = [];
  const adicionarSecao = (section) => {
    const meta = siteVisibilitySectionMeta[section];
    itens.push(criarItemVisibilidade(meta.secao, meta.chave, meta.titulo, "", meta.tipo, "secao", siteVisibilitySections[section], meta.ordem));
  };
  const adicionarItem = (section, key, titulo, url, tipo, ordem, options = {}) => {
    const meta = siteVisibilitySectionMeta[section];
    const visibilityKey = section === "tarefasIndividuais" ? key : key.replace(/^(menu|conteudo|atividade|avaliacao|recurso|ficheiro-excel|assistente-gpt|tarefa-grupo|tarefa-individual)-/, "");
    itens.push(criarItemVisibilidade(meta.secao, key, titulo, url, tipo, "item", siteVisibility[section]?.[visibilityKey], ordem, options));
  };

  adicionarSecao("menuPrincipal");
  mainMenuItems.forEach((item, index) => {
    const url = item.key === "inicio" ? "index.html#inicio" : item.key === "eportfolio" ? "https://26109-e-portfolio.netlify.app/" : `index.html#${item.key}`;
    adicionarItem("menuPrincipal", `menu-${item.key}`, item.label, url, "menu", 2 + index);
  });

  adicionarSecao("conteudos");
  topics.filter((topic) => topic.showInContents !== false).forEach((topic, index) => adicionarItem("conteudos", `conteudo-${topic.id}`, topic.cardTitle || topic.title, topic.url, "conteudo", 11 + index, {
    linkValue: obterGammaUrl(topic),
    linkLabel: "Gamma",
    linkPlaceholder: "https://...gamma.site/..."
  }));

  adicionarSecao("atividades");
  activities.forEach((activity, index) => adicionarItem("atividades", `atividade-${activity.id}`, activity.menuTitle || activity.title, activity.url, "atividade", 21 + index));

  adicionarSecao("avaliacao");
  evaluations.forEach((evaluation, index) => adicionarItem("avaliacao", `avaliacao-${evaluation.id}`, evaluation.menuTitle || evaluation.title, evaluation.url, "avaliacao", 31 + index));

  adicionarSecao("recursos");
  resources.forEach((resource, index) => adicionarItem("recursos", `recurso-${resource.id}`, resource.title, resource.url, "recurso", 41 + index));

  adicionarSecao("ficheirosExcel");
  resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).forEach((file, index) => adicionarItem("ficheirosExcel", `ficheiro-excel-${file.id}`, file.title, file.path, file.path.endsWith(".mp4") ? "video_excel" : "ficheiro_excel", 45.1 + index));

  adicionarSecao("assistentesGpt");
  resources.filter((resource) => resource.gptUrl).forEach((resource, index) => adicionarItem("assistentesGpt", `assistente-gpt-${resource.id}`, resource.displayTitle || resource.title, resource.gptUrl, "assistente_gpt", 48.1 + index));

  adicionarSecao("tarefasGrupo");
  groupTasks.forEach((task, index) => adicionarItem("tarefasGrupo", `tarefa-grupo-${task.title}`, task.title, "atividades/tarefas-grupo.html", "tarefa_grupo", 51 + index, {
    linkValue: obterGlossarioUrl(),
    linkLabel: "Glossário",
    linkPlaceholder: "https://fad.iefp.pt/mod/glossary/view.php?id=..."
  }));

  adicionarSecao("tarefasIndividuais");
  individualTasks.forEach((task, index) => adicionarItem("tarefasIndividuais", task.id, task.title, "atividades/tarefas-individuais.html", "tarefa_individual", 61 + index, {
    linkValue: obterForumUrl(task),
    linkLabel: "Fórum",
    linkPlaceholder: "https://fad.iefp.pt/mod/forum/discuss.php?d=..."
  }));

  return itens;
}

function criarMapaVisibilidadePlano() {
  return Object.fromEntries(obterConstituicaoVisibilidadeSite().map((item) => [item.chave, item.visivel !== false]));
}

function obterItemControloPadrao() {
  siteControlItemsBuilding = true;
  try {
    return obterConstituicaoVisibilidadeSite();
  } finally {
    siteControlItemsBuilding = false;
  }
}

function normalizarItemControlo(item) {
  if (!item || typeof item !== "object") return null;
  const chaveOriginal = item.chave || item.key || "";
  const chave = normalizarChaveRemotaSite(chaveOriginal);
  if (!chave) return null;
  const linkValue = item.linkValue || item.gammaUrl || item.moodleUrl || item.urlMoodle || item.moodle || item.link || "";
  return {
    secao: item.secao || item.section || "",
    chave,
    titulo: item.titulo || item.title || "",
    url: item.url || "",
    gammaUrl: item.gammaUrl || "",
    tipo: item.tipo || item.type || "",
    nivel: item.nivel || item.level || "",
    visivel: normalizarVisivel(item.visivel ?? item.visible, true),
    ordem: Number(item.ordem || item.order || 0),
    linkValue: /^https?:\/\//i.test(String(linkValue)) ? String(linkValue) : "",
    linkLabel: item.linkLabel || "",
    linkPlaceholder: item.linkPlaceholder || ""
  };
}

function filtrarItensControloDaUfcdAtual(remoteItems = []) {
  const itens = Array.isArray(remoteItems) ? remoteItems : [];
  const temItensDaUfcdAtual = itens.some((item) => String(item?.chave || item?.key || "").startsWith(SITE_CONTROL_KEY_PREFIX));
  if (!temItensDaUfcdAtual) return itens;
  return itens.filter((item) => String(item?.chave || item?.key || "").startsWith(SITE_CONTROL_KEY_PREFIX));
}

function obterLinkItemControloRemoto(saved, fallback) {
  const explicitLink = saved?.linkValue || saved?.gammaUrl || saved?.moodleUrl || saved?.urlMoodle || saved?.moodle || saved?.link || "";
  if (/^https?:\/\//i.test(String(explicitLink))) return String(explicitLink);

  const savedUrl = String(saved?.url || "");
  const type = saved?.tipo || saved?.type || fallback?.tipo || fallback?.type || "";
  const usesUrlAsExternalLink = ["conteudo", "tarefa_grupo", "tarefa_individual", "avaliacao"].includes(type);
  if (usesUrlAsExternalLink && /^https?:\/\//i.test(savedUrl)) return savedUrl;

  return fallback?.linkValue || "";
}

function atualizarItensControloSite(remoteItems = []) {
  const savedByKey = new Map();
  filtrarItensControloDaUfcdAtual(remoteItems)
    .map(normalizarItemControlo)
    .filter(Boolean)
    .forEach((item) => {
      savedByKey.set(item.chave, item);
      if (item.tipo === "tarefa_grupo" || String(item.chave).startsWith("tarefa-grupo-")) {
        const task = obterTarefaGrupoPorChave(item.chave, item.titulo);
        if (task) {
          savedByKey.set(`tarefa-grupo-${task.title}`, item);
        }
      }
      if (item.tipo === "tarefa_individual" || String(item.chave).startsWith("tarefa-individual-")) {
        const task = obterTarefaIndividualPorChave(item.chave, item.titulo);
        if (task) {
          savedByKey.set(task.id, item);
          savedByKey.set(`tarefa-individual-${task.id}`, item);
          savedByKey.set(`tarefa-individual-${task.title}`, item);
        }
      }
    });

  siteControlItems = obterItemControloPadrao().map((item) => {
    const saved = savedByKey.get(item.chave);
    if (!saved) return item;
    return {
      ...item,
      url: saved.url || item.url,
      gammaUrl: saved.gammaUrl || item.gammaUrl || "",
      visivel: normalizarVisivel(saved.visivel, item.visivel),
      linkValue: obterLinkItemControloRemoto(saved, item)
    };
  });

  return siteControlItems;
}

function obterItensControloSite() {
  if (siteControlItemsBuilding) return siteControlItems;
  if (!siteControlItems.length) {
    siteControlItems = obterItemControloPadrao();
  }
  return siteControlItems;
}

function obterItemControlo(chave) {
  const chaveLocal = normalizarChaveRemotaSite(chave);
  return obterItensControloSite().find((item) => normalizarChaveRemotaSite(item.chave) === chaveLocal);
}

function obterLinkControlo(chave) {
  return obterItemControlo(chave)?.linkValue || "";
}

function obterSecaoIndexPorSubmenu() {
  return {
    "submenu-conteudos": "conteudos",
    "submenu-atividades": "atividades",
    "submenu-avaliacao": "avaliacao",
    "submenu-recursos": "recursos"
  };
}

function abrirSubmenuPrincipal(submenuId, options = {}) {
  const currentSubmenu = document.getElementById(submenuId);
  const shouldClose = options.toggle && currentSubmenu?.classList.contains("open");

  document.querySelectorAll(".nav-parent").forEach((button) => {
    const isTarget = button.getAttribute("aria-controls") === submenuId;
    button.setAttribute("aria-expanded", String(isTarget && !shouldClose));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId && !shouldClose);
  });
}

function abrirMenuPeloHashDoIndex() {
  if (document.body.dataset.page !== "home") return;

  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const submenuId = Object.entries(obterSecaoIndexPorSubmenu())
    .find(([, sectionId]) => sectionId === hash)?.[0];

  if (submenuId) abrirSubmenuPrincipal(submenuId);
}

function setupMenu() {
  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.remove("open");
  });

  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.addEventListener("click", () => {
      const submenuId = button.getAttribute("aria-controls");
      if (submenuId) abrirSubmenuPrincipal(submenuId, { toggle: true });
    });
  });

  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const fecharMenu = () => {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) return;
    if (sidebar?.contains(event.target) || toggle?.contains(event.target)) return;
    fecharMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
      fecharMenu();
    }
  });
}

function manterMenuAtivoAberto() {
  const topicId = document.body.dataset.topic || document.body.dataset.contentTheme || "";
  const activityId = document.body.dataset.activity || "";
  const resourceId = document.body.dataset.resource || "";
  let submenuId = "";
  let activeUrl = "";

  if (topicId) {
    const topic = topicById(topicId);
    submenuId = "submenu-conteudos";
    activeUrl = topic?.url || "";
  } else if (activityId) {
    const evaluation = evaluations.find((item) => item.id === activityId);
    const activity = activities.find((item) => item.id === activityId);
    submenuId = evaluation ? "submenu-avaliacao" : "submenu-atividades";
    activeUrl = (evaluation || activity)?.url || "";
  } else if (resourceId) {
    const resource = resources.find((item) => item.id === resourceId);
    submenuId = "submenu-recursos";
    activeUrl = resource?.url || "";
  }

  if (!submenuId) return;

  document.querySelectorAll(".nav-parent").forEach((button) => {
    const active = button.getAttribute("aria-controls") === submenuId;
    button.setAttribute("aria-expanded", String(active));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId);
  });

  if (activeUrl) {
    document.querySelectorAll(`#${submenuId} a`).forEach((link) => {
      link.classList.toggle("active", Boolean(link.getAttribute("href")?.endsWith(activeUrl)));
    });
  }

  if (topicId) {
    document.querySelectorAll("#submenu-conteudos button.submenu-heading").forEach((button) => {
      const children = button.nextElementSibling;
      const hasActiveTopic = Boolean(children?.querySelector(`a[href$="${activeUrl}"]`));
      button.setAttribute("aria-expanded", String(hasActiveTopic));
      button.classList.toggle("active-parent", hasActiveTopic);
      if (children) children.hidden = !hasActiveTopic;
    });
  }
}

function renderContentMenus() {
  const menus = document.querySelectorAll("#submenu-conteudos");
  menus.forEach((menu) => {
    if (!isSectionVisible("conteudos")) {
      menu.innerHTML = "";
      return;
    }

    menu.innerHTML = contentMenuGroups.map((group) => {
      const visibleChildren = group.children
        .map((child) => topicById(child.topicId))
        .filter((topic) => topic && isItemVisible("conteudos", topic.id));

      const parentTopic = group.parentTopicId ? topicById(group.parentTopicId) : null;
      const parentVisible = parentTopic && isItemVisible("conteudos", parentTopic.id);
      const groupClass = `submenu-group submenu-group-${group.theme}`;

      if (parentTopic) {
        if (!parentVisible && !visibleChildren.length) return "";
        return `
      <div class="${groupClass}">
        ${parentVisible ? `<a class="submenu-heading submenu-heading-${group.theme}" href="${getBasePath()}${parentTopic.url}">
          <span>${group.title}</span>
        </a>` : ""}
        ${visibleChildren.length ? `<div class="submenu-group-children content-child-links">
          ${visibleChildren.map((topic) => `<a class="content-subitem content-subitem-${topic.id}" href="${getBasePath()}${topic.url}">${topic.menuTitle || topic.title}</a>`).join("")}
        </div>` : ""}
      </div>
    `;
      }
      if (!visibleChildren.length) return "";

      if (visibleChildren.length === 1) {
        const topic = visibleChildren[0];
        return `
      <div class="${groupClass}">
        <a class="submenu-heading submenu-heading-${group.theme}" href="${getBasePath()}${topic.url}">
          <span>${group.title}</span>
        </a>
      </div>
    `;
      }

      return `
      <div class="${groupClass}">
        <button class="submenu-heading submenu-heading-${group.theme}" type="button" aria-expanded="false">
          <span>${group.title}</span>
          <b aria-hidden="true"></b>
        </button>
        <div class="submenu-group-children content-child-links" hidden>
          ${visibleChildren.map((topic) => `<a class="content-subitem content-subitem-${topic.id}" href="${getBasePath()}${topic.url}">${topic.menuTitle || topic.title}</a>`).join("")}
        </div>
      </div>
    `;
    }).join("");
  });

  document.querySelectorAll("button.submenu-heading").forEach((button) => {
    button.addEventListener("click", () => {
      const children = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll("button.submenu-heading").forEach((otherButton) => {
        if (otherButton === button) return;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherButton.nextElementSibling) otherButton.nextElementSibling.hidden = true;
      });
      button.setAttribute("aria-expanded", String(!expanded));
      if (children) children.hidden = expanded;
    });
  });
}
function renderActivityMenus() {
  document.querySelectorAll(".activity-submenu").forEach((menu) => {
    if (!isSectionVisible("atividades")) {
      menu.innerHTML = "";
      return;
    }

    const currentActivity = document.body.dataset.activity || "";
    menu.innerHTML = activities
      .filter((activity) => !activity.parentId && isItemVisible("atividades", activity.id))
      .map((activity) => {
        const children = activities.filter((child) => child.parentId === activity.id && isItemVisible("atividades", child.id));
        const isActive = currentActivity === activity.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${currentActivity === child.id ? "active" : ""}">${child.menuTitle || child.title}</a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${activity.url}" class="${isActive ? "active" : ""}">${activity.menuTitle || activity.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${activity.url}" class="${isActive ? "active" : ""}">${activity.menuTitle || activity.title}</a>
          <div class="submenu-group-children activity-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}
function renderEvaluationMenus() {
  document.querySelectorAll(".evaluation-submenu").forEach((menu) => {
    if (!isSectionVisible("avaliacao")) {
      menu.innerHTML = "";
      return;
    }

    const currentEvaluation = document.body.dataset.activity || "";
    menu.innerHTML = evaluations
      .filter((evaluation) => !evaluation.parentId && isItemVisible("avaliacao", evaluation.id))
      .map((evaluation) => {
        const children = evaluations.filter((child) => child.parentId === evaluation.id && isItemVisible("avaliacao", child.id));
        const isActive = currentEvaluation === evaluation.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${currentEvaluation === child.id ? "active" : ""}">${child.menuTitle || child.title}</a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>
          <div class="submenu-group-children evaluation-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function renderResourceMenus() {
  document.querySelectorAll(".resource-submenu").forEach((menu) => {
    if (!isSectionVisible("recursos")) {
      menu.innerHTML = "";
      return;
    }

    const currentResource = document.body.dataset.resource || "";
    menu.innerHTML = resources
      .filter((resource) => !resource.parentId && isItemVisible("recursos", resource.id))
      .map((resource) => {
        const children = resources.filter((child) => {
          if (child.parentId !== resource.id || !isItemVisible("recursos", child.id)) return false;
          if (child.gptUrl && !isItemVisible("assistentesGpt", child.id)) return false;
          return true;
        });
        const isActive = currentResource === resource.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${child.menuIcon ? "submenu-icon-link" : ""} ${currentResource === child.id ? "active" : ""}">
            ${child.menuIcon ? `<img src="${getBasePath()}${child.menuIcon}" alt="" aria-hidden="true">` : ""}
            <span>${child.menuTitle || child.title}</span>
          </a>
        `).join("");

        if (!children.length) {
          if (resource.gptUrl) {
            return `<a href="${resource.gptUrl}" target="_blank" rel="noopener noreferrer">${resource.title}</a>`;
          }
          return `<a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>
          <div class="submenu-group-children resource-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function atualizarDisponibilidadeDaPaginaInicial() {
  const activitySection = document.getElementById("atividades");
  if (activitySection) {
    let visibleActivities = 0;
    activitySection.querySelectorAll(".activity-accordion-item").forEach((card) => {
      const href = card.querySelector("a[href]")?.getAttribute("href") || "";
      const activity = activities.find((item) => href.endsWith(item.url));
      const visible = Boolean(activity && isItemVisible("atividades", activity.id));
      card.hidden = !visible;
      if (visible) visibleActivities += 1;
    });
    activitySection.hidden = !isItemVisible("menuPrincipal", "atividades")
      || !isSectionVisible("atividades")
      || visibleActivities === 0;
  }

  const evaluationSection = document.getElementById("avaliacao");
  if (evaluationSection) {
    let availableEvaluations = 0;
    evaluationSection.querySelectorAll(".assessment-actions a[href]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const evaluation = evaluations.find((item) => href.endsWith(item.url));
      const available = Boolean(evaluation && isItemVisible("avaliacao", evaluation.id));
      link.hidden = !available;
      link.setAttribute("aria-disabled", String(!available));
      link.tabIndex = available ? 0 : -1;
      if (available) availableEvaluations += 1;
    });
    evaluationSection.hidden = !isItemVisible("menuPrincipal", "avaliacao")
      || !isSectionVisible("avaliacao");
    evaluationSection.dataset.availableEvaluations = String(availableEvaluations);
  }
}
function renderHomeCards() {
  const grid = document.getElementById("home-content-grid");
  if (!grid) return;

  const excel = topicById("excel");
  const access = topicById("access");
  const pdf = topicById("pdf");
  const digitalizacao = topicById("digitalizacao");
  grid.innerHTML = `
    <article class="content-card content-area-card database-area-card">
      <div class="content-area-heading"><span>Área principal</span><h3>Bases de Dados</h3><p>Registar, organizar, consultar e gerir informação documental.</p></div>
      <div class="content-subarea-grid">
        <a class="content-subarea excel-subarea" href="${excel.url}"><strong>Excel</strong><small>${excel.intro}</small></a>
        <a class="content-subarea access-subarea" href="${access.url}"><strong>Access</strong><small>${access.intro}</small></a>
      </div>
    </article>
    <article class="content-card content-area-card document-area-card"><a href="${pdf.url}"><span>Área principal</span><h3>${pdf.title}</h3><p>${pdf.intro}</p></a></article>
    <article class="content-card content-area-card document-area-card"><a href="${digitalizacao.url}"><span>Área principal</span><h3>${digitalizacao.title}</h3><p>${digitalizacao.intro}</p></a></article>`;
}

function renderConteudosIndex() {
  const grid = document.getElementById("conteudos-index-grid");
  if (!grid) return;

  const excel = topicById("excel");
  const access = topicById("access");
  const pdf = topicById("pdf");
  const digitalizacao = topicById("digitalizacao");
  grid.innerHTML = `
    <article class="card content-area-card database-area-card">
      <div class="content-area-heading"><span>Área principal</span><h3>Bases de Dados</h3><p>Excel e Access funcionam como subáreas desta área.</p></div>
      <div class="content-subarea-grid">
        <a class="content-subarea excel-subarea" href="${excel.url}"><strong>Excel</strong><small>${excel.intro}</small></a>
        <a class="content-subarea access-subarea" href="${access.url}"><strong>Access</strong><small>${access.intro}</small></a>
      </div>
    </article>
    <article class="card content-area-card document-area-card"><span>Área principal</span><h3><a href="${pdf.url}">${pdf.title}</a></h3><p>${pdf.intro}</p></article>
    <article class="card content-area-card document-area-card"><span>Área principal</span><h3><a href="${digitalizacao.url}">${digitalizacao.title}</a></h3><p>${digitalizacao.intro}</p></article>`;
}

function setupFloatingActions() {
  document.querySelectorAll("[data-action='top']").forEach((button) => {
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });
  document.querySelectorAll("[data-action='print']").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
}

function setupModals() {
  const closeModal = (modal) => {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-modal-open]");
    if (opener) {
      const modal = document.getElementById(opener.dataset.modalOpen);
      if (!modal) return;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      modal.querySelector("[data-modal-close]")?.focus();
      return;
    }

    const modal = event.target.closest(".modal-backdrop");
    if (modal && (event.target === modal || event.target.closest("[data-modal-close]"))) {
      closeModal(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".modal-backdrop:not([hidden])").forEach(closeModal);
  });
}

function getControlState() {
  try {
    return JSON.parse(localStorage.getItem("ufcd0695-control-state")) || {};
  } catch {
    return {};
  }
}

function saveControlState(state) {
  localStorage.setItem("ufcd0695-control-state", JSON.stringify(state));
}

function limparEstadoLocalDoSite() {
  try {
    localStorage.removeItem(SITE_VISIBILITY_STORAGE_KEY);
    localStorage.removeItem(SITE_LINKS_STORAGE_KEY);
  } catch {
    // A Sheet continua a ser a fonte principal mesmo sem acesso ao localStorage.
  }
}
function carregarVisibilidadeDoSite() {
  try {
    aplicarVisibilidadeDoSite(JSON.parse(localStorage.getItem(SITE_VISIBILITY_STORAGE_KEY) || "{}"));
  } catch {
    // Mantém a configuração inicial quando o browser não permite ler localStorage.
  }
}

function guardarUltimaVisibilidadeRemotaDoSite(itens) {
  if (!Array.isArray(itens)) return;
  try {
    const itensDaUfcdAtual = filtrarItensControloDaUfcdAtual(itens)
      .map(normalizarItemControlo)
      .filter(Boolean);
    localStorage.setItem(SITE_VISIBILITY_REMOTE_CACHE_KEY, JSON.stringify({
      savedAt: new Date().toISOString(),
      itens: itensDaUfcdAtual
    }));
  } catch {
    // A página continua funcional mesmo sem cache local.
  }
}

function carregarUltimaVisibilidadeRemotaDoSite() {
  try {
    const cached = JSON.parse(localStorage.getItem(SITE_VISIBILITY_REMOTE_CACHE_KEY) || "{}");
    if (!Array.isArray(cached.itens) || !cached.itens.length) return false;
    aplicarItensVisibilidadeRemota(cached.itens);
    siteVisibilityRemoteReady = true;
    return true;
  } catch {
    return false;
  }
}

function aplicarVisibilidadeDoSite(saved) {
  Object.entries(saved || {}).forEach(([section, values]) => {
    if (section === "secoes" && values) {
      Object.entries(values).forEach(([key, value]) => {
        if (key in siteVisibilitySections && typeof value === "boolean") {
          siteVisibilitySections[key] = value;
        }
      });
      return;
    }

    if (!siteVisibility[section] || !values) return;
    Object.entries(values).forEach(([key, value]) => {
      if (key in siteVisibility[section] && typeof value === "boolean") {
        siteVisibility[section][key] = value;
      }
    });
  });
}

function aplicarLinkItemControlo(item) {
  if (!item || typeof item !== "object") return false;
  const chave = String(item.chave || item.key || "");
  const tipo = String(item.tipo || item.type || "").toLowerCase();
  const titulo = String(item.titulo || item.title || "");
  const valor = String(item.linkValue || item.link || item.gammaUrl || item.moodleUrl || item.urlMoodle || item.moodle || "");
  const urlExterno = valor || (/^https?:\/\//i.test(String(item.url || "")) ? String(item.url) : "");
  if (!urlExterno) return false;
  let alterou = false;

  if (tipo === "conteudo" || chave.startsWith("conteudo-")) {
    const topicId = chave.replace(/^conteudo-/, "");
    if (topicId in siteLinks.gammas && siteLinks.gammas[topicId] !== urlExterno) {
      siteLinks.gammas[topicId] = urlExterno;
      alterou = true;
    }
  }

  if (tipo === "tarefa_grupo" || chave.startsWith("tarefa-grupo-") || chave === "secao-tarefas-grupo") {
    const isGroupSection = chave === "secao-tarefas-grupo";
    const task = isGroupSection ? null : obterTarefaGrupoPorChave(chave, titulo);
    if (!isGroupSection && !task) return alterou;
    if (siteLinks.glossaryUrl !== urlExterno) {
      siteLinks.glossaryUrl = urlExterno;
      alterou = true;
    }
  }

  if (tipo === "tarefa_individual" || chave.startsWith("tarefa-individual-")) {
    const taskKey = chave.replace(/^tarefa-individual-/, "");
    const task = obterTarefaIndividualPorChave(taskKey, titulo);
    const keys = task ? [task.id, task.title] : [taskKey, titulo].filter(Boolean);
    keys.forEach((key) => {
      if (siteLinks.forums[key] !== urlExterno) {
        siteLinks.forums[key] = urlExterno;
        alterou = true;
      }
    });
  }

  return alterou;
}

function aplicarItemVisibilidadeRemota(item) {
  aplicarLinkItemControlo(item);
  if (!item || typeof item.visivel !== "boolean") return;

  const chave = String(item.chave || "");
  const metaEntry = Object.entries(siteVisibilitySectionMeta).find(([, meta]) => meta.chave === chave);
  if (metaEntry) {
    siteVisibilitySections[metaEntry[0]] = item.visivel;
    return;
  }

  const mappings = [
    { prefix: "menu-", section: "menuPrincipal" },
    { prefix: "conteudo-", section: "conteudos" },
    { prefix: "atividade-", section: "atividades" },
    { prefix: "avaliacao-", section: "avaliacao" },
    { prefix: "recurso-", section: "recursos" },
    { prefix: "ficheiro-excel-", section: "ficheirosExcel" },
    { prefix: "assistente-gpt-", section: "assistentesGpt" },
    { prefix: "tarefa-grupo-", section: "tarefasGrupo" },
    { prefix: "tarefa-individual-", section: "tarefasIndividuais" }
  ];

  const mapping = mappings.find((candidate) => chave.startsWith(candidate.prefix));
  if (!mapping) return;

  const key = chave.slice(mapping.prefix.length);
  if (mapping.section === "tarefasGrupo") {
    definirVisibilidadeTarefaGrupo(obterTarefaGrupoPorChave(key, item.titulo || item.title), item.visivel);
    return;
  }

  if (mapping.section === "tarefasIndividuais") {
    definirVisibilidadeTarefaIndividual(obterTarefaIndividualPorChave(key, item.titulo || item.title), item.visivel);
    return;
  }

  if (siteVisibility[mapping.section] && key in siteVisibility[mapping.section]) {
    siteVisibility[mapping.section][key] = item.visivel;
  }
}

function aplicarItensVisibilidadeRemota(itens) {
  if (!Array.isArray(itens)) return;
  const itensDaUfcdAtual = filtrarItensControloDaUfcdAtual(itens)
    .map(normalizarItemControlo)
    .filter(Boolean);
  atualizarItensControloSite(itensDaUfcdAtual);
  let linksAlterados = false;
  itensDaUfcdAtual.forEach((item) => {
    linksAlterados = aplicarLinkItemControlo(item) || linksAlterados;
    aplicarItemVisibilidadeRemota(item);
  });
  void linksAlterados;
}

function atualizarSuperficiesVisiveisDoSite() {
  renderPortfolioMenuLink();
  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  renderHomeCards();
  renderConteudosIndex();
  atualizarDisponibilidadeDaPaginaInicial();

  if (document.getElementById("topic-root")) {
    renderTopicPage();
  }

  if (document.getElementById("activity-root")) {
    renderActivityPage();
  }

  if (document.getElementById("resource-root")) {
    renderResourcePage();
  }

  manterMenuAtivoAberto();
  abrirMenuPeloHashDoIndex();
}

function guardarVisibilidadeDoSite() {
  try {
    localStorage.setItem(SITE_VISIBILITY_STORAGE_KEY, JSON.stringify({
      secoes: siteVisibilitySections,
      ...siteVisibility
    }));
  } catch {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
}

function carregarLinksDoSite() {
  try {
    const saved = JSON.parse(localStorage.getItem(SITE_LINKS_STORAGE_KEY) || "{}");
    aplicarLinksDoSite(saved);
  } catch {
    // Mantém os valores de base quando não é possível ler localStorage.
  }
}

function aplicarLinksDoSite(links) {
  if (!links || typeof links !== "object") return false;
  let alterou = false;

  const obterCampo = (item, nomes) => {
    if (!item || typeof item !== "object") return "";
    const entradas = Object.entries(item);
    const nomesNormalizados = nomes.map((nome) => nome.toLowerCase());
    const entrada = entradas.find(([key]) => nomesNormalizados.includes(key.toLowerCase()));
    return entrada ? entrada[1] : "";
  };
  const obterValorLink = (item) => {
    const valorExterno = obterCampo(item, ["gammaUrl", "linkValue", "moodleUrl", "urlMoodle", "moodle", "link", "href", "valor", "value", "ligacao", "ligação"]);
    if (valorExterno) return valorExterno;
    const url = String(obterCampo(item, ["url"]) || "");
    return /^https?:\/\//i.test(url) ? url : "";
  };
  const obterChaveLink = (item) => obterCampo(item, ["key", "chave", "id", "linkKey", "titulo", "title", "tarefa"]);
  const obterTipoLink = (item) => String(obterCampo(item, ["linkType", "tipo", "tipo_link", "secao", "seção", "categoria"])).toLowerCase();
  const guardarForum = (key, value) => {
    const novoValor = String(value || "");
    const task = obterTarefaIndividualPorChave(key);
    const chaves = task ? [task.id, task.title] : [key];
    chaves.filter(Boolean).forEach((chave) => {
      if (siteLinks.forums[chave] !== novoValor) {
        siteLinks.forums[chave] = novoValor;
        alterou = true;
      }
    });
  };

  if (Array.isArray(links)) {
    links.forEach((item) => {
      const tipo = obterTipoLink(item);
      const key = obterChaveLink(item);
      const value = obterValorLink(item);

      if (!value) return;

      if ((tipo.includes("gamma") || tipo.includes("conteudo")) && key in siteLinks.gammas) {
        const novoValor = String(value || "");
        if (siteLinks.gammas[key] !== novoValor) {
          siteLinks.gammas[key] = novoValor;
          alterou = true;
        }
      } else if (tipo.includes("gloss")) {
        const novoValor = String(value || "");
        if (siteLinks.glossaryUrl !== novoValor) {
          siteLinks.glossaryUrl = novoValor;
          alterou = true;
        }
      } else if (tipo.includes("forum") || tipo.includes("tarefa")) {
        guardarForum(key, value);
      }
    });

    return alterou;
  }

  if (Array.isArray(links.itens)) {
    alterou = aplicarLinksDoSite(links.itens) || alterou;
  }

  if (links.gammas && typeof links.gammas === "object") {
    Object.entries(links.gammas).forEach(([key, value]) => {
      if (key in siteLinks.gammas) {
        const novoValor = String(value || "");
        if (siteLinks.gammas[key] !== novoValor) {
          siteLinks.gammas[key] = novoValor;
          alterou = true;
        }
      }
    });
  }

  if (typeof links.glossaryUrl === "string" && siteLinks.glossaryUrl !== links.glossaryUrl) {
    siteLinks.glossaryUrl = links.glossaryUrl;
    alterou = true;
  }

  if (links.forums && typeof links.forums === "object") {
    Object.entries(links.forums).forEach(([key, value]) => {
      guardarForum(key, value);
    });
  }

  return alterou;
}

function guardarLinksDoSite() {
  try {
    localStorage.setItem(SITE_LINKS_STORAGE_KEY, JSON.stringify(siteLinks));
  } catch {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
}

function obterGammaUrl(topic) {
  return obterLinkControlo(`conteudo-${topic.id}`) || siteLinks.gammas[topic.id] || topic.gammaUrl || "";
}

function obterGlossarioUrl() {
  return obterLinkControlo("secao-tarefas-grupo")
    || groupTasks.map((task) => obterLinkControlo(`tarefa-grupo-${task.title}`)).find(Boolean)
    || siteLinks.glossaryUrl
    || glossaryUrl
    || "";
}

function obterUrlTopicoForum(valor) {
  const url = String(valor || "").trim();
  return /^https:\/\/fad\.iefp\.pt\/mod\/forum\/discuss\.php\?d=\d+/i.test(url) ? url : "";
}

function obterForumUrls(task) {
  const urls = [];
  const adicionar = (url) => {
    const normalizado = obterUrlTopicoForum(url);
    if (normalizado && !urls.includes(normalizado)) urls.push(normalizado);
  };

  adicionar(obterLinkControlo(task.id));
  adicionar(obterLinkControlo(`tarefa-individual-${task.id}`));
  adicionar(obterLinkControlo(`tarefa-individual-${task.title}`));
  adicionar(siteLinks.forums[task.id]);
  adicionar(siteLinks.forums[task.title]);
  adicionar(task.forumUrl);
  (task.forumUrls || []).forEach(adicionar);

  return urls;
}

function obterForumUrl(task) {
  return obterForumUrls(task)[0] || "";
}

window.addEventListener("storage", (event) => {
  if (APPS_SCRIPT_WEB_APP_URL && (event.key === SITE_VISIBILITY_STORAGE_KEY || event.key === SITE_LINKS_STORAGE_KEY)) return;
  if (!event.newValue) return;

  try {
    if (event.key === SITE_VISIBILITY_STORAGE_KEY) {
      aplicarVisibilidadeDoSite(JSON.parse(event.newValue));
      atualizarSuperficiesVisiveisDoSite();
    }

    if (event.key === SITE_LINKS_STORAGE_KEY && aplicarLinksDoSite(JSON.parse(event.newValue))) {
      atualizarSuperficiesVisiveisDoSite();
    }
  } catch {
    // Mantém o estado atual se a alteração recebida não puder ser lida.
  }
});

async function carregarVisibilidadeRemotaDoSite(options = {}) {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  if (siteVisibilityRemoteLoading && !options.force) return siteVisibilityRemoteLoading;

  siteVisibilityRemoteLoading = obterJsonAppsScript({
    acao: "visibilidade_site",
    ufcd: UFCD.code,
    prefixo: SITE_CONTROL_KEY_PREFIX,
    campos: "essenciais"
  }, { timeoutMs: 6000 })
    .then((dados) => {
      if (dados?.sucesso && Array.isArray(dados.itens)) {
        aplicarItensVisibilidadeRemota(dados.itens);
        guardarUltimaVisibilidadeRemotaDoSite(dados.itens);
        limparEstadoLocalDoSite();
        return true;
      }

      if (dados?.sucesso && dados.visibilidade) {
        aplicarVisibilidadeDoSite(dados.visibilidade);
        limparEstadoLocalDoSite();
        return true;
      }
      return false;
    })
    .catch(() => {
      return false;
    })
    .finally(() => {
      siteVisibilityRemoteReady = true;
      siteVisibilityRemoteLoading = null;
    });

  return siteVisibilityRemoteLoading;
}

async function guardarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) return;

  try {
    const constituicao = obterConstituicaoVisibilidadeSite().map((item) => ({
      codigoUfcd: UFCD.code,
      ufcd: UFCD.code,
      secao: item.secao,
      chave: obterChaveRemotaSite(item.chave),
      titulo: item.titulo,
      url: item.url || "",
      gammaUrl: item.gammaUrl || item.linkValue || "",
      tipo: item.tipo,
      nivel: item.nivel,
      visivel: item.visivel !== false,
      ordem: item.ordem
    }));
    const dados = new URLSearchParams();
    dados.set("acao", "guardar_visibilidade_site");
    dados.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    dados.set("constituicao", JSON.stringify(constituicao));
    dados.set("visibilidade", JSON.stringify(Object.fromEntries(obterConstituicaoVisibilidadeSite().map((item) => [obterChaveRemotaSite(item.chave), item.visivel !== false]))));

    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: dados
    });
  } catch {
    // Mantém a versão local se a ligação remota falhar.
  }
}

function renderSiteVisibilityControls() {
  const renderOption = (section, item) => {
    const checked = siteVisibility[section][item.key] !== false ? "checked" : "";
    const linkField = item.linkType ? `
      <label class="site-control-link-field">
        <span>${escapeHtml(item.linkLabel || "Link")}</span>
        <input
          type="url"
          value="${escapeHtml(item.linkValue || "")}"
          placeholder="${escapeHtml(item.linkPlaceholder || "https://...")}"
          data-link-control
          data-link-type="${escapeHtml(item.linkType)}"
          ${item.linkKey ? `data-key="${escapeHtml(item.linkKey)}"` : ""}>
      </label>
    ` : "";

    if (linkField) {
      return `
        <div class="site-control-option-container">
          <label class="site-control-option">
            <input type="checkbox" data-visibility-control data-section="${section}" data-key="${escapeHtml(item.key)}" ${checked}>
            <span>${escapeHtml(item.label)}</span>
          </label>
          ${linkField}
        </div>
      `;
    }

    return `
      <label class="site-control-option">
        <input type="checkbox" data-visibility-control data-section="${section}" data-key="${escapeHtml(item.key)}" ${checked}>
        <span>${escapeHtml(item.label)}</span>
      </label>
    `;
  };

  const renderStandaloneLink = (item) => `
    <div class="site-control-option-container site-control-option-section">
      <label class="site-control-option">
        <span>${escapeHtml(item.label)}</span>
      </label>
      <label class="site-control-link-field">
        <span>${escapeHtml(item.linkLabel || "Link")}</span>
        <input
          type="url"
          value="${escapeHtml(item.linkValue || "")}"
          placeholder="${escapeHtml(item.linkPlaceholder || "https://...")}"
          data-link-control
          data-link-type="${escapeHtml(item.linkType)}"
          ${item.linkKey ? `data-key="${escapeHtml(item.linkKey)}"` : ""}>
      </label>
    </div>
  `;

  const renderGroup = (title, section, items, options = {}) => `
    <details class="site-control-group">
      <summary>
        <span>${title}</span>
        <small>${items.length} itens</small>
      </summary>
      ${options.before ? `<div class="site-control-group-body">${options.before}</div>` : ""}
      <div class="site-control-options">
        ${items.map((item) => renderOption(section, item)).join("")}
      </div>
    </details>
  `;

  const contentItems = topics.filter((topic) => topic.showInContents !== false).map((topic) => ({
    key: topic.id,
    label: topic.cardTitle,
    linkType: "gamma",
    linkKey: topic.id,
    linkLabel: "Gamma",
    linkValue: obterGammaUrl(topic),
    linkPlaceholder: "https://...gamma.site/..."
  }));
  const menuItems = mainMenuItems.map((item) => ({ key: item.key, label: item.label }));
  const activityItems = activities.map((activity) => ({ key: activity.id, label: activity.menuTitle || activity.title }));
  const evaluationItems = evaluations.map((evaluation) => ({ key: evaluation.id, label: evaluation.menuTitle || evaluation.title }));
  const resourceItems = resources.map((resource) => ({ key: resource.id, label: resource.title }));
  const excelFileItems = resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).map((file) => ({ key: file.id, label: file.title }));
  const gptItems = resources.filter((resource) => resource.gptUrl).map((resource) => ({ key: resource.id, label: resource.title }));
  const groupItems = groupTasks.map((task) => ({ key: task.title, label: task.title }));
  const glossaryField = renderStandaloneLink({
    label: "Glossário Moodle das tarefas de grupo",
    linkType: "glossary",
    linkLabel: "Glossário",
    linkValue: obterGlossarioUrl(),
    linkPlaceholder: "https://fad.iefp.pt/mod/glossary/view.php?id=..."
  });
  const individualItems = individualTasks.map((task) => ({
    key: task.id,
    label: task.title,
    linkType: "forum",
    linkKey: task.id,
    linkLabel: "Fórum",
    linkValue: obterForumUrl(task),
    linkPlaceholder: "https://fad.iefp.pt/mod/forum/discuss.php?d=..."
  }));
  const renderTiMaterialsStatus = () => `
    <div class="site-control-materials-status">
      <h3>Estado dos ficheiros das TIs</h3>
      ${individualTasks.map((task) => {
        const pdfStatus = task.pdfUrl ? "PDF OK" : "PDF em falta";
        const excelFiles = task.workFiles || [];
        const excelStatus = excelFiles.length
          ? excelFiles.map((file) => `${file.title}: ${file.available && file.excelUrl ? "Excel OK" : "Excel em falta"}`).join(" · ")
          : "Sem ficheiro Excel associado";
        return `<p><strong>${task.title}</strong><br><span>${pdfStatus}</span><span>${excelStatus}</span></p>`;
      }).join("")}
    </div>
  `;

  return `
    <div class="card site-control-card">
      <div class="site-control-heading">
        <div>
          <p class="eyebrow">Disponibilização e ligações</p>
          <h2>Gestão de materiais</h2>
        </div>
        <div>
          <p>Ativa conteúdos/tarefas e associa os links externos usados durante a formação.</p>
        <button class="small-button" type="button" data-action="save-site-visibility">Guardar na Apps Script</button>
        </div>
      </div>
      <div class="site-control-grid">
        ${renderGroup("Menu principal", "menuPrincipal", menuItems)}
        ${renderGroup("Conteúdos", "conteudos", contentItems)}
        ${renderGroup("Atividades", "atividades", activityItems)}
        ${renderGroup("Avaliação", "avaliacao", evaluationItems)}
        ${renderGroup("Recursos", "recursos", resourceItems)}
        ${renderGroup("Ficheiros Excel", "ficheirosExcel", excelFileItems)}
        ${renderGroup("Assistentes GPT", "assistentesGpt", gptItems)}
        ${renderGroup("Tarefas de Grupo", "tarefasGrupo", groupItems, { before: glossaryField })}
        ${renderGroup("Tarefas Individuais", "tarefasIndividuais", individualItems, { before: renderTiMaterialsStatus() })}
      </div>
      <div class="site-control-actions">
          <button class="small-button" type="button" data-action="save-site-visibility">Guardar na Apps Script</button>
      </div>
      <p class="teams-control-status" data-site-control-status>Alterações guardadas neste browser.</p>
    </div>
  `;
}

function atualizarControlosVisibilidadeDoSite(root) {
  root.querySelectorAll("[data-visibility-control]").forEach((input) => {
    const section = input.dataset.section;
    const key = input.dataset.key;
    if (section === "tarefasGrupo") {
      const task = obterTarefaGrupoPorChave(key);
      input.checked = task ? tarefaGrupoVisivel(task) : siteVisibility[section]?.[key] !== false;
      return;
    }

    if (section === "tarefasIndividuais") {
      const task = obterTarefaIndividualPorChave(key);
      input.checked = task ? tarefaIndividualVisivel(task) : siteVisibility[section]?.[key] !== false;
      return;
    }

    if (siteVisibility[section] && key in siteVisibility[section]) {
      input.checked = siteVisibility[section][key] !== false;
    }
  });

  root.querySelectorAll("[data-link-control]").forEach((input) => {
    const type = input.dataset.linkType;
    const key = input.dataset.key;
    if (type === "gamma" && key in siteLinks.gammas) {
      input.value = siteLinks.gammas[key] || "";
    } else if (type === "glossary") {
      input.value = siteLinks.glossaryUrl || "";
    } else if (type === "forum" && key) {
      const task = obterTarefaIndividualPorChave(key);
      input.value = task ? obterForumUrl(task) : siteLinks.forums[key] || "";
    }
  });
}

function renderTeamsControl(root, options = {}) {
  const compact = Boolean(options.compact);
  const publicView = Boolean(options.publicView);

  root.innerHTML = `
    <section class="section task-page-section teams-control-section ${compact ? "compact-page-section" : ""}">
      <div class="section-inner">
        <details class="teams-page-accordion" open>
          <summary>
            <span class="teams-accordion-copy">
              <span class="eyebrow">Teams</span>
              <strong>Partilha de ecrã</strong>
              <small>Tabela simples para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.</small>
            </span>
          </summary>

          <div class="teams-accordion-body">
            <div class="teams-control-layout teams-control-layout-simple">
              <article class="card teams-summary-card">
                <p class="eyebrow">Resumo</p>
                <div class="teams-summary-grid">
                  <span><strong data-teams-total>0</strong><em>Total</em></span>
                  <span><strong data-teams-done>0</strong><em>Já partilharam</em></span>
                  <span><strong data-teams-missing>0</strong><em>Ainda sem partilha</em></span>
                </div>
                <p class="teams-config-note" data-teams-config-note></p>
                <p class="teams-control-status" data-teams-status></p>
              </article>
            </div>

            <div class="card teams-table-card">
              <div class="teams-table-heading">
                <div>
                  <p class="eyebrow">Mapa</p>
                  <h2>Formandos</h2>
                </div>
                ${publicView ? "" : `<label class="teams-toggle">
                  <input type="checkbox" data-action="teams-show-inactive">
                  <span>Mostrar desativados</span>
                </label>`}
              </div>
              <div class="teams-table-wrap">
                <table class="teams-control-table ${publicView ? "teams-public-table" : ""}">
                  <thead>
                    <tr>
                      <th>Nome do formando</th>
                      <th>N.º de partilhas</th>
                      <th>ltimo registo</th>
                      ${publicView ? "" : "<th>Estado</th>"}
                      ${publicView ? "" : "<th>Partilhas</th>"}
                    </tr>
                  </thead>
                  <tbody data-teams-table-body>
                    <tr><td colspan="${publicView ? "3" : "5"}">Ainda não existem formandos carregados.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </details>

        ${publicView ? "" : `
          <details class="teams-page-accordion site-control-accordion">
            <summary>
              <span class="teams-accordion-copy">
                <span class="eyebrow">Gestão de materiais</span>
                <strong>Gestão de materiais</strong>
                <small>Disponibiliza conteúdos, tarefas e ligações externas usadas na formação.</small>
              </span>
            </summary>
            <div class="teams-accordion-body">
              ${renderSiteVisibilityControls()}
            </div>
          </details>
        `}
      </div>
    </section>
  `;

  root.dataset.teamsPublicView = publicView ? "true" : "false";
  setupTeamsAccordions(root);
  setupTeamsControl(root);
}

function setupTeamsAccordions(root) {
  const accordions = [...root.querySelectorAll(".teams-page-accordion")];
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) return;
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.open = false;
        }
      });
    });
  });
}

async function setupTeamsControl(root) {
  const status = root.querySelector("[data-teams-status]");
  const configNote = root.querySelector("[data-teams-config-note]");
  const controlStatus = root.querySelector("[data-site-control-status]");

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (configNote) {
      configNote.textContent = "Ligação ao Apps Script ainda não configurada. A página está pronta, mas precisa do URL da Web App para carregar formandos e guardar partilhas.";
    }
    if (status) {
      status.textContent = "Configura o URL da Web App do Apps Script em APPS_SCRIPT_WEB_APP_URL.";
    }
  }

  if (controlStatus) controlStatus.textContent = "A carregar visibilidade e ligações do site...";
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();
  atualizarControlosVisibilidadeDoSite(root);
  if (controlStatus) {
    controlStatus.textContent = visibilidadeRemotaOk
      ? "Visibilidade e ligações carregadas da configuração central."
      : "Alterações guardadas neste browser. A configuração central ainda não respondeu.";
  }

  await carregarDadosTeams(root);

  if (APPS_SCRIPT_WEB_APP_URL) {
    window.setInterval(() => carregarDadosTeams(root), 30000);
  }

  root.addEventListener("click", async (event) => {
    const saveVisibilityButton = event.target.closest('[data-action="save-site-visibility"]');
    if (saveVisibilityButton) {
      const controlStatus = root.querySelector("[data-site-control-status]");
      if (controlStatus) controlStatus.textContent = "A enviar constituição e ligações do site para a Apps Script...";
      await guardarVisibilidadeRemotaDoSite();
      limparEstadoLocalDoSite();
      await aguardar(900);
      await carregarVisibilidadeRemotaDoSite({ force: true });
      atualizarSuperficiesVisiveisDoSite();
      atualizarControlosVisibilidadeDoSite(root);
      if (controlStatus) {
        controlStatus.textContent = `Configuração recarregada da Sheet: ${obterConstituicaoVisibilidadeSite().length} itens e ligações do site.`;
      }
      return;
    }

    const button = event.target.closest("[data-teams-action]");
    if (!button) return;
    await registarAcaoPartilhaEcra(root, button.dataset.nome || "", button.dataset.teamsAction || "incrementar");
  });

  root.addEventListener("change", (event) => {
    if (event.target.matches('[data-action="teams-show-inactive"]')) {
      root.dataset.showInactiveTeams = event.target.checked ? "true" : "false";
      carregarDadosTeams(root);
      return;
    }

    if (event.target.matches("[data-visibility-control]")) {
      const section = event.target.dataset.section;
      const key = event.target.dataset.key;
      if (section === "tarefasGrupo") {
        definirVisibilidadeTarefaGrupo(obterTarefaGrupoPorChave(key), event.target.checked);
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
      } else if (section === "tarefasIndividuais") {
        definirVisibilidadeTarefaIndividual(obterTarefaIndividualPorChave(key), event.target.checked);
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
      } else if (siteVisibility[section] && key in siteVisibility[section]) {
        siteVisibility[section][key] = event.target.checked;
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
      }
    }

    if (event.target.matches("[data-link-control]")) {
      const type = event.target.dataset.linkType;
      const key = event.target.dataset.key;
      const value = event.target.value.trim();
      let controlKey = "";

      if (type === "gamma" && key in siteLinks.gammas) {
        siteLinks.gammas[key] = value;
        controlKey = `conteudo-${key}`;
      } else if (type === "glossary") {
        siteLinks.glossaryUrl = value;
        controlKey = "secao-tarefas-grupo";
      } else if (type === "forum" && key) {
        siteLinks.forums[key] = value;
        const task = obterTarefaIndividualPorChave(key);
        controlKey = task ? task.id : key;
      }

      const controlItem = controlKey ? obterItemControlo(controlKey) : null;
      if (controlItem) {
        controlItem.linkValue = value;
        controlItem.gammaUrl = value;
      }

      const controlStatus = root.querySelector("[data-site-control-status]");
      if (controlStatus) controlStatus.textContent = "Ligação alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
    }
  });
}

async function carregarDadosTeams(root) {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    preencherTabelaTeams(root, [], []);
    atualizarResumoTeams(root, [], []);
    return;
  }

  const status = root.querySelector("[data-teams-status]");

  try {
    const [formandos, registos] = await Promise.all([
      obterJsonAppsScript({ acao: "formandos", ufcd: UFCD.code, acao_formacao: UFCD.action }),
      obterJsonAppsScript({ acao: "registos", questionario: "Partilha de ecrã", ufcd: UFCD.code, acao_formacao: UFCD.action })
    ]);

    preencherTabelaTeams(root, formandos.formandos || [], registos.registos || []);
    atualizarResumoTeams(root, registos.registos || [], formandos.formandos || []);

    if (status) status.textContent = "Dados carregados.";
  } catch (erro) {
    if (status) status.textContent = "Não foi possível carregar dados do Apps Script.";
  }
}

function preencherTabelaTeams(root, formandos, registos) {
  const tbody = root.querySelector("[data-teams-table-body]");
  if (!tbody) return;

  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const publicView = root.dataset.teamsPublicView === "true";
  const mostrarDesativados = root.dataset.showInactiveTeams === "true";
  const nomesVisiveis = nomes.filter((nome) => mostrarDesativados || estado[nome]?.ativo !== false);
  const colspan = publicView ? 3 : 5;

  if (!nomesVisiveis.length) {
    tbody.innerHTML = `<tr><td colspan="${colspan}">Ainda não existem formandos carregados.</td></tr>`;
    return;
  }

  const maxPartilhas = Math.max(...nomesVisiveis.map((nome) => estado[nome]?.total || 0), 0);

  tbody.innerHTML = nomesVisiveis.map((nome) => {
    const dados = estado[nome] || { total: 0, ultimo: "", ativo: true };
    const ativo = dados.ativo !== false;
    const total = dados.total || 0;
    const percentagem = maxPartilhas > 0 ? Math.max((total / maxPartilhas) * 100, 6) : 0;
    const barClass = total === 0 ? "is-zero" : total === maxPartilhas ? "is-max" : "is-mid";
    return `
    <tr class="${ativo ? "" : "teams-row-inactive"}">
      <td>${escapeHtml(nome)}</td>
      <td>
        <div class="teams-share-meter ${barClass}" style="--share-level: ${percentagem}%">
          <strong>${total > 0 ? total : ""}</strong>
          <span aria-hidden="true"></span>
        </div>
      </td>
      <td>${escapeHtml(formatarDataTeams(dados.ultimo || ""))}</td>
      ${publicView ? "" : `
      <td>
        <div class="teams-state-actions">
          <button class="small-button teams-status-button teams-activate-button" type="button" data-teams-action="ativar" data-nome="${escapeHtml(nome)}" ${ativo ? "disabled" : ""}>Ativar</button>
          <button class="small-button teams-status-button teams-deactivate-button" type="button" data-teams-action="desativar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"}>Desativar</button>
        </div>
      </td>
      `}
      ${publicView ? "" : `<td>
        <div class="teams-actions">
          <button class="small-button teams-count-button teams-plus-button" type="button" data-teams-action="incrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Adicionar partilha de ${escapeHtml(nome)}">+</button>
          <button class="small-button teams-count-button teams-minus-button" type="button" data-teams-action="decrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Remover uma partilha de ${escapeHtml(nome)}">-</button>
        </div>
      </td>`}
    </tr>
  `;
  }).join("");
}

function atualizarResumoTeams(root, registos, formandos = []) {
  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const nomesAtivos = nomes.filter((nome) => estado[nome]?.ativo !== false);
  const apresentaram = nomesAtivos.filter((nome) => (estado[nome]?.total || 0) > 0);

  const total = nomesAtivos.length;
  const done = apresentaram.length;
  const missing = Math.max(total - done, 0);

  const totalEl = root.querySelector("[data-teams-total]");
  const doneEl = root.querySelector("[data-teams-done]");
  const missingEl = root.querySelector("[data-teams-missing]");

  if (totalEl) totalEl.textContent = String(total);
  if (doneEl) doneEl.textContent = String(done);
  if (missingEl) missingEl.textContent = String(missing);
}

function obterNomesTeams(formandos, registos) {
  const nomes = new Set(formandos.filter(Boolean));
  registos.forEach((registo) => {
    if (registo["Nome do formando"]) nomes.add(registo["Nome do formando"]);
  });
  return Array.from(nomes).sort((a, b) => a.localeCompare(b, "pt-PT"));
}

function normalizarAcaoTeams(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function calcularEstadoPartilhaTeams(registos) {
  return registos.reduce((acc, registo) => {
    const nome = registo["Nome do formando"];
    if (!nome) return acc;

    if (!acc[nome]) {
      acc[nome] = { total: 0, ultimo: "", ativo: true };
    }

    const acao = normalizarAcaoTeams(registo["Ação"] || registo.Acao || registo["Acção"] || registo["Partilha de ecrã"]);

    if (acao === "desativar" || acao === "desativado") {
      acc[nome].ativo = false;
    } else if (acao === "ativar" || acao === "ativo") {
      acc[nome].ativo = true;
    } else if (acao === "decrementar" || acao === "remover" || acao === "removida" || acao === "removido" || acao === "nao" || acao === "não" || acao === "-1") {
      acc[nome].total = Math.max((acc[nome].total || 0) - 1, 0);
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    } else if (acao === "" || acao === "sim" || acao === "incrementar" || acao === "+1") {
      acc[nome].total += 1;
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    }

    return acc;
  }, {});
}

async function registarAcaoPartilhaEcra(root, nome, acao) {
  const status = root.querySelector("[data-teams-status]");
  const button = root.querySelector(`[data-teams-action="${acao}"][data-nome="${CSS.escape(nome)}"]`);

  if (!nome) {
    if (status) status.textContent = "Não foi possível identificar o formando.";
    return;
  }

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (status) status.textContent = "Não foi possível guardar: falta configurar o URL do Apps Script.";
    return;
  }

  if (button) button.disabled = true;
  if (status) status.textContent = `A guardar a alteração de ${nome}...`;

  try {
    const respostaAntes = await obterJsonAppsScript({ acao: "registos", questionario: "Partilha de ecrã", ufcd: UFCD.code, acao_formacao: UFCD.action });
    const registosAntes = respostaAntes.registos || [];
    const totalAntes = contarAcoesPartilhaEcra(registosAntes, nome, acao);

    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        spreadsheet_id: APPS_SCRIPT_SPREADSHEET_ID,
        questionario: "Partilha de ecrã",
        ufcd: UFCD.code,
        codigo_ufcd: UFCD.code,
        acao_formacao: UFCD.action,
        respostas: {
          "Nome do formando": nome,
          "Data da reunião": new Date().toISOString().slice(0, 10),
          "Partilha de ecrã": obterValorPartilhaTeams(acao),
          "Ação": acao
        }
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });

    let registosConfirmados = null;
    for (let tentativa = 0; tentativa < 6; tentativa += 1) {
      await aguardar(tentativa === 0 ? 900 : 700);
      const respostaDepois = await obterJsonAppsScript({ acao: "registos", questionario: "Partilha de ecrã", ufcd: UFCD.code, acao_formacao: UFCD.action });
      const registosDepois = respostaDepois.registos || [];
      if (contarAcoesPartilhaEcra(registosDepois, nome, acao) > totalAntes) {
        registosConfirmados = registosDepois;
        break;
      }
    }

    if (!registosConfirmados) {
      throw new Error("A gravação não foi confirmada pela folha Partilha de ecrã.");
    }

    const respostaFormandos = await obterJsonAppsScript({ acao: "formandos", ufcd: UFCD.code, acao_formacao: UFCD.action });
    const formandos = respostaFormandos.formandos || [];
    preencherTabelaTeams(root, formandos, registosConfirmados);
    atualizarResumoTeams(root, registosConfirmados, formandos);
    if (status) status.textContent = mensagemAcaoPartilhaTeams(nome, acao);
  } catch (erro) {
    if (status) status.textContent = "Não foi possível confirmar a gravação no Apps Script. Tenta novamente.";
  } finally {
    if (button) button.disabled = false;
  }
}

function contarAcoesPartilhaEcra(registos, nome, acao) {
  const nomeNormalizado = String(nome || "").trim();
  const acaoNormalizada = normalizarAcaoTeams(acao);
  return registos.filter((registo) =>
    String(registo["Nome do formando"] || "").trim() === nomeNormalizado
    && normalizarAcaoTeams(registo["Ação"] || registo.Acao || registo["Acção"] || registo["Partilha de ecrã"]) === acaoNormalizada
  ).length;
}
function mensagemAcaoPartilhaTeams(nome, acao) {
  if (acao === "decrementar") return `Foi removida uma partilha de ${nome}.`;
  if (acao === "desativar") return `${nome} foi desativado da lista.`;
  if (acao === "ativar") return `${nome} voltou à lista ativa.`;
  return `Partilha registada para ${nome}.`;
}

function obterValorPartilhaTeams(acao) {
  if (acao === "decrementar") return "Removida";
  if (acao === "desativar") return "Desativar";
  if (acao === "ativar") return "Ativar";
  return "Sim";
}

function formatarDataTeams(valor) {
  const texto = String(valor || "").trim();
  if (!texto) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
    const [ano, mes, dia] = texto.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  const data = new Date(texto);
  if (!Number.isNaN(data.getTime())) {
    return data.toLocaleDateString("pt-PT");
  }

  return texto.split("T")[0] || texto;
}

function aguardar(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function obterJsonAppsScript(params, options = {}) {
  const url = new URL(APPS_SCRIPT_WEB_APP_URL);
  if (APPS_SCRIPT_SPREADSHEET_ID) {
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
  }
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });
  url.searchParams.set("_", String(Date.now()));
  return obterJsonp(url.toString(), options.timeoutMs);
}

function obterJsonp(url, timeoutMs = 30000) {
  return new Promise((resolve, reject) => {
    const callbackName = `ufcd0695Callback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const separator = url.includes("?") ? "&" : "?";
    const timeoutId = window.setTimeout(() => {
      delete window[callbackName];
      script.remove();
      reject(new Error("Tempo excedido ao carregar dados do Apps Script."));
    }, timeoutMs);

    window[callbackName] = (dados) => {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
      resolve(dados);
    };

    script.onerror = () => {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
      reject(new Error("Não foi possível carregar dados do Apps Script."));
    };

    script.src = `${url}${separator}callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getGammaEmbedUrl(url) {
  if (!url) return "";
  if (!url.includes("gamma.app/docs/")) return url;
  const id = url.split("-").pop();
  return `https://gamma.app/embed/${id}`;
}

function renderGammaContentPage(root, topic, embedUrl) {
  const frameUrl = getGammaEmbedUrl(embedUrl);
  document.body.classList.add("gamma-view");
  root.innerHTML = `
    <section class="gamma-section content-gamma-full" aria-label="${escapeHtml(topic.cardTitle || topic.title)}">
      <iframe
        class="external-frame full-page-frame gamma-content-frame"
        src="${escapeHtml(frameUrl)}"
        title="${escapeHtml(topic.cardTitle || topic.title)}"
        loading="lazy"
        allow="fullscreen"
        allowfullscreen>
      </iframe>
    </section>
  `;
}

function renderTopicPage() {
  const root = document.getElementById("topic-root");
  if (!root) return;

  const topic = topicById(document.body.dataset.topic) || topics[0];
  const gammaUrl = obterGammaUrl(topic);
  const gammaDisponivel = Boolean(gammaUrl && isItemVisible("conteudos", topic.id));
  document.body.classList.toggle("gamma-view", gammaDisponivel);
  document.title = `UFCD ${UFCD.code} | ${topic.title}`;
  document.querySelectorAll("#submenu-conteudos a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(topic.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (gammaDisponivel) {
    renderGammaContentPage(root, topic, gammaUrl);
    return;
  }

  const topicItems = Array.isArray(topic.items) && topic.items.length
    ? `
          <article class="card">
            <h2>Subconteúdos</h2>
            <ul class="clean-list">
              ${topic.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
    `
    : "";
  const lesson = contentLessons[topic.id];
  const lessonSections = lesson?.sections?.map((section, index) => `
          <article class="card">
            <p class="eyebrow">${String(index + 1).padStart(2, "0")}</p>
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.text)}</p>
            ${section.points?.length ? `
              <ul class="clean-list">
                ${section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
              </ul>
            ` : ""}
          </article>
  `).join("") || "";

  root.innerHTML = `
    <section class="hero content-hero no-image-hero compact-content-hero">
      <div class="hero-content">
        <h1>${topic.cardTitle}</h1>
        <p>${topic.intro}</p>
      </div>
    </section>

    <section class="section content-page-section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          ${topicItems}
          ${lesson ? `
            <article class="card">
              <p class="eyebrow">Enquadramento</p>
              <h2>O essencial</h2>
              <p>${escapeHtml(lesson.summary)}</p>
            </article>
            ${lessonSections}
          ` : `
            <article class="card">
              <h2>Enquadramento</h2>
              <p>${escapeHtml(topic.intro)}</p>
            </article>
          `}
          <article class="card activity-card">
            <p class="eyebrow">Atividade</p>
            <h2>Experimenta</h2>
            <p>${escapeHtml(lesson?.practice || "Aplica este conteúdo no ficheiro de trabalho e confirma o resultado.")}</p>
          </article>
          <article class="card">
            <p class="eyebrow">Síntese</p>
            <h2>Antes de avançar</h2>
            <p>Confirma se consegues identificar os comandos utilizados, explicar a sua finalidade e repetir o procedimento no teu ficheiro sem depender do exemplo.</p>
          </article>
        </div>
        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            ${topic.items?.length ? "<li>Subconteúdos</li>" : ""}
            <li>O essencial</li>
            ${lesson?.sections?.map((section) => `<li>${escapeHtml(section.title)}</li>`).join("") || ""}
            <li>Atividade</li>
            <li>Síntese</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderActivityPage() {
  const root = document.getElementById("activity-root") || document.getElementById("evaluation-root");
  if (!root) return;

  const evaluationIds = {
    diagnostica: "avaliacao-diagnostica",
    "resultados-diagnostica": "resultados-diagnostica",
    sumativa: "avaliacao-sumativa",
    "entre-pares": "avaliacao-entre-pares",
    "autoavaliacao-final": "autoavaliacao-final",
    formacao: "avaliacao-formacao"
  };
  const activityId = document.body.dataset.activity;
  const evaluationId = evaluationIds[document.body.dataset.evaluation] || document.body.dataset.evaluation;
  const activity = activities.find((item) => item.id === activityId)
    || evaluations.find((item) => item.id === activityId)
    || evaluations.find((item) => item.id === evaluationId)
    || activities[0];
  const isEvaluation = evaluations.some((item) => item.id === activity.id);
  document.title = `UFCD ${UFCD.code} | ${activity.title}`;

  const activeSubmenu = document.getElementById(isEvaluation ? "submenu-avaliacao" : "submenu-atividades");
  activeSubmenu?.querySelectorAll("a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(activity.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (activity.id === "controlo-teams") {
    renderTeamsControl(root, {
      compact: document.body.dataset.depth === "embed",
      publicView: document.body.dataset.depth !== "embed"
    });
    return;
  }

  if (activity.id === "resultados-diagnostica") {
    root.innerHTML = `
      <section class="section diagnostic-report">
        <div class="section-inner">
          <article class="card report-hero-card">
            <p class="eyebrow">Avaliação diagnóstica · UFCD 0695</p>
            <h1>Resultados da Avaliação Diagnóstica</h1>
            <p class="lead">Os resultados da avaliação diagnóstica serão apresentados após a realização da atividade.</p>
          </article>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-grupo") {
    const overviewItems = [
          "Trabalhar o conceito atribuído ao grupo em cada dia.",
          "Escrever uma definição clara, com palavras próprias.",
          "Apresentar um exemplo simples relacionado com o conceito.",
          "Indicar a fonte consultada.",
          "Rever e partilhar a entrada no Glossário ou Padlet colaborativo."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card">
            <summary>
              <span class="task-module-copy">
                <strong>Glossário colaborativo</strong>
                <small>Entre os Dias 2 e 12, cada grupo acrescenta uma definição, um exemplo e uma fonte ao glossário da turma.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TG</span>
            </summary>
            <div class="task-module-body">
              <p>Nesta atividade vamos construir um Glossário Colaborativo da UFCD 0695, entre os Dias 2 e 12.</p>
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>

            </div>
          </details>

          <div class="task-module-list">
            ${groupTasks.filter((task) => tarefaGrupoVisivel(task)).map((task, index) => `
              <details class="task-module-card">
                <summary>
                  <span class="task-module-copy">
                    <strong>TG${String(groupTasks.indexOf(task) + 1).padStart(2, "0")} — ${task.topic}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">TG${String(groupTasks.indexOf(task) + 1).padStart(2, "0")}</span>
                </summary>

                <div class="task-module-body">
                  <p>Tema associado: ${task.topic}.</p>
                  <p><strong>Instruções:</strong> cada grupo trabalha a palavra atribuída, escreve uma definição clara por palavras próprias, acrescenta um exemplo relacionado com a gestão informatizada de documentos, indica a fonte e revê a entrada antes da publicação.</p>
                  <p><strong>Evidência:</strong> entrada publicada no Glossário ou Padlet colaborativo com conceito, definição, exemplo, fonte e identificação do grupo.</p>
                  <p><strong>Publicação:</strong> Glossário ou Padlet colaborativo.</p>

                  <div class="task-block">
                    <strong>Palavras a trabalhar</strong>
                    <div class="word-list">
                      ${task.words.map(([word, group]) => `<span><strong>${word}</strong> ${group}</span>`).join("")}
                    </div>
                  </div>

                  <div class="embed-fallback resource-action-row align-right">
                    ${obterGlossarioUrl() ? `<a class="small-button orange" href="${obterGlossarioUrl()}" target="_top">Abrir glossário</a>` : `<span class="task-link-pending">Ligação ao Glossário a disponibilizar.</span>`}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-individuais") {
    const renderList = (items = [], className = "clean-list task-prompt-list") =>
      items.length ? `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";

    const getEssentialSteps = (task) => (task.steps || []).map((part) => {
      const instruction = part.text || part.items?.[0] || "Realiza o procedimento indicado no PDF da tarefa.";
      return `<strong>${part.title}:</strong> ${instruction}`;
    });
    const getTaskPdfUrl = (task) => task.pdfUrl ? `${getBasePath()}${task.pdfUrl}` : "";

    const renderTaskPdfButton = (task, label = "Ver instruções PDF") => task.pdfUrl
      ? `<button class="small-button" type="button" data-modal-open="pdf-${task.id}">${label}</button>`
      : "";

    const renderTaskPdfModal = (task) => {
      const pdfUrl = getTaskPdfUrl(task);
      return pdfUrl ? `
        <div class="modal-backdrop task-pdf-modal-backdrop" id="pdf-${task.id}" hidden>
          <div class="modal task-pdf-modal" role="dialog" aria-modal="true" aria-labelledby="pdf-${task.id}-title">
            <div class="task-pdf-modal-header">
              <h2 id="pdf-${task.id}-title">${task.title}</h2>
              <button class="modal-close task-pdf-close" type="button" data-modal-close aria-label="Fechar janela">&times;</button>
            </div>
            <div class="task-pdf-fallback" role="note">
              <strong>PDF da tarefa</strong>
              <p>Alguns browsers bloqueiam leitores PDF embutidos quando o site está dentro do Google Sites. Usa o botão abaixo para abrir o ficheiro na mesma janela.</p>
            </div>
            <div class="modal-actions">
              <a class="small-button orange" href="${pdfUrl}" target="_top">Abrir PDF</a>
            </div>
          </div>
        </div>
      ` : "";
    };

    const renderForumButtons = (task) => {
      const url = obterForumUrl(task);
      if (!url) return `<span class="task-link-pending">Liga\u00e7\u00e3o a confirmar pela formadora.</span>`;
      return `<a class="small-button moodle-button" href="${url}" target="_top">${task.forumButtonLabel || "Abrir tarefa no Moodle"}</a>`;
    };




    const renderTaskFiles = (task) => {
      const files = (task.workFiles || []).filter((file) => file.excelUrl || file.available !== false);
      return files.map((file) => {
        const label = `${file.number ? `${file.number}  ` : ""}${file.title}`;
        return file.available && file.excelUrl
          ? `<a class="small-button" href="${getBasePath()}${file.excelUrl}" target="_top" download>Descarregar ${label}</a>`
          : `<span class="task-link-pending">${label}: ficheiro brevemente disponível</span>`;
      }).join("");
    };

    const renderSimplifiedTask = (task) => {
      if (task.placeholder) return `<div class="detailed-task-content simplified-task-content"><div class="task-block"><p>Conteúdo a definir</p></div></div>`;
      return `<div class="detailed-task-content simplified-task-content">
        ${task.objective ? `<div class="task-block"><strong>Objetivo</strong><p>${task.objective}</p></div>` : ""}
        ${(task.steps || []).length ? `<div class="task-block"><strong>O que fazer</strong>${renderList(getEssentialSteps(task))}</div>` : ""}
        <div class="embed-fallback resource-action-row align-right">${renderTaskPdfButton(task, "Abrir PDF da TI")}${renderTaskFiles(task)}${renderForumButtons(task)}</div>
        ${renderTaskPdfModal(task)}</div>`;
    };

    const overviewItems = [
          "Usar o ficheiro prático indicado em cada tarefa e guardar o resultado na pasta definida.",
          "Respeitar rigorosamente o nome indicado em cada enunciado e utilizar apenas o primeiro nome.",
          "Guardar os ficheiros na estrutura definida pela formadora, mantendo a organização entre computador e Google Drive.",
          "Efetuar no Moodle o registo específico solicitado em cada tarefa.",
          "Confirmar, antes de concluir, se o ficheiro está completo, legível e funcional."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>Tarefas Individuais</h1>
            <p class="lead">Estrutura das Tarefas Individuais da UFCD 0695.</p>
          </div>

          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Como realizar as Tarefas Individuais</strong>
                <small>As tarefas são disponibilizadas progressivamente pela formadora.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TI</span>
            </summary>
            <div class="task-module-body">
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>

          <div class="task-module-list individual-task-list">
            ${individualTasks.filter((task) => tarefaIndividualVisivel(task)).map((task, index) => `
              <details class="task-module-card individual-task-card" ${index === 0 ? "" : ""}>
                <summary>
                  <span class="task-module-copy">
                    <strong>${task.title}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">${task.number}</span>
                </summary>

                <div class="task-module-body">
                  ${task.locked ? `
                    <aside class="task-note-box locked-task-note">
                      <strong>Tarefa já realizada</strong>
                      <p>O conteúdo da TI 1 foi preservado e não deve ser alterado.</p>
                    </aside>
                    <div class="task-block">
                      <strong>Orientações</strong>
                      ${renderList(task.prompts)}
                    </div>
                    <div class="task-block">
                      <strong>Evidência</strong>
                      <p>${task.evidence}</p>
                    </div>
                    <div class="embed-fallback resource-action-row align-right">
                      ${renderTaskPdfButton(task)}
                      ${renderForumButtons(task)}
                    </div>
                    ${renderTaskPdfModal(task)}
                  ` : renderSimplifiedTask(task)}
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (!isEvaluation) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
          </div>

          <div class="activity-meta-grid">
            <article class="card activity-meta-card">
              <p class="eyebrow">Foco</p>
              <h3>${activity.focus}</h3>
            </article>
            ${activity.duration ? `<article class="card activity-meta-card">
              <p class="eyebrow">Duração</p>
              <h3>${activity.duration}</h3>
            </article>` : ""}
          </div>

          <details class="card group-task-card task-details-card">
            <summary>
              <span>
                <h3>${activity.id === "mentimeter-inicial" ? "Pergunta" : "Etapas da atividade"}</h3>
                <p>${activity.id === "mentimeter-inicial" ? activity.intro : "Consulta a sequência proposta para esta atividade diária."}</p>
              </span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </summary>
            <ol class="agenda-list">
              ${activity.steps.map((step) => `
                <li><strong>${step.title}</strong><span>${step.text}</span></li>
              `).join("")}
            </ol>
          </details>

          <div class="activity-output-grid">
            <article class="card activity-card">
              <p class="eyebrow">Produto esperado</p>
              <h3>Resultado da atividade</h3>
              <p>${activity.product}</p>
            </article>

            <article class="card">
              <p class="eyebrow">Evidências</p>
              <h3>Registos a guardar</h3>
              <ul class="clean-list">
                ${activity.evidence.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          </div>

          ${activity.mentimeterUrl ? `
            <section class="embedded-page-shell mentimeter-embed-block" aria-label="Mentimeter - ${activity.title}">
              <div class="mentimeter-frame-wrap">
                <iframe
                  class="mentimeter-frame"
                  sandbox="allow-popups allow-scripts allow-same-origin allow-presentation"
                  allowfullscreen="true"
                  allowtransparency="true"
                  frameborder="0"
                  src="${activity.mentimeterUrl}"
                  title="Mentimeter - Escreve 3 palavras"></iframe>
              </div>
              <div class="embed-fallback">
                <a class="small-button" href="${activity.mentimeterUrl}">Abrir Mentimeter</a>
                ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Participar</a>` : ""}
                ${activity.qrCode ? `<button class="small-button" type="button" data-modal-open="mentimeter-qr-modal">Mostrar QR Code</button>` : ""}
              </div>
              ${activity.qrCode ? `
                <div class="modal-backdrop qr-modal-backdrop" id="mentimeter-qr-modal" hidden>
                  <div class="modal qr-modal" role="dialog" aria-modal="true" aria-labelledby="mentimeter-qr-title">
                    <button class="modal-close" type="button" data-modal-close aria-label="Fechar janela">&times;</button>
                    <h2 id="mentimeter-qr-title">Participar no Mentimeter inicial</h2>
                    <p>Usa o QR Code para aceder à nuvem de palavras no telemóvel.</p>
                    <img src="${getBasePath()}${activity.qrCode}" alt="QR Code para participar no Mentimeter">
                    ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Abrir ligação de participação</a>` : ""}
                  </div>
                </div>
              ` : ""}
            </section>
          ` : ""}
        </div>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
        <div class="section-inner">
          ${isEvaluation && activity.embedUrl ? "" : `
            <div class="section-heading task-page-heading">
            ${isEvaluation ? `
            <h1>${activity.title}</h1>
            ` : `
            <p class="eyebrow">Atividades</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
            `}
          </div>
          `}
        ${activity.embedUrl ? `
          <article class="card embedded-evaluation-card">
            <div class="embedded-resource">
              <iframe
                class="external-frame evaluation-frame"
                src="${construirUrlEmbedAvaliacao(activity.embedUrl)}"
                width="100%"
                height="900"
                style="border:0;"
                loading="lazy"
                referrerpolicy="unsafe-url"
                title="${activity.embedTitle || activity.title}"></iframe>
            </div>
            <div class="embed-fallback resource-action-row align-right">
              <a class="small-button" href="${activity.embedUrl}" target="_blank" rel="noopener">Abrir avaliação diretamente</a>
            </div>
          </article>
        ` : `
          <article class="card group-task-card">
            <p class="eyebrow">A preparar</p>
            <h3>Espaço reservado</h3>
            <p>Esta página está pronta para receber instruções, critérios, ficheiros de apoio ou formulários associados à atividade.</p>
          </article>
        `}
      </div>
    </section>
  `;
}

function setupLazyExcelViewers(root = document) {
  const frames = [...root.querySelectorAll("iframe.excel-viewer-frame[data-src]")];
  if (!frames.length) return;

  const carregarFrame = (frame) => {
    if (!frame.dataset.src) return;
    frame.src = frame.dataset.src;
    frame.removeAttribute("data-src");
  };

  if (!("IntersectionObserver" in window)) {
    frames.forEach(carregarFrame);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      carregarFrame(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "400px 0px" });

  frames.forEach((frame) => observer.observe(frame));
}

function renderResourcePage() {
  const root = document.getElementById("resource-root");
  if (!root) return;

  const resource = resources.find((item) => item.id === document.body.dataset.resource) || resources[0];
  document.title = `UFCD ${UFCD.code} | ${resource.title}`;

  if (resource.gptUrl) {
    if (!isItemVisible("assistentesGpt", resource.id)) {
      root.innerHTML = `
        <section class="section task-page-section">
          <div class="section-inner">
            <article class="card group-task-card">
              <p class="eyebrow">Recurso</p>
              <h1>${resource.displayTitle || resource.title}</h1>
              <p>Este assistente ainda não está disponível.</p>
            </article>
          </div>
        </section>
      `;
      return;
    }

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1 class="resource-title-with-icon">
              <a href="${resource.gptUrl}" target="_blank" rel="noopener noreferrer">
                ${resource.menuIcon ? `<img src="${getBasePath()}${resource.menuIcon}" alt="" aria-hidden="true">` : ""}
                <span>${resource.displayTitle || resource.title}</span>
              </a>
            </h1>
            <p class="lead">${resource.intro}</p>
          </div>

          <div class="resource-list">
            <article class="card group-task-card">
              <p class="eyebrow">Como utilizar</p>
              <h3>Antes de abrir o assistente</h3>
              <ul class="clean-list task-prompt-list">
                <li>Identifica o conteúdo ou atividade em que estás a trabalhar.</li>
                <li>Escreve a tua dúvida de forma clara e concreta.</li>
                <li>Indica o que já tentaste fazer ou compreender.</li>
                <li>Pede explicações passo a passo sempre que precisares.</li>
              </ul>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Boas práticas</p>
              <h3>Usa como apoio à aprendizagem</h3>
              <p>O assistente deve ajudar a pensar, rever e melhorar respostas. Não deve substituir o teu trabalho: usa as sugestões para compreender melhor os procedimentos e depois constrói a tua própria resposta.</p>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Acesso</p>
              <h3>Abrir assistente</h3>
              <p>O assistente abre numa nova aba do navegador. Poderá ser necessário iniciar sessão no ChatGPT.</p>
              <div class="embed-fallback resource-action-row align-right">
                <a class="small-button" href="${resource.gptUrl}" target="_blank" rel="noopener noreferrer">Abrir assistente</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.pdfUrl) {
    const pdfUrl = `${getBasePath()}${resource.pdfUrl}`;
    root.innerHTML = `
      <section class="pdf-reader-shell" aria-label="Leitor do manual em PDF">
        <iframe class="pdf-frame native-pdf-frame" src="${pdfUrl}#view=FitH" title="Manual de Formação da UFCD 0778"></iframe>
      </section>
    `;
    return;
  }

  if (resource.downloadFiles || resource.videos) {
    const visibleVideos = (resource.videos || []).filter((video) => isItemVisible("ficheirosExcel", video.id));
    const visibleFiles = (resource.downloadFiles || []).filter((file) => isItemVisible("ficheirosExcel", file.id));
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1>${resource.displayTitle || resource.title}</h1>
            <p class="lead">${resource.intro}</p>
          </div>

          ${visibleVideos.length ? `
            <div class="video-resource-list">
              ${visibleVideos.map((video) => {
                const videoUrl = `${getBasePath()}${video.path}`;
                return `
                  <article class="card video-resource-card">
                    <div>
                      <p class="eyebrow">Vídeo</p>
                      <h3>${video.title}</h3>
                      <p>${video.description}</p>
                    </div>
                    <video class="resource-video" controls preload="metadata">
                      <source src="${videoUrl}" type="video/mp4">
                      O teu navegador não permite reproduzir este vídeo.
                    </video>
                  </article>
                `;
              }).join("")}
            </div>
          ` : ""}

          <div class="download-resource-list">
            ${visibleFiles.length ? visibleFiles.map((file, index) => {
              const fileUrl = `${getBasePath()}${file.path}`;
              const publicFileUrl = new URL(file.path, "https://ufcd0778.netlify.app/").href;
              const activeCell = `'${file.firstSheet}'!A1`;
              const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(publicFileUrl)}&ActiveCell=${encodeURIComponent(activeCell)}`;
              return `
                <article class="card download-resource-card">
                  <span class="download-resource-number">${index + 1}</span>
                  <div>
                    <h3>${file.title}</h3>
                    <p>${file.description}</p>
                  </div>
                  <a class="small-button" href="${fileUrl}" download>Descarregar ficheiro</a>
                  <div class="excel-viewer-wrap">
                    <iframe
                      class="excel-viewer-frame"
                      data-src="${viewerUrl}"
                      title="Visualização — ${file.title}"
                      loading="lazy"
                      referrerpolicy="no-referrer"></iframe>
                  </div>
                </article>
              `;
            }).join("") : `
              <article class="card group-task-card">
                <p class="eyebrow">Ficheiros</p>
                <h3>A disponibilizar</h3>
                <p>Os ficheiros serão disponibilizados gradualmente pelo formador.</p>
              </article>
            `}
          </div>
        </div>
      </section>
    `;
    setupLazyExcelViewers(root);
    return;
  }

  if (resource.externalUrl) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1>${resource.displayTitle || resource.title}</h1>
            <p class="lead">${resource.intro}</p>
          </div>
          <article class="card group-task-card external-resource-card">
            <p class="eyebrow">Recurso incorporado</p>
            <h3>Ajuda oficial do Excel</h3>
            <p>A Microsoft pode bloquear a visualização dentro da página por política de segurança. Se a área abaixo não carregar, abre o recurso diretamente.</p>
            <div class="embed-fallback resource-action-row align-right">
              <a class="small-button" href="${resource.externalUrl}" target="_blank" rel="noopener">Abrir suporte Microsoft Excel</a>
            </div>
          </article>
        </div>
      </section>
      <section class="embedded-page-shell resource-full-page-shell" aria-label="${resource.title}">
        <iframe class="external-frame full-page-frame resource-full-page-frame" src="${resource.externalUrl}" title="${resource.title}" loading="lazy"></iframe>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
      <div class="section-inner">
        <div class="section-heading task-page-heading">
          <p class="eyebrow">Recursos</p>
          <h1>${resource.displayTitle || resource.title}</h1>
          <p class="lead">${resource.intro}</p>
        </div>
        <article class="card group-task-card">
          <p class="eyebrow">A preparar</p>
          <h3>Espaço reservado</h3>
          <p>Este espaço ficará ligado aos materiais de apoio reais da UFCD 0778.</p>
        </article>
      </div>
    </section>
  `;
}

function renderStandaloneTeamsControlPage() {
  const root = document.getElementById("teams-control-root");
  if (!root) return;

  document.title = `UFCD ${UFCD.code} | Partilha de ecrã`;
  renderTeamsControl(root, { compact: false, publicView: false });
}

async function inicializarVisibilidadeRemotaDoSite(options = {}) {
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite({ force: options.force });

  if (options.render !== false) {
    atualizarSuperficiesVisiveisDoSite();
  }

  const teamsRoot = document.getElementById("activity-root") || document.getElementById("teams-control-root");
  if (teamsRoot) {
    atualizarControlosVisibilidadeDoSite(teamsRoot);
  }

  if (!visibilidadeRemotaOk && options.retry !== false) {
    window.setTimeout(() => {
      void inicializarVisibilidadeRemotaDoSite({ force: true, retry: false });
    }, 15000);
  }
}

function inicializarSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    carregarVisibilidadeDoSite();
    carregarLinksDoSite();
  } else {
    carregarUltimaVisibilidadeRemotaDoSite();
  }

  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  renderPortfolioMenuLink();
  setupMenu();
  setupFloatingActions();
  renderHomeCards();
  renderConteudosIndex();
  atualizarDisponibilidadeDaPaginaInicial();
  renderTopicPage();
  renderActivityPage();
  renderResourcePage();
  renderStandaloneTeamsControlPage();
  setupModals();
  manterMenuAtivoAberto();
  abrirMenuPeloHashDoIndex();

  if (APPS_SCRIPT_WEB_APP_URL) {
    void inicializarVisibilidadeRemotaDoSite();
  }
}
inicializarSite();









