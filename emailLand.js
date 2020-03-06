const form = document.querySelector(".purse-form");
const url = `https://getform.io/f/${purse-form}`;

function onSubmit(e) {
    e.preventDefault();
    window.location.href = 'https://emilygracekz.github.io/success.html';
}

fetch(url, {
    method: "POST",
    redirect: 'follow',
    body: JSON.stringify(`${purse-form.email}`), // e.g. {email, name}
    headers: {
    'Content-Type': 'application/json'
    }
})

form.addEventListener('click', onSubmit);
