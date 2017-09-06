var Sandwich = (function(oldSandwich){
	const veggies = ["Pickels","Lettuce","Tomato","Onions"]

	oldSandwich.getVeggies = function(){
		return veggies;
	}

return oldSandwich;
})(Sandwich || {});