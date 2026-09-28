document.addEventListener('DOMContentLoaded', () => {

/* ============ DADOS ============ */
const anatomyInfo = {
  branquias:{
    title:"Brânquias",
    onde:"Ficam logo atrás da cabeça, protegidas por uma estrutura chamada opérculo.",
    como:"Formadas por lamínulas avermelhadas, bem irrigadas por vasos sanguíneos, escondidas sob a cobertura óssea.",
    funcao:"Retiram o oxigênio dissolvido na água e liberam gás carbônico — é o órgão respiratório da maioria dos peixes."
  },
  dorsal:{
    title:"Nadadeira dorsal",
    onde:"Localizada na parte superior (nas costas) do peixe.",
    como:"Nadadeira vertical, sustentada por raios finos e flexíveis.",
    funcao:"Ajuda a manter o equilíbrio e evita que o corpo gire sobre o próprio eixo durante a natação."
  },
  caudal:{
    title:"Nadadeira caudal",
    onde:"Fica na extremidade final do corpo, formando a cauda do peixe.",
    como:"Geralmente bifurcada (em forma de leque ou forquilha), é a maior nadadeira do corpo.",
    funcao:"Principal responsável pela propulsão: seus movimentos laterais impulsionam o peixe para frente."
  },
  peitorais:{
    title:"Nadadeiras peitorais",
    onde:"Localizadas nas laterais do corpo, logo atrás da região das brânquias.",
    como:"Nadadeiras pareadas (uma de cada lado), geralmente mais largas e móveis.",
    funcao:"Auxiliam nas mudanças de direção, na frenagem e em movimentos precisos de manobra."
  },
  pelvicas:{
    title:"Nadadeiras pélvicas",
    onde:"Ficam na região ventral (barriga), mais próximas da parte de trás do corpo.",
    como:"Também pareadas, geralmente menores que as peitorais.",
    funcao:"Ajudam na estabilidade do corpo e em pequenos ajustes de movimento durante a natação."
  },
  escamas:{
    title:"Escamas",
    onde:"Revestem toda a superfície do corpo do peixe.",
    como:"Pequenas placas rígidas e sobrepostas, organizadas como telhas, formando um padrão repetido.",
    funcao:"Protegem o corpo contra ferimentos e parasitas, além de reduzir o atrito com a água."
  },
  linhalateral:{
    title:"Linha lateral",
    onde:"Percorre horizontalmente as laterais do corpo, do meio até a base da cauda.",
    como:"Uma fileira de pequenos poros sensoriais visível como uma linha contínua na pele.",
    funcao:"Órgão sensorial que percebe vibrações e variações de pressão na água, ajudando a detectar predadores, presas e obstáculos."
  },
  olhos:{
    title:"Olhos",
    onde:"Posicionados nas laterais da cabeça, um de cada lado.",
    como:"Geralmente arredondados e sem pálpebras móveis.",
    funcao:"Responsáveis pela visão, adaptados às condições de luz do ambiente aquático em que o peixe vive."
  },
  boca:{
    title:"Boca",
    onde:"Localizada na ponta da cabeça (focinho).",
    como:"O formato varia bastante entre espécies: pode ser voltada para cima, para frente ou para baixo.",
    funcao:"Usada na captura e ingestão do alimento; seu formato está relacionado ao tipo de alimentação do peixe."
  }
};

const adaptacoes = [
  {t:"Brânquias",d:"Permitem retirar o oxigênio dissolvido na água para a respiração."},
  {t:"Corpo hidrodinâmico",d:"Reduz a resistência da água, facilitando a natação."},
  {t:"Nadadeiras",d:"Garantem propulsão, direção e equilíbrio no ambiente aquático."},
  {t:"Linha lateral",d:"Percebe vibrações e movimentos ao redor do corpo."},
  {t:"Escamas",d:"Protegem o corpo e reduzem o atrito com a água."},
  {t:"Bexiga natatória",d:"Controla a flutuabilidade em diferentes profundidades."},
  {t:"Camuflagem",d:"Ajuda o peixe a se esconder de predadores e presas."}
];

const fishFood = [
  {name:"Tilápia", wiki:"Nile tilapia", emoji:"🐟", tipo:"Onívoro", alim:"Algas, plantas aquáticas e pequenos invertebrados.", hab:"Rios, lagos e represas de água doce.", cur:"É uma das espécies mais criadas em aquicultura no Brasil."},
  {name:"Tubarão", wiki:"Great white shark", emoji:"🦈", tipo:"Carnívoro", alim:"Peixes, moluscos e outros animais marinhos.", hab:"Oceanos, em diferentes profundidades.", cur:"Alguns tubarões trocam de dentes milhares de vezes na vida."},
  {name:"Piranha", wiki:"Piranha", emoji:"🐟", tipo:"Carnívoro", alim:"Peixes, insetos e pequenos animais.", hab:"Rios de água doce da América do Sul.", cur:"Vivem em cardumes e têm dentição extremamente afiada."},
  {name:"Bagre", wiki:"Catfish", emoji:"🐟", tipo:"Detritívoro/Onívoro", alim:"Restos orgânicos, pequenos invertebrados e plantas.", hab:"Fundo de rios e lagos de água doce.", cur:"Usa barbilhões (bigodes) para localizar comida no fundo escuro."},
  {name:"Peixe-palhaço", wiki:"Ocellaris clownfish", emoji:"🐠", tipo:"Onívoro", alim:"Plâncton, algas e pequenos invertebrados.", hab:"Recifes de corais, entre anêmonas.", cur:"Vive em relação de mutualismo com anêmonas-do-mar."}
];

const foodChain = [
  {name:"Fitoplâncton", info:"Microrganismos que realizam fotossíntese e formam a base da cadeia alimentar aquática."},
  {name:"Zooplâncton", info:"Pequenos animais que se alimentam do fitoplâncton."},
  {name:"Peixes pequenos", info:"Como a sardinha, se alimentam de zooplâncton."},
  {name:"Peixes médios", info:"Como o atum, se alimentam de peixes pequenos."},
  {name:"Predador de topo", info:"Como o tubarão, ocupa o topo da cadeia alimentar."}
];

const curiosidades = [
  "O maior peixe do mundo é o tubarão-baleia, podendo ultrapassar 12 metros de comprimento.",
  "O peixe-vela está entre os peixes mais velozes dos oceanos, alcançando grandes velocidades em curtas distâncias.",
  "O peixe-elétrico (poraquê) consegue gerar descargas elétricas para se defender e caçar.",
  "Peixes de águas profundas, como o peixe-lanterna, produzem luz própria através da bioluminescência.",
  "O linguado consegue mudar de cor para se camuflar no ambiente ao seu redor.",
  "Alguns peixes vivem em ambientes extremos, como fontes hidrotermais no fundo do oceano ou águas geladas da Antártida.",
  "Nos cavalos-marinhos, é o macho quem carrega os ovos até o nascimento dos filhotes.",
  "Existem mais de 34 mil espécies conhecidas de peixes, o grupo de vertebrados mais diverso do planeta."
];

const curioMedia = [
  {wiki:"Whale shark", cap:"Tubarão-baleia", emoji:"🦈"},
  {wiki:"Sailfish", cap:"Peixe-vela", emoji:"🐟"},
  {wiki:"Electric eel", cap:"Poraquê", emoji:"⚡"},
  {wiki:"Lanternfish", cap:"Peixe-lanterna", emoji:"💡"},
  {wiki:"Flounder", cap:"Linguado", emoji:"🐟"},
  {wiki:"Channichthyidae", cap:"Peixe-gelo (Antártida)", emoji:"🧊"},
  {wiki:"Seahorse", cap:"Cavalo-marinho", emoji:"🐴"},
  {wiki:"Fish", cap:"Diversidade de peixes", emoji:"🐠"}
];

const quizQuestions = [
  {q:"Peixes são animais ectotérmicos, o que significa que:", opts:["Produzem seu próprio calor corporal","Regulam a temperatura do corpo a partir do ambiente","Não possuem temperatura corporal","Vivem apenas em águas quentes"], correct:1, exp:"Ectotérmicos regulam a temperatura corporal de acordo com o ambiente externo."},
  {q:"Qual estrutura é responsável pela respiração da maioria dos peixes?", opts:["Pulmões","Brânquias","Apenas a pele","Bexiga natatória"], correct:1, exp:"As brânquias realizam as trocas gasosas, retirando oxigênio da água."},
  {q:"A bexiga natatória tem a função de:", opts:["Digestão","Controlar a flutuabilidade e a profundidade","Reprodução","Respiração"], correct:1, exp:"Ela permite que o peixe controle sua flutuabilidade na água."},
  {q:"Tubarões e raias pertencem ao grupo dos:", opts:["Peixes ósseos","Peixes cartilaginosos","Agnatos","Anfíbios"], correct:1, exp:"Possuem esqueleto de cartilagem, característica dos condrictes."},
  {q:"A linha lateral serve para:", opts:["Perceber vibrações e pressão na água","Enxergar no escuro","Produzir eletricidade","Auxiliar a digestão"], correct:0, exp:"É um órgão sensorial que detecta variações de pressão e movimento na água."},
  {q:"Peixes que se alimentam de restos orgânicos em decomposição são chamados de:", opts:["Carnívoros","Herbívoros","Detritívoros","Onívoros"], correct:2, exp:"Detritívoros se alimentam de matéria orgânica em decomposição."},
  {q:"A lampreia é um exemplo de:", opts:["Peixe ósseo","Peixe cartilaginoso","Agnato","Anfíbio"], correct:2, exp:"A lampreia pertence ao grupo dos agnatos, peixes sem mandíbula."},
  {q:"Na fecundação externa dos peixes:", opts:["Óvulos e espermatozoides se encontram fora do corpo, geralmente na água","A fecundação ocorre dentro do corpo da fêmea","Não há necessidade de espermatozoides","Só ocorre em ambiente terrestre"], correct:0, exp:"Na fecundação externa, os gametas se encontram fora do corpo, geralmente na água."},
  {q:"Qual é considerado o maior peixe do mundo?", opts:["Tubarão-branco","Tubarão-baleia","Atum-azul","Peixe-lua"], correct:1, exp:"O tubarão-baleia pode ultrapassar 12 metros de comprimento."},
  {q:"As escamas dos peixes têm função principal de:", opts:["Proteção do corpo","Respiração","Digestão","Reprodução"], correct:0, exp:"As escamas protegem o corpo e reduzem o atrito com a água."}
];

const tfStatements = [
  {s:"Todos os peixes vivem exclusivamente em água salgada.", correct:false, exp:"Falso. Existem peixes de água doce, salgada e salobra."},
  {s:"As brânquias permitem que os peixes retirem oxigênio da água.", correct:true, exp:"Verdadeiro. As brânquias realizam as trocas gasosas na água."},
  {s:"Todos os peixes possuem escamas.", correct:false, exp:"Falso. Alguns peixes, como certos bagres, não possuem escamas."},
  {s:"Peixes cartilaginosos possuem esqueleto feito de cartilagem.", correct:true, exp:"Verdadeiro. É a principal característica dos condrictes, como tubarões e raias."},
  {s:"A bexiga natatória existe em todos os peixes, incluindo tubarões.", correct:false, exp:"Falso. Tubarões não possuem bexiga natatória."},
  {s:"Peixes são animais vertebrados.", correct:true, exp:"Verdadeiro. Peixes possuem coluna vertebral e fazem parte dos vertebrados."}
];

/* ============ IMAGENS (Wikipédia / Wikimedia Commons) ============ */
const wikiCache={};
function wikiThumb(title){
  if(!wikiCache[title]){
    const url='https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(title.replace(/ /g,'_'));
    wikiCache[title]=fetch(url)
      .then(r=>r.ok?r.json():Promise.reject())
      .then(d=>d && d.thumbnail ? d.thumbnail.source : null)
      .catch(()=>null);
  }
  return wikiCache[title];
}
function loadFig(fig){
  if(fig.dataset.loaded) return;
  fig.dataset.loaded='1';
  const img=fig.querySelector('img');
  if(!img) return;
  wikiThumb(fig.dataset.wiki).then(src=>{
    if(!src){ fig.classList.add('failed'); return; }
    const big=src.replace(/\/\d+px-/,'/500px-');
    let retried=false;
    img.onload=()=>fig.classList.add('ready');
    img.onerror=()=>{
      if(!retried && big!==src){ retried=true; img.src=src; }
      else fig.classList.add('failed');
    };
    img.src=big;
  });
}
function loadFigsIn(root){
  root.querySelectorAll('.wiki-fig').forEach(loadFig);
}
function figHTML(wiki,cap,emoji,extraClass){
  return `<figure class="wiki-fig ${extraClass||''}" data-wiki="${wiki}"><span class="wiki-ph">${emoji||'🐟'}</span><img alt="${cap}" decoding="async"><figcaption>${cap}</figcaption></figure>`;
}
if('IntersectionObserver' in window){
  const figObserver=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ loadFigsIn(e.target); figObserver.unobserve(e.target); }
    });
  },{rootMargin:'600px 0px'});
  ['classificacao','alimentacao','reproducao','curiosidades'].forEach(id=>{
    const s=document.getElementById(id);
    if(s) figObserver.observe(s);
  });
} else {
  loadFigsIn(document);
}

