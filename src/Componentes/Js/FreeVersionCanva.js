const canvas = document.getElementById('canvas-bg');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];
        const numStars = 100;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                vx: Math.random() * 0.5,
                vy: Math.random() * 0.5
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#008000';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                star.x += star.vx;
                star.y += star.vy;

                if (star.x < 0 || star.x > canvas.width) {
                    star.vx = -star.vx;
                }

                if (star.y < 0 || star.y > canvas.height) {
                    star.vy = -star.vy;
                }
            });

            requestAnimationFrame(draw);
        }

        draw();