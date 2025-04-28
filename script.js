 
 function signUp()
 {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;


    if(!username||!email||!password){
        alert("Please fill the fields");
        return;
    }

    const user = {
        username,
        email,
        password
    };

let users = JSON.parse(localStorage.getItem('users')) || [];

const userExists = users.some(u => u.username === username || u.email === email);

if(userExists){
    alert("Username or Email already exists!");
    return;
}

users.push(user);
localStorage.setItem('users', JSON.stringify(users));
alert("Registration Successful! Please login."); 

document.getElementById('signup-username').value="";
document.getElementById('signup-email').value="";
document.getElementById('signup-password').value="";

showlogin();
 }


 function login(event) {
    event.preventDefault();  // Prevent form from submitting
    
    const usernameOrEmail = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if(!usernameOrEmail || !password){
        alert("Please fill in all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user=>(user.username === usernameOrEmail || user.email === usernameOrEmail
    ) && user.password === password
);

if(validUser){
    alert(`Welcome, ${validUser.username}! You are Logged in.`);
    
    setTimeout(()=>{
        window.location.href = 'Home.html'
    },1000);
}else{
    alert("Invalid credentials. Please try again.")
}


document.getElementById("login-username").value="";
document.getElementById("login-password").value="";

}
