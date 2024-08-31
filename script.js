//for(inicio; condicion; incrementador){
// code here
//}

let imp = document.getElementById('impresiones')

for(let i = 1; i <= 20; i++){

let card = `

<div class="card" style="width: 18rem;">
  <img src="https://ih1.redbubble.net/image.1752981522.5296/st,small,845x845-pad,1000x1000,f8f8f8.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


`
imp.innerHTML += card


    if(i < 20){
       imp.innerHTML += i +  ', '
    } else {
       imp.innerHTML += i
    }
}


