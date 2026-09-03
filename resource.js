const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
});
