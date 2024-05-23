export function toggleReadMeVisibility() {
    var prizeList = document.getElementById('prize-list');
    var info = document.getElementById('info');
    var readMe = document.getElementsByClassName('read-me-prizes-container')[0];

    // Toggle visibility of info
    if (info.style.display === 'block') {
        info.style.display = 'none';
        readMe.classList.remove('active'); // Modificado
    } else {
        info.style.display = 'block';
        prizeList.style.display = 'none';
        readMe.classList.add('active'); // Modificado

        // Oculta el otro contenedor si est谩 abierto
        var prizeListContainer = document.getElementById('prize-list');
        prizeListContainer.style.display = 'none';
    }
}