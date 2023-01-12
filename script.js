// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
    let object = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zip-code').value,
        status: document.getElementById('status').checked,
    };
    return object;
};

function isNumber(string) {
    if (isNaN(string)) {
        return false;
    }
    return true;
};

function checkboxIsChecked() {
    const checks = document.getElementById('status').checked;
    if (checks) {
        return true;
    } else {
        return false;
    };
};

function validateFormData(object) {
    if (object.name == null) return false;
    if (object.city == null) return false;
    if (object.email == null) return false;
    if (object.zipCode == null) return false;

    if (!checkboxIsChecked()) return false;
    if (object.zipCode) {
        if (!isNumber(object.zipCode)) return false;
    };
    return true;
};

function submit() {
    const warning = document.getElementById('warning');
    if (!validateFormData(handleGetFormData())) {
        warning.innerHTML = 'Periksa form anda sekali lagi';
    } else {
        alert(`Halo, ${handleGetFormData().name} ${handleGetFormData().email} ${handleGetFormData().city} ${handleGetFormData().zipCode}. Terimakasih sudah men-submit!`);
        // warning.innerHTML = '';
    };
};

function resetForm() {
    document.getElementById('myForm').reset();
};

window.addEventListener('scroll', function () {
    let header = document.querySelector('body .header');
    header.classList.toggle('sticky', window.scrollY > 0);

    let scrollUpBtn = document.querySelector('.scroll-up-btn');
    scrollUpBtn.classList.toggle('hide', window.scrollY < 20);
});

const menuToggle = document.querySelector('.header .navbar .menu-toggle input');
const nav = document.querySelector('.header .navbar ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
li.forEach(c => {
    c.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');
        c.classList.add('active');
    });
});