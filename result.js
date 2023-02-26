const modal = document.querySelector(".modal"); // section
const overlay = document.querySelector(".overlay"); // div
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const btn =document.getElementById('result');


btn.addEventListener('click' ,function(){
    let val1 =Number(document.getElementById('fnum').value)
    let val2=Number( document.getElementById('snum').value)
    let addition =val1+val2;
    document.getElementById('replace').textContent="adition is : " +addition;
    document.getElementById('replace').style.color='blue'
})


  
// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click",  function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

// open modal event
openModalBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

overlay.addEventListener("click",  function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });




