let list3 = [
  {
    name: "",
    dueDate: "",
    add: "",
  },
];

function list3Push() {
  let inputElement = document.querySelector(".listInput3");
  let dueDateElement = document.querySelector(".dat");
  const name = inputElement.value;
  const dueDate = dueDateElement.value;
  const [year, month, day] = dueDate.split("-").map(Number);
  const add = year + month + day;
  list3.push({ name, dueDate, add });
  console.log(list3);
  //console.log(typeof add);
  renderlist3();
  inputElement.value = "";
  dueDateElement.value = ""; //dueDate="" not possible why ??;
}
let localString;

function pushLocal() {
  for (i = 1; i < list3.length; i++) {
    let String = JSON.stringify(list3[i]);
    localString += String;
  }
  console.log(localString);
  localStorage.setItem("localString", "String");
}

//quickSort bhul gya hu bro, selection s kam chala rha hu
function sortList(list3) {
  const n = list3.length;

  for (let i = 1; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (list3[j].add < list3[minIdx].add) {
        minIdx = j;
      }
    }

    // Swap the elements at index i and minIdx
    [list3[i].name, list3[minIdx].name] = [list3[minIdx].name, list3[i].name];
    [list3[i].dueDate, list3[minIdx].dueDate] = [
      list3[minIdx].dueDate,
      list3[i].dueDate,
    ];
    [list3[i].add, list3[minIdx].add] = [list3[minIdx].add, list3[i].add];
  }
}

function renderlist3() {
  let todoHtml = "";
  sortList(list3);
  for (i = 1; i < list3.length; i++) {
    const name = list3[i].name;
    const date = list3[i].dueDate;
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete" onclick="list3.splice(${i},1), renderlist3()">Delete</button>
    `;
    todoHtml += html;
  }
  document.querySelector(".logs3").innerHTML = todoHtml;
}
