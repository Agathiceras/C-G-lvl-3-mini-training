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
  lead: 'Para alunos de 13–17 anos: de um protótipo que já funciona a um produto próprio, com jogo, projeto web, personagem de IA, jogo de detetive, serviço de recomendações e gerador de mundos. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

COURSE.modules = [
  { id:'m1', n:1, e:'💻', color:'#2563EB', title:'O conteúdo do curso',
    desc:'Os dados gerais do curso, o que o aluno conquista, as 4 primeiras aulas e jogos reais publicados por alunos.',
    obj:'Prepare-se para dar as primeiras aulas do Code & Game 3. Nelas, alunos de 13–17 anos criam, com o auxílio da IA, o protótipo de um jogo para navegador e o transformam, aula a aula, em um projeto autoral publicado no Kodland Sparks.',
    offer:[['🏢','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece em cada uma das 4 primeiras aulas.'],['⚡','Ver jogos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🏢', title:'O curso', blocks:[
        { t:'meta', items:[['🧑','Idade','13–17 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas · 7 módulos'],['🌐','Ferramentas','HTML · CSS · JavaScript · Python']] },
        { t:'trio', items:[
          ['🧩','Do protótipo à solução própria','Nos seis primeiros módulos, o aluno começa com um protótipo: estuda o código, muda dados e funções e confere o resultado. No projeto final, ele mesmo escolhe a ideia, a base e o escopo do MVP.'],
          ['🤖','A IA ajuda, o aluno decide','O tutor de IA explica o código, faz perguntas e ajuda a encontrar erros. O aluno avalia as sugestões, adapta-as e consegue mostrar a própria contribuição. Dados pessoais e chaves de acesso não entram nos prompts.'],
          ['🌐','O portfólio cresce ao longo do curso','Cada módulo termina com um projeto publicado. No final, o aluno apresenta o projeto autoral e explica de onde partiu e o que desenvolveu de forma autônoma.']
        ]},
        { t:'callout', kind:'warn', e:'⚠️', html:'<b>Esta não é uma aula de sintaxe.</b> Os alunos não escrevem grandes quantidades de código: encontram o bloco certo em HTML, CSS, JavaScript ou Python, fazem a alteração e explicam como ela afeta o produto. Erros e gerações que falham são parte normal do desenvolvimento.' }
      ]},
      { id:'goals', e:'🎓', title:'Qual é o resultado para o aluno', blocks:[
        { t:'p', html:'Ao final do curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Publica projetos','Sete trabalhos diferentes: um jogo de navegador, um projeto web interativo, um personagem de IA em Python, um jogo de detetive, um serviço de recomendações e um gerador de mundos 2D. Conclui o portfólio com um projeto autoral.'],
          ['⌨️','Entende o código','Encontra o bloco certo em HTML, CSS, JavaScript ou Python, faz a alteração e explica como isso afeta o produto.'],
          ['🚀','Leva até o lançamento','Escolhe uma ideia, monta um MVP funcional, testa, melhora e apresenta para a turma.'],
          ['💡','Criatividade','O aluno escolhe o tema, a história, os materiais e as regras. A partir de uma base pronta, surge aos poucos um projeto com as decisões dele.'],
          ['🤝','Colaboração e comunicação','Os colegas testam os projetos uns dos outros e dão feedback específico; o autor decide qual ajuste fazer primeiro. Na apresentação, o aluno demonstra o produto, explica as partes principais do código e responde a perguntas sobre as escolhas dele.'],
          ['🧠','Pensamento crítico','Compara opções, busca as causas dos erros e testa as sugestões da IA no projeto em funcionamento.']
        ]}
      ]},
      { id:'les', e:'📖', title:'As 4 primeiras aulas', blocks:[
        { t:'p', html:'O Módulo 1, o jogo arcade «No Limite», leva o aluno do primeiro protótipo, gerado com IA, a um jogo com lógica própria, publicado. Abra cada aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'⚡', h:'Aula 1 — Primeiro protótipo de jogo', p:'Primeira aula do curso. Os alunos se conhecem, escolhem o tema de um jogo, criam o protótipo com o assistente de IA da Kodland, rodam no Kodland Sparks, testam e publicam. O resultado principal é um jogo que funciona e fica salvo para a próxima aula.',
            acc:[['📚','O que você precisa saber','<ul><li>Um pedido à IA se chama <b>prompt</b>. Um bom prompt diz o <b>resultado esperado</b>, as <b>funções obrigatórias</b>, as <b>restrições técnicas</b> e o <b>formato da resposta</b>. Longo não significa melhor.</li><li>O <b>assistente de IA da Kodland</b> cria o código inicial a partir do pedido do aluno. O <b>AI Mentor</b>, dentro do projeto, ajuda a entender o código e a encontrar a causa de um problema.</li><li>O caminho do aluno: pedido → código HTML completo → colar no editor do projeto no Sparks → rodar no <b>live preview</b> → salvar em um slot do Studio → publicar.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O projeto está salvo no slot escolhido do Sparks e roda no live preview.</li><li>Na tela aparecem o campo do jogo, o personagem e os objetos, e o controle responde às ações do aluno.</li><li>A ação principal do jogo funciona e o aluno consegue mostrá-la (por exemplo, a mudança da pontuação).</li><li>O aluno testou o jogo, escolheu as configurações de publicação e consegue mostrar o resultado.</li><li>O aluno compreende a diferença entre o assistente que cria o código inicial e o AI Mentor.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>No início, deixe os alunos imaginarem que produtos dá para criar e reúna os interesses do grupo; depois vá logo para o jogo.</li><li>Na prática, ajude a formular o pedido e a conferir a resposta da IA por sinais concretos: <b>um arquivo HTML completo</b>, os elementos de jogo pedidos e nenhuma dependência externa.</li><li>Quando não funciona, peça que o aluno diga o <b>esperado e o que aconteceu</b>. Sugira uma verificação por vez e espere a nova execução.</li><li>Acesse a tela do aluno após algumas tentativas dele; se o ajuste demorar, utilize o projeto de reserva.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Se a IA mandar vários arquivos ou um código incompleto, ajude a reformular o pedido para <b>um único arquivo HTML autônomo</b>. Sem progresso, use o projeto preparado.</li><li>Tela vazia: confira primeiro se o código foi copiado inteiro. Sem reação às teclas: confira se a área do jogo está ativa (clicar nela).</li><li>Lembre sempre: <b>senhas, endereços, telefones, outros dados pessoais e chaves de API não entram nos pedidos à IA</b>.</li><li>Não exija visibilidade pública. Confira se você consegue acessar o resultado; se o link privado não abrir, peça para o aluno fazer o compartilhamento de tela para mostrar a execução.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Antes da aula, confira o login no Kodland Sparks, o assistente de IA e o modo de projeto <b>WEB_JS</b>, e percorra o caminho do aluno de ponta a ponta.</li><li>Tenha pronto um exemplo funcionando e um <b>código de reserva</b>, para usar se a geração ou a cópia demorarem demais.</li><li>Tarefa de casa: reabrir o projeto, alterar um valor simples (texto ou número), comparar com o resultado esperado, salvar e publicar a versão que está funcionando. Se quebrar, voltar ao valor anterior.</li></ul>']] },
          { tab:'M1A2', e:'🗂', h:'Aula 2 — Como o jogo é montado', p:'Os alunos passam do protótipo pronto ao estudo de como ele é feito: dividem o projeto em HTML, CSS e JavaScript, acham o bloco de movimento e ajustam a velocidade do personagem.',
            acc:[['📚','O que você precisa saber','<ul><li>O projeto em um arquivo só é dividido em <code>index.html</code>, <code>style.css</code> e <code>script.js</code>, e o jogo continua funcionando.</li><li>Os dois papéis da IA: a <b>IA comum reestrutura</b> o projeto; o <b>AI Mentor</b> ajuda a entender o código e a achar o bloco de movimento.</li><li>O ciclo de pesquisa: <b>prever → mudar → conferir → concluir</b>.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O projeto está dividido em três arquivos e o jogo funciona depois da divisão.</li><li>O aluno encontra no <code>script.js</code> o parâmetro de velocidade e escolhe o valor experimentando.</li><li>Mostra o trecho alterado e explica como ele influencia o movimento do personagem.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Comece com a pergunta: «O que é mais difícil de manter: um projeto em um arquivo enorme ou um projeto dividido em partes claras?».</li><li>Na prática, ajude a conferir se o jogo funciona depois de cada mudança importante. Oriente com perguntas, mas <b>deixe a escolha do valor final da velocidade com o aluno</b>.</li><li>Não aprofunde a teoria de HTML, CSS e JavaScript nem física complexa: os alunos não escrevem a lógica de movimento do zero.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>A IA comum <b>não</b> deve mudar a aparência, a lógica do jogo nem acrescentar dependências externas.</li><li>Se o aluno mudou o parâmetro errado, use as perguntas-guia do AI Mentor e o bloco de referência destacado.</li><li>Velocidade grande ou pequena demais faz parte do experimento: peça para comparar vários valores.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Confira se o CSS e o JavaScript estão ligados corretamente e se cada trecho de código está no arquivo certo.</li><li>Se der erro, compare a linha alterada com a original e volte ao último valor que funcionava.</li><li>Lição de casa: testar três valores de velocidade e ficar com o mais adequado.</li></ul>']] },
          { tab:'M1A3', e:'🎨', h:'Aula 3 — A aparência do jogo', p:'Os alunos continuam com o jogo individual e, com o AI Mentor, adaptam o código com segurança para criar uma aparência própria: pelo menos dois recursos gráficos seus, mantendo o controle, as regras e o funcionamento.',
            acc:[['📚','O que você precisa saber','<ul><li>Não há um código inicial único: a forma de ligar as imagens depende de como o projeto do aluno foi montado (HTML, CSS, JavaScript, Canvas ou um sistema de recursos que ele já tenha).</li><li>O ciclo seguro: <b>conferir → salvar → limitar a tarefa → comparar → rodar → aceitar ou refinar</b>.</li><li>No pedido à IA: <b>objetivo, contexto suficiente</b> e a proibição de mudar a mecânica, o controle e a estrutura sem necessidade.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O jogo individual roda depois de adaptar o código.</li><li>O controle e a mecânica principal continuam iguais.</li><li>Pelo menos dois recursos gráficos próprios estão ligados e aparecem.</li><li>O aluno mostra uma mudança e explica como conferiu o resultado.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Faça um check-in curto, organize a mostra das melhorias de casa e destaque progressos concretos.</li><li>Mostre como a mesma mecânica pode ter aparências diferentes e ajude a escolher o que trocar.</li><li>Ajude a localizar erros, a conferir caminhos, nomes e tamanhos dos recursos e mantenha a regra <b>«um recurso → uma execução»</b>.</li><li>Depois de duas tentativas sensatas e de uma dica de diagnóstico, ofereça o projeto de reserva se a adaptação exigir uma reestruturação inadequada para a aula.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Antes de qualquer mudança, o aluno roda o jogo e salva a versão que funciona.</li><li>Não aceite um jogo totalmente reescrito, bibliotecas sem suporte ou um conjunto incompleto de arquivos.</li><li>Depois de cada mudança importante, confira a execução, o controle e o ciclo principal. Se a imagem sumir: nome, caminho, formato e onde ela é ligada.</li><li>Só ferramentas aprovadas e recursos seguros: dados pessoais não entram no código, nos recursos nem nos pedidos ao AI Mentor.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Ao abrir a aula, todos rodam o projeto e dizem em que estado estão; quem tiver problema usa a <b>versão de reserva</b> do jogo.</li><li>Lição de casa: «Amplie o mundo do seu jogo», acrescentando mais um recurso visual sem mudar a mecânica principal.</li></ul>']] },
          { tab:'M1A4', e:'🧠', h:'Aula 4 — Interação entre objetos', p:'Última aula do módulo. Os alunos mudam a lógica do jogo (uma regra de interação ou um bônus simples), testam, publicam no Kodland Sparks e recebem feedback. É o dia do lançamento da primeira versão do jogo.',
            acc:[['📚','O que você precisa saber','<ul><li>O modelo central: <b>evento → condição → reação</b>.</li><li>O <b>AI Mentor</b> ajuda a achar e a entender os trechos relacionados e a diagnosticar o problema, mas <b>não escreve o código</b>.</li><li>Dois caminhos igualmente válidos: <b>mudar uma regra existente</b> (choque, pontuação, efeito do obstáculo, momento em que o objeto some ou aparece) ou <b>acrescentar um bônus simples</b> (muda a pontuação, a velocidade, o número de tentativas…).</li><li>O <b>self-feedback</b>, antes da avaliação dos colegas: impressão geral, pontos fortes e o que melhorar, até 180 caracteres cada. Avalia-se o projeto, não o autor.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>No jogo, uma regra de interação foi mudada ou um bônus simples foi acrescentado.</li><li>A mudança funciona de forma previsível, sem erros críticos.</li><li>O aluno explica a relação «evento → condição → reação» e a alteração que fez.</li><li>A versão final está publicada no Kodland Sparks, com o link e o self-feedback preparados.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Logo no início, confira que cada aluno tem um projeto que funciona; se estiver perdido ou quebrado, entregue rápido o modelo de reserva.</li><li>Na prática, guie com perguntas, ajude a reduzir a tarefa e mantenha o ciclo <b>alteração → teste → diagnóstico → correção</b>.</li><li>Seja o líder do lançamento e o mentor técnico: a decisão e a mudança do código ficam com o aluno.</li><li>No fechamento, resuma o caminho do módulo: protótipo → entender como funciona → personalização visual → lógica do jogo → lançamento.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Se a tarefa exige vários sistemas novos, reduza-a a <b>um evento e uma reação</b>. Uma mecânica que funciona vale mais que duas inacabadas.</li><li>Se o jogo parou de abrir, volte à versão salva e repita as mudanças uma por vez.</li><li>Se a reação dispara na hora errada, ajude a esclarecer o evento e a conferir a condição.</li><li>Guarde os <b>20 minutos completos</b> para a estreia dos projetos e limite o teste de cada um a 30–60 segundos.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>O self-feedback usa três campos de até <b>180 caracteres</b> cada.</li><li>O desafio de casa «Domine o Kodland Sparks» aparece em um cartão separado, depois do encerramento da aula.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: resumo, resultado-chave, o seu papel, os tempos de cada cartão e os pontos de atenção. Na primeira aula também há um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
      ]},
      { id:'proj', e:'⚡', title:'Projetos reais de alunos', blocks:[
        { t:'p', html:'É assim que ficam os jogos do Code & Game 3 depois de publicados no Kodland Sparks. Abra-os para jogar na plataforma:' },
        { t:'projects', items:[
          { href:'https://portfolio.kodland.org/C.Bermudez/cmtgq8unc1c8gny2tc2gbmd0p', img:'https://portfolio.kodland.org/api/projects/cmtgq8unc1c8gny2tc2gbmd0p/file?variant=thumb', e:'💠', color:'#2563EB', tag:'Web App', fw:true, title:'Neon Collector', by:'C.Bermudez', desc:'Um jogo neon para o navegador, publicado com <b>Request feedback</b> ativado para receber a opinião da comunidade.' },
          { href:'https://portfolio.kodland.org/teststudentilfi.ilfi/cmtjkrt8m0fqtpa2t90sq4u9i', img:'https://portfolio.kodland.org/api/projects/cmtjkrt8m0fqtpa2t90sq4u9i/file?variant=thumb', e:'🧪', color:'#7C3AED', tag:'Web App', title:'Escapa del laboratorio de neón', by:'teststudentilfi.ilfi', desc:'Um jogo de fuga de um laboratório neon — mais de 160 visualizações no Kodland Sparks.' }
        ]},
        { t:'callout', kind:'tip', e:'💬', html:'Repare na etiqueta <b>Feedback wanted</b> no primeiro projeto: o aluno ativou <b>Request feedback</b> ao publicar. Um feedback curto em três campos — impressão geral, pontos fortes e o que melhorar — faz muita diferença.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as quatro aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2198', e:'📘', title:'Abrir o curso no Backoffice', small:'[2198] Code & Game 3 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Um início forte, publicar e enviar o link em todas as aulas, e os problemas técnicos mais comuns.',
    obj:'Saiba o que garante o sucesso técnico das aulas do Code & Game 3: um início forte, a publicação no Kodland Sparks e o envio do link em <b>todas</b> as aulas, e as soluções para os problemas técnicos mais comuns.',
    needs:['sparksPublish'],
    offer:[['🚀','Fazer da A1 e da A2 um início forte, com um resultado rápido e visível.'],['📤','Garantir que todos publiquem e enviem o link em todas as aulas — e conferir.'],['🌍','Explicar aos alunos por que o Sparks vale a pena.'],['🏁','Fechar o Módulo 1 mostrando conquistas e despertando o interesse pelo Módulo 2.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 4 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Code & Game. Abra cada um:' },
        { t:'acc', items:[
          ['🚀','A1–A2: um início forte','<p>As duas primeiras aulas decidem se o aluno quer voltar. Os objetivos são <b>conhecer o grupo</b> e chegar a um <b>resultado rápido e visível</b>.</p><ul><li>Na apresentação, pergunte que jogos e que ideias cada aluno traz — adolescentes se engajam quando o projeto parece deles.</li><li>Na A1, todos precisam ver o <b>jogo rodando</b> no live preview; se a geração falhar, use o projeto de reserva sem dramatizar.</li><li>Garanta que <b>cada aluno termine a aula com algo funcionando</b>.</li></ul>'],
          ['📤','Publicar e enviar o link em todas as aulas','<p>Em <b>todas as aulas</b>, desde a Aula 1, o aluno publica o jogo no Kodland Sparks e envia o link, e você confere.</p><ul><li>O link enviado no cartão deve ser o do <b>projeto já publicado</b>.</li><li>Reserve um tempo no fim da aula: a publicação não pode ser deixada para depois.</li><li>Se o link de um aluno não abrir para você, siga o roteiro de «Quando algo dá errado» antes de mais nada.</li></ul>'],
          ['🌍','Os benefícios do Sparks','<p>Explique aos alunos por que publicar vale a pena:</p><ul><li><b>Comunidade:</b> o jogo aparece no Feed e no portfólio — um portfólio real de desenvolvedor.</li><li><b>Playtest:</b> outros jogadores testam o jogo de verdade.</li><li><b>Feedback:</b> dos jogadores (com <b>Request feedback</b>) e da IA, que destaca pontos fortes — e ainda rende cristais.</li></ul>'],
          ['🏁','Última aula do M1: conquistas e gancho para o M2','<p>Na Aula 4, mostre o que os alunos conquistaram — do protótipo gerado com IA a um jogo com lógica própria, publicado e avaliado — e <b>desperte o interesse pelo Módulo 2</b>.</p><ul><li>Peça que cada aluno apresente a mudança que fez e como conferiu o resultado.</li><li>Lembre o caminho do módulo: protótipo → entender como funciona → personalização visual → lógica do jogo → lançamento.</li><li>Encerre com uma prévia curta e envolvente do próximo módulo: o projeto web interativo «Meu universo».</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks em todas as aulas', blocks:[
        { t:'p', html:'Publicar parece simples, mas é aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed. Estes são os passos que todo aluno faz no fim de cada aula:' },
        { t:'steps', items:[
          ['Salvar o projeto','No Studio, o aluno salva o projeto em um slot e confere que ele abre de novo.'],
          ['Clicar em Publish','O botão abre o formulário de publicação: o aluno preenche o título e a descrição do projeto e escolhe as configurações.'],
          ['Escolher a visibilidade','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais consegue abrir o link, nem você. Não exija que seja público, mas confira se <b>você tem acesso ao resultado</b>.'],
          ['Ativar Request feedback (se o aluno quiser)','Assim outros alunos podem deixar um feedback estruturado (impressão geral, pontos fortes e o que melhorar). Funciona só em projetos públicos.'],
          ['Copiar o link e enviar no cartão','O link é o endereço da página do projeto: em <b>My projects</b>, o aluno abre o <b>projeto publicado</b> e copia o link da <b>barra de endereço do navegador</b>.  Vale lembrar: publicar no Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos. Se não resolver, peça para o aluno fazer o compartilhamento de tela e mostrar a execução.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> (por exemplo, <b>Web App</b>) ou busque pelo apelido.</p>'],
          ['💥','A geração da IA falhou ou o jogo não roda','<p>É normal. Se a IA mandar vários arquivos ou um código incompleto, peça um <b>único arquivo HTML autônomo</b>, sem bibliotecas, API nem arquivos adicionais. Tela vazia: confira se o código foi copiado inteiro; sem reação às teclas: clique na área do jogo. Depois de tentativas sensatas, use o <b>projeto de reserva</b> sem dramatizar — o importante é o aluno ter um jogo funcionando.</p>'],
          ['📄','Depois da divisão em 3 arquivos, o jogo perdeu o estilo ou parou','<p>Confira se o <code>index.html</code> liga corretamente o <code>style.css</code> e o <code>script.js</code>, e se cada trecho está no arquivo certo.</p>'],
          ['🔁','A IA reescreveu o jogo inteiro','<p>Compare as versões, volte à última que funcionava e procure a <b>primeira diferença</b>. Peça à IA mudanças limitadas, com restrições claras.</p>'],
          ['🔐','Dados pessoais','<p>Nunca senhas, endereços, telefones, chaves de API nem fotos pessoais como recurso — nem nos pedidos à IA, nem compartilhados com você.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e vi o vídeo de preparação.','Conferi o login no Sparks, o assistente de IA e o modo de projeto WEB_JS, e sei onde está o projeto de reserva.','Sei qual IA a aula usa: o assistente que cria o código, o AI Mentor ou os dois.'] },
          { h:'🎬 Durante a aula', items:['Mantenho o ciclo mudar → rodar → comparar → diagnosticar → corrigir.','Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações.'] },
          { h:'📤 No fim da aula', items:['Todos salvaram e publicaram o jogo no Sparks.','Todos enviaram o link do projeto publicado no cartão da aula.','Abri pelo menos alguns links para conferir se estão funcionando.'] }
        ]}
      ]}
    ]}
];

COURSE.quiz = {
  m1:[
    { q:'Para quem é o Code & Game 3 e quanto dura cada aula?',
      o:['Para alunos de 13–17 anos, com aulas de 90 minutos em grupo.','Para alunos de 8–9 anos, com aulas de 60 minutos.','Para alunos de 6–7 anos, com aulas de 30 minutos.'],
      a:0, e:'O Code & Game 3 é para alunos de 13–17 anos, com 40 aulas de 90 minutos em grupo.' },
    { q:'Como o aluno aprende a programar no curso?',
      o:['Primeiro estuda a sintaxe e a teoria e só depois cria um projeto do zero.','Começa com um protótipo que funciona, estuda o código, muda dados e funções e confere o resultado; no fim, escolhe a própria ideia e o escopo do projeto.','Copia o código do tutor sem mudar nada.'],
      a:1, e:'Do protótipo à solução própria: o aluno encontra o bloco certo, faz a alteração e explica como ela afeta o produto.' },
    { q:'Qual é o papel da IA no curso?',
      o:['Escreve o projeto inteiro e o aluno só entrega.','Ajuda a criar, explicar o código e achar erros; o aluno avalia as sugestões, adapta e decide — e dados pessoais e chaves de acesso nunca entram nos prompts.','Não é usada no curso.'],
      a:1, e:'A IA ajuda, o aluno decide. O assistente cria o código inicial; o AI Mentor explica o código, faz perguntas e ajuda a achar erros.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final de JavaScript.','Sete trabalhos publicados no portfólio (do jogo ao gerador de mundos) e um projeto próprio apresentado à turma.','Só o protótipo da primeira aula.'],
      a:1, e:'Cada módulo termina com um projeto publicado, e no final o aluno apresenta o trabalho autoral e explica o que fez sozinho.' },
    { ctx:'Um aluno diz que o jogo não funciona e te pede para arrumar.',
      q:'Qual é a melhor resposta?',
      o:['Mexer no código dele para arrumar rápido.','Pedir que ele diga o que esperava e o que aconteceu, sugerir uma verificação por vez e esperar a nova execução.','Dizer que ele refaça tudo em casa.'],
      a:1, e:'Ajude o aluno a diagnosticar: esperado × observado, uma verificação por vez. A decisão e a mudança do código ficam com ele.' }
  ],
  m2:[
    { q:'Em quais aulas os alunos publicam o jogo no Kodland Sparks e enviam o link?',
      o:['Só na última aula de cada módulo.','Em todas as aulas, desde a Aula 1.','Só quando o jogo está perfeito.'],
      a:1, e:'Desde a Aula 1, em todas as aulas — e você confere se consegue abrir o link.' },
    { ctx:'Na Aula 1, a geração da IA de um aluno falhou, e faltam poucos minutos para o fim.',
      q:'Qual é a melhor decisão?',
      o:['Depois de tentativas sensatas, usar o projeto de reserva sem dramatizar, para que ele tenha um jogo funcionando para publicar.','Deixar a publicação para a próxima aula.','Escrever o código para ele.'],
      a:0, e:'O projeto de reserva existe para isso: o aluno termina, publica e não fica para trás.' },
    { ctx:'O link de um aluno não abre para você, e no portfólio dele o projeto aparece como “Private project”.',
      q:'O que ele deve fazer?',
      o:['My projects → abrir o projeto → Edit → Public → Publish.','Criar um projeto novo.','Mandar o código pelo chat.'],
      a:0, e:'O projeto foi salvo como Only me. Com Edit → Public → Publish, o mesmo link passa a abrir para todos.' },
    { q:'Qual destas NÃO é uma vantagem do Kodland Sparks que você deve explicar aos alunos?',
      o:['Outros jogadores testam o jogo e deixam reações e feedback.','A IA destaca pontos fortes do projeto, e publicar rende cristais.','O Sparks corrige o código do aluno automaticamente.'],
      a:2, e:'Comunidade, playtest e feedback de jogadores e da IA são os benefícios. O Sparks não corrige o projeto pelo aluno.' },
    { q:'O que NUNCA deve entrar nos pedidos à IA?',
      o:['O tema e o nome do jogo.','Senhas, endereços, telefones, outros dados pessoais e chaves de API.','O resultado esperado.'],
      a:1, e:'Dados pessoais e chaves de acesso não entram nos prompts. Se pedirem esses dados para continuar, o aluno para e chama o tutor.' }
  ]
};

COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e veja o vídeo de preparação.'],
    ['📤', '<b>Em todas as aulas:</b> todos publicam no Sparks e enviam o link do projeto publicado no cartão.'],
    ['🤖', '<b>A IA ajuda, o aluno decide:</b> o AI Mentor orienta, não entrega o código.'],
    ['🔐', '<b>Segurança:</b> dados pessoais e chaves de acesso nunca entram nos prompts.']
  ]
};
