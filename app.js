const assistantUri="assets/assistant.png";
const trashIconUri="assets/Корзина.svg";
const videoSlidePhotos=["assets/video-slide-1.jpg","assets/video-slide-2.jpg","assets/video-slide-3.jpg","assets/video-slide-4.jpg"];
const MODE_LABELS={video:'Видео',podcast:'Подкаст',longread:'Лонгрид',course:'Электронный курс'};

const COVER_DATA={
 longread:{
  title:'Опасности на производстве: как их распознать',
  description:'Материал для новых сотрудников цеха: объясняет базовые виды опасностей и помогает замечать риски до начала смены.',
  photo:'assets/scene-1.jpg',
  fieldTitle:'Опасности на производстве: как их распознать',
  fieldDesc:'Материал для новых сотрудников цеха: объясняет базовые виды опасностей и помогает замечать риски до начала смены.'
 },
 course:{
  title:'Курс: опасности на производстве',
  description:'Последовательное обучение для операторов и мастеров: от введения до практик защиты и профилактики на рабочем месте.',
  photo:'assets/image 541.jpg',
  fieldTitle:'Курс: опасности на производстве',
  fieldDesc:'Последовательное обучение для операторов и мастеров: от введения до практик защиты и профилактики на рабочем месте.'
 }
};

const VIDEO_SCENES=[
 {
  title:'Введение в тему',eye:'Старт обучения',
  duration:'0:45',current:'0:12',progress:27,
  slide:`<div class="eye">Старт обучения</div><div class="big content-heading">Введение в тему</div><div class="line"></div><div class="brow"><span class="bi">1</span><span class="content-text">Риски есть в каждой рабочей зоне — их нужно знать заранее.</span></div><div class="brow"><span class="bi">2</span><span>Разберём, что важно запомнить уже сегодня.</span></div>`,
  editorTitle:'Введение в тему',
  theses:['Риски есть в каждой рабочей зоне — их нужно знать заранее.','Разберём, что важно запомнить уже сегодня.'],
  scripts:[['00:00 — 00:08','Здравствуйте. Начинаем короткий курс о производственных опасностях.'],['00:09 — 00:18','Сначала разберём, зачем эта тема нужна каждому сотруднику на смене.']]
 },
 {
  title:'Понятие опасностей',eye:'Ключевое понятие',
  duration:'0:55',current:'0:18',progress:33,
  slide:`<div class="eye">Ключевое понятие</div><div class="big content-heading">Понятие опасностей</div><p class="content-text slide-lead">Опасность — условие или действие, которое может привести к травме или аварии.</p><div class="info slide-note">Её можно устранить до инцидента.</div>`,
  editorTitle:'Понятие опасностей',
  theses:['Опасность — условие или действие, которое может привести к травме или аварии.'],
  scripts:[['00:00 — 00:12','Опасность — это не только уже произошедший инцидент, а то, что может его спровоцировать.'],['00:13 — 00:24','Отличайте опасность от нарушения: первое видно до того, как кто-то пострадал.']]
 },
 {
  title:'Основные виды опасностей',eye:'Классификация',
  duration:'1:05',current:'0:22',progress:34,
  slide:`<div class="eye">Классификация</div><div class="big content-heading">Основные виды опасностей</div><div class="brow compact"><span class="bi">1</span><span>Химические — пары, пыль, едкие вещества</span></div><div class="brow compact"><span class="bi">2</span><span>Механические — движущиеся части, грузы</span></div><div class="brow compact"><span class="bi">3</span><span>Физические — шум, вибрация, температура</span></div>`,
  editorTitle:'Основные виды опасностей',
  theses:['Химические — пары, пыль, едкие вещества','Механические — движущиеся части, грузы','Физические — шум, вибрация, температура'],
  scripts:[['00:00 — 00:14','Опасности удобно группировать по источнику: химия, механика, физика и организация труда.'],['00:15 — 00:28','В цехе редко встречается только один тип — обычно их несколько одновременно.']]
 },
 {
  title:'Причины возникновения',eye:'Источники риска',
  duration:'0:50',current:'0:15',progress:30,
  slide:`<div class="eye">Источники риска</div><div class="big content-heading">Причины возникновения</div><p class="content-text slide-lead">Риск растёт из-за износа оборудования, спешки и игнорирования инструкций.</p>`,
  editorTitle:'Причины возникновения',
  theses:['Риск растёт из-за износа оборудования, спешки и игнорирования инструкций.'],
  scripts:[['00:00 — 00:11','Причины бывают технические и человеческие — обе группы одинаково важны.'],['00:12 — 00:22','Если видите повторяющуюся мелочь, скорее всего, за ней стоит системная причина.']]
 }
];

const PODCAST_TOTAL='10:40';

const PODCAST_CHAPTERS=[
 {
  title:'Вступление',
  heading:'Почему безопасность начинается с наблюдения',
  intro:'В этом выпуске — разговор о том, как замечать опасности до инцидента.',
  start:'0:00',end:'1:10',flex:70,current:'0:32',progress:46,
  scripts:[['Ведущий','Сегодня поговорим, почему внимательность на смене важнее формальной отчётности.'],['Эксперт','Инцидент почти никогда не появляется внезапно — обычно перед ним были заметные сигналы.']]
 },
 {
  title:'Что считается опасностью',
  heading:'Где проходит граница между риском и нарушением',
  intro:'Разбираем определение опасности на примерах из цеха и склада.',
  start:'1:10',end:'3:40',flex:150,current:'2:14',progress:21,
  scripts:[['Ведущий','Что в вашем понимании считается опасностью на производстве?'],['Эксперт','Это любое условие, при котором травма или авария становятся вероятными.'],['Ведущий','А если никто пока не пострадал?'],['Эксперт','Тогда это как раз момент, когда риск ещё можно снять без последствий.']]
 },
 {
  title:'Ошибки на рабочем месте',
  heading:'Пять типичных ошибок, которые усиливают риск',
  intro:'От спешки до «быстрых лайфхаков» без СИЗ — и как их распознать.',
  start:'3:40',end:'7:20',flex:220,current:'5:05',progress:38,
  scripts:[['Ведущий','Какие ошибки вы чаще всего видите у коллег?'],['Эксперт','Снимают защиту «на минутку», обходят ограждения, перегружают тележку.'],['Эксперт','Ещё одна — игнорировать странный звук или запах, надеясь, что само пройдёт.']]
 },
 {
  title:'Краткий итог',
  heading:'Три правила, которые стоит унести со смены',
  intro:'Коротко фиксируем главное и даём ориентиры для самопроверки.',
  start:'7:20',end:'10:40',flex:200,current:'8:48',progress:44,
  scripts:[['Ведущий','Давайте соберём итог в три простых правила.'],['Эксперт','Смотри до начала работы, останавливай при сомнении, сообщай о риске сразу.'],['Ведущий','Спасибо — берите это с собой на следующую смену.']]
 }
];

