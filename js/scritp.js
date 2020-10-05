const table = document.querySelector('.table');
const tableRow = document.getElementsByClassName('table-row');
const input = document.querySelector('.input');
const date = document.querySelector('.input-date');
const add = document.querySelector('.add');

add.onclick = () => {
  if (date.value === '') {
    date.value = '2020-01-01';
  }
  const taskDate = Date.parse(date.value);
  const today = new Date().setHours(0, 0, 0, 0);

  const row = document.createElement('tr');
  const check = document.createElement('td');
  const task = document.createElement('td');
  const duedate = document.createElement('td');
  if (input.value === '') {
    task.innerText = 'My new task!';
  } else {
    task.innerText = input.value;
  }

  task.className = 'task';

  duedate.className = 'date';
  duedate.innerText = date.value;

  check.innerText = '';

  row.className = 'table-row';
  row.appendChild(check);
  row.appendChild(task);
  row.appendChild(duedate);
  row.addEventListener('click', addCheck(row));

  if (taskDate < today) {
    duedate.style.color = 'red';
  }

  table.appendChild(row);
};

[...tableRow].forEach((row) => {
  row.addEventListener('click', addCheck(row));

  const taskDate = Date.parse([...row.children][2].innerText);
  const today = new Date().setHours(0, 0, 0, 0);
  if (taskDate < today) {
    [...row.children][2].style.color = 'red';
  }
});

function addCheck(newRow) {
  return () => {
    if (newRow.className === 'table-row') {
      newRow.className = 'table-row-checked';
      [...newRow.children][0].innerText = '✓';
      [...newRow.children][1].style.textDecoration = 'line-through';
    } else {
      newRow.className = 'table-row';
      [...newRow.children][0].innerText = '';
      [...newRow.children][1].style.textDecoration = 'none';
    }
  };
}
