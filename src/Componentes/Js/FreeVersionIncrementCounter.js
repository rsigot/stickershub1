import { nuevoMint } from './FreeVersionMint.js';
var currentClicks = 0;
var currentLevel = 0; // Comenzamos en el nivel 0
var totalLevels = 4; // Total de niveles
var levelThresholds = [2, 2, 2, 2]; // Umbral para pasar al siguiente nivel
var userPrizes = [0]; //array para almacenar los templates de los premios

function prizes(value, index, array){
    console.log(value);   //control
}

export function incrementCounter() {
    currentClicks++;
    

    if (currentLevel <= totalLevels && currentClicks >= levelThresholds[currentLevel]) {
        
        currentClicks = 0;
        currentLevel++;
        var prize = getRandomPrize(currentLevel);

        var randomPrizeName = prize.name;
        var randomPrizeImage = prize.image;
        var randomPrizeTemplate = prize.template;
        
        userPrizes[0] = randomPrizeTemplate;

        console.log(userPrizes);  //control

        

        document.getElementById('prize-images').innerText="";
        //document.getElementById('result').innerHTML ="";

        document.getElementById('result').innerHTML = "You have completed Level " + (currentLevel) + 
            "<br>You won: " + randomPrizeName;

        // Crear un elemento de imagen y establecer su atributo src con la URL de la imagen del premio
        var img = document.createElement('img');
        img.src = randomPrizeImage;
        img.style.maxWidth = "100px"; // Ajustar el ancho maximo de la imagen si es necesario

        // Agregar la imagen al contenedor de imagenes de premios
        document.getElementById('prize-images').appendChild(img);
         
        // Minteo de premio en la wallet del jugador.
        var btn = document.createElement('button');
        btn.textContent = "Claim Rewards Now!";
        //btn.onClick = () => nuevoMint(userPrizes);
        btn.addEventListener('click', () => {
            nuevoMint(userPrizes);
            });
        document.getElementById('result').appendChild(btn);

        // Actualizar el contador de nivel
        document.getElementById('level-counter').innerText = "Level " + (currentLevel+1);

        // Si se ha completado el ultimo nivel, mostrar el mensaje de felicitaciones
        if (currentLevel === totalLevels) {
            document.getElementById('result').innerHTML += 
                "<br>Congratulations, you have completed all the levels! Come back tomorrow to play again or explore the other versions!";
            document.getElementById('progress-bar-container').style.display ="none";
            document.getElementById('clickbutton').style.display ="none";
            document.getElementById('progress-percentage').style.display ="none";
            document.getElementById('level-counter').style.display ="none";
            //userPrizes.map(prizes);

            
            }
            
    }

    // Actualizar la barra de progreso
    var progressPercentage = (currentClicks / levelThresholds[currentLevel]) * 100;
    document.getElementById('progress').style.width = progressPercentage + "%";

    // Actualizar el porcentaje restante para subir de nivel
    document.getElementById('progress-percentage').innerText = (100 - progressPercentage).toFixed(2) + "% : For Next Level";
    
}

function getRandomPrize(level) {
    var prizes = [
        [
            { name: "BotJoy Commemorative Edition", image: "https://i.imgur.com/FBK7YFw.gif" , template: "10" },
            { name: "BotPrime Commemorative Edition", image: "https://i.imgur.com/cf25vVQ.gif", template: "11" },
            { name: "BotDefinitive Commemorative Edition", image: "https://i.imgur.com/M4kAoDr.gif", template: "12" },
            { name: "BotAscendant Commemorative Edition", image: "https://i.imgur.com/AU2Ef9M.gif", template: "13" }
        ],
        [
            { name: "Metallic Blaze Critter", image: "https://i.imgur.com/yUfH5kU.jpg", template: "20" },
            { name: "Silver Demon Critter", image: "https://i.imgur.com/UPOQ8wz.jpg", template: "21" },
            { name: "Gato Noir Critter", image: "https://i.imgur.com/6L94525.jpg", template: "22" },
            { name: "Abyssal Serpent Critter", image: "https://i.imgur.com/IQQAjz4.jpg", template: "23" },
            { name: "Bad Bot Critter", image: "https://i.imgur.com/LZ2Ib7P.jpg", template: "24" },
            { name: "Spark Gray Critter", image: "https://i.imgur.com/kdvQCm3.jpg", template: "25" },
            { name: "Celestial Particle Critter", image: "https://i.imgur.com/caqX08u.jpg", template: "26" },
            { name: "BotPod Joy Critter", image: "https://i.imgur.com/Zk2E1hI.jpg", template: "27" },
            { name: "Sharkcoil Serpent Critter", image: "https://i.imgur.com/jSsLUEv.jpg", template: "28" },
            { name: "Diablo Visage Critter", image: "https://i.imgur.com/iuWqa5X.jpg", template: "29" },
            { name: "Gato Inferno Critter", image: "https://i.imgur.com/kfvGRsB.jpg", template: "290" },
            { name: "Skull Blaze Critter", image: "https://i.imgur.com/2wHDVGf.jpg", template: "291" },
            { name: "Diablotronic Chaos Critter", image: "https://i.imgur.com/tS2J1Tk.jpg", template: "292" },
            { name: "Astro Folly Critter", image: "https://i.imgur.com/30E341X.jpg", template: "293" }
        ],
        [
            { name: "Troll Moon Critter", image: "https://i.imgur.com/5zvYpba.jpeg", template: "30" },
            { name: "Error 404 Critter", image: "https://i.imgur.com/KAjxsup.jpeg", template: "31" },
            { name: "Bloodie Cat Critter", image: "https://i.imgur.com/wPFg01z.jpeg", template: "32" },
            { name: "Infernal Bot Critter", image: "https://i.imgur.com/OeVDhyt.jpeg", template: "33" },
            { name: "Napalm Serpent Critter", image: "https://i.imgur.com/sH6wJ4o.jpeg", template: "34" }
        ],
        [
            { name: "BotPod Knight", image: "https://i.imgur.com/1fkR0Wx.jpeg", template: "40" },
            { name: "BotPod Joy", image: "https://i.imgur.com/M8MJg9O.jpeg", template: "41" }
        ],
    ];

    // Escoge un indice aleatorio dentro del rango de la lista de premios para el nivel dado
    var randomIndex = Math.floor(Math.random() * prizes[level - 1].length);

    // Devuelve el premio aleatorio seleccionado para el nivel dado
    return prizes[level - 1][randomIndex];
}