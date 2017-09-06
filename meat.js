var Sandwich = (function(oldSandwich){
	const meat = ["Ham","Turkey","Roast_Beef","Bacon"]

	oldSandwich.getMeat = function(){
		return meat;
	}

return oldSandwich;
})(Sandwich || {});