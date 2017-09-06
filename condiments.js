var Sandwich = (function(oldSandwich){
	const condiments = ["Ketchup","Mustard","Honey_Mustard","BBQ_Sauce"]

	oldSandwich.getCondiments = function(){
		return condiments;
	}

return oldSandwich;
})(Sandwich || {});