/* ============ BOLHAS ============ */
function createBubble(){
  const b=document.createElement('div');
  b.className='bubble';
  const size=Math.random()*18+6;
  b.style.width=size+'px';b.style.height=size+'px';
  b.style.left=Math.random()*100+'vw';
  b.style.setProperty('--drift',(Math.random()*80-40)+'px');
  b.style.animationDuration=(Math.random()*6+6)+'s';
  document.getElementById('bubbles-container').appendChild(b);
  setTimeout(()=>b.remove(),12000);
}
setInterval(createBubble,600);

/* ============ PROGRESS BAR ============ */
const progressBar=document.getElementById('progress-bar');
const backToTop=document.getElementById('back-to-top');
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const scrolled=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  progressBar.style.width=scrolled+'%';
  backToTop.classList.toggle('show',h.scrollTop>500);
  updateActiveNav();
});
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============ NAV ============ */
document.getElementById('nav-toggle').addEventListener('click',()=>{
  document.getElementById('nav-list').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',(e)=>{
    document.getElementById('nav-list').classList.remove('open');
  });
});
const navLinks=[...document.querySelectorAll('.nav-link')];
const sections=[...document.querySelectorAll('.section[id]')];
function updateActiveNav(){
  let current=sections[0].id;
  const scrollPos=window.scrollY+150;
  sections.forEach(sec=>{
    if(sec.offsetTop<=scrollPos) current=sec.id;
  });
  navLinks.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+current));
}

