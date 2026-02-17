// Create user database constructor:
class userDatabase{
  constructor(){
    this.users = {};
  };
};
// Create individual user constructor
class userConstructor{
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
};
// DOM SignUp PAGE
const nameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const passwordConfirmInput = document.getElementById('confirmPassword')
const availableMessage = document.getElementById('available?')
// DOM Login PAGE
const usernameLogin = document.getElementById("usernameLogin")
const passwordLogin = document.getElementById("passwordLogin")
const userLogged = document.getElementById('userLogged')

// Username validation within the system as the user types/in live time.
if(nameInput){ //Only run if on signup page
  nameInput.addEventListener("input", function(){
    const nameVal = nameInput.value;

    // Constantly display the validity of username input as the user is entering data into the username input
    if(nameVal.length < 3 || nameVal.length > 18){
      availableMessage.innerHTML = `<p style="color: red; font-size: 18px;text-align: left; margin:0px">⭕ Username character length should be 3 to 18 characters</p>`
      return;
    }else{
      availableMessage.innerHTML = ''
      if(nameVal){
        const nameCheck = localStorage.getItem(nameVal)
        if(nameCheck){
          availableMessage.innerHTML = `<p style="color: red; font-size: 18px;text-align: left; margin:0px">⭕ Username already exists. Enter another one</p>`
        }else{
          availableMessage.innerHTML =`<p style="color: green; font-size: 18px;text-align: left; margin:0px">✅Username available</p>`
          }
        }
      }
    
  })
}

// Carries out validation and data entry after use has called the function(inthis case bys use of the Submit button)
function handleSignUp(){
  const nameVal = nameInput.value;
  const passwordValue = passwordInput.value;
  const passwordConfirmValue = passwordConfirmInput.value;

  // Validate the character length of the username and notify the user of this constraint
  if(nameVal.length < 3 || nameVal.length > 18){
    alert('Username character length should be 3 to 18 characters')
    return;
  }
  // Notify and limit the user of only available usernames
  if(nameVal){
    const nameCheck = localStorage.getItem(nameVal)
    if(nameCheck){
      alert("⭕ Username already exists. Enter another one")
    }else
      {if(passwordValue === passwordConfirmValue){
        const newUSer = new userConstructor(nameVal, passwordValue)
        localStorage.setItem(newUSer.username, newUSer.password)
        alert("✅Successful signup. Now Login to access the website")
        
      }else{
        alert('Ensure the password and password confirmation are the same')

      }
    }
  }
  // Reset the data entry fields
  nameInput.value = ''
  passwordInput.value = ''
  passwordConfirmInput.value = ''
  
  // console.log(nameVal, passwordValue, passwordConfirmValue)
};

// Handling Login on user entry of data
function handleLogin(){
  const usernameLoginVal = usernameLogin.value
  const passwordLoginVal = passwordLogin.value

  const localPassReq = localStorage.getItem(usernameLoginVal)
  if(passwordLoginVal === localPassReq){
    // Store the username of the current logged in user to display on other pages
    localStorage.setItem('currentUser', usernameLoginVal)
    // console.log('Successful')
    // console.log(localPassReq)
    window.open('./about.html', '_self')
  }else{
    alert("Enter correct username or password")
  }
}

// To specify the documents in which the user logged in status will be visible
const allowedDoc = ["about.html", "services.html","register.html"]
// To constantly display the username of the user logged in and fetch that data from the local storage
if(allowedDoc.some(page => window.location.pathname.includes(page))){
  document.addEventListener("DOMContentLoaded", function(){
    const loggedInUser = localStorage.getItem('currentUser')
    if(loggedInUser && userLogged){
      userLogged.innerHTML = `<h2>Welcome, ${loggedInUser} 🌠</h2>`
    }
  })
}

// Handle registration of aspiring applicants
function handleRegister(){
  const fullname = document.getElementById('fullname').value
  const email = document.getElementById('email').value
  const phoneNUm = document.getElementById('phone').value
  const heightCM = document.getElementById('height').value
  const idNUm = document.getElementById('idnumber').value
  const homeAddress = document.getElementById('homeaddress').value
  
  if(!fullname || !email || !phoneNUm || !idNUm || !homeAddress){
    alert("Please fill in all required fields")
    return;
  }
  
  alert("Application successful✅")

  // Reset the inputs of the registration form
  document.querySelector('.RegistrationForm').reset()
}


// const newDatabase = new userDatabase();
// console.log(newDatabase.users);
// console.log(newUser);
