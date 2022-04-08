function signUpMsg() {
    var a = confirm("Have you already checked your information?");
    console.log(a);
    if (a == true) {
        alert("Your account is successfully created.");
    } else {
        alert("Try Again!");
    }
}

function loginMsg() {
    confirm("Have you already checked your information?");
}

function lowercase() {
    const user_name = document.getElementById('user-name1');
    user_name.value = user_name.value.toLowerCase();
}