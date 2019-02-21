let myNodelist = document.getElementsByTagName('LI');

for (let i = 0; i < myNodelist.length; i++) {

  let iconDel = document.createElement('i');
  let txtDel = document.createTextNode('delete');
  iconDel.className = 'material-icons close';
  iconDel.appendChild(txtDel);
  myNodelist[i].appendChild(iconDel);

  let iconCheckBoxBlank = document.createElement('i');
  let txtCheckBoxBlank = document.createTextNode('check_box_outline_blank');
  iconCheckBoxBlank.className = 'material-icons checkbox';
  iconCheckBoxBlank.appendChild(txtCheckBoxBlank);
  myNodelist[i].appendChild(iconCheckBoxBlank);

}
let close = document.getElementsByClassName('close');

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
  }
}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  ev.target.textContent = 'check_box';
}, false);
let btn = document.querySelector('.add');
let remove = document.querySelector('.draggable');

function dragStart(e) {
  this.style.opacity = '0.4';
  let dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
	let dragSrcEl;
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
    let close = document.getElementsByClassName('close');

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
      }
    }
  }
  return false;
}

function dragEnd(e) {
  let listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}
let listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});

let count = 10;
function addNewItem() {
  let newItem = document.querySelector('.input').value;
  let lis = document.getElementsByTagName('li');
  if (newItem !== '' && lis.length < count) {
    document.querySelector('.input').value = '';
    let li = document.createElement('li');
    let attr = document.createAttribute('draggable');
    let ul = document.querySelector('ul');
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);

    let iconDel = document.createElement('i');
    let txtDel = document.createTextNode('delete');
    iconDel.className = 'material-icons close';
    iconDel.appendChild(txtDel);
    li.appendChild(iconDel);

    let iconCheckBoxBlank = document.createElement('i');
    let txtCheckBoxBlank = document.createTextNode('check_box_outline_blank');
    iconCheckBoxBlank.className = 'material-icons checkbox';
    iconCheckBoxBlank.appendChild(txtCheckBoxBlank);
    li.appendChild(iconCheckBoxBlank);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
      }
    }
    addEventsDragAndDrop(li);
  }
  
  let h1 = document.querySelector('#root > h1');
  
  if (lis.length >= count) {
    h1.insertAdjacentHTML('afterend', '<p>Maximum item per list are created</p>');
  }
}
btn.addEventListener('click', addNewItem);