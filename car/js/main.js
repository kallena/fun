var car = {
	status: 'parked',
	speed: 0,
	miles: 0,
	model: 'bmw',
	year: '1982',
	showYear: function (){
		alert(car.year);
	}, // this is the end of the function
	showModel: function (){
		alert(car.model);
	}, // this is the end of the function
	showStatus: function (){
		
		this.keepTrackOfMile();
		
		if(this.speed == 0 && this.status != 'parked') {
			this.status = 'stopped';
		}

		document.getElementById('carStatusOutput').innerHTML = car.status;
		document.getElementById('carSpeedOutput').innerHTML  = car.speed;
		document.getElementById('carMilesOutput').innerHTML  = car.miles;

	}, // this is the end of the function
	keepTrackOfMile: function(){
		if(this.speed != 0) {
			this.miles	= this.miles + this.speed;
		}
	},
	drive: function (){
		if(this.status != 'reverse') {
			this.status = 'drive';
			this.speed 	= this.speed + 1;
		} else {
			alert('You cannot put the car in drive while it is in reverse!');
		}

		this.showStatus();
	}, // this is the end of the function
	break: function (){
		
		if(this.speed != 0) {
			this.speed = this.speed - 1;
		}

		this.showStatus();
	}, // this is the end of the function
	reverse: function (){
		if(this.status != 'drive') {
			this.status = 'reverse';
			this.miles++;
		} else {
			alert('You cannot put the car in reverse while it is in drive!');
		}
		this.showStatus();
	}, // this is the end of the function
	park: function (){
		if(this.speed == 0) {
			this.status = 'parked';
		} else {
			alert('You cannot park the car while it is moving!');
		}
		this.showStatus();
	}, // this is the end of the function
} // this is the end of the car class


var foo = 1;

var blah = function(intothefunction, callback) {
	alert('This is a blah: ' + intothefunction);
	callback();
}

function blahsFriends(){
	alert('blar did something.');
}

blah(foo, blahsFriends);