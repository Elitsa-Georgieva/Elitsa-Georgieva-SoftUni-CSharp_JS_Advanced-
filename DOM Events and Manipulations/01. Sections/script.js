function create(input) {
   let parentElement = document.getElementById('content');
   let elementsArr = input;

   for (let i = 0; i < input.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let currText = document.createTextNode(elementsArr[i]);

      p.appendChild(currText);
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', function(event){
         event.target.children[0].style.display = ' block';
      });

      parentElement.appendChild(div);
   }
}