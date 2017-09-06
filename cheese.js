var Sandwich = (function(oldSandwich){
	const cheese = ["American","Colby","Pepper_Jack","Swiss"]

	oldSandwich.getCheese = function(){
		return cheese;
	}

return oldSandwich;
})(Sandwich || {});