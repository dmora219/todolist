let button = document.getElementById('button');
let input = document.getElementById('input');
let ul = document.querySelector('ul');

function inputLength() {
   return input.value.length;
}

function addItemClick() {
   if (inputLength() > 0) {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value))
      ul.appendChild(li);
      input.value = "";

      li.addEventListener('click', function () {
         let done = this.classList.toggle('done');
         let removeButton = document.createElement('button')
         removeButton.classList.add('deleteButton')
         if (done) {
            removeButton.appendChild(document.createTextNode('Remove'));
            removeButton.classList = 'deleteButton';
            li.appendChild(removeButton)

            removeButton.addEventListener('click', function () {
               removeButton.parentElement.remove();
            })
         }


      })
   }
}

function addItemPress(event) {
   if (inputLength() > 0 && event.code === "Enter") {
      addItemClick()
   }
}

button.addEventListener('click', addItemClick)

input.addEventListener('keypress', addItemPress)