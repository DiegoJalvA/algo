const globalInput = document.getElementById('global-input');
const teams = document.querySelectorAll('.team');

function normalize(text) {
    return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

globalInput.addEventListener('input', function () {
    const inputValue = normalize(this.value.trim());

    teams.forEach(team => {
        const teamName = normalize(team.getAttribute('data-name'));
        if (inputValue === teamName) {
            team.classList.add('correct');
            this.value = '';
        }
    });

    const allCorrect = Array.from(teams).every(team => team.classList.contains('correct'));
    if (allCorrect) {
        globalInput.disabled = true;
        globalInput.placeholder = '¡Felicidades! Reconociste todos los equipos';
    }
});