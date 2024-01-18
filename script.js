document.getElementById('dropdownMenuButton1').addEventListener('mouseenter', function () {
    this.setAttribute('aria-expanded', 'true');
    this.nextElementSibling.classList.add('show');
});

document.getElementById('dropdownMenuButton1').addEventListener('mouseleave', function () {
    this.setAttribute('aria-expanded', 'false');
    this.nextElementSibling.classList.remove('show');
});

document.getElementById('dropdownMenuButton2').addEventListener('mouseenter', function () {
    this.setAttribute('aria-expanded', 'true');
    this.nextElementSibling.classList.add('show');
});

document.getElementById('dropdownMenuButton2').addEventListener('mouseleave', function () {
    this.setAttribute('aria-expanded', 'false');
    this.nextElementSibling.classList.remove('show');
});