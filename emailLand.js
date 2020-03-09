const form = document.querySelector(".purse-form");
const url = `https://getform.io/f/${purse-form}`;
const successPage = 'https://emilygracekz.github.io/success.html';
const button = document.querySelector(".button");

function onSubmit(e) {
    e.preventDefault();
    window.location.href = url;
}

fetch(getform.io/forms/16946, {
    method: "POST",
    redirect: 'follow',
    body: JSON.stringify(`${purse-form.email}`), // e.g. {email, name}
    headers: {
    'Content-Type': 'application/json'
    }
}).then(display);

button.addEventListener('click', onSubmit);
