
   
        // Mostrar la hora actual
        function updateCurrentTime() {
            var now = new Date();
            var day = now.getDate().toString().padStart(2, '0');
            var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 porque los meses van de 0 a 11
            var year = now.getFullYear();
            var hours = now.getHours().toString().padStart(2, '0');
            var minutes = now.getMinutes().toString().padStart(2, '0');
            var seconds = now.getSeconds().toString().padStart(2, '0');

            var formattedDate = day + ' - ' + month + ' - ' + year;
            var currentTime = hours + ':' + minutes + ':' + seconds + ' (' + formattedDate + ')';
            
            //document.getElementById('current-time').innerText = currentTime;
            
        }

        // Actualizar cada segundo
        setInterval(updateCurrentTime, 1000);

        // Mostrar la hora actual al cargar la p谩gina
       window.onload = updateCurrentTime;
       //updateCurrentTime();
        

    function startFloatingAnimation() {
        const images = document.querySelectorAll('.floating-image');

        images.forEach((image, index) => {
            const speedX = (Math.random() - 0.5) * 2; // Velocidad horizontal aleatoria
            const speedY = (Math.random() - 0.5) * 2; // Velocidad vertical aleatoria

            const initialX = Math.random() * (window.innerWidth - image.width);
            const initialY = Math.random() * (window.innerHeight - image.height);

            image.style.left = `${initialX}px`;
            image.style.top = `${initialY}px`;

            animateImage(image, speedX, speedY);
        });
    }

    function animateImage(image, speedX, speedY) {
        const updatePosition = () => {
            let newX = parseFloat(image.style.left) + speedX;
            let newY = parseFloat(image.style.top) + speedY;

            // Restringir la posici贸n horizontal dentro de los l铆mites de la ventana del navegador
            if (newX < 0) {
                newX = 0;
                speedX *= -1; // Cambiar direcci贸n en el borde izquierdo
            } else if (newX + image.width > window.innerWidth) {
                newX = window.innerWidth - image.width;
                speedX *= -1; // Cambiar direcci贸n en el borde derecho
            }

            // Restringir la posici贸n vertical dentro de los l铆mites de la ventana del navegador
            if (newY < 0) {
                newY = 0;
                speedY *= -1; // Cambiar direcci贸n en el borde superior
            } else if (newY + image.height > window.innerHeight) {
                newY = window.innerHeight - image.height;
                speedY *= -1; // Cambiar direcci贸n en el borde inferior
            }

            image.style.left = `${newX}px`;
            image.style.top = `${newY}px`;
        };

        const animationLoop = () => {
            updatePosition();
            requestAnimationFrame(animationLoop);
        };

        animationLoop();
    }

    startFloatingAnimation();


 //var prizeImage = document.getElementById('prize-image');
        //prizeImage.onload = function() {
        //    prizeImage.style.display = 'block';
   // };