function docBlocks(n,items){
 return items.slice(0,n);
}
function renderDocHtml(blocks){
 return blocks.map(b=>{
  if(b.type==='h2') return `<h2 class="doc-section-title">${b.text}</h2>`;
  if(b.type==='h3') return `<h3 class="doc-subheading">${b.text}</h3>`;
  if(b.type==='list') return `<ul class="doc-list">${(b.items||[]).map(i=>`<li>${i}</li>`).join('')}</ul>`;
  if(b.type==='steps') return `<ol class="doc-steps">${(b.items||[]).map(i=>`<li>${i}</li>`).join('')}</ol>`;
  if(b.type==='image') return `<figure class="doc-figure"><div class="doc-image"><img src="${b.src||'assets/scene-1.jpg'}" alt="${b.alt||''}"/></div>${b.caption?`<figcaption>${b.caption}</figcaption>`:''}</figure>`;
  if(b.type==='info') return `<div class="info"><b>${b.strong||'Важно:'}</b> ${b.text}</div>`;
  return `<p>${b.text}</p>`;
 }).join('');
}

const LONGREAD_SECTIONS=[
 {
  title:'Введение',
  coverTitle:'Производственная безопасность: с чего начать',
  kicker:'Раздел 1',
  blocks:docBlocks(2,[
   {text:'Производственные опасности — это условия работы, при которых сотрудник может получить травму или заболевание.'},
   {type:'info',text:'Цель материала — научить замечать риски до того, как они превратятся в инцидент.'}
  ])
 },
 {
  title:'Виды опасностей',
  coverTitle:'Классификация опасностей на предприятии',
  kicker:'Раздел 2',
  blocks:docBlocks(3,[
   {text:'Химические опасности связаны с парами, аэрозолями и контактом с едкими веществами — даже краткое воздействие может быть вредным.'},
   {text:'Механические возникают у движущихся механизмов, при падении инструмента или неустойчивом штабелировании материалов.'},
   {type:'info',text:'Организационные риски часто недооценивают: усталость, двойная смена и работа без напарника тоже повышают вероятность ошибки.'}
  ])
 },
 {
  title:'Как распознавать риски',
  coverTitle:'Практика: чек-лист перед началом смены',
  kicker:'Раздел 3',
  blocks:docBlocks(4,[
   {text:'Осмотрите рабочую зону: нет ли луж, посторонних предметов, незакрытых люков и повреждённых ограждений.'},
   {text:'Проверьте СИЗ: перчатки, очки, обувь и каска должны подходить по размеру и быть без трещин.'},
   {text:'Оцените шум и освещение — если плохо слышно сигнал или не видно манипулятора, сообщите мастеру.'},
   {type:'info',text:'Если инструкция расходится с реальной обстановкой, остановите работу и уточните порядок действий.'}
  ])
 },
 {
  title:'Итоговый блок',
  coverTitle:'Что делать, если риск уже замечен',
  kicker:'Раздел 4',
  blocks:docBlocks(5,[
   {text:'Зафиксируйте опасность: фото, краткое описание, место и время — это ускорит реакцию службы безопасности.'},
   {text:'Ограничьте доступ, если риск может затронуть других — лента, знак, сообщение бригадиру.'},
   {text:'Не пытайтесь «быстро исправить» без полномочий: временные меры допустимы только по инструкции.'},
   {text:'После устранения проверьте, что причина не повторится — иначе инцидент вернётся через неделю.'},
   {type:'info',text:'Культура безопасности строится на том, что сообщать о риске — нормально, а не «стучать».'}
  ])
 }
];

const COURSE_LESSONS=[
 {
  title:'Введение',
  coverTitle:'Введение в производственные опасности',
  kicker:'Урок 1',
  required:true,
  blocks:[
   {type:'h2',text:'Зачем этот курс'},
   {text:'Производственные опасности — условия работы, при которых сотрудник может получить травму или заболевание. Курс поможет операторам и мастерам системно смотреть на риски: от базовых определений до ежедневных практик.'},
   {type:'image',src:'assets/video-slide-1.jpg',alt:'Осмотр оборудования на производстве',caption:'Перед сменой важно проверить исправность оборудования и отсутствие посторонних в рабочей зоне.'},
   {type:'h3',text:'Что вы узнаете'},
   {type:'list',items:['Как отличать химические, механические и организационные риски','Как проводить короткий осмотр рабочей зоны перед сменой','Какие СИЗ подбирать под конкретную задачу','Как фиксировать и эскалировать замеченные опасности']},
   {type:'h3',text:'Как проходить уроки'},
   {type:'steps',items:['Прочитайте материал и отметьте непонятные места','Сверьте примеры с реальной зоной, где вы работаете','Выполните мини-чек-лист в конце урока','Переходите к следующему уроку после самопроверки']},
   {type:'info',text:'После каждого урока закрепляйте материал короткой самопроверкой на рабочем месте — это занимает 3–5 минут, но снижает риск ошибки.'}
  ]
 },
 {
  title:'Химические опасности',
  coverTitle:'Химические опасности: распознавание и защита',
  kicker:'Урок 2',
  required:true,
  blocks:[
   {type:'h2',text:'Где возникают химические риски'},
   {text:'Пары растворителей, сварочный дым и пыль абразива накапливаются незаметно. Важно знать ПДК, сроки проветривания и правила хранения веществ на участке.'},
   {type:'image',src:'assets/video-slide-2.jpg',alt:'Хранение химических веществ на участке',caption:'Маркировка ёмкостей и зона хранения химии должны быть видны с рабочего места.'},
   {type:'h3',text:'Типовые источники'},
   {type:'list',items:['Лакокрасочные материалы и растворители','Сварочные и резательные аэрозоли','Средства мойки и обезжиривания','Пыль при шлифовке и резке']},
   {type:'h3',text:'Правила безопасной работы'},
   {type:'steps',items:['Проверьте вентиляцию и показания газоанализатора','Используйте респиратор и защитные очки по карте СИЗ','Храните химию только в маркированной таре','Не смешивайте вещества без письменного разрешения']},
   {type:'info',text:'При резком запахе, головокружении или жжении в глазах прекратите работу, выйдите на свежий воздух и сообщите ответственному.'}
  ]
 },
 {
  title:'Механические опасности',
  coverTitle:'Механические опасности у станков и грузоподъёмного оборудования',
  kicker:'Урок 3',
  required:false,
  blocks:[
   {type:'h2',text:'Зоны повышенного риска'},
   {text:'Вращающиеся части, зажимы, режущие инструменты и траектории движения грузов — основные источники травм. Защитные кожухи и ограждения нельзя снимать «для удобства».'},
   {type:'h3',text:'Перед пуском оборудования'},
   {type:'list',items:['СТОП-кнопка и аварийный контур работают','В зоне перемещения нет посторонних','Ограждения и блокировки на месте','Инструмент и заготовка закреплены']},
   {type:'image',src:'assets/video-slide-3.jpg',alt:'Блокировка оборудования при обслуживании',caption:'Процедура LOTO: оборудование блокируют и маркируют, пока ведутся ремонтные работы.'},
   {type:'h3',text:'При перемещении грузов'},
   {text:'Оцените центр тяжести, маршрут и состояние строп. Падение даже небольшой детали опасно — не заходите под поднятый груз без фиксации.'},
   {type:'steps',items:['Согласуйте сигналы с напарником или крановщиком','Проверьте грузозахватные приспособления','Ведите груз плавно, без рывков','Опускайте только после подтверждения, что зона свободна']},
   {type:'info',text:'Блокировка и маркировка (LOTO) обязательны при обслуживании — «быстрый ремонт на ходу» недопустим.'}
  ]
 },
 {
  title:'Защита и профилактика',
  coverTitle:'Защита и профилактика: ежедневные привычки',
  kicker:'Урок 4',
  required:true,
  blocks:[
   {type:'h2',text:'СИЗ и ежедневные привычки'},
   {text:'Универсального набора защиты не существует: перчатки от порезов не защищают от химии, а очки от пыли — от брызг кислоты. Подбирайте СИЗ под задачу и проверяйте срок годности.'},
   {type:'h3',text:'Чек-лист начала смены'},
   {type:'list',items:['СИЗ подобраны и без повреждений','Рабочая зона осмотрена, проходы свободны','Инструмент исправен, ограждения на месте','Известен порядок действий при нештатной ситуации']},
   {type:'h3',text:'Профилактика инцидентов'},
   {text:'Короткий инструктаж перед нестандартной операцией нужен даже опытным сотрудникам. Журнал замечаний помогает замечать системные проблемы до аварии.'},
   {type:'steps',items:['Фиксируйте «почти-инциденты» — они дешевле разбора реальных аварий','Сообщайте о рисках без страха «стучать»','Участвуйте в разборе и предлагайте улучшения','Проверяйте, что временные меры не стали постоянными']},
   {type:'image',src:'assets/video-slide-4.jpg',alt:'Инструктаж по средствам защиты',caption:'СИЗ, аптечка и огнетушитель должны быть под рукой — команда проходит инструктаж перед сменой.'},
   {type:'info',text:'Профилактика дешевле простоя и лечения: 5 минут проверки в начале смены экономят часы и здоровье.'}
  ]
 }
];

function deleteBtn(){
 return `<button class="ghost delete-btn" type="button" aria-label="Удалить"><img class="delete-icon" src="${trashIconUri}" alt=""/></button>`;
}
function mkSelect(options,selected){
 return `<div class="select-wrap"><button type="button" class="select" data-value="${selected}" data-options="${options.join('|')}"><span class="select-value">${selected}</span><span class="select-caret">⌄</span></button></div>`;
}
function aiGenerateBtn(text,extraClass='',attrs=''){
 return `<button class="btn ai-btn${extraClass?` ${extraClass}`:''}" type="button"${attrs}><img class="ai-orb" src="${assistantUri}"/>${text}</button>`;
}

function closeAllSelects(){
 document.querySelectorAll('.select.open').forEach(btn=>btn.classList.remove('open'));
 document.querySelectorAll('.dropdown').forEach(menu=>menu.remove());
}

function pluralRu(n,one,few,many){
 const mod10=n%10,mod100=n%100;
 if(mod100>=11&&mod100<=14) return `${n} ${many}`;
 if(mod10===1) return `${n} ${one}`;
 if(mod10>=2&&mod10<=4) return `${n} ${few}`;
 return `${n} ${many}`;
}
function itemMeta(type,i){
 const slides=[2,3,4,5],blocks=[2,3,4,5],mins=[3,4,5,6];
 if(type==='video') return `${pluralRu(slides[i],'слайд','слайда','слайдов')} • ${mins[i]} мин`;
 if(type==='course'){
  const n=COURSE_LESSONS[i]?.blocks?.length||blocks[i];
  return `${pluralRu(n,'блок','блока','блоков')} • ${mins[i]} мин`;
 }
 return `${pluralRu(blocks[i],'блок','блока','блоков')} • ${mins[i]} мин`;
}
function blockIcon(asset,label){
 return `<button class="block"><div class="icon"><img class="block-icon" src="assets/${asset}" alt=""/></div>${label}</button>`;
}
function theoryBlocks(type){
 const blocks=[
  `<button class="block"><div class="icon block-icon-text">T</div>Текст</button>`,
  blockIcon('Изображение.svg','Изображение'),
  blockIcon('Видео.svg','Видео'),
  blockIcon('Файл.svg','Файл'),
  blockIcon('Важный блок.svg','Важный блок')
 ];
 if(type==='longread'||type==='course'){
  blocks.push(blockIcon('Блок-схема.svg','Блок-схема'),blockIcon('Таблица.svg','Таблица'),blockIcon('Диаграмма.svg','Диаграмма'));
 }
 return blocks.join('');
}
const COURSE_THEME_COLORS=[
 {id:'gray',label:'Светло-серый'},
 {id:'warm',label:'Тёплый'},
 {id:'blue',label:'Голубой'},
 {id:'dark',label:'Тёмный'}
];
const COURSE_FONTS=['Verdana','Arial','Georgia','Open Sans'];
function courseThemePanel(){
 return `<div class="sec course-theme-sec">
  <p class="section-kicker course-theme-kicker">Тема курса</p>
  <span class="label course-field-label">Цвет оформления</span>
  <div class="course-color-dots">${COURSE_THEME_COLORS.map((c,i)=>`<button type="button" class="course-color-dot dot ${c.id}${i===2?' on':''}" data-course-color="${c.id}" aria-label="${c.label}" title="${c.label}"></button>`).join('')}</div>
  <span class="label course-field-label">Шрифт</span>
  <div class="select-wrap course-font-wrap">${mkSelect(COURSE_FONTS,COURSE_FONTS[0]).replace('class="select"','class="select course-font-select"')}</div>
  <span class="label course-field-label">Структура</span>
  <div class="course-layout-toggle" role="group" aria-label="Плотность структуры">
    <button type="button" class="course-layout-btn on" data-course-layout="comfortable">Свободная</button>
    <button type="button" class="course-layout-btn" data-course-layout="compact">Компактная</button>
  </div>
</div>`;
}
function courseLessonPanel(activeIndex=0){
 const lesson=COURSE_LESSONS[activeIndex];
 const required=!!lesson?.required;
 return `<div class="sec course-lesson-sec">
  <div class="trow course-required-row">
    <span>Обязательное прохождение</span>
    <button type="button" class="toggle course-required-toggle${required?' on':''}" data-lesson="${activeIndex}" aria-label="Обязательное прохождение урока"><span></span></button>
  </div>
  <p class="hint course-required-hint">Следующий урок откроется только после завершения текущего.</p>
</div>`;
}
function rightTheory(type){
 if(type==='course'){
  return `<aside class="right theory-right course-right"><div class="rt"><button>Панель настроек</button></div><div class="course-right-theme">${courseThemePanel()}</div><div class="course-right-lesson hidden"></div><div class="sec course-blocks-sec course-right-blocks hidden"><div class="blocks">${theoryBlocks(type)}</div></div></aside>`;
 }
 return `<aside class="right theory-right"><div class="rt"><button>Панель настроек</button></div><div class="sec"><div class="blocks">${theoryBlocks(type)}</div></div></aside>`;
}
function leftPanel(type){
 const title={video:'Сцены',podcast:'Главы',longread:'Разделы',course:'Уроки'}[type];
 const addLabel={video:'сцены',podcast:'главу',longread:'разделы',course:'уроки'}[type];
 const items={video:['Введение в тему','Понятие опасностей','Основные виды опасностей','Причины возникновения'],podcast:['Вступление','Что считается опасностью','Ошибки на рабочем месте','Краткий итог'],longread:['Введение','Виды опасностей','Как распознавать риски','Итоговый блок'],course:['Введение','Химические опасности','Механические опасности','Защита и профилактика']}[type];
 return `<aside class="left">
  <div class="left-section"><h2 class="left-title">Структура</h2></div>
  ${(type==='longread'||type==='course')?`<div class="left-section">${type==='longread'?'<p class="section-kicker">Обложка</p>':''}<button class="item cover-nav on" data-type="${type}"><div class="thumb cover-mini"><img class="cover-icon" src="assets/Cover icon.svg" alt=""/></div><div class="item-body"><div class="it">${type==='course'?'Обложка и оформление':'Обложка'}</div></div></button></div>`:''}
  <div class="left-section"><p class="section-kicker">${title}</p><div class="list">${items.map((x,i)=>`<button class="item material-nav${i===0&&(type==='video'||type==='podcast')?' on':''}" data-index="${i}" data-type="${type}"><div class="thumb">${i+1}</div><div class="item-body"><div class="it">${x}</div><div class="im">${itemMeta(type,i)}</div></div></button>`).join('')}</div><button class="btn left-add-btn" style="width:100%;margin-top:12px">＋ Добавить ${addLabel}</button></div>
  <div class="left-section"><p class="section-kicker">Проверка знаний</p><button class="test-entry test-nav" data-type="${type}"><div class="topline"><b>Тест по материалу</b><span class="pill ai-pill">AI</span></div><div class="im">6 вопросов • проходной балл 80%</div><div class="im">Создан по сгенерированной теории</div></button>${aiGenerateBtn('Сгенерировать новый','test-nav',` data-type="${type}" style="width:100%;margin-top:10px"`)}</div>
 </aside>`;
}
function rightTest(){return `<aside class="right test-right hidden"><div class="rt"><button>Панель настроек</button></div><div class="sec"><div class="blocks"><button class="block on"><div class="icon">◎</div>Один ответ</button><button class="block"><div class="icon">☑</div>Несколько ответов</button><button class="block"><div class="icon">⇄</div>Сопоставление</button><button class="block"><div class="icon">✓</div>Верно / неверно</button></div></div><div class="sec"><h3>Проходной балл</h3>${mkSelect(['60%','70%','80%','90%','100%'],'80%')}</div><div class="sec"><h3>Попытки</h3>${mkSelect(['1 попытка','2 попытки','3 попытки','Без ограничений'],'2 попытки')}</div></aside>`}
function rightMedia(type){
 const voiceOpts=['Русский — спокойный','Русский — нейтральный','Русский — энергичный','English — calm'];
 const musicOpts=type==='podcast'?['Не выбрана','Спокойная','Деловая','Мягкая ambient','Загрузить файл']:['Не выбрана','Спокойная','Деловая','Мягкая ambient'];
 const langOpts=type==='video'?['Русский','English','Қазақша']:['Русский','English'];
 const subOpts=type==='video'?['Субтитры: на русском','Субтитры: на английском','Без субтитров']:['На русском','На английском','Без расшифровки'];
 return `<aside class="right theory-right"><div class="rt"><button>Панель настроек</button></div>${type==='video'?`<div class="sec"><h3>Аватар ведущего</h3><div class="avatar-row"><img class="avatar-pic" src="assets/scene-1.jpg" alt=""/><div><div>Женщина #1</div><button class="ghost" style="color:#027D86">Сменить</button></div></div></div>`:`<div class="sec"><h3>Голос ведущего</h3>${mkSelect(voiceOpts,voiceOpts[0])}</div>`}<div class="sec"><h3>${type==='video'?'Голос озвучки':'Второй голос'}</h3>${mkSelect(voiceOpts,voiceOpts[0])}</div><div class="sec"><h3>${type==='video'?'Скорость речи':'Темп речи'}</h3><div class="speed-row"><input class="speed" type="range" min=".7" max="1.3" step=".1" value="1"><span class="pill speed-val">1.0x</span></div></div><div class="trow"><span>Фоновая музыка</span><button type="button" class="toggle on" data-panel="music"><span></span></button></div><div class="sec toggle-dependent-sec" data-panel="music">${mkSelect(musicOpts,musicOpts[0])}</div>${type==='video'?`<div class="sec"><h3>Язык видео</h3>${mkSelect(langOpts,langOpts[0])}</div>`:''}<div class="trow"><span>${type==='video'?'Субтитры':'Расшифровка'}</span><button type="button" class="toggle on" data-panel="subs"><span></span></button></div><div class="sec toggle-dependent-sec" data-panel="subs">${mkSelect(subOpts,subOpts[0])}</div></aside>`;
}
function coverArea(type){
 const d=COVER_DATA[type];
 return `<main class="main content-area cover-area">
  <div class="card cover-editor-card cover-preview-card">
    <div class="cover-editor-layout">
      <div class="cover-copy"><h2>${d.title}</h2><p>${d.description}</p></div>
      <div class="cover-photo-zone"><img src="${d.photo}" alt="cover"/><div class="cover-photo-actions"><button class="btn primary">Заменить фото</button>${aiGenerateBtn('Сгенерировать')}</div></div>
    </div>
  </div>
  <div class="card cover-fields-card">
    <div class="cover-fields">
      <label class="full"><span class="label">Заголовок</span><input class="field" value="${d.fieldTitle}"></label>
      <label class="full"><span class="label">Описание</span><textarea class="field">${d.fieldDesc}</textarea></label>
    </div>
    <button class="btn ai-btn cover-ai-btn"><img class="ai-orb" src="${assistantUri}"/>Улучшить описание</button>
  </div>
</main>`;
}
function testArea(type){const src={video:'видео',podcast:'подкаста',longread:'лонгрида',course:'уроков курса'}[type];return `<main class="main test-area hidden" data-type="${type}"><div class="card pad"><div class="test-hero"><div><div class="eye">Проверочный тест</div><h2>Тест по сгенерированному материалу</h2><p class="hint">AI подготовил вопросы на основе ${src}. Инструктор может изменить тип вопроса, варианты ответов, правильный ответ и пояснение.</p></div><div class="ai-box"><b><img class="ai-orb" src="${assistantUri}"/> AI-подготовка</b><p class="hint">Найдено 6 ключевых тем. Сгенерировано 6 вопросов: 3 с одним ответом, 2 с несколькими ответами, 1 сопоставление.</p></div></div><div class="test-settings"><div class="setting-card"><b>6</b><span class="hint">вопросов</span></div><div class="setting-card"><b>80%</b><span class="hint">проходной балл</span></div><div class="setting-card"><b>2</b><span class="hint">попытки</span></div><div class="setting-card"><b>Сразу</b><span class="hint">показывать результат</span></div></div>${question('Один правильный ответ','Какой из факторов относится к химическим опасностям?')}${question('Несколько правильных ответов','Какие действия помогают снизить риск травм на рабочем месте?')}${matchQuestion()}<button class="btn" style="width:100%;margin-top:8px">＋ Добавить вопрос</button></div></main>`}
function question(type,title){return `<div class="q-card"><div class="q-head"><span class="q-type">${type}</span><div><button class="ghost">✎</button>${deleteBtn()}</div></div><label><span class="label">Вопрос</span><textarea class="field">${title}</textarea></label><div style="margin-top:12px"><div class="ans">A&nbsp;&nbsp; Высокий уровень шума</div><div class="ans ok">B&nbsp;&nbsp; Пары растворителей <span>✓</span></div><div class="ans">C&nbsp;&nbsp; Скользкий пол</div><div class="ans">D&nbsp;&nbsp; Движущиеся части оборудования</div></div><label style="display:block;margin-top:14px"><span class="label">Пояснение после ответа</span><textarea class="field">Поясните сотруднику, почему выбранный ответ правильный и как это связано с рабочей ситуацией.</textarea></label></div>`}
function matchQuestion(){return `<div class="q-card"><div class="q-head"><span class="q-type">Сопоставление</span><div><button class="ghost">✎</button>${deleteBtn()}</div></div><label><span class="label">Задание</span><textarea class="field">Соотнесите тип опасности с примером на производстве.</textarea></label><div class="minirow"><input class="field" value="Химическая опасность"><span>→</span><input class="field" value="Пары растворителей"></div><div class="minirow"><input class="field" value="Механическая опасность"><span>→</span><input class="field" value="Движущиеся части оборудования"></div><button class="btn" style="margin-top:10px">＋ Добавить пару</button></div>`}
function videoCenter(){return `<main class="main content-area material-area hidden"><div class="card"><div class="video"><div class="slide"><div class="slide-inner"></div><div class="slide-player"><span class="player-play">▶</span><div class="prog"><span></span></div><span class="player-time">0:12 / 0:45</span></div></div><div class="avatar-zone"><img class="video-photo" src="${videoSlidePhotos[0]}" alt="avatar"/></div><button class="play-big">▶</button></div></div><div class="card" style="margin-top:18px"><div class="panel-tabs"><div class="tg"><button class="in-tab tab-click on" data-group="v" data-target="v1">Текст на слайде</button><button class="in-tab tab-click" data-group="v" data-target="v2">Сценарий</button><button class="in-tab tab-click" data-group="v" data-target="v3">Настройки сцены</button></div><button class="btn ai-btn"><img class="ai-orb" src="${assistantUri}"/>Внести изменения</button></div><div id="v1" class="body panel v video-text-panel"><p class="section-kicker">Заголовок</p><label><span class="label">Текст заголовка</span><input class="field video-title-input" value=""></label><p class="section-kicker" style="margin-top:22px">Основной текст</p><div class="video-theses"></div><button class="btn" style="margin-top:12px">＋ Добавить тезис</button></div><div id="v2" class="panel v hidden video-scripts"></div><div id="v3" class="body panel v hidden" style="display:grid;grid-template-columns:1fr 1fr;gap:18px"><label><span class="label">Фон сцены</span>${mkSelect(['Производственное помещение','Офис','Склад','Открытая площадка'],'Производственное помещение')}</label><label><span class="label">Расположение ведущего</span>${mkSelect(['Справа от текста','Слева от текста','По центру','Только голос'],'Справа от текста')}</label></div></div></main>`}
function parsePodcastTime(t){
 const p=t.split(':').map(Number);
 return p[0]*60+p[1];
}
function chapterTimelineRange(index){
 const total=parsePodcastTime(PODCAST_TOTAL);
 const ch=PODCAST_CHAPTERS[index];
 const start=parsePodcastTime(ch.start);
 const end=parsePodcastTime(ch.end);
 return {left:(start/total)*100,width:((end-start)/total)*100};
}
function formatPodcastTime(seconds){
 const m=Math.floor(seconds/60);
 const s=Math.floor(seconds%60);
 return `${m}:${String(s).padStart(2,'0')}`;
}
function updatePodcastScrubberVisual(timeline,pct){
 timeline.querySelectorAll('.podcast-playhead').forEach(el=>{el.style.left=`${pct}%`;});
 const current=timeline.querySelector('.podcast-current');
 const totalSec=parsePodcastTime(PODCAST_TOTAL);
 if(current) current.textContent=formatPodcastTime(totalSec*pct/100);
 const secAt=totalSec*pct/100;
 const chIdx=PODCAST_CHAPTERS.findIndex(ch=>secAt>=parsePodcastTime(ch.start)&&secAt<parsePodcastTime(ch.end));
 const activeIdx=chIdx>=0?chIdx:PODCAST_CHAPTERS.length-1;
 timeline.querySelectorAll('.chapter-seg').forEach((seg,i)=>seg.classList.toggle('active',i===activeIdx));
 const range=chapterTimelineRange(activeIdx);
 const hi=timeline.querySelector('.podcast-chapter-highlight');
 if(hi){hi.style.left=`${range.left}%`;hi.style.width=`${range.width}%`;}
 const dims=timeline.querySelectorAll('.podcast-wave-dim');
 if(dims[0]) dims[0].style.width=`${range.left}%`;
 if(dims[1]){dims[1].style.left=`${range.left+range.width}%`;dims[1].style.width=`${100-range.left-range.width}%`;}
}
function setPodcastScrubberFromEvent(sec,track,e){
 const timeline=sec?.querySelector('.podcast-timeline');
 if(!timeline||!track) return;
 const rect=track.getBoundingClientRect();
 const pct=Math.max(0,Math.min(100,((e.clientX-rect.left)/rect.width)*100));
 updatePodcastScrubberVisual(timeline,pct);
}
function selectPodcastChapter(sec,index){
 if(!sec||!PODCAST_CHAPTERS[index]) return;
 applyPodcastChapter(sec,index);
 sec.querySelectorAll('.material-nav').forEach((btn,i)=>btn.classList.toggle('on',i===index));
}
function bindPodcastInteractions(){
 const sec=document.getElementById('podcast');
 if(!sec||sec.dataset.podcastUiBound) return;
 sec.dataset.podcastUiBound='1';
 let scrubState=null;
 sec.addEventListener('click',e=>{
  const seg=e.target.closest('.chapter-seg');
  if(seg){selectPodcastChapter(sec,Number(seg.dataset.chapter));return;}
  const track=e.target.closest('.podcast-wave-outer');
  if(track&&!e.target.closest('.podcast-playhead')) setPodcastScrubberFromEvent(sec,track,e);
 });
 sec.addEventListener('mousedown',e=>{
  const handle=e.target.closest('.podcast-playhead');
  const track=e.target.closest('.podcast-wave-outer');
  if(!handle&&!track) return;
  e.preventDefault();
  const row=track||handle?.closest('.podcast-wave-outer');
  if(!row) return;
  scrubState={sec,track:row};
  if(!handle) setPodcastScrubberFromEvent(sec,row,e);
 });
 document.addEventListener('mousemove',e=>{if(scrubState) setPodcastScrubberFromEvent(scrubState.sec,scrubState.track,e);});
 document.addEventListener('mouseup',()=>{scrubState=null;});
}
function podcastTimelineHtml(activeIndex=0){
 const markers=PODCAST_CHAPTERS.map(ch=>ch.start).concat(PODCAST_CHAPTERS[PODCAST_CHAPTERS.length-1].end);
 const ch=PODCAST_CHAPTERS[activeIndex]||PODCAST_CHAPTERS[0];
 const range=chapterTimelineRange(activeIndex);
 return `<div class="podcast-timeline">
  <div class="podcast-timeline-body">
    <button class="podcast-play-btn" type="button" aria-label="Воспроизвести">▶</button>
    <div class="podcast-wave-stack">
      <div class="podcast-wave-outer">
        <div class="podcast-wave-row">
          <div class="podcast-chapter-highlight" style="left:${range.left}%;width:${range.width}%"></div>
          <div class="podcast-wave-dim" style="left:0;width:${range.left}%"></div>
          <div class="podcast-wave-dim" style="left:${range.left+range.width}%;width:${100-range.left-range.width}%"></div>
          <div class="wave podcast-wave"></div>
        </div>
        <button type="button" class="podcast-playhead" style="left:${ch.progress}%" aria-label="Позиция воспроизведения"><span class="podcast-playhead-stick" aria-hidden="true"></span></button>
      </div>
    </div>
    <div class="podcast-time-readout"><span class="podcast-current">${ch.current}</span><span class="podcast-slash"> / </span><span class="podcast-total">${PODCAST_TOTAL}</span></div>
    <div class="podcast-track-gutter" aria-hidden="true"></div>
    <div class="podcast-timeline-meta">
      <div class="podcast-chapters-bar">${PODCAST_CHAPTERS.map((c,i)=>`<button type="button" class="chapter-seg${i===activeIndex?' active':''}" data-chapter="${i}" style="flex:${c.flex}" title="${c.start} — ${c.end}"><span class="chapter-seg-name">${c.title}</span></button>`).join('')}</div>
      <div class="podcast-marker-row">${markers.map(m=>`<span class="podcast-marker">${m}</span>`).join('')}</div>
    </div>
    <div class="podcast-track-gutter" aria-hidden="true"></div>
  </div>
</div>`;
}
function podcastChaptersPanel(){
 return `<div id="p2" class="body panel p hidden podcast-chapters-edit">${PODCAST_CHAPTERS.map(ch=>`<div class="minirow chapter-row"><input class="field" value="${ch.title}"><span class="chapter-time-badge">${ch.start}</span><span class="hint chapter-time-sep">—</span><span class="chapter-time-badge end">${ch.end}</span></div>`).join('')}<button class="btn" style="width:100%;margin-top:12px">＋ Добавить главу</button></div>`;
}
function podcastCenter(){return `<main class="main content-area material-area hidden"><div class="card audio"><div class="podcast-header"><div class="eye">Подкаст</div><div class="big content-heading podcast-heading">Почему безопасность начинается с наблюдения</div><p class="hint content-text podcast-intro">В этом выпуске — разговор о том, как замечать опасности до инцидента.</p></div>${podcastTimelineHtml(0)}</div><div class="card" style="margin-top:18px"><div class="panel-tabs"><div class="tg"><button class="in-tab tab-click on" data-group="p" data-target="p1">Сценарий</button><button class="in-tab tab-click" data-group="p" data-target="p2">Главы</button></div><button class="btn ai-btn"><img class="ai-orb" src="${assistantUri}"/>Внести изменения</button></div><div id="p1" class="panel p podcast-scripts"></div>${podcastChaptersPanel()}</div></main>`}
function docCenter(type){
 const isCourse=type==='course';
 const s=(isCourse?COURSE_LESSONS:LONGREAD_SECTIONS)[0];
 const editorClass=isCourse?'card pad unified-text-editor course-theme-blue':'card pad unified-text-editor';
 const lessonMeta=isCourse?'':`<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px"><div><div class="hint section-kicker-label">${s.kicker}</div><h2 class="section-heading" style="font-size:30px;font-weight:400;letter-spacing:-.03em;margin:5px 0 0">${s.title}</h2></div></div>`;
 const themePanel=isCourse?'':`<div class="theme-panel"><span class="label">Тема блока</span><div class="color-dots"><button class="dot gray"></button><button class="dot warm"></button><button class="dot blue"></button><button class="dot dark"></button></div></div>`;
 return `<main class="main content-area material-area hidden"><div class="${editorClass}"><div class="cover"><h2 class="content-heading">${s.coverTitle}</h2></div>${lessonMeta}<div class="toolbar"><button class="tool">H2</button><select class="size-select"><option>16 px</option><option>18 px</option><option>24 px</option><option>32 px</option></select><button class="tool">B</button><button class="tool">I</button><button class="tool">•</button><button class="tool">🔗</button><button class="tool ai-btn"><img class="ai-orb" src="${assistantUri}"/>AI</button></div>${themePanel}<div class="doc" contenteditable="true">${renderDocHtml(s.blocks)}</div></div></main>`;
}
function render(type){
 const center=type==='video'?videoCenter():type==='podcast'?podcastCenter():docCenter(type);
 const right=type==='video'?rightMedia('video'):type==='podcast'?rightMedia('podcast'):rightTheory(type);
 const cover=(type==='longread'||type==='course')?coverArea(type):'';
 document.getElementById(type).innerHTML=`<div class="layout">${leftPanel(type)}${cover}${center}${testArea(type)}${right}${rightTest()}</div>`;
 if(type==='video'||type==='podcast'){
   const sec=document.getElementById(type);
   sec.querySelectorAll('.material-area').forEach(x=>x.classList.remove('hidden'));
   sec.querySelectorAll('.material-nav')[0]?.classList.add('on');
   if(type==='video') applyVideoScene(sec,0);
   if(type==='podcast'){applyPodcastChapter(sec,0);initPodcastWaves(sec);}
 }
}
['video','podcast','longread','course'].forEach(render);
bindPodcastInteractions();

