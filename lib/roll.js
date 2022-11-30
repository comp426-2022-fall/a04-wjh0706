export function roll(sides, dice, rolls){
	var results = []
	
	for(var i = 0; i < rolls; i++){
		var sum = 0
		
		for(var j = 0; j < dice; j++){
			sum = sum + Math.floor(Math.random() * sides + 1)
		}
		
		results.push(sum)
	}
	
	return {
  		"sides": sides,
  		"dice": dice,
  		"rolls": rolls,
  		"results": results
	}
}
