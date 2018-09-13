module.exports = function getZerosCount(number, base) {

  var maxDiv = 0
  var dividers = []
   //ИЩЕМ МНОЖИТЕЛИ
  while(base % 2 == 0)
  {
  	dividers[dividers.length] = 2
  	base /= 2;
  }

  for(var div = 3;div <= Math.sqrt(base);div+=2)
  {
  	while(base % div == 0)
  	{
  		dividers[dividers.length] = div
  		base /= div
  	}
  }
  if(base != 1)
  {
 	dividers[dividers.length] = base
  }

  //нходим множитель дающий наибольшее произведение
  var dividersPowers = []

  for(var div of dividers)
  {
  	if(dividersPowers[div] != undefined)
  		dividersPowers[div]++;
  	else
  		dividersPowers[div] = 1
  } 

  //console.log(dividersPowers)
  //console.log(dividers)


  var minZeros = 0;
  for(var thisDiv in dividersPowers)
  {
  	if(typeof(thisDiv) == undefined)
  		continue;

  	var count = 0
  	for(div = thisDiv; div <= number;div*=thisDiv)
	{
	  count += Math.floor(number / div)
	}
	count /= dividersPowers[thisDiv]
	

	if(minZeros == 0 || count < minZeros)
		minZeros = count
  }

  return Math.floor(minZeros)
}

//console.log(getZerosCount(88341643, 66))