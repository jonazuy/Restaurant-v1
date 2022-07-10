
const mesas = [
 {
    id: 1,
    nombre:"Mesa 1",
    img:"img/mes1.png",
    
 },
{
    id: 2,
    nombre:"Mesa 2",
    img:"img/mes1.png",
},
{
    id: 3,
    nombre:"Mesa 3",
    img:"img/mes1.png",
 },
{
    id: 4,
    nombre:"Mesa 4",
    img:"img/mes1.png",
    total: 0
},


]


function imprimirMesa (){

let obtenerMesa = document.querySelector("#principal")

mesas.forEach((element) => {

let imprimirMesas =  `<div class="container card " style="width: 18rem;">
<img src="${element.img}" class="card-img-top" alt="...">
<div class="card-body">
<p class="card-text">Tiempo transcurrido:<span id="contador"> 0</span></p>

  <h5 id="mesaDispo-${element.id}"class="card-title">${element.nombre}</h5>
  <p class="card-text">Total Consumido:</p>
  <input class="form-control" id="total" type="number" placeholder="Monto factura"></br>
  <input class="form-control" id="propina" type="number" placeholder="Ingrese propina"></br>
  <div id="text" class="container input-group mb-3 ">
  <span class="input-group-text">$</span>
  <span id="imprimir"class="input-group-text">0.00</span> 
  </div>
  <a href="#" id="btnAbrir-${element.id}"class="btn btn-success mx-auto">Abrir mesa</a> <a href="#" id="btnCerrar${element.id}"class="btn btn-danger mx-auto">Cerrar mesa</a>
</div>
</div>`
     
obtenerMesa.innerHTML += imprimirMesas


});

    
}imprimirMesa()



mesas.forEach((a)=>{
let botonAbrir = document.getElementById(`btnAbrir-${a.id}`).addEventListener('click' , mesaAbierta)
let mesaDispo = document.querySelector(`#mesaDispo-${a.id}`)


function mesaAbierta (){

    if(mesaAbierta){
        mesaDispo.style.backgroundColor = '#CB2400';
        mesaDispo.style.borderColor = '#CB2400';
       
        Toastify({
            text: `${a.nombre} ahora esta ocupada`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,#CB2400, #CB2400)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }



}
})



mesas.forEach((c)=>{
    let botonCerrar = document.getElementById(`btnCerrar${c.id}`).addEventListener('click' , mesaCerrada)
    let mesaDispo = document.querySelector(`#mesaDispo-${c.id}`)


function mesaCerrada(){
    
   if(mesaCerrada){
    mesaDispo.style.backgroundColor = 'rgb(16, 104, 50)';
    mesaDispo.style.borderColor = 'rgb(16, 104, 50)';
    Toastify({
        text: `${c.nombre} ahora esta disponible`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, rgb(16, 104, 50), rgb(16, 104, 50))",
        },
        onClick: function(){} // Callback after click
      }).showToast();   
      calculos()
}
}
    })


function calculos(){
const obtenerTotal = parseInt(document.querySelector("#total").value)
const obtenerPropina = parseInt(document.querySelector("#propina").value)
const totalImpreso = document.querySelector("#imprimir")

let total = obtenerTotal + obtenerPropina

totalImpreso.innerHTML = total
console.log(total)
}