/* ============ EXPLORE / SCROLL BUTTONS ============ */
document.getElementById('explore-btn').addEventListener('click',()=>{
  document.getElementById('caracteristicas').scrollIntoView({behavior:'smooth'});
});
document.getElementById('back-start-btn').addEventListener('click',()=>{
  document.getElementById('inicio').scrollIntoView({behavior:'smooth'});
});
document.getElementById('redo-quiz-btn').addEventListener('click',()=>{
  document.getElementById('quiz').scrollIntoView({behavior:'smooth'});
  resetQuiz();
});
/* ============ MODAL ============ */
const modalOverlay=document.getElementById('modal-overlay');
const modalTitle=document.getElementById('modal-title');
const modalBody=document.getElementById('modal-body');
function openModal(title,html){
  modalTitle.textContent=title;
  modalBody.innerHTML=html;
  modalOverlay.classList.remove('hidden');
}
document.getElementById('modal-close').addEventListener('click',()=>modalOverlay.classList.add('hidden'));
modalOverlay.addEventListener('click',(e)=>{ if(e.target===modalOverlay) modalOverlay.classList.add('hidden'); });
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') modalOverlay.classList.add('hidden'); });

/* ============ ANATOMIA HOTSPOTS (painel lateral + destaque) ============ */
const anatomyLayout=document.querySelector('.anatomy-layout');
const anatomyPanelBadge=document.getElementById('anatomy-panel-badge');
const anatomyPanelTitle=document.getElementById('anatomy-panel-title');
const anatomyPanelHint=document.getElementById('anatomy-panel-hint');
const anatomyPanelBody=document.getElementById('anatomy-panel-body');
const anatomyPanelOnde=document.getElementById('anatomy-panel-onde');
const anatomyPanelComo=document.getElementById('anatomy-panel-como');
const anatomyPanelFuncao=document.getElementById('anatomy-panel-funcao');
const hotspotNumbers={branquias:1,dorsal:2,caudal:3,peitorais:4,pelvicas:5,escamas:6,linhalateral:7,olhos:8,boca:9};

