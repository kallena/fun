var car = {
	status: 'parked',
	model: 'bmw',
	year: '1982',
	showYear: function (){
		alert(car.year);
	}, // this is the end of the function
	showModel: function (){
		alert(car.model);
	}, // this is the end of the function
	showStatus: function (){
		document.getElementById('carStatusOutput').innerHTML = car.status;
	}, // this is the end of the function
	drive: function (){
		this.status = 'drive';
		this.showStatus();
	}, // this is the end of the function
	reverse: function (){
		this.status = 'reverse';
		this.showStatus();
	}, // this is the end of the function
	park: function (){
		this.status = 'park';
		this.showStatus();
	}, // this is the end of the function
} // this is the end of the object