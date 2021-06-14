const catalogTitle = document.querySelector( '.filter__titles ');
const catalogContant = document.querySelector( '.filter__contant');
catalogTitle.addEventListener("click", function(e){
  catalogTitle.classList.toggle('activ');
  catalogContant.classList.toggle('activ');
});