function applyVideoScene(sec,index){
 const scene=VIDEO_SCENES[index];
 if(!scene||!sec) return;
 const video=sec.querySelector('.video');
 const slideInner=sec.querySelector('.slide-inner');
 const photo=sec.querySelector('.video-photo');
 if(!video||!slideInner||!photo) return;
 photo.src=videoSlidePhotos[index]||videoSlidePhotos[0];
 slideInner.innerHTML=scene.slide;
 const timeEl=sec.querySelector('.player-time');
 const prog=sec.querySelector('.slide-player .prog span');
 if(timeEl) timeEl.textContent=`${scene.current} / ${scene.duration}`;
 if(prog) prog.style.width=`${scene.progress}%`;
 const titleInput=sec.querySelector('.video-title-input');
 if(titleInput) titleInput.value=scene.editorTitle;
 const theses=sec.querySelector('.video-theses');
 if(theses) theses.innerHTML=scene.theses.map(t=>`<div class="minirow"><input class="field" value="${t.replace(/"/g,'&quot;')}">${deleteBtn()}</div>`).join('');
 const scripts=sec.querySelector('.video-scripts');
 if(scripts) scripts.innerHTML=scene.scripts.map(([time,text])=>`<div class="script"><span class="hint">${time}</span><textarea class="field">${text}</textarea>${deleteBtn()}</div>`).join('');
}

