const COURSE_PREVIEW={
 title:'Курс: опасности на производстве',
 description:'Последовательное обучение для операторов и мастеров: от введения до практик защиты и профилактики на рабочем месте.',
 coverPhoto:'assets/image 541.jpg',
 theme:'blue',
 lessons:[
  {
   id:'l1',title:'Введение',kicker:'Урок 1',duration:'5 мин',required:true,
   coverTitle:'Введение в производственные опасности',
   blocks:[
    {type:'h2',text:'Зачем этот курс'},
    {type:'text',text:'Производственные опасности — условия работы, при которых сотрудник может получить травму или заболевание. Курс поможет операторам и мастерам системно смотреть на риски: от базовых определений до ежедневных практик.'},
    {type:'image',src:'assets/video-slide-1.jpg',alt:'Осмотр оборудования',caption:'Перед сменой важно проверить исправность оборудования и отсутствие посторонних в рабочей зоне.'},
    {type:'audio',title:'Комментарий эксперта: с чего начать смену',duration:'2:14',current:'0:38',cover:'assets/scene-1.jpg',caption:'Короткая аудиозаметка мастера смены — можно слушать по дороге на участок.'},
    {type:'h3',text:'Что вы узнаете'},
    {type:'list',items:['Как отличать химические, механические и организационные риски','Как проводить короткий осмотр рабочей зоны перед сменой','Какие СИЗ подбирать под конкретную задачу','Как фиксировать и эскалировать замеченные опасности']},
    {type:'steps',title:'Как проходить уроки',items:['Прочитайте материал и отметьте непонятные места','Сверьте примеры с реальной зоной, где вы работаете','Выполните мини-чек-лист в конце урока','Переходите к следующему уроку после самопроверки']},
    {type:'glossary',title:'Ключевые термины',items:[{term:'Опасность',def:'Условие или действие, которое может привести к травме или аварии.'},{term:'Риск',def:'Вероятность и тяжесть последствий от опасности.'},{term:'СИЗ',def:'Средства индивидуальной защиты — перчатки, очки, респираторы и т.д.'}]},
    {type:'info',text:'После каждого урока закрепляйте материал короткой самопроверкой на рабочем месте — это занимает 3–5 минут, но снижает риск ошибки.'}
   ]
  },
  {
   id:'l2',title:'Химические опасности',kicker:'Урок 2',duration:'6 мин',required:true,
   coverTitle:'Химические опасности: распознавание и защита',
   blocks:[
    {type:'h2',text:'Где возникают химические риски'},
    {type:'text',text:'Пары растворителей, сварочный дым и пыль абразива накапливаются незаметно. Важно знать ПДК, сроки проветривания и правила хранения веществ на участке.'},
    {type:'video',poster:'assets/video-slide-2.jpg',title:'Проветривание и контроль ПДК',duration:'1:24'},
    {type:'h3',text:'Типовые источники'},
    {type:'list',items:['Лакокрасочные материалы и растворители','Сварочные и резательные аэрозоли','Средства мойки и обезжиривания','Пыль при шлифовке и резке']},
    {type:'markedImage',src:'assets/video-slide-2.jpg',alt:'Зона хранения химии',caption:'Наведите на маркеры, чтобы увидеть пояснения.',markers:[{top:'28%',left:'22%',label:'1',text:'Маркировка ёмкостей'},{top:'52%',left:'68%',label:'2',text:'Вытяжная вентиляция'},{top:'72%',left:'38%',label:'3',text:'Зона хранения СИЗ'}]},
    {type:'file',name:'Карта СИЗ для химических работ.pdf',size:'240 КБ',meta:'Обновлено 12.05.2026'},
    {type:'info',text:'При резком запахе, головокружении или жжении в глазах прекратите работу, выйдите на свежий воздух и сообщите ответственному.'}
   ]
  },
  {
   id:'t1',kind:'test',afterLesson:1,title:'Тест после «Введение»',questions:3,pass:80,
   items:[
    {type:'single',q:'Что в курсе понимается под «опасностью»?',options:['Уже произошедший инцидент','Условие, при котором возможна травма','Любое нарушение инструкции','Только работа с химией'],correct:1},
    {type:'single',q:'Зачем проходить мини-чек-лист после урока?',options:['Для отчёта в HR','Чтобы закрепить материал на рабочем месте','Чтобы пропустить следующий урок','Это необязательно'],correct:1},
    {type:'match',q:'Соотнесите тип опасности с примером на производстве.',pairs:[
     {left:'Химическая опасность',right:'Пары растворителей'},
     {left:'Механическая опасность',right:'Движущиеся части оборудования'},
     {left:'Организационный риск',right:'Работа без напарника'}
    ]}
   ]
  },
  {
   id:'l3',title:'Механические опасности',kicker:'Урок 3',duration:'7 мин',required:false,
   coverTitle:'Механические опасности у станков и грузоподъёмного оборудования',
   blocks:[
    {type:'h2',text:'Зоны повышенного риска'},
    {type:'text',text:'Вращающиеся части, зажимы, режущие инструменты и траектории движения грузов — основные источники травм. Защитные кожухи и ограждения нельзя снимать «для удобства».'},
    {type:'timeline',title:'Типовой инцидент: что происходит по минутам',items:[{time:'0 мин',text:'Сняли ограждение «на минуту»'},{time:'2 мин',text:'Инструмент зацепил перчатку'},{time:'3 мин',text:'Остановка линии и вызов медика'},{time:'+1 день',text:'Разбор и обновление инструкции'}]},
    {type:'h3',text:'Перед пуском оборудования'},
    {type:'list',items:['СТОП-кнопка и аварийный контур работают','В зоне перемещения нет посторонних','Ограждения и блокировки на месте','Инструмент и заготовка закреплены']},
    {type:'image',src:'assets/video-slide-3.jpg',alt:'Блокировка оборудования',caption:'Процедура LOTO: оборудование блокируют и маркируют, пока ведутся ремонтные работы.'},
    {type:'table',title:'Сравнение рисков',headers:['Зона','Риск','Мера'],rows:[['Станок','Зажим, порез','Кожух, блокировка'],['Кран','Падение груза','Стропы, сигналы'],['Конвейер','Затягивание','Ограждение, СТОП']]},
    {type:'info',text:'Блокировка и маркировка (LOTO) обязательны при обслуживании — «быстрый ремонт на ходу» недопустим.'}
   ]
  },
  {
   id:'l4',title:'Защита и профилактика',kicker:'Урок 4',duration:'6 мин',required:true,
   coverTitle:'Защита и профилактика: ежедневные привычки',
   blocks:[
    {type:'h2',text:'СИЗ и ежедневные привычки'},
    {type:'text',text:'Универсального набора защиты не существует: перчатки от порезов не защищают от химии, а очки от пыли — от брызг кислоты. Подбирайте СИЗ под задачу и проверяйте срок годности.'},
    {type:'steps',title:'Чек-лист начала смены',items:['СИЗ подобраны и без повреждений','Рабочая зона осмотрена, проходы свободны','Инструмент исправен, ограждения на месте','Известен порядок действий при нештатной ситуации']},
    {type:'diagram',title:'Динамика инцидентов при регулярных проверках',src:'assets/video-slide-4.jpg',caption:'Регулярный осмотр снижает количество «почти-инцидентов» в первые недели внедрения практики.'},
    {type:'flowchart',title:'Алгоритм при обнаружении риска',nodes:['Заметил риск','Остановил работу','Сообщил ответственному','Зафиксировал и устранил']},
    {type:'image',src:'assets/video-slide-4.jpg',alt:'Инструктаж по СИЗ',caption:'СИЗ, аптечка и огнетушитель должны быть под рукой — команда проходит инструктаж перед сменой.'},
    {type:'info',text:'Профилактика дешевле простоя и лечения: 5 минут проверки в начале смены экономят часы и здоровье.'}
   ]
  },
  {
   id:'t2',kind:'test',afterLesson:3,title:'Тест после «Механические опасности»',questions:4,pass:80,
   items:[
    {type:'single',q:'Когда обязательна процедура LOTO?',options:['При каждой смене','При обслуживании и ремонте','Только при аварии','По желанию мастера'],correct:1},
    {type:'single',q:'Что нельзя делать под поднятым грузом?',options:['Наблюдать','Проходить без фиксации','Сигналить крановщику','Проверять стропы'],correct:1},
    {type:'multi',q:'Что проверить перед пуском оборудования?',options:['СТОП-кнопку','Ограждения','Состояние телефона','Закрепление заготовки'],correct:[0,1,3]},
    {type:'match',q:'Соотнесите меру безопасности с ситуацией.',pairs:[
     {left:'LOTO',right:'Ремонт станка'},
     {left:'Стропы и сигналы',right:'Перемещение груза'},
     {left:'Ограждение конвейера',right:'Затягивание одежды'}
    ]}
   ]
  }
 ],
 finalTest:{
  title:'Итоговый тест курса',questions:6,pass:80,
  items:[
   {type:'single',q:'Какой фактор относится к химическим опасностям?',options:['Шум','Пары растворителей','Скользкий пол','Движущиеся части'],correct:1},
   {type:'multi',q:'Что помогает снизить риск травм?',options:['СИЗ по задаче','Сообщать о рисках','Обходить ограждения','Проверка зоны перед сменой'],correct:[0,1,3]},
   {type:'single',q:'Что такое «почти-инцидент»?',options:['Мелкое нарушение дресс-кода','Ситуация, которая могла привести к травме','Отчёт в конце смены','Плановая проверка'],correct:1},
   {type:'single',q:'Первое действие при сомнении в безопасности?',options:['Продолжить работу','Остановить и уточнить','Снять СИЗ','Ждать конца смены'],correct:1},
   {type:'multi',q:'Что входит в чек-лист начала смены?',options:['Осмотр зоны','Проверка СИЗ','Проверка личной почты','Исправность инструмента'],correct:[0,1,3]},
   {type:'match',q:'Соотнесите средство защиты с типом опасности.',pairs:[
    {left:'Респиратор',right:'Пары растворителей'},
    {left:'Защитные очки',right:'Брызги кислоты'},
    {left:'Наушники',right:'Высокий уровень шума'}
   ]}
  ]
 }
};

