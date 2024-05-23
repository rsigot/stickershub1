export function togglePrizeVisibility() {
    var prizeList = document.getElementById('prize-list');
    var info = document.getElementById('info');
    var readMe = document.getElementsByClassName('read-me-prizes-container')[0];

    // Toggle visibility of prize list
    if (prizeList.style.display === 'block') {
        prizeList.style.display = 'none';
        readMe.classList.remove('active'); // Modificado
    } else {
        prizeList.style.display = 'block';
        info.style.display = 'none';
        readMe.classList.add('active'); // Modificado

        // Oculta el otro contenedor si est谩 abierto
        var readMeContainer = document.getElementById('info');
        readMeContainer.style.display = 'none';
    }
}