const formatNumber = (x) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');

const totalPriseWrapper = document.getElementById('total-prise');

const getItemSubTotalPrice = (inputs) => Number(inputs.value) * Number(inputs.dataset.prise);

const init = () =>{
  let totalCost = 0;

  [ ... document.querySelectorAll('.order__items')].forEach((orderItem)=>{
    
    totalCost += getItemSubTotalPrice(orderItem.querySelector('.input'))  ;
  });
  totalPriseWrapper.textContent = formatNumber (totalCost);

};

init();

document.getElementById('basket').addEventListener('click', (event)=> {
  if(event.target.classList.contains('quantity__button-minus')){
    console.log('minus');
  }
  if(event.target.classList.contains('quantity__button-minus')){
    console.log('plus');
  }
});