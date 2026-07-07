const MATRIX_LABELS = [
  'Текст', 'H2', 'H3', 'Список', 'Изобр.', 'Видео', 'Файл', 'Важный',
  'Шаги', 'Таймлайн', 'Глоссарий', 'Марк.изобр.', 'Таблица', 'Диаграмма', 'Блок-схема'
];

const MATRIX = [
  ['ok','warn','ok','ok','ok','ok','ok','ok','ok','ok','ok','ok','ok','ok','ok'],
  ['ok','warn','ok','ok','ok','ok','ok','warn','ok','ok','warn','ok','ok','ok','ok'],
  ['ok','no','warn','ok','ok','ok','ok','ok','ok','warn','warn','ok','ok','ok','warn'],
  ['ok','warn','ok','warn','ok','ok','ok','ok','ok','warn','warn','ok','warn','warn','warn'],
  ['ok','no','warn','warn','no','warn','warn','ok','warn','no','no','no','warn','no','no'],
  ['ok','no','warn','warn','no','no','warn','ok','warn','no','no','no','warn','no','no'],
  ['ok','no','no','warn','warn','no','warn','ok','warn','no','no','no','no','no','no'],
  ['ok','no','warn','warn','ok','warn','warn','no','warn','no','no','warn','warn','warn','warn'],
  ['ok','no','warn','warn','warn','warn','ok','ok','no','no','no','warn','warn','warn','warn'],
  ['ok','no','no','warn','warn','no','warn','ok','no','no','no','no','no','no','no'],
  ['warn','no','no','no','no','no','no','warn','no','no','no','no','no','no','no'],
  ['ok','no','warn','ok','no','no','warn','ok','warn','no','no','no','warn','no','no'],
  ['ok','no','warn','warn','warn','no','warn','ok','warn','no','no','no','no','no','no'],
  ['ok','no','warn','warn','no','no','warn','ok','warn','no','no','no','no','no','no'],
  ['ok','no','no','warn','no','no','warn','ok','warn','no','no','no','no','no','no']
];

const PILL = {
  ok: '<span class="cr-pill cr-pill--ok" title="Можно">✓</span>',
  warn: '<span class="cr-pill cr-pill--warn" title="Не рекомендуется">!</span>',
  no: '<span class="cr-pill cr-pill--no" title="Запретить / предупредить">✕</span>'
};

function renderMatrix() {
  const table = document.getElementById('matrixTable');
  if (!table) return;

  const head = `<thead><tr><th>После ↓</th>${MATRIX_LABELS.map(l => `<th>${l}</th>`).join('')}</tr></thead>`;
  const body = MATRIX.map((row, i) => {
    const cells = row.map(v => `<td>${PILL[v]}</td>`).join('');
    return `<tr><th>${MATRIX_LABELS[i]}</th>${cells}</tr>`;
  }).join('');

  table.innerHTML = head + `<tbody>${body}</tbody>`;
}

renderMatrix();
