export default function toggleSection(section) {
    // Obtener todas las secciones excepto la que se está abriendo
    const sections = document.querySelectorAll('.version-button-container');
    sections.forEach((sec) => {
        if (sec.id !== `${section}-buttons`) {
            sec.style.display = 'none';
        }
    });

    // Toggle para abrir o cerrar la sección seleccionada
    const buttons = document.getElementById(`${section}-buttons`);
    console.log(buttons);
    buttons.style.display = (buttons.style.display === 'none' || buttons.style.display === '') ? 'flex' : 'none';
    
}

