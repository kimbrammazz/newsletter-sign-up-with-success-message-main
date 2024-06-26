const signup = document.querySelector("#signup");
const success = document.querySelector("#success");
let email = document.querySelector("#email");
const submitBtn = document.querySelector(".submit");
const subscriber = document.querySelector("#subscriber");
const dismiss = document.querySelector(".dismiss");

window.addEventListener("DOMContentLoaded", () => {
	success.style.display = "none";
	// signup.style.display = "block";
});

// validation
const validEmail = (email) => {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
};

// validation error message
const errorMessage = () => {
	const errorElement = document.createElement("p");
	const errorText = document.createTextNode("Valid email required");
	errorElement.appendChild(errorText);
	const labels = document.querySelector(".labels");
	labels.appendChild(errorElement);
	// add class to input
	const errorInput = document.querySelector("input");
	errorInput.classList.add("error");
};

// function to display success message
const displaySuccess = () => {
	// console.log("displaySuccess function run");
	success.style.display = "block";
	signup.style.display = "none";
	subscriber.innerHTML = `${email.value}`;
};

// function to check validation and display success message
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (!validEmail(email.value)) {
		console.log(email.value);
		errorMessage();
	} else {
		console.log("successful");
		displaySuccess();
	}
});

// function to dismiss success message
dismiss.addEventListener("click", () => {
	window.location.reload();
});
