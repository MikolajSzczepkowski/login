var User = function(email, password, avatarUrl){
	this.email = email;
	this.password = password;
	this.avatarUrl = avatarUrl;
};

var userList= {
	users: [],
	addUser: function(user){
		if(user instanceof User){
			this.users.push(user);
		}
	},
	login: function(email, password){
		var i,
			currentUser;
		for(i = 0; i<this.users.length; i++){
			currentUser = this.users[i];
			if(currentUser.email === email && currentUser.password === password){
				return true;
			}
		}

		return false;
	}

};

var form = document.forms[0];

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if(userList.login(form.email.value, form.password.value)){
		alert('zalogowales sie!');
	} else {
		alert('bledny email lub haslo');
	}

});
//dorobic rejestracje
var mikolaj = new User('mik@gmail.com', '1234', 'img.pl');
userList.addUser(mikolaj);

