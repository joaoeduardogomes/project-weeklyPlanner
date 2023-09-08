function createNewLi(ul) {
    const newLi = document.createElement('li');
    ul.appendChild(newLi);
}

const ulItems = document.querySelectorAll('ul');

ulItems.forEach((ulItem) => {
    ulItem.contentEditable = true;

    ulItem.addEventListener('click', () => {
        if (ulItem.innerHTML.length === 0) {
            createNewLi(ulItem);
        }
    })
})