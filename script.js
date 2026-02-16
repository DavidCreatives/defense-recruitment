// Create User constructor:
class userDatabase{
  constructor(){
    this.users = {};
  };
};

class userConstructor{
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
};

function handleSignUp(){
  const nameInput = document.getElementById('username')
  const passwordInput = document.getElementById('password')
  const passwordConfirmInput = document.getElementById('confirmPassword')

  const nameVal = nameInput.value;
  const passwordValue = passwordInput.value;
  const passwordConfirmValue = passwordConfirmInput.value;

}

const newUser = new userConstructor("David", "David1234")

const newDatabase = new userDatabase();
console.log(newDatabase.users);
console.log(newUser);