function initPodcastWaves(sec){
 sec?.querySelectorAll('.podcast-wave').forEach(wave=>{
  if(wave.dataset.bars) return;
  wave.dataset.bars='1';
  for(let i=0;i<80;i++){const b=document.createElement('div');b.className='bar';b.style.height=(14+Math.abs(Math.sin(i*.45))*55+(i%5)*2)+'px';wave.appendChild(b);}
 });
}

function applyPodcastChapter(sec,index){
 const ch=PODCAST_CHAPTERS[index];
 if(!ch||!sec) return;
 const heading=sec.querySelector('.podcast-heading');
 const intro=sec.querySelector('.podcast-intro');
 if(heading) heading.textContent=ch.heading;
 if(intro) intro.textContent=ch.intro;
 const old=sec.querySelector('.podcast-timeline');
 if(old) old.outerHTML=podcastTimelineHtml(index);
 initPodcastWaves(sec);
 const scripts=sec.querySelector('.podcast-scripts');
 if(scripts) scripts.innerHTML=ch.scripts.map(([role,text])=>`<div class="script"><span class="hint">${role}</span><textarea class="field">${text}</textarea>${deleteBtn()}</div>`).join('');
}

function applyDocSection(sec,type,index){
 const sections=type==='course'?COURSE_LESSONS:LONGREAD_SECTIONS;
 const s=sections[index];
 if(!s||!sec) return;
 const coverH=sec.querySelector('.material-area .content-heading');
 const kicker=sec.querySelector('.section-kicker-label');
 const sectionH=sec.querySelector('.section-heading');
 const doc=sec.querySelector('.material-area .doc');
 if(coverH) coverH.textContent=s.coverTitle;
 if(type!=='course'){
  if(kicker) kicker.textContent=s.kicker;
  if(sectionH) sectionH.textContent=s.title;
 }
 if(doc) doc.innerHTML=renderDocHtml(s.blocks);
 if(type==='course') refreshCourseRightPanel(sec,index,false);
}
function refreshCourseRightPanel(sec,index,coverMode){
 const themeWrap=sec?.querySelector('.course-right-theme');
 const lessonWrap=sec?.querySelector('.course-right-lesson');
 const blocksWrap=sec?.querySelector('.course-right-blocks');
 if(themeWrap) themeWrap.classList.toggle('hidden',!coverMode);
 if(lessonWrap){
  lessonWrap.classList.toggle('hidden',coverMode);
  if(!coverMode) lessonWrap.innerHTML=courseLessonPanel(index);
 }
 if(blocksWrap) blocksWrap.classList.toggle('hidden',coverMode);
}
function getCourseEditor(){
 return document.querySelector('#course .material-area .unified-text-editor');
}
function applyCourseThemeColor(colorId){
 const editor=getCourseEditor();
 if(!editor) return;
 editor.classList.remove('course-theme-gray','course-theme-warm','course-theme-blue','course-theme-dark');
 editor.classList.add(`course-theme-${colorId}`);
}
function applyCourseFont(name){
 const editor=getCourseEditor();
 if(!editor) return;
 const fonts={Verdana:'Verdana, sans-serif',Arial:'Arial, sans-serif',Georgia:'Georgia, serif','Open Sans':'"Open Sans", sans-serif'};
 editor.style.fontFamily=fonts[name]||fonts.Verdana;
}
function applyCourseLayout(layout){
 const editor=getCourseEditor();
 if(!editor) return;
 editor.classList.toggle('course-layout-compact',layout==='compact');
}