function selectAnatomyPart(key){
  const info=anatomyInfo[key];
  if(!info) return;

  document.querySelectorAll('.hotspot').forEach(h=>h.classList.toggle('active', h.dataset.info===key));
  document.querySelectorAll('.anat-part').forEach(p=>p.classList.toggle('anat-active', p.classList.contains('anat-'+key)));
  if(anatomyLayout) anatomyLayout.classList.add('has-selection');

  anatomyPanelBadge.textContent=hotspotNumbers[key] || '?';
  anatomyPanelTitle.textContent=info.title;
  anatomyPanelHint.classList.add('hidden');
  anatomyPanelBody.classList.remove('hidden');
  anatomyPanelOnde.textContent=info.onde;
  anatomyPanelComo.textContent=info.como;
  anatomyPanelFuncao.textContent=info.funcao;
}

document.querySelectorAll('.hotspot').forEach(spot=>{
  spot.addEventListener('click',()=>selectAnatomyPart(spot.dataset.info));
  spot.addEventListener('keydown',(e)=>{
    if(e.key==='Enter' || e.key===' '){ e.preventDefault(); selectAnatomyPart(spot.dataset.info); }
  });
});

/* ============ CLASSIFICACAO EXPAND ============ */
document.querySelectorAll('.expand-card').forEach(card=>{
  card.addEventListener('click',()=>card.classList.toggle('open'));
  card.querySelectorAll('.example-gallery').forEach(g=>g.addEventListener('click',e=>e.stopPropagation()));
});

