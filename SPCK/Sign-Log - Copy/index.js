// input fields focus effects 
const textInput = document.querySelectorAll("input");

textInput.forEach(textInput => {
    textInput.addEventListener("focus" , () =>{
        let parent = textInput.parentNode; 
        parent.classList.add("active");
    });

    textInput.addEventListener("blur" , () =>{
        let parent = textInput.parentNode; 
        parent.classList.remove("active");
    });
});

// password show/hide
const passwordInput = document.querySelector(".password-input");
const eyeBtn = document.querySelector(".eye-btn");

eyeBtn.addEventListener("click" , () => {
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        eyeBtn.innerHTML = "<i class='uil uil-eye'></i>";
    }
    else{ 
        passwordInput.type = "password";
        eyeBtn.innerHTML = "<i class='uil uil-eye-slash'></i>";
    }
});

//sliding between
const signUpBtn = document.querySelector(".sign-up-btn");
const signInBtn = document.querySelector(".sign-in-btn");
const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");

signUpBtn.addEventListener("click" , () => {
    signInForm.classList.add("hide");
    signUpForm.classList.add("show");
    signInForm.classList.remove("show")
});

signInBtn.addEventListener("click" , () => {
    signInForm.classList.remove("hide");
    signUpForm.classList.remove("show");
    signInForm.classList.add("show")
});





// back-end
function toHomePage() {
    window.location.href = "../home.html"
}

function store() {
    let email = document.getElementById("email");
    let pw = document.getElementById("password");
    let cf = document.getElementById("confirm");
    let name = document.getElementById("name");
  
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
  
    let numbers = /[0-9]/g;
  
  
  
    if(pw.value != cf.value){
        alert("Please confirm password again");
        event.preventDefault();
    }
    
    else {
      localStorage.setItem("email", email.value.trim());
      localStorage.setItem("pw", pw.value.trim());
      localStorage.setItem("name", name.value.trim());
      alert("Your account has been created , please log in again to enjoy");
    }
  
}


// Định nghĩa hàm check
function check() {
    event.preventDefault(); 
    let storeEmail = localStorage.email.trim();
    let storePw = localStorage.pw.trim();
    let userEmail = document.getElementById("userName");
    let userPw = document.getElementById("userPw");
  
    if (userEmail.value.trim() == storeEmail
      &&
      userPw.value.trim() == storePw
    ) {
      alert("You are logged in");
      toHomePage();
    }
    else {
      alert("Please check you email or password");
      event.preventDefault();
    }
}