function syncToggleDependentPanel(toggleBtn){
 const panel=toggleBtn.closest('aside')?.querySelector(`.toggle-dependent-sec[data-panel="${toggleBtn.dataset.panel}"]`);
 if(panel) panel.classList.toggle('hidden',!toggleBtn.classList.contains('on'));
}

function setMode(type){
 document.querySelectorAll('.sw').forEach(x=>x.classList.toggle('on',x.dataset.mode===type));
 document.querySelectorAll('.mode').forEach(x=>x.classList.add('hidden'));
 document.getElementById(type).classList.remove('hidden');
 const modeEl=document.getElementById('demoRemoteMode');
 if(modeEl) modeEl.textContent=MODE_LABELS[type]||type;
}

function toggleDemoRemote(open){
 const remote=document.getElementById('demoRemote');
 const panel=document.getElementById('demoRemotePanel');
 const trigger=document.getElementById('demoRemoteTrigger');
 if(!remote||!panel||!trigger) return;
 const shouldOpen=typeof open==='boolean'?open:!remote.classList.contains('open');
 remote.classList.toggle('open',shouldOpen);
 panel.classList.toggle('hidden',!shouldOpen);
 trigger.setAttribute('aria-expanded',shouldOpen?'true':'false');
}

document.getElementById('demoRemoteTrigger')?.addEventListener('click',e=>{e.stopPropagation();toggleDemoRemote();});
document.getElementById('demoRemotePanel')?.addEventListener('click',e=>e.stopPropagation());
document.addEventListener('click',e=>{if(!e.target.closest('#demoRemote')) toggleDemoRemote(false);});

