Account = Backbone.Model.extend({
	defaults:{
		total:0,
		name:'Noname'
	},
	initialize: function(){
		console.log('Account initialized');
	},
	plus: function(qty){
		this.set({'total': this.get('total')+qty});
		return this.get('total');
	},
	minus: function(qty){
		this.set({'total': this.get('total')-qty});
		return this.get('total');
	}
}); 


$(document).ready(function () {
	console.log('Todo cargado?');
	jug1= new Account();
});