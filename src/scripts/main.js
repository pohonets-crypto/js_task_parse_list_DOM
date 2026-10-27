'use strict';

// write code here

function sortList(listObj) {
  const items = [...listObj.children].sort(
    (a, b) =>
      Number(b.dataset.salary.replace(/[$,]/g, '')) -
      Number(a.dataset.salary.replace(/[$,]/g, '')),
  );

  listObj.append(...items);
}

function getEmployees(listObj) {
  return [...listObj.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
    age: Number(item.dataset.age),
  }));
}

const objs = document.querySelector('ul');

sortList(objs);

getEmployees(objs);
