const startBtn = document.getElementById("StartButton");

function registerUser(e) {
    const email = document.getElementById("text-box");
    const emailVal = email.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailVal === '') {
      alert("Email is required");
      e.preventDefault();
      return; 
    }
    else if (!emailPattern.test(emailVal)) {
        alert("Please enter a valid email address");
        e.preventDefault();
        return;
    }
    else{
      alert("Registration Sucsessful!");
      window.location.href = "SignUpPassword.html";
    }

}

startBtn.addEventListener("click", registerUser);