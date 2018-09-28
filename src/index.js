module.exports = function getZerosCount(number, base) {
  let minZeros = 0,
      dividers = []

  //ИЩЕМ МНОЖИТЕЛИ
  for(; base % 2 == 0; base /=2)
  {
  	dividers.push(2)
  }


  for(let div = 3; div <= Math.sqrt(base); div+=2)
  {
  	for(; base % div == 0; base /= div)
  	{
  		dividers.push(div)
  	}
  }

  if(base != 1) dividers.push(base)

  //находим множитель имеющий наибольшее значение
  let powers = []

  dividers.forEach((div,i,dividers)=>
  {
    powers[div] = powers[div] == undefined 
                ? 1 
                : powers[div] + 1
  })



  
  powers.forEach((currentPower,currentDiv,powers)=>
  {
  	if(typeof(currentDiv) == undefined)
      return;

  	let divCount = 0
  	for(div = currentDiv; div <= number; div*=currentDiv)
	  {
	    divCount += Math.floor(number / div)
	  }
	  divCount /= currentPower
	

	  if(minZeros == 0 || divCount < minZeros)
		  minZeros = divCount
  })

  return Math.floor(minZeros)
}

//console.log(getZerosCount(88341643, 66))