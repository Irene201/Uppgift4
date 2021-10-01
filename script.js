function lagg() {
    const input = document.querySelector('input');

    const text = input.value;
    const label = document.querySelector('p');
    let completedCount = 0;
    
    if(text.length == 0) {
        document.querySelector('small').innerText = 'Input must not be empty';
        return;
    } else {
        document.querySelector('small').innerText = '';
        const list = document.querySelector('ul');
        const item = document.createElement('li');
        list.appendChild(item);

        const itemLabel = document.createElement('span');
        itemLabel.innerText = text;
        item.appendChild(itemLabel);
        input.value = '';
        itemLabel.addEventListener('click', function() {
            if(item.getAttribute('class') == 'completed') {
                item.setAttribute('class', '');
                completedCount--;
            } else {
                item.setAttribute('class', 'completed');
                completedCount++;
            }
            
        });
        const trashcan = document.createElement('span');
        trashcan.innerHTML = '&#x15F5D1;';
        trashcan.setAttribute('class', 'trashcan');
        item.appendChild(trashcan);
        trashcan.addEventListener('click', function() {
            item.remove();
        });
        label.innerText = `${completedCount} completed`;
    }
    
}

const button = document.querySelector('button');
button.addEventListener("click", lagg, false);