/* ============================================================
   EM course training · Code & Game 3 [2198] · PORTUGUESE (Brazil)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'cg3';
COURSE.code = '2198';
COURSE.title = 'Code & Game 3';
COURSE.color = '#2563EB';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2198]',
  title: 'Code & Game <span class="hl">3</span>',
  lead: 'O estúdio digital, para alunos de 12–17 anos: como diretores criativos, eles orquestram a IA para construir e refinar um jogo para o navegador. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice vai sendo atualizado.</b> Com o feedback de alunos e tutores, as aulas estão sempre sendo melhoradas. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

COURSE.modules = [
  { id:'m1', n:1, e:'💻', color:'#2563EB', title:'O conteúdo do curso',
    desc:'A história, as 4 primeiras aulas e projetos reais publicados por alunos.',
    obj:'Prepare-se para dar as primeiras aulas do Code & Game 3, em que os alunos atuam como diretores criativos que orquestram a IA para construir e refinar um jogo para o navegador.',
    offer:[['🏢','Conhecer a história do estúdio digital e como o curso é organizado.'],['📖','Saber o que acontece em cada uma das 4 primeiras aulas.'],['⚡','Ver jogos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🏢', title:'O curso', blocks:[
        { t:'meta', items:[['🧑','Idade','12–17 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas'],['🌐','Ferramenta','HTML · CSS · JS + IA']] },
        { t:'p', html:'Os alunos entram no estúdio digital no papel de <b>desenvolvedor júnior</b>. Cada módulo é um novo briefing real: construir um jogo, um site interativo, um serviço digital.' },
        { t:'ba', before:['O curso anterior de Python','Indutivo: sintaxe e teoria → projeto do zero. A IA aparecia só de vez em quando.'], after:['Code & Game 3','Dedutivo: um protótipo que funciona, mas não é ideal → exploração → refinamento. <b>A IA é uma ferramenta central de aprendizagem, e a alfabetização em IA e em prompts é um resultado educacional explícito.</b>'] },
        { t:'callout', kind:'good', e:'🎯', html:'<b>Teste de ambição:</b> nesta idade, o escopo e a qualidade planejados <b>não são possíveis sem IA</b> no tempo disponível. Isso é o correto aqui — mas a regra continua valendo: <b>a IA propõe, o autor decide.</b>' },
        { t:'callout', kind:'warn', e:'⚠️', html:'<b>Esta NÃO é uma aula de sintaxe de HTML/CSS/JS.</b> Os alunos não escrevem grandes quantidades de código. Erros e gerações que falham são parte normal do desenvolvimento.' }
      ]},
      { id:'les', e:'📖', title:'As 4 primeiras aulas', blocks:[
        { t:'p', html:'O Módulo 1 vai do primeiro protótipo gerado com IA até um jogo com lógica própria, publicado e avaliado pelos colegas. Abra cada aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'⚡', h:'Aula 1 — Primeiro protótipo de jogo', p:'Primeira aula do programa. Os alunos usam uma IA convencional para gerar um jogo para o navegador que funciona, a partir de um prompt preparado, e o rodam dentro do Kodland Sparks.',
            acc:[['📚','O que você precisa saber','<ul><li>A diferença entre a <b>IA convencional</b> (gera o código inicial) e o <b>AI Mentor</b> (orienta com perguntas e nunca escreve o código completo).</li><li>A estrutura de um bom prompt: objetivo, funções, limites, formato da resposta.</li><li>Existe um template de reserva se a geração falhar.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Erros e gerações que falham são <b>normais</b>.</li><li>A personalização segura se limita a tema, título, personagem ou contexto visual — <b>não aos requisitos técnicos</b>.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O jogo roda na prévia sem erros críticos, e o personagem responde aos controles.</li><li>O aluno diferencia os 2 tipos de IA e cita pelo menos uma regra de segurança para usá-los.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conduza o caminho mínimo: Kodland Sparks → funções das duas IAs → bom prompt → geração → copiar o código → rodar.</li><li>Use o template de reserva <b>sem dramatizar</b> se algo falhar.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Nunca compartilhar dados pessoais ou senhas com o tutor.</li><li>Revisar sempre o resultado gerado pela IA antes de aceitar.</li><li><b>Lição de casa:</b> mudar um valor simples no código e saber desfazer a mudança se o jogo parar de funcionar.</li></ul>']] },
          { tab:'M1A2', e:'🗂', h:'Aula 2 — Como o jogo é montado', p:'O protótipo de um arquivo só é dividido em <code>index.html</code>, <code>style.css</code> e <code>script.js</code>; o parâmetro de velocidade do personagem é localizado e ajustado.',
            acc:[['📚','O que você precisa saber','<ul><li>O que cada arquivo contém: estrutura, estilos, lógica.</li><li>O papel duplo da IA aqui: a <b>IA convencional reestrutura</b> o projeto, o <b>AI Mentor</b> ajuda a entender o código e a achar o bloco certo.</li><li>O ciclo <b>prever → modificar → conferir → concluir</b>.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>A IA convencional <b>não</b> pode mudar a aparência nem a lógica do jogo, nem acrescentar dependências externas.</li><li>Não aprofunde a teoria de HTML/CSS/JS nem eventos complexos.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O projeto termina dividido em 3 arquivos e continua funcionando.</li><li>O aluno localiza o parâmetro de velocidade em <code>script.js</code>, escolhe o valor experimentando e explica como ele influencia o movimento.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Deixe o aluno escolher o valor final da velocidade — <b>não imponha um “correto”</b>.</li><li>Confira se o jogo continua funcionando depois de cada mudança importante.</li><li>Diante de um erro, <b>compare a linha modificada com a original</b> antes de dar a resposta.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Confira se o CSS e o JavaScript estão bem ligados depois da divisão.</li><li>Estrutura esperada: <code>index.html</code> (estrutura/links), <code>style.css</code> (design), <code>script.js</code> (movimento e lógica).</li></ul>']] },
          { tab:'M1A3', e:'🎨', h:'Aula 3 — Personalização visual do jogo', p:'Os gráficos padrão (personagem, fundo) são substituídos por recursos próprios do aluno gerados com IA, sem reescrever o código base.',
            acc:[['📚','O que você precisa saber','<ul><li>Como estruturar um prompt completo: <b>objetivo + contexto suficiente + mudanças permitidas + restrições + pedido de explicação</b>.</li><li>Como ajudar a localizar onde um recurso visual se conecta no código sem analisar o arquivo inteiro.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Cuidado com a IA fazendo uma <b>reescrita completa indesejada</b> — compare sempre as versões antes/depois.</li><li>Use o caminho de reserva <b>só depois de 2 tentativas reais</b> e uma dica de diagnóstico.</li><li>Reforce a proibição de usar fotos ou dados pessoais como recursos.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O novo personagem e/ou fundo está integrado e funcionando, seguindo o ciclo <b>um recurso → uma execução → uma observação</b>.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li><b>Não corrija o pedido inteiro à IA pelo aluno</b> — faça uma pergunta pontual sobre o que está faltando.</li><li>Oriente para <b>uma hipótese testável por vez</b>, nunca várias mudanças simultâneas.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Organize uma revisão funcional com uma lista de verificação antes de seguir.</li><li>Diante de um erro, volte à última versão que funcionava e encontre a <b>primeira diferença</b> — não corrija tudo de uma vez.</li></ul>']] },
          { tab:'M1A4', e:'🧠', h:'Aula 4 — Lógica do jogo e feedback entre colegas', p:'Última aula do módulo. Entra uma mecânica de lógica própria (evento → condição → reação) com a ajuda <b>exclusiva do AI Mentor</b>, o projeto é publicado e os alunos dão feedback estruturado aos colegas.',
            acc:[['📚','O que você precisa saber','<ul><li>O modelo <b>evento → condição → reação</b>.</li><li>Como o aluno formula a pergunta ao AI Mentor: <b>objetivo + comportamento atual + pedido de dica</b> — o Mentor não entrega o código final.</li><li>A estrutura do feedback em 3 campos (impressão geral, ponto forte, melhoria), com limite de caracteres.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li><b>Uma mecânica estável vale mais que duas incompletas.</b></li><li>Se o projeto já estava instável no início da aula, vá direto para o template de reserva.</li><li>Reforce as regras de reações respeitosas e de seguir os colegas.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>A nova mecânica funciona de forma estável e está publicada.</li><li>O aluno dá e recebe feedback específico em pelo menos <b>2 projetos de colegas</b>.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mantenha o ciclo <b>mudar → rodar → comparar → diagnosticar → corrigir</b> durante toda a prática.</li><li>Feche lembrando o caminho do módulo (protótipo → entender como funciona → personalização visual → lógica → lançamento) e desperte a curiosidade pelo Módulo 2.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Esta aula usa <b>exclusivamente o AI Mentor</b>, não a IA convencional.</li><li>Os campos de feedback têm limite de <b>180 caracteres cada</b>.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: história, objetivo, tempos de cada cartão e, nas primeiras aulas, um vídeo de briefing. <b>Leia todas as Teacher Notes e assista ao vídeo antes da aula.</b>' }
      ]},
      { id:'proj', e:'⚡', title:'Projetos reais de alunos', blocks:[
        { t:'p', html:'É assim que ficam os jogos do Code & Game 3 depois de publicados no Kodland Sparks. Abra-os para jogar na plataforma:' },
        { t:'projects', items:[
          { href:'https://portfolio.kodland.org/C.Bermudez/cmtgq8unc1c8gny2tc2gbmd0p', img:'https://portfolio.kodland.org/api/projects/cmtgq8unc1c8gny2tc2gbmd0p/file?variant=thumb', e:'💠', color:'#2563EB', tag:'Web App', fw:true, title:'Neon Collector', by:'C.Bermudez', desc:'Um jogo neon para o navegador, publicado com <b>Request feedback</b> ativado para receber a opinião da comunidade.' },
          { href:'https://portfolio.kodland.org/teststudentilfi.ilfi/cmtjkrt8m0fqtpa2t90sq4u9i', img:'https://portfolio.kodland.org/api/projects/cmtjkrt8m0fqtpa2t90sq4u9i/file?variant=thumb', e:'🧪', color:'#7C3AED', tag:'Web App', title:'Escapa del laboratorio de neón', by:'teststudentilfi.ilfi', desc:'Um jogo de fuga de um laboratório neon — mais de 160 visualizações no Kodland Sparks.' }
        ]},
        { t:'callout', kind:'tip', e:'💬', html:'Repare na etiqueta <b>Feedback wanted</b> no primeiro projeto: o aluno ativou <b>Request feedback</b> ao publicar. Na Aula 4, os alunos usam justamente esse feedback em 3 campos com os colegas.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as quatro aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2198', e:'📘', title:'Abrir o curso no Backoffice', small:'[2198] Code & Game 3 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Um início forte, publicar no Kodland Sparks em todas as aulas e os problemas técnicos mais comuns.',
    obj:'Saiba o que garante o sucesso das aulas do Code & Game 3: um início forte, uma publicação correta no Kodland Sparks em <b>todas</b> as aulas e as soluções para os problemas técnicos mais comuns.',
    needs:['sparksPublish'],
    offer:[['🚀','Fazer da A1 e da A2 um início forte, com um resultado rápido e visível.'],['📤','Garantir que todos publiquem no Sparks em todas as aulas — e conferir.'],['🌍','Explicar aos alunos por que o Sparks vale a pena.'],['🏁','Fechar o Módulo 1 mostrando conquistas e despertando o interesse pelo Módulo 2.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 4 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Code & Game. Abra cada um:' },
        { t:'acc', items:[
          ['🚀','A1–A2: um início forte','<p>As duas primeiras aulas decidem se o aluno quer voltar. Os objetivos são <b>conhecer o grupo</b> e chegar a um <b>resultado rápido e visível</b>.</p><ul><li>No quebra-gelo, pergunte que jogos e que ideias cada aluno traz — adolescentes se engajam quando o projeto parece deles.</li><li>Na A1, todos precisam ver o <b>jogo gerado rodando</b> na prévia; se a geração falhar, use o template de reserva sem dramatizar.</li><li>Garanta que <b>cada aluno termine a aula com algo funcionando</b>.</li></ul>'],
          ['📤','Publicar no Sparks em todas as aulas','<p>Desde a <b>Aula 1</b>, todos publicam o jogo no Kodland Sparks em <b>todas as aulas</b>, e você confere a publicação.</p><ul><li>Visibilidade <b>Public</b> (nunca <b>Only me</b>).</li><li>O link enviado no cartão é o do <b>projeto publicado</b>, não o do Studio.</li><li>Reserve tempo no fim da aula — publicar não pode ficar para depois.</li></ul>'],
          ['🌍','Os benefícios do Sparks','<p>Explique aos alunos por que publicar vale a pena:</p><ul><li><b>Comunidade:</b> o jogo aparece no Feed e no portfólio público — um portfólio real de desenvolvedor.</li><li><b>Playtest:</b> outros jogadores testam o jogo de verdade.</li><li><b>Feedback:</b> dos jogadores (com <b>Request feedback</b>) e da IA, que destaca pontos fortes — e ainda rende cristais.</li></ul>'],
          ['🏁','Última aula do M1: conquistas e gancho para o M2','<p>Na Aula 4, mostre o que os alunos conquistaram — do protótipo gerado com IA a um jogo com lógica própria, publicado e avaliado — e <b>desperte o interesse pelo Módulo 2</b>.</p><ul><li>Peça que cada aluno apresente a mecânica que criou e o feedback que recebeu.</li><li>Compare a primeira versão com a última no Sparks.</li><li>Termine com uma prévia curta e empolgante do próximo briefing.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks em todas as aulas', blocks:[
        { t:'p', html:'Publicar parece simples, mas é aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed. Estes são os passos que todo aluno faz no fim de cada aula:' },
        { t:'steps', items:[
          ['Dar um nome ao projeto','No Studio, o aluno preenche o campo <b>Project title</b>. Um projeto sem nome é difícil de encontrar.'],
          ['Clicar em Publish','O botão abre o formulário de publicação: título, descrição, seção, reações e aparência.'],
          ['Escolher Public','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais vê, nem você.'],
          ['Ativar Request feedback','Assim outros alunos podem deixar um feedback estruturado (impressão geral, pontos fortes e o que melhorar). Funciona só em projetos públicos.'],
          ['Copiar o link e enviar no cartão','O link é o do <b>projeto publicado</b>. Publicar no Sparks e enviar o link na plataforma da Kodland são <b>dois passos diferentes</b>.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> (por exemplo, <b>Web App</b>) ou busque pelo apelido.</p>'],
          ['💥','A geração da IA falhou ou o jogo não roda','<p>É normal. Depois de uma tentativa real, use o <b>template de reserva</b> sem dramatizar — o importante é ter um jogo funcionando para publicar.</p>'],
          ['📄','Depois da divisão em 3 arquivos, o jogo perdeu o estilo ou parou','<p>Confira se o <code>index.html</code> liga corretamente o <code>style.css</code> e o <code>script.js</code>.</p>'],
          ['🔁','A IA reescreveu o jogo inteiro','<p>Compare as versões antes e depois, volte à última versão que funcionava e procure a <b>primeira diferença</b>. Peça à IA mudanças limitadas, com restrições claras.</p>'],
          ['🔐','Dados pessoais','<p>Nunca fotos pessoais como recurso, nem senhas ou dados compartilhados com você ou com a IA.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e assisti ao vídeo de briefing.','Testei o prompt preparado e sei onde está o template de reserva.','Sei qual IA a aula usa: a convencional, o AI Mentor ou as duas.'] },
          { h:'🎬 Durante a aula', items:['Mantenho o ciclo mudar → rodar → comparar → diagnosticar → corrigir.','Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram o jogo como <b>Public</b>, com <b>Request feedback</b> ativado.','Todos enviaram o link do projeto publicado no cartão da aula.','Abri pelo menos alguns links para conferir que funcionam.'] }
        ]}
      ]}
    ]}
];

COURSE.quiz = {
  m1:[
    { q:'Em que papel os alunos entram no Code & Game 3?',
      o:['Como desenvolvedores júnior num estúdio digital, recebendo briefings reais.','Como exploradores de um laboratório secreto.','Como animadores de uma agência de vídeo.'],
      a:0, e:'Cada módulo é um novo briefing real: um jogo, um site interativo, um serviço digital.' },
    { q:'Qual é a diferença entre as duas IAs do curso?',
      o:['Não há diferença: as duas escrevem o código completo.','A IA convencional gera o código inicial; o AI Mentor orienta com perguntas e nunca escreve o código completo.','O AI Mentor gera imagens e a IA convencional corrige erros.'],
      a:1, e:'A IA convencional gera; o AI Mentor ensina com perguntas e dicas, sem entregar o código final.' },
    { ctx:'Na Aula 2, depois de dividir o protótipo em 3 arquivos, o jogo perdeu o estilo.',
      q:'O que você confere primeiro?',
      o:['Se o index.html liga corretamente o style.css e o script.js.','Se o aluno usou o AI Mentor.','Se o personagem tem fundo transparente.'],
      a:0, e:'Depois da divisão, a primeira coisa é conferir as ligações do index.html com o CSS e o JavaScript.' },
    { q:'Na Aula 3, como o aluno troca os gráficos do jogo?',
      o:['Pedindo à IA que reescreva o jogo inteiro com o novo estilo.','Com um prompt completo e o ciclo um recurso → uma execução → uma observação, comparando antes/depois.','Desenhando tudo à mão no código.'],
      a:1, e:'Um recurso por vez, com restrições claras, comparando as versões para evitar reescritas indesejadas.' },
    { q:'O que caracteriza a Aula 4?',
      o:['O uso exclusivo do AI Mentor para criar uma mecânica própria, a publicação e o feedback em 3 campos com os colegas.','Uma prova de sintaxe de JavaScript.','Começar um jogo novo do zero.'],
      a:0, e:'Evento → condição → reação com o AI Mentor, publicação e feedback a pelo menos 2 colegas (180 caracteres por campo).' }
  ],
  m2:[
    { q:'Em quais aulas os alunos publicam o jogo no Kodland Sparks?',
      o:['Só na última aula de cada módulo.','Em todas as aulas, desde a Aula 1.','Só quando o jogo está perfeito.'],
      a:1, e:'Desde a Aula 1, em todas as aulas — e você confere se a publicação está correta.' },
    { ctx:'Na Aula 1 a geração da IA de um aluno falhou duas vezes, e faltam 15 minutos para o fim.',
      q:'Qual é a melhor decisão?',
      o:['Usar o template de reserva sem dramatizar, para que ele tenha um jogo funcionando e publique.','Deixar a publicação para a próxima aula.','Escrever o código para ele.'],
      a:0, e:'O template de reserva existe para isso: o aluno termina, publica e não fica para trás.' },
    { ctx:'O link de um aluno não abre para você, e no portfólio dele o projeto aparece como “Private project”.',
      q:'O que ele deve fazer?',
      o:['My projects → abrir o projeto → Edit → Public → Publish.','Criar um projeto novo.','Mandar o código pelo chat.'],
      a:0, e:'O projeto foi salvo como Only me. Com Edit → Public, o mesmo link passa a abrir para todos.' },
    { q:'Qual destas NÃO é uma vantagem do Kodland Sparks que você deve explicar aos alunos?',
      o:['Outros jogadores testam o jogo e deixam reações e feedback.','A IA destaca pontos fortes do projeto, e publicar rende cristais.','O Sparks corrige o código do aluno automaticamente.'],
      a:2, e:'Comunidade, playtest e feedback de jogadores e da IA são os benefícios. O Sparks não corrige o projeto pelo aluno.' },
    { q:'O que deve acontecer na última aula do Módulo 1?',
      o:['Uma prova escrita sobre HTML e CSS.','Mostrar o que os alunos conquistaram e despertar o interesse pelo Módulo 2.','Começar o projeto do Módulo 2 para ganhar tempo.'],
      a:1, e:'Celebre o caminho do protótipo ao jogo publicado e termine com uma prévia empolgante do próximo briefing.' }
  ]
};

COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e assista ao vídeo de briefing.'],
    ['📤', '<b>Em todas as aulas:</b> todos publicam no Sparks como Public e enviam o link no cartão.'],
    ['🤖', '<b>A IA propõe, o autor decide:</b> o AI Mentor orienta, não entrega o código.'],
    ['🚀', '<b>A1–A2:</b> conheça o grupo e chegue rápido a um resultado visível.']
  ]
};
