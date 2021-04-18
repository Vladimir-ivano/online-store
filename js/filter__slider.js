const filterSlider = document.getElementById('filter-slider');
if(filterSlider){
  noUiSlider.create(filterSlider, {
    start: [500, 300000],
    connect: true,
    tooltips: [ true, true],
    step:1,
    range: {
        'min': [500],
        'max': [300000]
    }
});
  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];
  filterSlider.noUiSlider.on('update', function(values,handle){
    inputs[handle].value = Math.round(values[handle]);
  
});

const setFilterSlide = (i,value) =>{
  let arr = [ null , null];
  arr[i] = value;

  console.log(arr)

  filterSlider.noUiSlider.set(arr);
}

  inputs.forEach((el, index) => {
  el.addEventListener('change',(e) =>{
    console.log(index);
    setFilterSlide(index,e.currentTarget.value)
  });
});
}