const input = document.querySelector('input');
const text = input.value;

const list = document.querySelector('ul');
const item = document.createElement('li');
list.appendChild(item);
const itemLabel = document.createElement('span');
itemLabel.innerText=text;
item.appendChild(itemLabel);
if(text.length == 0) {
    document.querySelector('small').innerText = 'Input must not be empty';
    return;
} else {
    document.querySelector('small').innerText = '';
}
input.value = '';
itemLabel.addEventListener('click', function() {
    if(item.getAttribute('class') == 'completed') {
        item.setAttribute('class', '');
    } else {
        item.setAttribute('class', 'completed');
    }
});

const label = document.querySelector('p');
let completedCount = 0;
itemLabel.addEventListener('click', function() {
    if(item.getAttribute('class') == 'completed') {
        item.setAttribute('class', '');
        completedCount--;
    } else {
        item.setAttribute('class','completed');
        completedCount++;
    }
});

label.innerText = '${completedCount} completed';
const trashcan = document.createElement('span');
trashcan.innerHTML = '&#x1F5D1;';
trashcan.setAttribute('class','trashcan');
item.appendChild(trashcan);
trashcan.addEventListener('click', function() {
    item.remove();
});