/* ============ ADAPTACOES GRID ============ */
const adaptGrid=document.getElementById('adaptacoes-grid');
adaptacoes.forEach(a=>{
  const div=document.createElement('div');
  div.className='glass-card';
  div.innerHTML=`<h3>${a.t}</h3><p>${a.d}</p>`;
  adaptGrid.appendChild(div);
});

/* ============ ALIMENTACAO ============ */
const fishSelector=document.getElementById('fish-selector');
const fishInfoPanel=document.getElementById('fish-info-panel');
fishFood.forEach((f,i)=>{
  const btn=document.createElement('button');
  btn.className='pill-btn';
  btn.textContent=f.name;
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#fish-selector .pill-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    fishInfoPanel.innerHTML=`
      <div class="fish-panel-grid">
        ${figHTML(f.wiki,f.name,f.emoji)}
        <div>
          <h4>${f.name} — ${f.tipo}</h4>
          <p><strong>Alimentação:</strong> ${f.alim}</p>
          <p><strong>Habitat:</strong> ${f.hab}</p>
          <p><strong>Curiosidade:</strong> ${f.cur}</p>
        </div>
      </div>`;
    loadFigsIn(fishInfoPanel);
  });
  fishSelector.appendChild(btn);
});

/* ============ ECOLOGIA - CADEIA ALIMENTAR ============ */
const foodChainDiv=document.getElementById('food-chain');
const chainInfoPanel=document.getElementById('chain-info-panel');
foodChain.forEach(org=>{
  const btn=document.createElement('button');
  btn.className='pill-btn';
  btn.textContent=org.name;
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#food-chain .pill-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    chainInfoPanel.innerHTML=`<h4>${org.name}</h4><p>${org.info}</p>`;
  });
  foodChainDiv.appendChild(btn);
});

/* ============ CURIOSIDADES GRID ============ */
const curioGrid=document.getElementById('curiosidades-grid');
function openCuriosity(i,title){
  const m=curioMedia[i];
  openModal(title||`Curiosidade ${i+1}`, `${figHTML(m.wiki,m.cap,m.emoji,'modal-fig')}<p>${curiosidades[i]}</p>`);
  loadFigsIn(modalBody);
}
curiosidades.forEach((c,i)=>{
  const m=curioMedia[i];
  const div=document.createElement('div');
  div.className='glass-card curio-card';
  div.innerHTML=`${figHTML(m.wiki,m.cap,m.emoji)}<h3>Curiosidade ${i+1}</h3><p class="preview">Clique para descobrir</p>`;
  div.addEventListener('click',()=>openCuriosity(i));
  curioGrid.appendChild(div);
});
document.getElementById('random-curiosity-btn').addEventListener('click',()=>{
  openCuriosity(Math.floor(Math.random()*curiosidades.length),"Você sabia?");
});

/* ============ CONTADORES ============ */
const counters=document.querySelectorAll('.counter');
let countersStarted=false;
function animateCounters(){
  if(countersStarted) return;
  countersStarted=true;
  counters.forEach(c=>{
    const target=+c.dataset.target;
    let cur=0;
    const step=Math.max(1,Math.floor(target/60));
    const timer=setInterval(()=>{
      cur+=step;
      if(cur>=target){cur=target;clearInterval(timer);}
      c.textContent=cur.toLocaleString('pt-BR');
    },20);
  });
}
const counterObserver=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) animateCounters(); });
},{threshold:0.4});
const counterRow=document.querySelector('.counters-row');
if(counterRow) counterObserver.observe(counterRow);

/* ============ QUIZ ============ */
let quizIndex=0, quizScore=0;
const quizStart=document.getElementById('quiz-start');
const quizPlay=document.getElementById('quiz-play');
const quizResult=document.getElementById('quiz-result');
const quizQuestionEl=document.getElementById('quiz-question');
const quizOptionsEl=document.getElementById('quiz-options');
const quizCounterEl=document.getElementById('quiz-counter');
const quizFeedbackEl=document.getElementById('quiz-feedback');
const quizProgressFill=document.getElementById('quiz-progress-fill');

document.getElementById('start-quiz-btn').addEventListener('click',()=>{
  quizStart.classList.add('hidden');
  quizPlay.classList.remove('hidden');
  loadQuestion();
});
document.getElementById('restart-quiz-btn').addEventListener('click',resetQuiz);

function resetQuiz(){
  quizIndex=0;quizScore=0;
  quizResult.classList.add('hidden');
  quizStart.classList.remove('hidden');
  quizPlay.classList.add('hidden');
}

function loadQuestion(){
  quizFeedbackEl.classList.add('hidden');
  const item=quizQuestions[quizIndex];
  quizCounterEl.textContent=`Pergunta ${quizIndex+1} de ${quizQuestions.length}`;
  quizProgressFill.style.width=((quizIndex)/quizQuestions.length*100)+'%';
  quizQuestionEl.textContent=item.q;
  quizOptionsEl.innerHTML='';
  item.opts.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='quiz-option';
    btn.textContent=opt;
    btn.addEventListener('click',()=>selectAnswer(i,btn));
    quizOptionsEl.appendChild(btn);
  });
}

function selectAnswer(i,btn){
  const item=quizQuestions[quizIndex];
  const allBtns=[...quizOptionsEl.children];
  allBtns.forEach(b=>b.style.pointerEvents='none');
  if(i===item.correct){
    btn.classList.add('correct');
    quizScore++;
  } else {
    btn.classList.add('wrong');
    allBtns[item.correct].classList.add('correct');
  }
  quizFeedbackEl.classList.remove('hidden');
  quizFeedbackEl.textContent=item.exp;

  setTimeout(()=>{
    quizIndex++;
    if(quizIndex<quizQuestions.length){
      loadQuestion();
    } else {
      finishQuiz();
    }
  },1800);
}

function finishQuiz(){
  quizPlay.classList.add('hidden');
  quizResult.classList.remove('hidden');
  document.getElementById('quiz-score').textContent=`Seu resultado: ${quizScore}/${quizQuestions.length}`;
  let msg='';
  if(quizScore===10) msg='Perfeito! Vocês dominam o assunto peixes!';
  else if(quizScore>=7) msg='Muito bom! Ótimo conhecimento sobre o tema.';
  else if(quizScore>=4) msg='Bom trabalho! Vale revisar alguns pontos.';
  else msg='Continue estudando — vocês vão mandar bem na apresentação!';
  document.getElementById('quiz-message').textContent=msg;
}

/* ============ DESAFIO VERDADEIRO/FALSO ============ */
let tfIndex=0;
const tfStatementEl=document.getElementById('tf-statement');
const tfCounterEl=document.getElementById('tf-counter');
const tfFeedbackEl=document.getElementById('tf-feedback');
const tfTrueBtn=document.getElementById('tf-true');
const tfFalseBtn=document.getElementById('tf-false');

function loadTF(){
  if(tfIndex>=tfStatements.length){
    tfStatementEl.textContent="Desafio concluído! 🎉";
    tfCounterEl.textContent="";
    tfFeedbackEl.classList.add('hidden');
    tfTrueBtn.style.display='none';
    tfFalseBtn.style.display='none';
    return;
  }
  tfTrueBtn.style.display='inline-block';
  tfFalseBtn.style.display='inline-block';
  tfTrueBtn.disabled=false; tfFalseBtn.disabled=false;
  tfFeedbackEl.classList.add('hidden');
  tfCounterEl.textContent=`Afirmação ${tfIndex+1} de ${tfStatements.length}`;
  tfStatementEl.textContent=tfStatements[tfIndex].s;
}
function answerTF(answer){
  const item=tfStatements[tfIndex];
  tfTrueBtn.disabled=true; tfFalseBtn.disabled=true;
  tfFeedbackEl.classList.remove('hidden');
  tfFeedbackEl.textContent=(answer===item.correct?'✔ Correto! ':'✘ Incorreto. ')+item.exp;
  setTimeout(()=>{ tfIndex++; loadTF(); },2200);
}
tfTrueBtn.addEventListener('click',()=>answerTF(true));
tfFalseBtn.addEventListener('click',()=>answerTF(false));
loadTF();

/* ============ TOGGLE ANIMAÇÕES ============ */
document.getElementById('toggle-anim-btn').addEventListener('click',()=>{
  document.body.classList.toggle('no-animations');
});

/* ============ MODO APRESENTAÇÃO ============ */
document.getElementById('presentation-btn').addEventListener('click',()=>{
  document.body.classList.toggle('presentation-mode');
});
/* ============ TELA CHEIA ============ */
document.getElementById('fullscreen-btn').addEventListener('click',()=>{
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen().catch(()=>{});
  } else {
    document.exitFullscreen();
  }
});

/* ============ NAVEGAÇÃO POR TECLADO ============ */
document.addEventListener('keydown',(e)=>{
  if(!modalOverlay.classList.contains('hidden')) return;
  const idx=sections.findIndex(s=>s.id===[...navLinks].find(l=>l.classList.contains('active'))?.getAttribute('href').slice(1));
  if(e.key==='ArrowDown'){
    e.preventDefault();
    const next=sections[Math.min(sections.length-1, Math.max(0,idx)+1)];
    next.scrollIntoView({behavior:'smooth'});
  } else if(e.key==='ArrowUp'){
    e.preventDefault();
    const prev=sections[Math.max(0, (idx<0?0:idx)-1)];
    prev.scrollIntoView({behavior:'smooth'});
  }
});

updateActiveNav();
});