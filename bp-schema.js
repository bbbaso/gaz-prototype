(function () {
  const LANES = [
    { id: 'hr', label: 'HR-Куратор', cls: 'lane-hr' },
    { id: 'admin', label: 'Администратор', cls: 'lane-admin' },
    { id: 'teacher', label: 'Преподаватель', cls: 'lane-teacher' },
    { id: 'manager', label: 'Руководитель', cls: 'lane-manager' },
    { id: 'learner', label: 'Обучающийся', cls: 'lane-learner' },
    { id: 'system', label: 'Система', cls: 'lane-system' },
    { id: 'ai', label: 'AI', cls: 'lane-ai' }
  ];

  const PHASES = [
    { label: 'Инициация', steps: 2 },
    { label: 'Назначение исполнителя', steps: 2 },
    { label: 'Создание материала', steps: 6 },
    { label: 'Согласование', steps: 3 },
    { label: 'Назначение обучения', steps: 2 },
    { label: 'Прохождение', steps: 3 },
    { label: 'Проверка', steps: 2 },
    { label: 'Завершение', steps: 2 },
    { label: 'Отчётность', steps: 3 },
    { label: 'Администрирование', steps: 3 },
    { label: 'Обратная связь', steps: 3 }
  ];

  const TOTAL_STEPS = PHASES.reduce((s, p) => s + p.steps, 0);

  const NODES = [
    { id: 'hr-start', lane: 'hr', phase: 0, step: 0, kind: 'start', title: 'Старт' },
    { id: 'hr-brief', lane: 'hr', phase: 0, step: 1, kind: 'action', title: 'Подача заявки на курс', desc: 'Бриф: название, аудитория, результаты; пополнение базы знаний' },
    { id: 'admin-start', lane: 'admin', phase: 0, step: 0, kind: 'start', title: 'Старт' },
    { id: 'admin-brief', lane: 'admin', phase: 0, step: 1, kind: 'action', title: 'Создать самостоятельно', desc: 'Создание курса / материала без заявки HR' },
    { id: 'ai-hint-brief', lane: 'ai', phase: 0, step: 1, kind: 'action', ai: true, title: 'Подсказывает варианты', desc: 'Аудитории и результаты на основе выбора' },

    { id: 'hr-assign', lane: 'hr', phase: 1, step: 0, kind: 'action', title: 'Назначить преподавателя', desc: 'Выбор ответственного за подготовку материала' },
    { id: 'admin-assign', lane: 'admin', phase: 1, step: 0, kind: 'action', title: 'Назначить преподавателя', desc: 'Выбор ответственного за подготовку материала' },
    { id: 'sys-card', lane: 'system', phase: 1, step: 1, kind: 'action', system: true, title: 'Создаёт карточку', desc: 'Черновик, права, ответственный, статус «Подготовка»' },
    { id: 'sys-push-teacher', lane: 'system', phase: 1, step: 1, stack: 1, kind: 'action', system: true, title: 'Push-уведомление', desc: 'Задача преподавателю, материал в «Новых»' },

    { id: 'teacher-start', lane: 'teacher', phase: 2, step: 0, kind: 'start', title: 'Старт' },
    { id: 'teacher-open', lane: 'teacher', phase: 2, step: 0, stack: 1, kind: 'action', title: 'Открыть материал', desc: 'Видит задачу и бриф от HR' },
    { id: 'teacher-brief', lane: 'teacher', phase: 2, step: 1, kind: 'action', title: 'Ознакомиться с задачей', desc: 'Тема, цели, аудитория, ожидаемый результат' },
    { id: 'teacher-format', lane: 'teacher', phase: 2, step: 2, kind: 'action', title: 'Выбрать формат', desc: 'Лонгрид, электронный курс, видео или подкаст' },
    { id: 'teacher-prep', lane: 'teacher', phase: 2, step: 3, kind: 'action', title: 'Подготовка к созданию', desc: 'Собрать с AI или вручную' },
    { id: 'teacher-manual', lane: 'teacher', phase: 2, step: 4, stack: 0, kind: 'action', title: 'Собрать вручную', desc: 'Структура и материалы самостоятельно' },
    { id: 'teacher-ai-pick', lane: 'teacher', phase: 2, step: 4, stack: 1, kind: 'action', title: 'Собрать с AI', desc: 'Выбор материала из базы знаний' },
    { id: 'sys-kb', lane: 'system', phase: 2, step: 4, kind: 'action', system: true, title: 'База знаний', desc: 'Отображает доступный список материалов' },
    { id: 'ai-parse', lane: 'ai', phase: 2, step: 4, kind: 'action', ai: true, title: 'Разбирает файл', desc: 'Извлекает темы, структуру и материалы' },
    { id: 'ai-draft', lane: 'ai', phase: 2, step: 5, kind: 'action', ai: true, title: 'Готовит основу', desc: 'Черновик структуры, уроков, вопросов' },
    { id: 'admin-upload', lane: 'admin', phase: 2, step: 4, kind: 'action', title: 'Загрузить / выгрузить', desc: 'Курсы и база знаний, если материал не найден' },
    { id: 'teacher-validate', lane: 'teacher', phase: 2, step: 5, kind: 'action', title: 'Проверяет и редактирует', desc: 'Поля, материалы и структура → результат' },

    { id: 'teacher-submit', lane: 'teacher', phase: 3, step: 0, kind: 'action', title: 'Отправить на согласование', desc: 'Завершает создание курса' },
    { id: 'hr-approve', lane: 'hr', phase: 3, step: 1, kind: 'action', title: 'Согласование', desc: 'Очередь: пуш и проверка материала' },
    { id: 'decision-ok', lane: 'system', phase: 3, step: 1, kind: 'decision', title: 'Согласовано?' },
    { id: 'sys-publish', lane: 'system', phase: 3, step: 2, kind: 'action', system: true, title: 'Публикация', desc: 'Материал доступен сотрудникам' },

    { id: 'hr-assign-course', lane: 'hr', phase: 4, step: 0, kind: 'action', title: 'Назначение курсов, экзаменов, заданий и тестов', desc: 'Единственное действие HR на этом этапе' },
    { id: 'sys-push-learner', lane: 'system', phase: 4, step: 1, kind: 'action', system: true, title: 'Push-уведомление', desc: 'Назначение появляется в личном кабинете' },
    { id: 'sys-deadline', lane: 'system', phase: 4, step: 1, stack: 1, kind: 'action', system: true, title: 'Фиксирует сроки', desc: 'Дата активации и плановое завершение' },

    { id: 'learner-start', lane: 'learner', phase: 5, step: 0, kind: 'start', title: 'Старт' },
    { id: 'learner-lk', lane: 'learner', phase: 5, step: 0, stack: 1, kind: 'action', title: 'Личный кабинет', desc: 'Перечень назначенных курсов, тестов, опросов' },
    { id: 'learner-picklist', lane: 'learner', phase: 5, step: 0, stack: 2, kind: 'action', title: 'Персональная подборка', desc: 'Курсы и книги за выбранный период' },
    { id: 'learner-course', lane: 'learner', phase: 5, step: 1, kind: 'action', title: 'Прохождение материала', desc: 'Назначенные курсы, тесты, опросы, личные материалы' },
    { id: 'learner-progress', lane: 'learner', phase: 5, step: 1, stack: 1, kind: 'action', title: 'Аналитика прогресса', desc: 'Графики и статистика усвоения' },
    { id: 'learner-test', lane: 'learner', phase: 5, step: 2, kind: 'action', title: 'Сдача теста / экзамена', desc: 'Попытки, баллы, итоговый статус' },
    { id: 'learner-practice', lane: 'learner', phase: 5, step: 2, stack: 1, kind: 'action', title: 'Практическое задание', desc: 'Отправка на проверку' },
    { id: 'learner-forum', lane: 'learner', phase: 5, step: 2, stack: 2, kind: 'action', title: 'Чаты / форумы', desc: 'Коммуникация по курсу' },

    { id: 'teacher-check', lane: 'teacher', phase: 6, step: 0, kind: 'action', title: 'Проверка практических заданий', desc: 'Оценка, комментарий, статус' },
    { id: 'learner-status', lane: 'learner', phase: 6, step: 1, kind: 'action', title: 'Статус проверки заданий', desc: 'Отслеживание в личном кабинете' },

    { id: 'sys-complete', lane: 'system', phase: 7, step: 0, kind: 'action', system: true, title: 'Фиксирует результат', desc: 'Баллы, состояние, дата завершения' },
    { id: 'learner-history', lane: 'learner', phase: 7, step: 0, kind: 'action', title: 'История обучения', desc: 'Пройденные материалы и оценки' },
    { id: 'sys-cert', lane: 'system', phase: 7, step: 1, kind: 'action', system: true, title: 'Сертификат', desc: 'Документ об окончании курса' },

    { id: 'hr-reports', lane: 'hr', phase: 8, step: 0, kind: 'action', title: 'Просмотр отчётов', desc: 'Курсы, сотрудники, просрочки, баллы, динамика' },
    { id: 'hr-monitor', lane: 'hr', phase: 8, step: 1, kind: 'action', title: 'Мониторинг активности', desc: 'Обучающиеся по подразделениям' },
    { id: 'hr-test-stats', lane: 'hr', phase: 8, step: 2, kind: 'action', title: 'Статистика тестов и опросов', desc: 'Результаты в своих группах' },
    { id: 'manager-dash', lane: 'manager', phase: 8, step: 0, kind: 'action', title: 'Дашборды', desc: 'Успеваемость и завершённые курсы' },
    { id: 'manager-filter', lane: 'manager', phase: 8, step: 1, kind: 'action', title: 'Фильтрация данных', desc: 'Отдел, должность, период' },
    { id: 'manager-kmap', lane: 'manager', phase: 8, step: 1, stack: 1, kind: 'action', title: 'Карта знаний', desc: 'Компетенции сотрудников' },
    { id: 'manager-export', lane: 'manager', phase: 8, step: 2, kind: 'action', title: 'Экспорт отчётов', desc: 'PDF и Excel' },
    { id: 'teacher-reports', lane: 'teacher', phase: 8, step: 0, kind: 'action', title: 'Отчёты по группам', desc: 'Успеваемость, разделы, виды информации' },
    { id: 'teacher-monitor', lane: 'teacher', phase: 8, step: 1, kind: 'action', title: 'Мониторинг активности', desc: 'Обучающиеся в своих группах' },
    { id: 'teacher-test-stats', lane: 'teacher', phase: 8, step: 2, kind: 'action', title: 'Статистика тестов и опросов', desc: 'Результаты в своих группах' },
    { id: 'learner-reports', lane: 'learner', phase: 8, step: 0, kind: 'action', title: 'Личные отчёты', desc: 'По разделам курса и заданиям' },
    { id: 'sys-stats', lane: 'system', phase: 8, step: 2, kind: 'action', system: true, title: 'Статистика обучения', desc: 'Популярность, успешность, сложность курса' },

    { id: 'admin-roles', lane: 'admin', phase: 9, step: 0, kind: 'action', title: 'Роли и права', desc: 'Создание ролей, настройка доступа' },
    { id: 'admin-bulk', lane: 'admin', phase: 9, step: 0, stack: 1, kind: 'action', title: 'Массовые операции', desc: 'Изменение ролей и групп' },
    { id: 'admin-users', lane: 'admin', phase: 9, step: 1, kind: 'action', title: 'Учётные записи', desc: 'Создание, блокировка, архивация' },
    { id: 'admin-platform', lane: 'admin', phase: 9, step: 1, stack: 1, kind: 'action', title: 'Настройка платформы', desc: 'Язык, бренд, часовые пояса, дизайн' },
    { id: 'admin-content', lane: 'admin', phase: 9, step: 2, kind: 'action', title: 'Курсы и база знаний', desc: 'Создание, редактирование, загрузка, выгрузка' },
    { id: 'admin-acc-report', lane: 'admin', phase: 9, step: 2, stack: 1, kind: 'action', title: 'Отчёты администратора', desc: 'Учётные записи, роли, период' },

    { id: 'hr-survey', lane: 'hr', phase: 10, step: 0, kind: 'action', title: 'Опросы / анкеты', desc: 'Обратная связь: настройка опросов' },
    { id: 'admin-survey', lane: 'admin', phase: 10, step: 0, stack: 1, kind: 'action', title: 'Опросы / анкеты', desc: 'Создание и редактирование опросов' },
    { id: 'learner-survey', lane: 'learner', phase: 10, step: 1, kind: 'action', title: 'Прохождение опроса', desc: 'Анкета обратной связи' },
    { id: 'end', lane: 'system', phase: 10, step: 2, kind: 'end', title: 'Финал', desc: 'Цикл обучения замкнут' }
  ];

  const EDGES = [
    { from: 'hr-start', to: 'hr-brief' },
    { from: 'admin-start', to: 'admin-brief' },
    { from: 'hr-brief', to: 'ai-hint-brief', dashed: true },
    { from: 'hr-brief', to: 'hr-assign' },
    { from: 'admin-brief', to: 'admin-assign' },
    { from: 'hr-assign', to: 'sys-card' },
    { from: 'admin-assign', to: 'sys-card' },
    { from: 'sys-card', to: 'sys-push-teacher' },
    { from: 'sys-push-teacher', to: 'teacher-open' },
    { from: 'teacher-start', to: 'teacher-open' },
    { from: 'teacher-open', to: 'teacher-brief' },
    { from: 'teacher-brief', to: 'teacher-format' },
    { from: 'teacher-format', to: 'teacher-prep' },
    { from: 'teacher-prep', to: 'teacher-manual', label: '1' },
    { from: 'teacher-prep', to: 'teacher-ai-pick', label: '2' },
    { from: 'teacher-ai-pick', to: 'sys-kb' },
    { from: 'sys-kb', to: 'ai-parse' },
    { from: 'ai-parse', to: 'ai-draft' },
    { from: 'ai-draft', to: 'teacher-validate' },
    { from: 'teacher-manual', to: 'teacher-validate' },
    { from: 'admin-upload', to: 'sys-kb', dashed: true },
    { from: 'teacher-validate', to: 'teacher-submit' },
    { from: 'teacher-submit', to: 'hr-approve' },
    { from: 'teacher-submit', to: 'decision-ok' },
    { from: 'hr-approve', to: 'decision-ok' },
    { from: 'decision-ok', to: 'sys-publish', label: 'Да' },
    { from: 'decision-ok', to: 'teacher-validate', label: 'Нет', dashed: true },
    { from: 'sys-publish', to: 'hr-assign-course' },
    { from: 'hr-assign-course', to: 'sys-push-learner' },
    { from: 'sys-push-learner', to: 'sys-deadline' },
    { from: 'sys-push-learner', to: 'learner-lk' },
    { from: 'learner-start', to: 'learner-lk' },
    { from: 'learner-lk', to: 'learner-course' },
    { from: 'learner-lk', to: 'learner-picklist', dashed: true },
    { from: 'learner-course', to: 'learner-test' },
    { from: 'learner-course', to: 'learner-progress' },
    { from: 'learner-course', to: 'learner-practice' },
    { from: 'learner-course', to: 'learner-forum', dashed: true },
    { from: 'learner-practice', to: 'teacher-check' },
    { from: 'teacher-check', to: 'learner-status' },
    { from: 'learner-test', to: 'sys-complete' },
    { from: 'learner-status', to: 'sys-complete', dashed: true },
    { from: 'sys-complete', to: 'sys-cert' },
    { from: 'sys-complete', to: 'learner-history' },
    { from: 'sys-complete', to: 'sys-stats' },
    { from: 'sys-stats', to: 'hr-reports' },
    { from: 'sys-stats', to: 'manager-dash' },
    { from: 'sys-stats', to: 'teacher-reports' },
    { from: 'sys-stats', to: 'learner-reports' },
    { from: 'hr-reports', to: 'hr-monitor' },
    { from: 'hr-monitor', to: 'hr-test-stats' },
    { from: 'manager-dash', to: 'manager-filter' },
    { from: 'manager-filter', to: 'manager-export' },
    { from: 'manager-dash', to: 'manager-kmap' },
    { from: 'teacher-reports', to: 'teacher-monitor' },
    { from: 'teacher-monitor', to: 'teacher-test-stats' },
    { from: 'hr-test-stats', to: 'hr-survey' },
    { from: 'hr-survey', to: 'learner-survey' },
    { from: 'admin-survey', to: 'learner-survey', dashed: true },
    { from: 'learner-survey', to: 'end' },
    { from: 'admin-content', to: 'end', dashed: true },
    { from: 'admin-acc-report', to: 'end', dashed: true },
    { from: 'manager-export', to: 'end', dashed: true },
    { from: 'admin-start', to: 'admin-roles', dashed: true },
    { from: 'admin-roles', to: 'admin-users' },
    { from: 'admin-users', to: 'admin-bulk' },
    { from: 'admin-bulk', to: 'admin-platform' },
    { from: 'admin-platform', to: 'admin-acc-report' }
  ];

  function phaseStartCol(phaseIdx) {
    let col = 2;
    for (let i = 0; i < phaseIdx; i++) col += PHASES[i].steps;
    return col;
  }

  function renderNode(n) {
    const cls = ['bp-node', `node-${n.kind}`];
    if (n.ai) cls.push('ai');
    if (n.system) cls.push('system');
    const tip = n.tip ? ` data-tip="${n.tip.replace(/"/g, '&quot;')}"` : '';

    let shape;
    if (n.kind === 'start' || n.kind === 'end') {
      shape = `<div class="shape">${n.title}</div>`;
    } else if (n.kind === 'decision') {
      shape = `<div class="shape"><div class="inner">${n.title}</div></div>`;
    } else {
      shape = `<div class="shape"><div class="title">${n.title}</div>${n.desc ? `<div class="desc">${n.desc}</div>` : ''}</div>`;
    }
    return `<div class="${cls.join(' ')}" id="node-${n.id}"${tip}>${shape}</div>`;
  }

  function nodesInCell(laneId, phaseIdx, stepIdx) {
    return NODES.filter(
      (n) => n.lane === laneId && n.phase === phaseIdx && n.step === stepIdx
    ).sort((a, b) => (a.stack || 0) - (b.stack || 0));
  }

  function buildGrid() {
    const grid = document.getElementById('bpGrid');
    if (!grid) return;

    grid.style.gridTemplateColumns = `var(--label-w) repeat(${TOTAL_STEPS}, var(--step-w))`;

    let headerHtml = '<div class="bp-grid-header">';
    headerHtml += '<div class="grid-corner" style="grid-row:1;grid-column:1"></div>';
    PHASES.forEach((phase, i) => {
      const start = phaseStartCol(i);
      headerHtml += `<div class="phase-header" style="grid-row:1;grid-column:${start}/span ${phase.steps}">${phase.label}</div>`;
    });
    headerHtml += '</div>';

    let bodyHtml = '';
    LANES.forEach((lane, rowIdx) => {
      const row = rowIdx + 2;
      bodyHtml += `<div class="bp-lane-row ${lane.cls}">`;
      bodyHtml += `<div class="lane-label" style="grid-row:${row};grid-column:1">${lane.label}</div>`;
      PHASES.forEach((phase, pi) => {
        const start = phaseStartCol(pi);
        let cells = '';
        for (let si = 0; si < phase.steps; si++) {
          const items = nodesInCell(lane.id, pi, si);
          if (!items.length) {
            cells += '<div class="step-cell is-empty"></div>';
          } else {
            const hasStart = items.some((n) => n.kind === 'start');
            const stackCls = hasStart ? 'step-stack has-start' : 'step-stack';
            const nodesHtml = items.map(renderNode).join('');
            cells += `<div class="step-cell"><div class="${stackCls}">${nodesHtml}</div></div>`;
          }
        }
        bodyHtml += `<div class="phase-block ${lane.cls}" style="grid-row:${row};grid-column:${start}/span ${phase.steps};grid-template-columns:repeat(${phase.steps},1fr)">${cells}</div>`;
      });
      bodyHtml += '</div>';
    });

    grid.innerHTML = headerHtml + bodyHtml;

    document.querySelectorAll('.bp-node[data-tip]').forEach((el) => {
      el.addEventListener('mouseenter', showTip);
      el.addEventListener('mousemove', moveTip);
      el.addEventListener('mouseleave', hideTip);
    });
  }

  function nodeAnchor(id, side) {
    const el = document.getElementById(`node-${id}`);
    const canvas = document.getElementById('bpCanvas');
    if (!el || !canvas) return null;
    const r = el.getBoundingClientRect();
    const c = canvas.getBoundingClientRect();
    const pad = 2;
    const cx = r.left - c.left + r.width / 2;
    const cy = r.top - c.top + r.height / 2;
    if (side === 'left') return { x: r.left - c.left - pad, y: cy };
    if (side === 'right') return { x: r.left - c.left + r.width + pad, y: cy };
    if (side === 'top') return { x: cx, y: r.top - c.top - pad };
    if (side === 'bottom') return { x: cx, y: r.top - c.top + r.height + pad };
    return { x: cx, y: cy };
  }

  function edgePath(fromId, toId) {
    const fromEl = document.getElementById(`node-${fromId}`);
    const toEl = document.getElementById(`node-${toId}`);
    if (!fromEl || !toEl) return '';

    const fr = fromEl.getBoundingClientRect();
    const tr = toEl.getBoundingClientRect();
    const canvas = document.getElementById('bpCanvas');
    const c = canvas.getBoundingClientRect();

    const fcx = fr.left + fr.width / 2 - c.left;
    const fcy = fr.top + fr.height / 2 - c.top;
    const tcx = tr.left + tr.width / 2 - c.left;
    const tcy = tr.top + tr.height / 2 - c.top;

    const dx = tcx - fcx;
    const dy = tcy - fcy;
    const horizontal = Math.abs(dx) >= Math.abs(dy);

    let a;
    let b;
    if (horizontal) {
      a = nodeAnchor(fromId, dx >= 0 ? 'right' : 'left');
      b = nodeAnchor(toId, dx >= 0 ? 'left' : 'right');
      if (!a || !b) return '';
      const mid = (a.x + b.x) / 2;
      return `M ${a.x} ${a.y} L ${mid} ${a.y} L ${mid} ${b.y} L ${b.x} ${b.y}`;
    }

    a = nodeAnchor(fromId, dy >= 0 ? 'bottom' : 'top');
    b = nodeAnchor(toId, dy >= 0 ? 'top' : 'bottom');
    if (!a || !b) return '';
    const mid = (a.y + b.y) / 2;
    return `M ${a.x} ${a.y} L ${a.x} ${mid} L ${b.x} ${mid} L ${b.x} ${b.y}`;
  }

  function drawEdges() {
    const canvas = document.getElementById('bpCanvas');
    const svg = document.getElementById('bpSvg');
    if (!canvas || !svg) return;

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.style.width = `${w}px`;
    svg.style.height = `${h}px`;

    const paths = EDGES.map((e) => {
      const d = edgePath(e.from, e.to);
      if (!d) return '';
      const cls = e.dashed ? ' class="dashed"' : '';
      let label = '';
      if (e.label) {
        const a = nodeAnchor(e.from, 'right') || nodeAnchor(e.from, 'bottom');
        const b = nodeAnchor(e.to, 'left') || nodeAnchor(e.to, 'top');
        if (a && b) {
          label = `<text class="edge-label" x="${(a.x + b.x) / 2}" y="${(a.y + b.y) / 2 - 6}" text-anchor="middle">${e.label}</text>`;
        }
      }
      return `<path${cls} d="${d}"/>${label}`;
    }).join('');

    svg.innerHTML = `<defs>
      <marker id="arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#a8b0b8"/>
      </marker>
    </defs>${paths}`;
  }

  const tipEl = () => document.getElementById('bpTooltip');

  function showTip(e) {
    const t = tipEl();
    const text = e.currentTarget.dataset.tip;
    if (!text || !t) return;
    t.innerHTML = `<b>${e.currentTarget.querySelector('.title')?.textContent || 'Подробнее'}</b>${text}`;
    t.classList.add('visible');
    moveTip(e);
  }

  function moveTip(e) {
    const t = tipEl();
    if (!t?.classList.contains('visible')) return;
    t.style.left = `${e.clientX + 14}px`;
    t.style.top = `${e.clientY + 14}px`;
  }

  function hideTip() {
    tipEl()?.classList.remove('visible');
  }

  function initPan() {
    const vp = document.getElementById('bpViewport');
    let down = false;
    let sx = 0;
    let sy = 0;
    let sl = 0;
    let st = 0;

    vp.addEventListener('mousedown', (e) => {
      if (e.target.closest('.bp-node, .bp-btn, a, button')) return;
      down = true;
      vp.classList.add('grabbing');
      sx = e.clientX;
      sy = e.clientY;
      sl = vp.scrollLeft;
      st = vp.scrollTop;
    });
    window.addEventListener('mouseup', () => {
      down = false;
      vp.classList.remove('grabbing');
    });
    window.addEventListener('mousemove', (e) => {
      if (!down) return;
      vp.scrollLeft = sl - (e.clientX - sx);
      vp.scrollTop = st - (e.clientY - sy);
    });
  }

  function scrollToPhase(index) {
    const vp = document.getElementById('bpViewport');
    const grid = document.getElementById('bpGrid');
    if (!vp || !grid) return;

    const col = phaseStartCol(index) - 1;
    const stepW = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--step-w')) || 196;
    const labelW = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--label-w')) || 132;
    const left = Math.max(0, labelW + (col - 1) * stepW - 24);

    vp.scrollTo({ left, behavior: 'smooth' });
    document.querySelectorAll('.phase-nav').forEach((b, i) => b.classList.toggle('on', i === index));
  }

  function initPhaseNav() {
    const bar = document.getElementById('phaseNav');
    PHASES.forEach((p, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `bp-btn phase-nav${i === 0 ? ' on' : ''}`;
      btn.textContent = p.label;
      btn.addEventListener('click', () => scrollToPhase(i));
      bar.appendChild(btn);
    });
  }

  function init() {
    buildGrid();
    requestAnimationFrame(() => {
      drawEdges();
      window.addEventListener('resize', drawEdges);
    });
    initPan();
    initPhaseNav();
    initExport();
  }

  init();

  document.getElementById('fitBtn')?.addEventListener('click', () => {
    document.getElementById('bpViewport')?.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  });

  document.getElementById('startBtn')?.addEventListener('click', () => scrollToPhase(0));

  function setExportStatus(text) {
    const el = document.getElementById('exportStatus');
    if (!el) return;
    if (!text) {
      el.classList.add('hidden');
      el.textContent = '';
      return;
    }
    el.textContent = text;
    el.classList.remove('hidden');
  }

  function setExportBusy(busy) {
    ['exportPngBtn', 'exportPdfBtn', 'printBtn'].forEach((id) => {
      document.getElementById(id)?.classList.toggle('is-busy', busy);
    });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function dataUrlToBlob(dataUrl) {
    const [head, body] = dataUrl.split(',');
    const mime = head.match(/:(.*?);/)[1];
    const bin = atob(body);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: mime });
  }

  async function buildExportSheet() {
    drawEdges();
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    const canvas = document.getElementById('bpCanvas');
    const sheet = document.createElement('div');
    sheet.className = 'bp-export-sheet';
    sheet.style.cssText = [
      'background:#f5f5f3',
      'padding:28px 32px 32px',
      'font-family:Verdana,sans-serif',
      'width:max-content',
      'box-sizing:border-box'
    ].join(';');

    const title = document.createElement('h2');
    title.textContent = 'Схема бизнес-процессов LMS';
    title.style.cssText = 'margin:0 0 6px;font-size:22px;font-weight:400;letter-spacing:-.02em;color:#111';

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Создание → назначение → прохождение → проверка → отчётность';
    subtitle.style.cssText = 'margin:0 0 16px;font-size:12px;color:#6a6f76';

    const legend = document.querySelector('.bp-legend')?.cloneNode(true);
    if (legend) {
      legend.style.cssText = 'margin:0 0 18px;padding:0;border:0;background:transparent';
    }

    sheet.append(title, subtitle);
    if (legend) sheet.appendChild(legend);
    sheet.appendChild(canvas);

    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;left:0;top:0;z-index:-1;transform:translateX(-120vw);overflow:visible;pointer-events:none';
    host.appendChild(sheet);
    document.body.appendChild(host);

    return {
      sheet,
      host,
      cleanup() {
        const viewport = document.getElementById('bpViewport');
        viewport?.querySelector('.bp-canvas-wrap')?.appendChild(canvas);
        host.remove();
      }
    };
  }

  async function captureExportImage() {
    const viewport = document.getElementById('bpViewport');
    const canvas = document.getElementById('bpCanvas');
    if (!viewport || !canvas || !window.htmlToImage) {
      throw new Error('Не удалось подготовить экспорт. Откройте страницу через http:// или проверьте интернет для CDN.');
    }

    let wrap = viewport.querySelector('.bp-canvas-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'bp-canvas-wrap';
      viewport.insertBefore(wrap, canvas);
      wrap.appendChild(canvas);
    }

    const { sheet, host, cleanup } = await buildExportSheet();
    try {
      const w = sheet.scrollWidth;
      const h = sheet.scrollHeight;
      const dataUrl = await window.htmlToImage.toPng(sheet, {
        cacheBust: true,
        pixelRatio: 1,
        width: w,
        height: h,
        backgroundColor: '#f5f5f3',
        style: { transform: 'none' }
      });
      return { dataUrl, width: w, height: h };
    } finally {
      cleanup();
    }
  }

  async function exportPng() {
    setExportBusy(true);
    setExportStatus('Готовим PNG…');
    try {
      const { dataUrl } = await captureExportImage();
      const blob = dataUrlToBlob(dataUrl);
      downloadBlob(blob, 'Схема-БП-LMS.png');
      setExportStatus('PNG сохранён');
      setTimeout(() => setExportStatus(''), 2200);
    } catch (err) {
      console.error(err);
      setExportStatus(err.message || 'Ошибка экспорта PNG');
      setTimeout(() => setExportStatus(''), 4000);
    } finally {
      setExportBusy(false);
    }
  }

  async function exportPdf() {
    setExportBusy(true);
    setExportStatus('Готовим PDF…');
    try {
      const { jsPDF } = window.jspdf || {};
      if (!jsPDF) throw new Error('Библиотека PDF не загрузилась. Проверьте интернет.');

      const { dataUrl, width, height } = await captureExportImage();
      const pdf = new jsPDF({
        orientation: width >= height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [width, height],
        hotfixes: ['px_scaling']
      });
      pdf.addImage(dataUrl, 'PNG', 0, 0, width, height, undefined, 'FAST');
      pdf.save('Схема-БП-LMS.pdf');
      setExportStatus('PDF сохранён');
      setTimeout(() => setExportStatus(''), 2200);
    } catch (err) {
      console.error(err);
      setExportStatus(err.message || 'Ошибка экспорта PDF');
      setTimeout(() => setExportStatus(''), 4000);
    } finally {
      setExportBusy(false);
    }
  }

  function printSheet() {
    drawEdges();
    window.print();
  }

  function initExport() {
    document.getElementById('exportPngBtn')?.addEventListener('click', exportPng);
    document.getElementById('exportPdfBtn')?.addEventListener('click', exportPdf);
    document.getElementById('printBtn')?.addEventListener('click', printSheet);
  }
})();