document.querySelectorAll('.sw').forEach(b=>b.onclick=()=>{setMode(b.dataset.mode);toggleDemoRemote(false);});
document.addEventListener('click',e=>{
 const option=e.target.closest('.dropdown div');
 if(option){
  const wrap=option.closest('.select-wrap');
  const btn=wrap?.querySelector('.select');
  if(btn){
   btn.dataset.value=option.textContent;
   const val=btn.querySelector('.select-value');
   if(val) val.textContent=option.textContent;
   if(btn.classList.contains('course-font-select')) applyCourseFont(option.textContent);
   closeAllSelects();
  }
  return;
 }
 const secBtn=e.target.closest('.select');
 if(secBtn){
  e.stopPropagation();
  const wrap=secBtn.closest('.select-wrap');
  const wasOpen=secBtn.classList.contains('open');
  closeAllSelects();
  if(!wasOpen){
   secBtn.classList.add('open');
   const options=(secBtn.dataset.options||'').split('|').filter(Boolean);
   const selected=secBtn.dataset.value||options[0];
   wrap.insertAdjacentHTML('beforeend',`<div class="dropdown">${options.map(o=>`<div class="${o===selected?'on':''}">${o}</div>`).join('')}</div>`);
  }
  return;
 }
 if(!e.target.closest('.select-wrap')) closeAllSelects();
});
document.addEventListener('click',e=>{const tab=e.target.closest('.tab-click');if(tab){const group=tab.dataset.group;document.querySelectorAll(`.tab-click[data-group="${group}"]`).forEach(x=>x.classList.remove('on'));tab.classList.add('on');document.querySelectorAll(`.${group}`).forEach(x=>x.classList.add('hidden'));document.getElementById(tab.dataset.target).classList.remove('hidden')}
 const test=e.target.closest('.test-nav');if(test){const sec=document.getElementById(test.dataset.type);sec.querySelectorAll('.content-area').forEach(x=>x.classList.add('hidden'));sec.querySelector('.test-area').classList.remove('hidden');sec.querySelectorAll('.theory-right').forEach(x=>x.classList.add('hidden'));sec.querySelectorAll('.test-right').forEach(x=>x.classList.remove('hidden'));sec.querySelectorAll('.test-entry').forEach(x=>x.classList.add('on'));sec.querySelectorAll('.material-nav,.cover-nav').forEach(x=>x.classList.remove('on'))}
 const cover=e.target.closest('.cover-nav');if(cover){const sec=document.getElementById(cover.dataset.type);sec.querySelectorAll('.content-area,.test-area').forEach(x=>x.classList.add('hidden'));sec.querySelector('.cover-area').classList.remove('hidden');sec.querySelectorAll('.theory-right').forEach(x=>x.classList.remove('hidden'));sec.querySelectorAll('.test-right').forEach(x=>x.classList.add('hidden'));sec.querySelectorAll('.test-entry,.material-nav').forEach(x=>x.classList.remove('on'));cover.classList.add('on');if(cover.dataset.type==='course') refreshCourseRightPanel(sec,0,true)}
 const mat=e.target.closest('.material-nav');if(mat){
  const sec=document.getElementById(mat.dataset.type);
  const idx=Number(mat.dataset.index||0);
  const type=mat.dataset.type;
  sec.querySelectorAll('.content-area,.test-area').forEach(x=>x.classList.add('hidden'));
  sec.querySelector('.material-area').classList.remove('hidden');
  sec.querySelectorAll('.theory-right').forEach(x=>x.classList.remove('hidden'));
  sec.querySelectorAll('.test-right').forEach(x=>x.classList.add('hidden'));
  sec.querySelectorAll('.test-entry,.cover-nav,.material-nav').forEach(x=>x.classList.remove('on'));
  mat.classList.add('on');
  if(type==='video') applyVideoScene(sec,idx);
  else if(type==='podcast') selectPodcastChapter(sec,idx);
  else applyDocSection(sec,type,idx);
 }
 const colorDot=e.target.closest('.course-color-dot');
 if(colorDot){
  const sec=document.getElementById('course');
  sec?.querySelectorAll('.course-color-dot').forEach(dot=>dot.classList.remove('on'));
  colorDot.classList.add('on');
  applyCourseThemeColor(colorDot.dataset.courseColor);
  return;
 }
 const layoutBtn=e.target.closest('.course-layout-btn');
 if(layoutBtn){
  const sec=document.getElementById('course');
  sec?.querySelectorAll('.course-layout-btn').forEach(btn=>btn.classList.remove('on'));
  layoutBtn.classList.add('on');
  applyCourseLayout(layoutBtn.dataset.courseLayout);
  return;
 }
 const toggleBtn=e.target.closest('.toggle');
 if(toggleBtn&&!toggleBtn.disabled){
  toggleBtn.classList.toggle('on');
  if(toggleBtn.classList.contains('course-required-toggle')){
   const idx=Number(toggleBtn.dataset.lesson);
   if(COURSE_LESSONS[idx]) COURSE_LESSONS[idx].required=toggleBtn.classList.contains('on');
  }else if(toggleBtn.dataset.panel){
   syncToggleDependentPanel(toggleBtn);
  }
 }});
document.addEventListener('input',e=>{if(e.target.classList.contains('speed')){const box=e.target.closest('.sec');const val=box.querySelector('.speed-val');if(val)val.textContent=Number(e.target.value).toFixed(1)+'x'}});

setTimeout(()=>{document.querySelectorAll('.material-nav').forEach((btn)=>{const idx=Number(btn.dataset.index||0)+1;const thumb=btn.querySelector('.thumb');if(thumb) thumb.textContent=idx;});},0);
