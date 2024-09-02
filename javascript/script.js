document.addEventListener("DOMContentLoaded", function () {
    const players = {
        "Lionel Messi": { goals: 700, image: "images/messi.png" },
        "Cristiano Ronaldo": { goals: 800, image: "images/ronaldo.png" },
        "Pele": { goals: 767, image: "images/pele.png" },
        "Diego Maradona": { goals: 358, image: "images/maradona.png" },
        "Neymar": { goals: 400, image: "images/neymar.png" },
        "Zlatan Ibrahimovic": { goals: 500, image: "images/zlatan.png" },
        "Thierry Henry": { goals: 411, image: "images/henry.png" },
        "Kylian Mbappe": { goals: 230, image: "images/mbappe.png" },
        "Luis Suarez": { goals: 500, image: "images/suarez.png" },
        "Robert Lewandowski": { goals: 600, image: "images/lewandowski.png" },
        "Ronaldo Nazário": { goals: 414, image: "images/ronaldo_nazario.png" },
        "Andrés Iniesta": { goals: 93, image: "images/iniesta.png" },
        "Xavi Hernandez": { goals: 85, image: "images/xavi.png" },
        "Paolo Maldini": { goals: 40, image: "images/maldini.png" },
        "Francesco Totti": { goals: 307, image: "images/totti.png" },
        "David Beckham": { goals: 146, image: "images/beckham.png" },
        "Raul Gonzalez": { goals: 404, image: "images/raul.png" },
        "Alfredo Di Stefano": { goals: 513, image: "images/di_stefano.png" },
        "Eusebio": { goals: 473, image: "images/eusebio.png" },
        "Johan Cruyff": { goals: 324, image: "images/cruyff.png" },
        "Ferenc Puskás": { goals: 616, image: "images/puskas.png" },
        "Gerd Muller": { goals: 735, image: "images/muller.png" },
        "George Best": { goals: 245, image: "images/best.png" },
        "Michel Platini": { goals: 353, image: "images/platini.png" },
        "Marco van Basten": { goals: 277, image: "images/van_basten.png" },
        "Ruud van Nistelrooy": { goals: 347, image: "images/van_nistelrooy.png" },
        "Romário": { goals: 688, image: "images/romario.png" },
        "Gabriel Batistuta": { goals: 354, image: "images/batistuta.png" },
        "Roberto Baggio": { goals: 318, image: "images/baggio.png" },
        "Zico": { goals: 476, image: "images/zico.png" },
        "Eric Cantona": { goals: 161, image: "images/cantona.png" },
        "Hristo Stoichkov": { goals: 291, image: "images/stoichkov.png" },
        "Samuel Eto'o": { goals: 360, image: "images/etoo.png" },
        "Didier Drogba": { goals: 366, image: "images/drogba.png" },
        "Wayne Rooney": { goals: 366, image: "images/rooney.png" },
        "Alessandro Del Piero": { goals: 346, image: "images/del_piero.png" },
        "George Weah": { goals: 193, image: "images/weah.png" },
        "Kenny Dalglish": { goals: 230, image: "images/dalglish.png" },
        "Steven Gerrard": { goals: 185, image: "images/gerrard.png" },
        "Frank Lampard": { goals: 274, image: "images/lampard.png" },
        "Ryan Giggs": { goals: 168, image: "images/giggs.png" },
        "Pavel Nedved": { goals: 150, image: "images/nedved.png" },
        "Rivaldo": { goals: 354, image: "images/rivaldo.png" },
        "Claudio Caniggia": { goals: 121, image: "images/caniggia.png" },
        "Jürgen Klinsmann": { goals: 282, image: "images/klinsmann.png" },
        "Gary Lineker": { goals: 282, image: "images/lineker.png" },
        "Filippo Inzaghi": { goals: 316, image: "images/inzaghi.png" },
        "Gonzalo Higuain": { goals: 300, image: "images/higuain.png" },
        "Eden Hazard": { goals: 160, image: "images/hazard.png" },
        "Fernando Torres": { goals: 260, image: "images/torres.png" },
        "Luka Modric": { goals: 99, image: "images/modric.png" },
        "Karim Benzema": { goals: 420, image: "images/benzema.png" },
        "Sergio Agüero": { goals: 379, image: "images/aguero.png" },
        "Pierre-Emerick Aubameyang": { goals: 288, image: "images/aubameyang.png" },
        "Robin van Persie": { goals: 273, image: "images/van_persie.png" },
        "Antonio Di Natale": { goals: 319, image: "images/di_natale.png" },
        "David Villa": { goals: 404, image: "images/villa.png" },
        "Luis Figo": { goals: 130, image: "images/figo.png" },
        "Arjen Robben": { goals: 246, image: "images/robben.png" },
        "Rudi Völler": { goals: 258, image: "images/voller.png" },
        "Raheem Sterling": { goals: 165, image: "images/sterling.png" },
        "Mario Mandzukic": { goals: 219, image: "images/mandzukic.png" },
        "Edinson Cavani": { goals: 423, image: "images/cavani.png" },
        "James Rodríguez": { goals: 104, image: "images/james_rodriguez.png" },
        "Gareth Bale": { goals: 185, image: "images/bale.png" },
        "Zinedine Zidane": { goals: 125, image: "images/zidane.png" },
        "Mesut Ozil": { goals: 90, image: "images/ozil.png" },
        "Thomas Müller": { goals: 220, image: "images/thomas_muller.png" },
        "Paul Scholes": { goals: 155, image: "images/scholes.png" },
        "Andriy Shevchenko": { goals: 327, image: "images/shevchenko.png" },
        "Carlos Tevez": { goals: 308, image: "images/tevez.png" },
        "Edgar Davids": { goals: 70, image: "images/davids.png" },
        "Clarence Seedorf": { goals: 119, image: "images/seedorf.png" },
        "Patrick Kluivert": { goals: 240, image: "images/kluivert.png" },
        "David Trezeguet": { goals: 320, image: "images/trezeguet.png" },
        "Ronaldinho": { goals: 197, image: "images/ronaldinho.png" },
        "Franck Ribéry": { goals: 160, image: "images/ribery.png" },
        "Patrick Vieira": { goals: 45, image: "images/vieira.png" },
        "Paolo Rossi": { goals: 197, image: "images/rossi.png" },
        "Socrates": { goals: 172, image: "images/socrates.png" },
        "Giuseppe Meazza": { goals: 284, image: "images/meazza.png" },
        "Tostao": { goals: 249, image: "images/tostao.png" },
        "Gianni Rivera": { goals: 170, image: "images/rivera.png" },
        "Alan Shearer": { goals: 379, image: "images/shearer.png" },
        "Gary Neville": { goals: 7, image: "images/neville.png" },
        "Kaka": { goals: 161, image: "images/kaka.png" },
        "Nicolas Anelka": { goals: 210, image: "images/anelka.png" },
        "Michael Owen": { goals: 262, image: "images/owen.png" },
        "Christian Vieri": { goals: 236, image: "images/vieri.png" },
        "Mario Balotelli": { goals: 160, image: "images/balotelli.png" },
        "Romelu Lukaku": { goals: 250, image: "images/lukaku.png" },
        "Roberto Carlos": { goals: 113, image: "images/carlos.png" }
    };
    let score = 0;
    let highScore = 0;
    let player1, player2;

    function pickPlayers() {
        const playerNames = Object.keys(players);
        player1 = playerNames[Math.floor(Math.random() * playerNames.length)];
        do {
            player2 = playerNames[Math.floor(Math.random() * playerNames.length)];
        } while (player1 === player2);

        document.getElementById("player1-name").textContent = player1;
        document.getElementById("player1-img").src = players[player1].image;
        document.getElementById("player1-goals").textContent = `Goals: ${players[player1].goals}`;

        document.getElementById("player2-name").textContent = player2;
        document.getElementById("player2-img").src = players[player2].image;
        document.getElementById("player2-goals").textContent = "Goals: ???";

        document.getElementById("result").textContent = "";
        document.getElementById("play-again").style.display = "none";
    }

    function checkAnswer(isHigher) {
        const actualIsHigher = players[player2].goals > players[player1].goals;
        if (isHigher === actualIsHigher) {
            document.getElementById("result").textContent = `Correct! ${player2} has ${players[player2].goals} goals.`;
            score++;
            highScore = Math.max(highScore, score);
            updateScoreDisplay();
            pickPlayers(); // Pick new players if the answer is correct
        } else {
            document.getElementById("result").textContent = `Wrong! ${player2} has ${players[player2].goals} goals.`;
            score = 0; // Reset score on a wrong answer
            updateScoreDisplay();
            document.getElementById("play-again").style.display = "block";
        }
        document.getElementById("player2-goals").textContent = `Goals: ${players[player2].goals}`;
    }

    function updateScoreDisplay() {
        document.getElementById("current-score").textContent = `Score: ${score}`;
        document.getElementById("high-score").textContent = `High Score: ${highScore}`;
    }

    document.getElementById("higher").addEventListener("click", function () {
        checkAnswer(true);
    });

    document.getElementById("lower").addEventListener("click", function () {
        checkAnswer(false);
    });

    document.getElementById("play-again").addEventListener("click", function () {
        pickPlayers(); // Start a new game after a wrong answer
    });

    updateScoreDisplay(); // Initialize the score display
    pickPlayers(); // Start the game
});