const BLOCK_LABELS={
 text:'',h2:'',h3:'',list:'',image:'Изображение',video:'Видео',audio:'Аудио',file:'Файл',info:'Важно',
 steps:'Шаги',timeline:'Временная шкала',glossary:'Глоссарий',markedImage:'Маркированное изображение',
 table:'Таблица',diagram:'Диаграмма',flowchart:'Блок-схема'
};

function esc(s){return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

const blockRenderers={
 h2:b=>`<section class="lp-block lp-block--h2"><h2 class="lp-h2">${esc(b.text)}</h2></section>`,
 h3:b=>`<section class="lp-block lp-block--h3"><h3 class="lp-h3">${esc(b.text)}</h3></section>`,
 text:b=>`<section class="lp-block lp-block--text"><p class="lp-text">${esc(b.text)}</p></section>`,
 list:b=>`<section class="lp-block lp-block--list" data-type="list"><ul class="lp-list">${(b.items||[]).map(i=>`<li>${esc(i)}</li>`).join('')}</ul></section>`,
 image:b=>`<section class="lp-block lp-block--image" data-type="image"><figure class="lp-figure"><div class="lp-media"><img src="${esc(b.src)}" alt="${esc(b.alt||'')}" loading="lazy"/></div>${b.caption?`<figcaption class="lp-caption">${esc(b.caption)}</figcaption>`:''}</figure></section>`,
 video:b=>`<section class="lp-block lp-block--video" data-type="video"><div class="lp-block-label">${BLOCK_LABELS.video}</div><div class="lp-video"><img class="lp-video-poster" src="${esc(b.poster)}" alt=""/><button type="button" class="lp-video-play" aria-label="Воспроизвести">▶</button><div class="lp-video-meta"><span class="lp-video-title">${esc(b.title||'Видео')}</span><span class="lp-video-dur">${esc(b.duration||'')}</span></div></div></section>`,
 audio:b=>{
  const coverAttr=b.cover?` style="background-image:url('${esc(b.cover)}')"`:'';
  const cap=b.caption?`<p class="lp-audio-caption">${esc(b.caption)}</p>`:'';
  return `<section class="lp-block lp-block--audio" data-type="audio"><div class="lp-block-label">${BLOCK_LABELS.audio}</div><div class="lp-audio"><div class="lp-audio-cover"${coverAttr} aria-hidden="true"></div><div class="lp-audio-body"><p class="lp-audio-title">${esc(b.title||'Аудио')}</p><div class="lp-audio-player"><button type="button" class="lp-audio-play" aria-label="Воспроизвести">▶</button><div class="lp-audio-track"><div class="lp-audio-wave"></div><div class="lp-audio-prog"><span style="width:28%"></span></div></div><span class="lp-audio-time"><span class="lp-audio-current">${esc(b.current||'0:00')}</span> / ${esc(b.duration||'0:00')}</span></div>${cap}</div></div></section>`;
 },
 file:b=>`<section class="lp-block lp-block--file" data-type="file"><div class="lp-block-label">${BLOCK_LABELS.file}</div><a class="lp-file" href="#" onclick="return false"><span class="lp-file-icon" aria-hidden="true">📄</span><span class="lp-file-body"><span class="lp-file-name">${esc(b.name)}</span><span class="lp-file-meta">${esc(b.size)}${b.meta?` • ${esc(b.meta)}`:''}</span></span><span class="lp-file-dl">Скачать</span></a></section>`,
 info:b=>`<section class="lp-block lp-block--info" data-type="info"><div class="lp-info"><span class="lp-info-icon" aria-hidden="true">!</span><p>${esc(b.text)}</p></div></section>`,
 steps:b=>`<section class="lp-block lp-block--steps" data-type="steps"><div class="lp-block-label">${esc(b.title||BLOCK_LABELS.steps)}</div><ol class="lp-steps">${(b.items||[]).map((item,i)=>`<li class="lp-step"><span class="lp-step-num">${i+1}</span><span class="lp-step-text">${esc(item)}</span></li>`).join('')}</ol></section>`,
 timeline:b=>`<section class="lp-block lp-block--timeline" data-type="timeline"><div class="lp-block-label">${esc(b.title||BLOCK_LABELS.timeline)}</div><div class="lp-timeline">${(b.items||[]).map(item=>`<div class="lp-tl-item"><time class="lp-tl-time">${esc(item.time)}</time><p class="lp-tl-text">${esc(item.text)}</p></div>`).join('')}</div></section>`,
 glossary:b=>`<section class="lp-block lp-block--glossary" data-type="glossary"><div class="lp-block-label">${esc(b.title||BLOCK_LABELS.glossary)}</div><dl class="lp-glossary">${(b.items||[]).map(item=>`<div class="lp-glossary-row"><dt>${esc(item.term)}</dt><dd>${esc(item.def)}</dd></div>`).join('')}</dl></section>`,
 markedImage:b=>`<section class="lp-block lp-block--marked" data-type="markedImage"><div class="lp-block-label">${BLOCK_LABELS.markedImage}</div><figure class="lp-figure lp-figure--marked"><div class="lp-marked-wrap"><img src="${esc(b.src)}" alt="${esc(b.alt||'')}" loading="lazy"/>${(b.markers||[]).map(m=>`<button type="button" class="lp-marker" style="top:${m.top};left:${m.left}" data-tip="${esc(m.text)}" aria-label="${esc(m.text)}"><span>${esc(m.label)}</span></button>`).join('')}</div>${b.caption?`<figcaption class="lp-caption">${esc(b.caption)}</figcaption>`:''}</figure></section>`,
 table:b=>`<section class="lp-block lp-block--table" data-type="table"><div class="lp-block-label">${esc(b.title||BLOCK_LABELS.table)}</div><div class="lp-table-wrap"><table class="lp-table"><thead><tr>${(b.headers||[]).map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${(b.rows||[]).map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`,
 diagram:b=>`<section class="lp-block lp-block--diagram" data-type="diagram"><div class="lp-block-label">${esc(b.title||BLOCK_LABELS.diagram)}</div><figure class="lp-figure"><div class="lp-media lp-media--diagram"><img src="${esc(b.src)}" alt="${esc(b.title||'')}" loading="lazy"/></div>${b.caption?`<figcaption class="lp-caption">${esc(b.caption)}</figcaption>`:''}</figure></section>`,
 flowchart:b=>`<section class="lp-block lp-block--flowchart" data-type="flowchart"><div class="lp-block-label">${esc(b.title||BLOCK_LABELS.flowchart)}</div><div class="lp-flow">${(b.nodes||[]).map((node,i)=>`${i?'<span class="lp-flow-arrow" aria-hidden="true">↓</span>':''}<div class="lp-flow-node">${esc(node)}</div>`).join('')}</div></section>`
};

function renderBlocks(blocks){
 return (blocks||[]).map(b=>{
  const type=b.type==='p'||!b.type&&b.text?'text':b.type;
  const fn=blockRenderers[type]||blockRenderers.text;
  return fn({...b,type});
 }).join('');
}

function courseUnits(){
 const units=[];
 COURSE_PREVIEW.lessons.forEach((lesson,i)=>{
  if(lesson.kind==='test') units.push({...lesson,unitType:'test'});
  else units.push({...lesson,unitType:'lesson',index:units.filter(u=>u.unitType==='lesson').length});
 });
 return units;
}

function allNavItems(){
 const items=[{id:'cover',type:'cover',title:'О курсе',status:'available'}];
 let lessonNum=0;
 COURSE_PREVIEW.lessons.forEach(u=>{
  if(u.kind==='test') items.push({id:u.id,type:'test',title:u.title,afterLesson:u.afterLesson,status:'locked'});
  else{
   lessonNum+=1;
   items.push({id:u.id,type:'lesson',title:u.title,kicker:u.kicker,meta:`${u.duration}`,required:u.required,lessonIndex:lessonNum-1,status:lessonNum===1?'available':'locked'});
  }
 });
 items.push({id:'final',type:'finalTest',title:'Итоговый тест',status:'locked'});
 return items;
}

const state={view:'cover',completed:new Set(),testScores:{}};

function progressPct(){
 const lessons=COURSE_PREVIEW.lessons.filter(l=>l.kind!=='test').length;
 const done=[...state.completed].filter(id=>id.startsWith('l')).length;
 return Math.round((done/lessons)*100)||0;
}

function unlockNav(){
 const items=allNavItems();
 let prevDone=true;
 items.forEach(item=>{
  if(item.type==='cover'){item.status='available';return;}
  if(item.type==='lesson'){
   item.status=prevDone?'available':'locked';
   prevDone=state.completed.has(item.id);
   return;
  }
  if(item.type==='test'){
   const lessonId=`l${item.afterLesson+1}`;
   item.status=state.completed.has(lessonId)?'available':'locked';
   if(state.completed.has(item.id)) prevDone=true;
   else if(item.status==='available'&&!state.completed.has(item.id)) prevDone=false;
   return;
  }
  if(item.type==='finalTest'){
   const allLessons=COURSE_PREVIEW.lessons.filter(l=>l.kind!=='test').every(l=>state.completed.has(l.id));
   const allInline=COURSE_PREVIEW.lessons.filter(l=>l.kind==='test').every(t=>state.completed.has(t.id));
   item.status=allLessons&&allInline?'available':'locked';
  }
 });
 return items;
}

function renderNav(){
 const items=unlockNav();
 return items.map(item=>{
  const on=state.view===item.id?' is-current':'';
  const locked=item.status==='locked'?' is-locked':'';
  const done=state.completed.has(item.id)?' is-done':'';
  const icon=item.type==='cover'?'◎':item.type==='test'||item.type==='finalTest'?'✓':item.lessonIndex!=null?String(item.lessonIndex+1):'';
  const meta=item.meta||'';
  return `<button type="button" class="lp-nav-item${on}${locked}${done}" data-nav="${item.id}" ${item.status==='locked'?'disabled':''}><span class="lp-nav-thumb">${icon}</span><span class="lp-nav-body"><span class="lp-nav-title">${esc(item.title)}</span>${meta?`<span class="lp-nav-meta">${esc(meta)}</span>`:''}</span></button>`;
 }).join('');
}

function isCorrectOption(q,oi){
 if(q.type==='multi') return (q.correct||[]).includes(oi);
 return oi===q.correct;
}
function matchRightOptions(pairs){
 return [...new Set((pairs||[]).map(p=>p.right))];
}
function renderMatchQuestion(q,qi){
 const rights=matchRightOptions(q.pairs);
 const opts=rights.map(r=>`<option value="${esc(r)}">${esc(r)}</option>`).join('');
 return `<fieldset class="lp-q lp-q--match" data-q="${qi}"><legend class="lp-q-title">${qi+1}. ${esc(q.q)}<span class="lp-q-type">Сопоставление</span></legend><div class="lp-match">${(q.pairs||[]).map((pair,pi)=>{
  const mark=`<span class="lp-match-mark" title="верный: ${esc(pair.right)}"><span class="lp-opt-mark" aria-hidden="true">●</span><span class="lp-match-ans">${esc(pair.right)}</span></span>`;
  return `<div class="lp-match-row"><span class="lp-match-left">${esc(pair.left)}</span><span class="lp-match-arrow" aria-hidden="true">→</span><select class="lp-match-select" name="q${qi}_${pi}" required><option value="">Выберите ответ</option>${opts}</select>${mark}</div>`;
 }).join('')}</div></fieldset>`;
}
function renderChoiceQuestion(q,qi){
 return `<fieldset class="lp-q" data-q="${qi}"><legend class="lp-q-title">${qi+1}. ${esc(q.q)}</legend><div class="lp-q-options">${q.options.map((opt,oi)=>{
  const inputType=q.type==='multi'?'checkbox':'radio';
  const name=q.type==='multi'?`q${qi}[]`:`q${qi}`;
  const mark=isCorrectOption(q,oi)?'<span class="lp-opt-mark" aria-hidden="true" title="верный">●</span>':'';
  return `<label class="lp-opt"><input type="${inputType}" name="${name}" value="${oi}"/><span class="lp-opt-text">${esc(opt)}</span>${mark}</label>`;
 }).join('')}</div></fieldset>`;
}
function renderTest(unit,isFinal){
 const items=unit.items||[];
 return `<div class="lp-test">
  <header class="lp-test-head"><p class="lp-kicker">${isFinal?'Итоговая проверка':'Промежуточный тест'}</p><h1 class="lp-lesson-title">${esc(unit.title)}</h1><p class="lp-test-hint">Проходной балл — ${unit.pass||80}%. Можно вернуться к уроку и повторить попытку.</p></header>
  <form class="lp-test-form" id="testForm">${items.map((q,qi)=>q.type==='match'?renderMatchQuestion(q,qi):renderChoiceQuestion(q,qi)).join('')}<div class="lp-lesson-foot"><button type="submit" class="lp-btn lp-btn--primary">Проверить ответы</button></div></form>
  <div class="lp-test-result hidden" id="testResult"></div>
</div>`;
}

function scoreTest(unit,form){
 const items=unit.items||[];
 let correct=0;
 items.forEach((q,qi)=>{
  if(q.type==='match'){
   const allOk=(q.pairs||[]).every((pair,pi)=>{
    const sel=form.querySelector(`select[name="q${qi}_${pi}"]`);
    return sel&&sel.value===pair.right;
   });
   if(allOk) correct+=1;
  }else if(q.type==='multi'){
   const picked=[...form.querySelectorAll(`input[name="q${qi}[]"]:checked`)].map(el=>Number(el.value)).sort();
   const ok=[...(q.correct||[])].sort();
   if(JSON.stringify(picked)===JSON.stringify(ok)) correct+=1;
  }else{
   const picked=form.querySelector(`input[name="q${qi}"]:checked`);
   if(picked&&Number(picked.value)===q.correct) correct+=1;
  }
 });
 return Math.round((correct/items.length)*100);
}

function renderMain(){
 const root=document.getElementById('lpMain');
 if(state.view==='cover'){
  root.innerHTML=`<div class="lp-cover"><div class="lp-cover-hero" style="background-image:url('${esc(COURSE_PREVIEW.coverPhoto)}')"><div class="lp-cover-overlay"><p class="lp-kicker">Электронный курс</p><h1 class="lp-cover-title">${esc(COURSE_PREVIEW.title)}</h1><p class="lp-cover-desc">${esc(COURSE_PREVIEW.description)}</p><button type="button" class="lp-btn lp-btn--primary" id="startCourse">Начать курс</button></div></div><div class="lp-cover-stats"><div><b>${COURSE_PREVIEW.lessons.filter(l=>l.kind!=='test').length}</b><span>уроков</span></div><div><b>${COURSE_PREVIEW.lessons.filter(l=>l.kind==='test').length+1}</b><span>тестов</span></div><div><b>~24</b><span>минут</span></div></div></div>`;
  document.getElementById('startCourse')?.addEventListener('click',()=>go('l1'));
  return;
 }
 if(state.view==='final'){
  root.innerHTML=renderTest(COURSE_PREVIEW.finalTest,true);
  bindTestForm(COURSE_PREVIEW.finalTest,'final');
  return;
 }
 const unit=COURSE_PREVIEW.lessons.find(l=>l.id===state.view);
 if(!unit) return;
 if(unit.kind==='test'){
  root.innerHTML=renderTest(unit,false);
  bindTestForm(unit,unit.id);
  return;
 }
 root.innerHTML=`<article class="lp-lesson" data-theme="${COURSE_PREVIEW.theme}">
  <header class="lp-lesson-hero"><p class="lp-kicker">${esc(unit.kicker)}</p><h1 class="lp-lesson-title">${esc(unit.coverTitle)}</h1><p class="lp-lesson-meta">${esc(unit.duration)}${unit.required?' • обязательный':''}</p></header>
  <div class="lp-lesson-body">${renderBlocks(unit.blocks)}</div>
  <footer class="lp-lesson-foot"><button type="button" class="lp-btn lp-btn--primary" id="completeLesson">Завершить урок</button></footer>
</article>`;
 document.getElementById('completeLesson')?.addEventListener('click',()=>{
  state.completed.add(unit.id);
  const items=unlockNav();
  const idx=items.findIndex(i=>i.id===unit.id);
  const next=items.slice(idx+1).find(i=>i.status!=='locked'||state.completed.has(i.id));
  go(next?.id||'cover');
 });
 bindMarkedImages();
 initAudioWaves();
}
function initAudioWaves(){
 document.querySelectorAll('.lp-audio-wave').forEach(wave=>{
  if(wave.dataset.bars) return;
  wave.dataset.bars='1';
  for(let i=0;i<48;i++){const bar=document.createElement('span');bar.className='lp-audio-bar';bar.style.height=(10+Math.abs(Math.sin(i*.5))*28+(i%4)*3)+'px';wave.appendChild(bar);}
 });
}

function bindTestForm(unit,id){
 const form=document.getElementById('testForm');
 const result=document.getElementById('testResult');
 form?.addEventListener('submit',e=>{
  e.preventDefault();
  const pct=scoreTest(unit,form);
  const pass=pct>=(unit.pass||80);
  state.testScores[id]=pct;
  result.classList.remove('hidden');
  result.innerHTML=`<div class="lp-result ${pass?'is-pass':'is-fail'}"><b>${pct}%</b><p>${pass?'Отлично! Можно переходить дальше.':'Нужно набрать больше правильных ответов — вернитесь к материалу.'}</p>${pass?`<button type="button" class="lp-btn lp-btn--primary" id="testContinue">Продолжить</button>`:`<button type="button" class="lp-btn" id="testRetry">Попробовать снова</button>`}</div>`;
  if(pass){
   state.completed.add(id);
   document.getElementById('testContinue')?.addEventListener('click',()=>{
    const items=unlockNav();
    const idx=items.findIndex(i=>i.id===id);
    const next=items.slice(idx+1).find(i=>i.status!=='locked');
    go(next?.id||'cover');
   });
  }else document.getElementById('testRetry')?.addEventListener('click',()=>{result.classList.add('hidden');form.reset();});
 });
}

function bindMarkedImages(){
 document.querySelectorAll('.lp-marker').forEach(btn=>{
  btn.addEventListener('click',()=>{
   const tip=btn.dataset.tip;
   let pop=btn.querySelector('.lp-marker-tip');
   if(!pop){pop=document.createElement('span');pop.className='lp-marker-tip';btn.appendChild(pop);}
   pop.textContent=tip;
   pop.classList.toggle('is-open');
  });
 });
}

function go(id){
 state.view=id;
 document.getElementById('lpNavList').innerHTML=renderNav();
 renderMain();
 document.getElementById('lpProgress').style.width=`${progressPct()}%`;
 document.getElementById('lpProgressLabel').textContent=`${progressPct()}%`;
 window.scrollTo({top:0,behavior:'smooth'});
}

function initCoursePreview(){
 document.getElementById('lpCourseTitle').textContent=COURSE_PREVIEW.title;
 document.getElementById('lpNavList').innerHTML=renderNav();
 document.getElementById('lpNavList').addEventListener('click',e=>{
  const btn=e.target.closest('[data-nav]');
  if(!btn||btn.disabled) return;
  go(btn.dataset.nav);
 });
 document.getElementById('lpExit')?.addEventListener('click',()=>{window.close();window.location.href='prototype.html';});
 renderMain();
}

initCoursePreview();
