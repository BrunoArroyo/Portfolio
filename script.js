document.addEventListener('DOMContentLoaded', function () {
    const chk = document.getElementById('cnk');
    const mainBox = document.querySelector('.main-box');
    const section = document.querySelector('.sobre');

    chk.addEventListener('change', () => {
        // Adiciona ou remove a classe 'light' na main-box
        mainBox.classList.toggle('light', chk.checked);

        // Adiciona ou remove a classe 'light' na section
        section.classList.toggle('light', chk.checked);

        // Log para verificar se o evento está sendo capturado
        console.log('Checkbox state:', chk.checked);
        console.log('Main Box class:', mainBox.classList);
        console.log('Section class:', section.classList);
    });
});
