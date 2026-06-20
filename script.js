const form =
document.getElementById("contactForm");

const result =
document.getElementById("result");

form.addEventListener("submit",function(e){

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const phone =
document.getElementById("phone").value.trim();

const message =
document.getElementById("message").value.trim();

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phonePattern =
/^[0-9]{10}$/;

if(
name === "" ||
email === "" ||
phone === "" ||
message === ""
){

result.style.color="#ff4d4d";

result.innerText =
"⚠ All fields are required.";

return;
}

if(!emailPattern.test(email)){

result.style.color="#ff4d4d";

result.innerText =
"⚠ Invalid email format.";

return;
}

if(!phonePattern.test(phone)){

result.style.color="#ff4d4d";

result.innerText =
"⚠ Phone must contain 10 digits.";

return;
}

result.style.color="#7CFC00";

result.innerText =
"✓ Data transmitted successfully.";

form.reset();

});