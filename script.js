/* =========================================================
   7 MONTHS — 1000 STORIES ❤️
   COMPLETE SCRIPT.JS
========================================================= */

const app = document.getElementById("app");
const transition = document.getElementById("transition");
const particles = document.getElementById("particles");

let relationshipIndex = 0;


/* =========================================================
   MEMORY IMAGES
========================================================= */

const memories = [
    "memory-1.jpg",
    "memory-2.jpg",
    "memory-3.jpg",
    "memory-4.jpg",
    "memory-5.jpg",
    "memory-6.jpg",
    "memory-7.jpg",
    "memory-8.jpg"
];


/* =========================================================
   VIRAT IMAGE
========================================================= */

const VIRAT =
"https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg";

const VIRAT_BATTING =
"https://upload.wikimedia.org/wikipedia/commons/a/ad/Virat_Kohli_Batting.jpg";

const COVER_DRIVE_IMAGE =
"https://upload.wikimedia.org/wikipedia/commons/d/d6/Abridge_CC_v_Hadley_Wood_Green_Sports_CC_at_Abridge%2C_Essex%2C_England._Canon_31_%28cropped%29.jpg";


/* =========================================================
   RENDER SYSTEM
========================================================= */

function render(html, text = "our little story...") {

    transition.querySelector(".transition-text").textContent = text;

    transition.classList.add("active");

    setTimeout(() => {

        app.innerHTML = html;

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 300);

    setTimeout(() => {

        transition.classList.remove("active");

    }, 750);
}


/* =========================================================
   TOAST
========================================================= */

function toast(message) {

    const box = document.getElementById("toast");

    if (!box) return;

    box.textContent = message;

    box.classList.add("show");

    setTimeout(() => {
        box.classList.remove("show");
    }, 2300);
}


/* =========================================================
   HOME
========================================================= */

function homeScreen() {
    story1();
}


/* =========================================================
   TOP NAVIGATION
========================================================= */

function goToWorld(world) {

    if (world === "story") {
        story1();
    }

    if (world === "games") {
        storyToGames();
    }

    if (world === "special") {
        gamesToSpecial();
    }
}


/* =========================================================
   STORY 1
   7 MONTHS, 1000 STORIES
========================================================= */

function story1() {

    render(`

        <section class="screen">

            <div class="kicker">
                Home • 1 / 10
            </div>

            <h1 class="title">
                7 Months,<br>
                <span>1000 Stories</span>
            </h1>

            <p class="subtitle">

                Hey...

                <br>

                <span class="script"
                      style="
                      font-size:32px;
                      color:#ff9fbd;
                      ">

                    I made you something.

                </span>

                <br>

                A little website, a big piece of my heart.
                Because you mean everything to me.

            </p>

            <button class="next-btn"
                    onclick="story2()">

                Start Our Story →

            </button>

        </section>

    `, "once upon a time...");

}


/* =========================================================
   STORY 2
   BEFORE US
========================================================= */

function story2() {

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 2 / 10
            </div>

            <h2 class="title">
                <span>Before Us</span>
            </h2>

            <div class="you-me">

                <div class="person-box">

                    <h3>Him</h3>

                    <p>
                        Wasn't looking for a relationship.
                        😶
                    </p>

                </div>

                <div class="arrow-big">
                    ↘
                </div>

                <div class="person-box">

                    <h3>Me</h3>

                    <p>
                        Had other plans.
                        🙂
                    </p>

                </div>

            </div>

            <div class="frame"
                 style="text-align:center;">

                <p class="script"
                   style="
                   font-size:34px;
                   color:#ff9fbd;
                   ">

                    And then...

                </p>

                <p style="
                   margin-top:10px;
                   font-size:25px;
                   ">

                    I proposed. ❤️

                </p>

                <p style="
                   margin-top:15px;
                   color:#aaa;
                   ">

                    Plot twist...

                </p>

                <p class="script"
                   style="
                   margin-top:5px;
                   font-size:30px;
                   color:#ff9fbd;
                   ">

                    He said yes. ❤️

                </p>

            </div>

            <button class="next-btn"
                    onclick="story3()">

                Continue →

            </button>

        </section>

    `, "and then...");

}


/* =========================================================
   STORY 3
   7 MONTHS, 7 CHAPTERS
========================================================= */

function story3() {

    const chapters = [
        "The Beginning",
        "Getting to Know Us",
        "Chaos Era",
        "Learning Each Other",
        "More Us",
        "Stronger Than Before",
        "Still Here ❤️"
    ];

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 3 / 10
            </div>

            <h2 class="title">
                7 Months,<br>
                <span>7 Chapters</span>
            </h2>

            <div class="chapter-list">

                ${chapters.map((chapter, index) => `

                    <div class="chapter-row">

                        <span class="chapter-number">
                            ${index + 1}
                        </span>

                        <span>
                            Month ${index + 1}
                            — ${chapter}
                        </span>

                    </div>

                `).join("")}

            </div>

            <button class="next-btn"
                    onclick="story4()">

                Chapter 4 →

            </button>

        </section>

    `, "chapter by chapter...");

}


/* =========================================================
   STORY 4
   FIGHTING DEPARTMENT
========================================================= */

function story4() {

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 4 / 10
            </div>

            <h2 class="title">
                Our Fighting<br>
                <span>Department</span>
            </h2>

            <p class="subtitle">
                (the most active department)
            </p>

            <div class="stats-box">

                ${[
                    ["Fights", 85],
                    ["Misunderstandings", 70],
                    ["Overthinking", 60],
                    ["Making up", 90],
                    ["Caring even when we fight", 100]
                ].map(item => `

                    <div class="stat">

                        <div class="stat-head">

                            <span>
                                ${item[0]}
                            </span>

                            <span>
                                ${
                                    item[1] === 100
                                    ? "∞"
                                    : item[1] + "%"
                                }
                            </span>

                        </div>

                        <div class="bar">

                            <span
                                style="width:${item[1]}%">
                            </span>

                        </div>

                    </div>

                `).join("")}

            </div>

            <p class="subtitle"
               style="margin-top:25px;">

                Things we have fought about...

                <br><br>

                overthinking text replies •
                who's right •
                random doubts •
                small things that became things

            </p>

            <div class="frame">

                <p class="script"
                   style="
                   text-align:center;
                   font-size:28px;
                   color:#ff9fbd;
                   ">

                    Somehow, after all that chaos,
                    we kept choosing to talk,
                    understand, and stay. ❤️

                </p>

            </div>

            <button class="next-btn"
                    onclick="story5()">

                Survived →

            </button>

        </section>

    `, "chaos included...");

}


/* =========================================================
   STORY 5
   THINGS WE SURVIVED
========================================================= */

function story5() {

    const survived = [
        "Arguments",
        "Misunderstandings",
        "Doubts",
        "Bad days",
        "Overthinking",
        "Distance / Busy days",
        "Ego clashes"
    ];

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 5 / 10
            </div>

            <h2 class="title">
                Things We<br>
                <span>Survived</span>
            </h2>

            <div class="survived-grid">

                ${survived.map(item => `

                    <div class="survived-item">
                        ✓ ${item}
                    </div>

                `).join("")}

            </div>

            <div class="frame"
                 style="
                 margin-top:25px;
                 text-align:center;
                 ">

                <p>
                    But we also learned.
                </p>

                <p class="script"
                   style="
                   margin-top:10px;
                   font-size:28px;
                   color:#ff9fbd;
                   ">

                    We learned to be kinder,
                    patient, more honest
                    and more us.

                </p>

            </div>

            <button class="next-btn"
                    onclick="story6()">

                Next →

            </button>

        </section>

    `, "we survived...");

}


/* =========================================================
   STORY 6
   THINGS I LOVE ABOUT US
========================================================= */

function story6() {

    const loves = [
        ["♡", "The way we care"],
        ["☾", "Our stupid conversations"],
        ["☻", "Our late-night talks"],
        ["☺", "Our inside jokes"],
        ["♧", "The comfort we have"],
        ["♡", "The trust we've built"]
    ];

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 6 / 10
            </div>

            <h2 class="title">
                Things I Love<br>
                <span>About Us</span>
            </h2>

            <div class="love-grid">

                ${loves.map(item => `

                    <div class="love-card">

                        <div class="icon">
                            ${item[0]}
                        </div>

                        <p>
                            ${item[1]}
                        </p>

                    </div>

                `).join("")}

            </div>

            <p class="script"
               style="
               margin-top:25px;
               color:#ff9fbd;
               font-size:28px;
               ">

                You + Me = ♡

            </p>

            <button class="next-btn"
                    onclick="story7()">

                Next →

            </button>

        </section>

    `, "the little things...");

}


/* =========================================================
   STORY 7
   A LITTLE BIT OF YOU IN ME
========================================================= */

function story7() {

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 7 / 10
            </div>

            <h2 class="title">
                A Little Bit<br>
                <span>of You in Me</span>
            </h2>

            <p class="subtitle">

                Somewhere between loving you...
                I started loving the things you love too.

            </p>

            <div class="you-me">

                <div class="person-box">

                    <h3>You</h3>

                    <p>
                        🏏 Cricket<br>
                        👑 Virat<br>
                        🌻 Sunflowers<br>
                        ♡ Your habits
                    </p>

                </div>

                <div class="arrow-big">
                    →
                </div>

                <div class="person-box">

                    <h3>Me</h3>

                    <p>
                        🏏 Your love for cricket<br>
                        👑 Your favourite player<br>
                        🌻 Sunflowers<br>
                        ♡ Your little ways
                    </p>

                </div>

            </div>

            <div class="frame">

                <p class="script"
                   style="
                   text-align:center;
                   color:#ff9fbd;
                   font-size:30px;
                   ">

                    I wasn't even a fan...
                    <br>
                    And then you happened. ❤️

                </p>

            </div>

            <button class="next-btn"
                    onclick="story8()">

                Memory Wall →

            </button>

        </section>

    `, "a little bit of you...");

}


/* =========================================================
   STORY 8
   MEMORY WALL
========================================================= */

function story8() {

    const captions = [
        "First photo ♡",
        "Favourite photo ♡",
        "Funniest moment ♡",
        "Random memory ♡",
        "Best memory ♡",
        "This day >>>",
        "Us ♡",
        "More memories..."
    ];

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 8 / 10
            </div>

            <h2 class="title">
                The <span>Memory Wall</span>
            </h2>

            <p class="subtitle">

                Little moments.
                Little memories.
                Little pieces of us. ❤️

            </p>

            <div class="memory-grid">

                ${memories.map((src, index) => `

                    <div class="polaroid">

                        <img
                            src="${src}"
                            alt="Memory ${index + 1}">

                        <small>
                            ${captions[index]}
                        </small>

                    </div>

                `).join("")}

            </div>

            <button class="next-btn"
                    onclick="story9()">

                Continue →

            </button>

        </section>

    `, "memories loading...");

}


/* =========================================================
   STORY 9
   BOYFRIEND EXAMINATION
========================================================= */

let examAnswered = [false, false, false, false];

function story9() {

    examAnswered = [false, false, false, false];

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 9 / 10
            </div>

            <h2 class="title">
                7-Month<br>
                <span>Boyfriend Examination</span>
            </h2>

            <p class="subtitle">
                Let's see how well you know us... ❤️
            </p>


            <!-- Q1 -->

            <div class="exam-question">

                <p>
                    Q1. Who proposed first?
                </p>

                <div class="radio-options">

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 0)">
                        A. Me
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, true, 0)">
                        B. You ❤️
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 0)">
                        C. Both
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 0)">
                        D. The universe 😂
                    </button>

                </div>

            </div>


            <!-- Q2 -->

            <div class="exam-question">

                <p>
                    Q2. Who starts more arguments?
                </p>

                <div class="radio-options">

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 1)">
                        A. You
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, true, 1)">
                        B. Me 😭
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 1)">
                        C. Both
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 1)">
                        D. Depends on the day
                    </button>

                </div>

            </div>


            <!-- Q3 -->

            <div class="exam-question">

                <p>
                    Q3. Who says "I'm fine"
                    when they're clearly not fine?
                </p>

                <div class="radio-options">

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 2)">
                        A. You
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 2)">
                        B. Me
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, true, 2)">
                        C. Both 😭
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 2)">
                        D. Whoever is losing the argument 😂
                    </button>

                </div>

            </div>


            <!-- Q4 -->

            <div class="exam-question">

                <p>
                    Q4. After everything,
                    would you still choose us?
                </p>

                <div class="radio-options">

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 3)">
                        ❤️ Obviously
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 3)">
                        🥹 Yes
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, true, 3)">
                        ♾️ Always
                    </button>

                    <button class="radio-option"
                            onclick="examAnswer(this, false, 3)">
                        😂 Why is this emotional?
                    </button>

                </div>

            </div>


            <button id="exam-finish"
                    class="next-btn"
                    onclick="story10()"
                    disabled
                    style="
                    opacity:0.45;
                    cursor:not-allowed;
                    ">

                Finish Examination →

            </button>

        </section>

    `, "final test...");

}


/* =========================================================
   EXAM ANSWER
========================================================= */

function examAnswer(button, correct, questionIndex) {

    // Don't allow the same question to be answered twice
    if (examAnswered[questionIndex]) {
        return;
    }

    examAnswered[questionIndex] = true;


    // Keep the existing answer styling
    if (correct) {

        button.style.borderColor = "#73dfa6";

        button.style.background =
            "rgba(70,200,130,.15)";

        toast("Correct. ❤️");

    } else {

        button.style.borderColor = "#ff6687";

        button.style.background =
            "rgba(255,60,90,.13)";

        toast("Hmm... suspicious answer 😭");

    }


    // Disable all options for this question
    const options =
        button.parentElement.querySelectorAll(".radio-option");

    options.forEach(option => {

        option.disabled = true;

    });


    // Check how many questions are answered
    const answered =
        examAnswered.filter(Boolean).length;


    // Unlock only after all 4 questions
    if (answered === 4) {

        const finish =
            document.getElementById("exam-finish");

        if (finish) {

            finish.disabled = false;

            finish.style.opacity = "1";

            finish.style.cursor = "pointer";

        }

    }

}


/* =========================================================
   STORY 10
   FAVOURITE CHAPTER
========================================================= */

function story10() {

    relationshipIndex = 0;

    render(`

        <section class="screen">

            <div class="kicker">
                Our Story • 10 / 10
            </div>

            <h2 class="title">

                To the Person Who Became
                <span>My Favourite Chapter</span>

            </h2>


            <!-- EXACT MESSAGE -->

            <div class="paper">

                <p style="
                    text-align:center;
                    font-family:'Caveat',cursive;
                    font-size:28px;
                    line-height:1.7;
                ">

                    7 months, countless fights,
                    doubts, laughs & memories…
                    🥹❤️‍🩹✨

                    <br><br>

                    Somehow, through it all,
                    it’s still you. 🫶🏻🌙

                    <br><br>

                    From your cricket & Virat obsession
                    🏏👑 to sunflowers becoming special
                    to me 🌻 — a little piece of you
                    found its way into me. 🥺❤️

                    <br><br>

                    I chose you then, I choose you now,
                    and I’ll keep choosing you.
                    ♾️🔐🫀

                    <br><br>

                    You’re my one. Always. ❤️🖤✨

                </p>

            </div>


            <!-- IF OUR RELATIONSHIP WERE -->

            <div class="relationship-stage">

                <h2 class="title"
                    style="
                    font-size:52px;
                    margin-top:45px;
                    ">

                    If Our Relationship Were...

                </h2>


                <div id="relationshipCards">


                    <!-- 1 MOVIE -->

                    <div class="relationship-card active">

                        <div class="relationship-icon">
                            🎬
                        </div>

                        <h3>
                            If our story were a movie…
                        </h3>

                        <div class="relationship-answer">
                            Jab We Met ❤️
                        </div>

                        <p class="relationship-text">

                            “A little chaotic, a little crazy,
                            full of fights and feelings…
                            but somehow, we found our way
                            to each other.”

                        </p>

                    </div>


                    <!-- 2 SONG -->

                    <div class="relationship-card">

                        <div class="relationship-icon">
                            🎵
                        </div>

                        <h3>
                            If our relationship were a song…
                        </h3>

                        <div class="relationship-answer">
                            Admirin' You — Karan Aujla
                        </div>

                        <p class="relationship-text">

                            “Somehow, you became one of those
                            people I can't imagine my story
                            without.” ❤️

                        </p>

                    </div>


                    <!-- 3 PLACE -->

                    <div class="relationship-card">

                        <div class="relationship-icon">
                            🏔️
                        </div>

                        <h3>
                            If our relationship were a place…
                        </h3>

                        <div class="relationship-answer">
                            Manali
                        </div>

                        <p class="relationship-text">

                            “A little chaotic, a little peaceful,
                            but somewhere I’d always want
                            to return to. ❤️”

                        </p>

                    </div>


                    <!-- 4 COLOURS -->

                    <div class="relationship-card">

                        <div class="relationship-icon">
                            🎨
                        </div>

                        <h3>
                            If our relationship were colours…
                        </h3>

                        <div class="relationship-answer">
                            ❤️ Red + 🖤 Black
                        </div>

                        <p class="relationship-text">

                            Red — love, feelings & attachment

                            <br><br>

                            Black — depth, intensity &
                            all the complicated moments

                            <br><br>

                            “Red for the love.
                            Black for the depth.
                            Together, that’s us. ❤️🖤”

                        </p>

                    </div>


                    <!-- 5 SEASON -->

                    <div class="relationship-card">

                        <div class="relationship-icon">
                            ❄️
                        </div>

                        <h3>
                            If our relationship were a season…
                        </h3>

                        <div class="relationship-answer">
                            WINTER 🤍
                        </div>

                        <p class="relationship-text">

                            “Cold days, warm conversations,
                            cozy memories, and a little world
                            that feels better when it’s just us.”
                            ❄️🤍

                        </p>

                    </div>


                    <!-- 6 MOMENT -->

                    <div class="relationship-card">

                        <div class="relationship-icon">
                            🏏
                        </div>

                        <h3>
                            If our relationship were a moment…
                        </h3>

                        <div class="relationship-answer">

                            Virat Kohli lifting a trophy. 🏆

                        </div>

                        <p class="relationship-text">

                            “The kind of moment that makes
                            all the chaos, emotions, and effort
                            feel worth it.” ❤️

                        </p>

                    </div>


                </div>


                <div class="relationship-controls">

                    <button class="back-btn"
                            onclick="previousRelationship()">

                        ←

                    </button>

                    <button class="next-btn"
                            style="margin-top:0;"
                            onclick="nextRelationship()">

                        Reveal Next ❤️

                    </button>

                </div>

            </div>

        </section>

    `, "my favourite chapter...");

}


/* =========================================================
   RELATIONSHIP NEXT
========================================================= */

function nextRelationship() {

    const cards =
        document.querySelectorAll(".relationship-card");

    relationshipIndex++;

    if (relationshipIndex >= cards.length) {

        storyToGames();

        return;
    }

    cards.forEach(card => {
        card.classList.remove("active");
    });

    cards[relationshipIndex].classList.add("active");

}


/* =========================================================
   RELATIONSHIP PREVIOUS
========================================================= */

function previousRelationship() {

    const cards =
        document.querySelectorAll(".relationship-card");

    if (relationshipIndex <= 0) {
        return;
    }

    relationshipIndex--;

    cards.forEach(card => {
        card.classList.remove("active");
    });

    cards[relationshipIndex].classList.add("active");

}


/* =========================================================
   STORY → GAME ZONE
========================================================= */

function storyToGames() {

    render(`

        <section class="screen">

            <div class="frame"
                 style="text-align:center;">

                <div style="
                    font-size:60px;
                    color:#ff9fbd;
                ">
                    👑
                </div>

                <h2 class="title"
                    style="font-size:60px;">

                    Okay...

                </h2>

                <p class="subtitle">

                    You know our story pretty well.

                </p>

                <p class="script"
                   style="
                   margin-top:15px;
                   font-size:31px;
                   color:#ff9fbd;
                   ">

                    But how well do you know
                    the things I love? 👀

                </p>

                <button class="next-btn"
                        onclick="game1()">

                    Enter Game Zone →

                </button>

            </div>

        </section>

    `, "a new world awaits...");

}


/* =========================================================
   GAME 1
   GAME ZONE
========================================================= */

function game1() {

    render(`

        <section class="screen">

            <div class="kicker">
                Game Zone • 1 / 12
            </div>

            <h1 class="title">
                GAME <span>ZONE</span>
            </h1>

            <p class="subtitle">

                Because love is better
                with a little competition! 🏏❤️

            </p>

            <div class="game-menu">


                <div class="game-tile">

                    <div class="game-icon">
                        ♕
                    </div>

                    <h3>
                        The Virat Quiz
                    </h3>

                    <p>
                        How well do you know King Kohli?
                    </p>

                </div>


                <div class="game-tile">

                    <div class="game-icon">
                        ◉
                    </div>

                    <h3>
                        Cricket Trivia
                    </h3>

                    <p>
                        Test your cricket knowledge!
                    </p>

                </div>


                <div class="game-tile">

                    <div class="game-icon">
                        🏏
                    </div>

                    <h3>
                        Guess the Shot
                    </h3>

                    <p>
                        Can you identify Virat's shots?
                    </p>

                </div>


                <div class="game-tile">

                    <div class="game-icon">
                        ♡
                    </div>

                    <h3>
                        Relationship Quiz
                    </h3>

                    <p>
                        Build a stronger us!
                    </p>

                </div>


                <div class="game-tile">

                    <div class="game-icon">
                        ☻
                    </div>

                    <h3>
                        Would You Rather?
                    </h3>

                    <p>
                        Pick your side!
                    </p>

                </div>


                <div class="game-tile">

                    <div class="game-icon">
                        🏆
                    </div>

                    <h3>
                        Cricket Scenarios
                    </h3>

                    <p>
                        What would you do?
                    </p>

                </div>


            </div>

            <p class="script"
               style="
               margin-top:30px;
               color:#ff9fbd;
               font-size:28px;
               ">

                → Ready? Let's play! →

            </p>

            <button class="next-btn"
                    onclick="game2()">

                Start →

            </button>

        </section>

    `, "ready? let's play...");

}


/* =========================================================
   GAME 2
   VIRAT QUIZ
========================================================= */

function game2() {

    renderQuiz({

        number: 2,

        title: "The Virat Quiz",

        subtitle:
            "How well do you know King Kohli?",

        image:
            VIRAT,

        question:
            "When was Virat Kohli born?",

        options: [
            "5 November 1988",
            "8 December 1988",
            "20 September 1988",
            "2 November 1988"
        ],

        correct: 0,

        next: game3

    }, "King Kohli loading...");

}


/* =========================================================
   GAME 3
   CRICKET TRIVIA
========================================================= */

function game3() {

    renderQuiz({

        number: 3,

        title: "Cricket Trivia",

        subtitle:
            "How much of a cricket fan are you?",

        question:
            "In which format did Virat Kohli record his highest individual international score?",

        options: [
            "Test",
            "ODI",
            "T20I",
            "IPL"
        ],

        correct: 1,

        next: game4

    }, "question one...");

}


/* =========================================================
   GAME 4
   GUESS THE SHOT
========================================================= */

function game4() {

    renderQuiz({

        number: 4,

        title: "Guess the Shot",

        subtitle:
            "Can you identify this iconic shot?",

        image:
            "virat-shot.jpg",

        question:
            "What is this shot most commonly associated with?",

        options: [
            "Cover Drive",
            "Pull Shot",
            "Straight Drive",
            "Helicopter Shot"
        ],

        correct: 0,

        next: game5

    }, "watch closely...");

}


/* =========================================================
   GAME 5
   RELATIONSHIP QUIZ
========================================================= */

function game5() {

    renderQuiz({

        number: 5,

        title: "Relationship Quiz",

        subtitle:
            "Little choices, big love!",

        question:
            "What is the best way to handle a fight in a relationship?",

        options: [
            "Give each other space forever",
            "Talk it out honestly",
            "Ignore it and move on",
            "Write a long text but don't send it"
        ],

        correct: 1,

        next: game6

    }, "okay... relationship round...");

}


/* =========================================================
   GAME 6
   WOULD YOU RATHER
========================================================= */

function game6() {

    render(`

        <section class="screen">

            <div class="kicker">
                Game Zone • 6 / 10
            </div>

            <h2 class="title">
                Would You <span>Rather?</span>
            </h2>

            <p class="subtitle">
                Pick your side... no cheating!
            </p>

            <div class="love-grid">

                <button class="love-card"
                        onclick="ratherChoice('beach')">

                    <div class="icon">
                        🌴
                    </div>

                    <p>
                        Spend a day
                        at the beach with me
                    </p>

                </button>


                <button class="love-card"
                        onclick="ratherChoice('home')">

                    <div class="icon">
                        🛋️
                    </div>

                    <p>
                        Have a lazy day
                        at home with me
                    </p>

                </button>

            </div>

            <p class="script"
               style="
               margin-top:25px;
               color:#ff9fbd;
               font-size:27px;
               ">

                Either way...
                I just want to be with you. ❤️

            </p>

        </section>

    `, "your choice...");

}


/* =========================================================
   WOULD YOU RATHER ANSWER
========================================================= */

function ratherChoice(choice) {

    if (choice === "beach") {

        toast("Beach date it is. 🌴❤️");

    } else {

        toast("Cozy day it is. 🛋️❤️");

    }

    setTimeout(() => {
        game7();
    }, 900);

}


/* =========================================================
   GAME 7
   HARDER VIRAT QUESTION
========================================================= */

function game7() {

    renderQuiz({

        number: 7,

        title: "Virat Kohli Quiz",

        subtitle:
            "Difficulty increased. 👀",

        image:
            VIRAT,

        question:
            "Which team did Virat Kohli make his first-class debut for?",

        options: [
            "Delhi",
            "Karnataka",
            "Mumbai",
            "Punjab"
        ],

        correct: 0,

        next: game8

    }, "difficulty increased...");

}


/* =========================================================
   GAME 8
   MATCH THE SHOT
========================================================= */

function game8() {

    renderQuiz({

        number: 8,

        title: "Guess the Shot — Match the Shots",

        subtitle:
            "Look carefully before choosing.",

        image:
            COVER_DRIVE_IMAGE,

        question:
            "Which shot is known for being played through the off-side between cover and mid-off?",

        options: [
            "Cover Drive",
            "Pull Shot",
            "Sweep Shot",
            "Hook Shot"
        ],

        correct: 0,

        next: game9

    }, "don't blink...");

}


/* =========================================================
   GAME 9
   CRICKET KNOWLEDGE
========================================================= */

/* =========================================================
   GENERIC QUIZ RENDERER
   ⭐ FIXED — NEXT BUTTON INCLUDED
========================================================= */

function renderQuiz(data, transitionText) {

    render(`

        <section class="screen">

            <div class="kicker">
                Game Zone • ${data.number} / 12
            </div>

            <h2 class="title">
                ${data.title}
            </h2>

            <p class="subtitle">
                ${data.subtitle}
            </p>


            <div class="quiz-layout">


                ${
                    data.image
                    ?
                    `
                    <img
                        class="quiz-image"
                        src="${data.image}"
                        alt="Quiz image">
                    `
                    :
                    `
                    <div class="frame"
                         style="
                         min-height:220px;
                         display:flex;
                         align-items:center;
                         justify-content:center;
                         ">

                        <div style="
                            font-size:80px;
                        ">
                            🏏
                        </div>

                    </div>
                    `
                }


                <div class="quiz-box">

                    <div class="quiz-question">

                        Q1. ${data.question}

                    </div>


                    <div class="answer-list">

                        ${data.options.map((option, index) => `

                            <button
                                class="answer"
                                onclick="
                                    answerQuestion(
                                        this,
                                        ${index},
                                        ${data.correct},
                                        '${data.next.name}'
                                    )
                                ">

                                ${String.fromCharCode(65 + index)}.
                                ${option}

                            </button>

                        `).join("")}

                    </div>


                    <!--
                        NEXT BUTTON APPEARS HERE
                        AFTER CORRECT ANSWER
                    -->

                    <div id="nextArea"
                         style="
                         text-align:center;
                         min-height:65px;
                         ">

                    </div>

                </div>

            </div>

        </section>

    `, transitionText);

}


/* =========================================================
   ANSWER SYSTEM
   ⭐ FIXED
========================================================= */

function answerQuestion(
    button,
    selected,
    correct,
    nextFunction
) {

    const buttons =
        document.querySelectorAll(".answer");


    /*
        Prevent multiple clicks after
        correct answer.
    */

    if (
        document.getElementById("nextQuizBtn")
    ) {

        return;

    }


    /* =====================================================
       CORRECT ANSWER
    ===================================================== */

    if (selected === correct) {

        button.classList.add("correct");


        buttons.forEach(btn => {

            btn.disabled = true;

        });


        toast(
            "👑 KING KOHLI APPROVES. Correct!"
        );


        /*
            SHOW NEXT QUESTION BUTTON
        */

        const nextArea =
            document.getElementById("nextArea");


        nextArea.innerHTML = `

            <button
                id="nextQuizBtn"
                class="next-btn"
                onclick="${nextFunction}()">

                Next Question →

            </button>

        `;

    }


    /* =====================================================
       WRONG ANSWER
    ===================================================== */

    else {

        button.classList.add("wrong");


        /*
            Show creative wrong answer
        */

        wrongAnswer();


        /*
            Allow retry
        */

        setTimeout(() => {

            button.classList.remove("wrong");

        }, 700);

    }

}


/* =========================================================
   CREATIVE WRONG ANSWER
========================================================= */

function wrongAnswer() {

    const messages = [

        [
            "💀",
            "OHHH NOOO...",
            "That answer just betrayed you. 😭"
        ],

        [
            "😭",
            "ARE YOU SURE?",
            "Virat is silently judging you. 👀"
        ],

        [
            "🏏",
            "EDGE! OUT!",
            "That answer went straight to the fielder."
        ],

        [
            "👑",
            "KING KOHLI DISAPPROVES",
            "Come on... you can do better. 😂"
        ],

        [
            "😵",
            "CAUGHT!",
            "Your answer didn't survive the review."
        ]

    ];


    const random =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];


    const overlay =
        document.createElement("div");


    overlay.className =
        "wrong-overlay";


    overlay.innerHTML = `

        <div class="wrong-box">

            <div class="emoji">
                ${random[0]}
            </div>

            <h3>
                ${random[1]}
            </h3>

            <p>
                ${random[2]}
            </p>

            <button
                class="next-btn"
                onclick="
                    this.parentElement
                        .parentElement
                        .remove()
                ">

                Try Again 😤

            </button>

        </div>

    `;


    document.body.appendChild(overlay);

}


/* =========================================================
   GAME 9
   CRICKET KNOWLEDGE
========================================================= */

let knowledgeAnswered = [false, false, false];

function game9() {

    knowledgeAnswered = [false, false, false];

    render(`

        <section class="screen">

            <div class="kicker">
                Game Zone • 9 / 12
            </div>

            <h2 class="title">
                Cricket <span>Knowledge</span>
            </h2>

            <p class="subtitle">
                Because you love cricket, remember? ❤️
            </p>

            <div class="frame" style="text-align:left;">

                <div class="exam-question">
                    <p>Q1. Which team does Virat Kohli play for in IPL?</p>
                    <div class="answer-list">
                        <button class="answer" onclick="knowledgeAnswer(this, false, 0)">A. Mumbai Indians</button>
                        <button class="answer" onclick="knowledgeAnswer(this, true, 0)">B. Royal Challengers Bangalore</button>
                        <button class="answer" onclick="knowledgeAnswer(this, false, 0)">C. Chennai Super Kings</button>
                        <button class="answer" onclick="knowledgeAnswer(this, false, 0)">D. Delhi Capitals</button>
                    </div>
                </div>

                <div class="exam-question">
                    <p>Q2. What is Virat Kohli's jersey number?</p>
                    <div class="answer-list">
                        <button class="answer" onclick="knowledgeAnswer(this, false, 1)">A. 7</button>
                        <button class="answer" onclick="knowledgeAnswer(this, true, 1)">B. 18</button>
                        <button class="answer" onclick="knowledgeAnswer(this, false, 1)">C. 45</button>
                        <button class="answer" onclick="knowledgeAnswer(this, false, 1)">D. 10</button>
                    </div>
                </div>

                <div class="exam-question">
                    <p>Q3. How many centuries does Virat Kohli have in ODIs (as of 2024)?</p>
                    <div class="answer-list">
                        <button class="answer" onclick="knowledgeAnswer(this, false, 2)">A. 43</button>
                        <button class="answer" onclick="knowledgeAnswer(this, false, 2)">B. 67</button>
                        <button class="answer" onclick="knowledgeAnswer(this, true, 2)">C. 50</button>
                        <button class="answer" onclick="knowledgeAnswer(this, false, 2)">D. 75</button>
                    </div>
                </div>

                <div id="knowledgeNext" style="text-align:center; min-height:65px;"></div>

            </div>

        </section>

    `, "cricket knowledge...");

}

function knowledgeAnswer(button, correct, index) {

    if (knowledgeAnswered[index]) return;

    knowledgeAnswered[index] = true;

    const buttons = button.parentElement.querySelectorAll(".answer");
    buttons.forEach(btn => btn.disabled = true);

    if (correct) {
        button.classList.add("correct");
        toast("Correct! 🏏❤️");
    } else {
        button.classList.add("wrong");
        const all = button.parentElement.querySelectorAll(".answer");
        all.forEach(btn => {
            if (btn.getAttribute("onclick")?.includes("true")) {
                btn.classList.add("correct");
            }
        });
        toast("Not quite 😭");
    }

    if (knowledgeAnswered.every(Boolean)) {
        document.getElementById("knowledgeNext").innerHTML = `
            <button class="next-btn" onclick="game10()">
                Next →
            </button>
        `;
    }
}


/* =========================================================
   GAME 10
   STRONGER TOGETHER
========================================================= */

let strongerAnswered = [false, false, false];

function game10() {

    strongerAnswered = [false, false, false];

    render(`

        <section class="screen">

            <div class="kicker">
                Game Zone • 10 / 12
            </div>

            <h2 class="title">
                Stronger <span>Together</span>
            </h2>

            <p class="subtitle">
                Little choices, big love! ❤️
            </p>

            <div class="frame" style="text-align:left;">

                <div class="exam-question">
                    <p>Q1. What is the most important thing in a relationship?</p>
                    <div class="answer-list">
                        <button class="answer" onclick="strongerAnswer(this, false, 0)">A. Trust</button>
                        <button class="answer" onclick="strongerAnswer(this, true, 0)">B. Communication</button>
                        <button class="answer" onclick="strongerAnswer(this, false, 0)">C. Respect</button>
                        <button class="answer" onclick="strongerAnswer(this, false, 0)">D. Time Together</button>
                    </div>
                </div>

                <div class="exam-question">
                    <p>Q2. What helps you the most during a fight?</p>
                    <div class="answer-list">
                        <button class="answer" onclick="strongerAnswer(this, true, 1)">A. Talking it out</button>
                        <button class="answer" onclick="strongerAnswer(this, false, 1)">B. Giving space</button>
                        <button class="answer" onclick="strongerAnswer(this, false, 1)">C. Strategizing</button>
                        <button class="answer" onclick="strongerAnswer(this, false, 1)">D. More love & care</button>
                    </div>
                </div>

                <div class="exam-question">
                    <p>Q3. What is the best way to keep the spark alive?</p>
                    <div class="answer-list">
                        <button class="answer" onclick="strongerAnswer(this, false, 2)">A. Surprise each other</button>
                        <button class="answer" onclick="strongerAnswer(this, true, 2)">B. Have fun together</button>
                        <button class="answer" onclick="strongerAnswer(this, false, 2)">C. Express feelings</button>
                        <button class="answer" onclick="strongerAnswer(this, false, 2)">D. Be supportive</button>
                    </div>
                </div>

                <div id="strongerNext" style="text-align:center; min-height:65px;"></div>

            </div>

        </section>

    `, "stronger together...");

}

function strongerAnswer(button, correct, index) {

    if (strongerAnswered[index]) return;

    strongerAnswered[index] = true;

    const buttons = button.parentElement.querySelectorAll(".answer");
    buttons.forEach(btn => btn.disabled = true);

    if (correct) {
        button.classList.add("correct");
        toast("Exactly ❤️");
    } else {
        button.classList.add("wrong");
        const all = button.parentElement.querySelectorAll(".answer");
        all.forEach(btn => {
            if (btn.getAttribute("onclick")?.includes("true")) {
                btn.classList.add("correct");
            }
        });
        toast("Hmm... 😭❤️");
    }

    if (strongerAnswered.every(Boolean)) {
        document.getElementById("strongerNext").innerHTML = `
            <button class="next-btn" onclick="game11()">
                Next →
            </button>
        `;
    }
}


/* =========================================================
   GAME 11
   CRICKET PUZZLE
========================================================= */

function game11() {

    render(`

        <section class="screen">

            <div class="kicker">
                Game Zone • 11 / 12
            </div>

            <h2 class="title">
                Cricket <span>Puzzle</span>
            </h2>

            <p class="subtitle">
                Fill in the blanks! 🧩🏏
            </p>

            <div class="frame" style="text-align:left;">

                <p>
                    <b>1.</b> Virat Kohli is often called the
                    ______ of Indian Cricket.
                </p>
                <input id="puzzle1" class="quiz-input" placeholder="Your answer">

                <p>
                    <b>2.</b> Virat Kohli's birthday is ______.
                </p>
                <input id="puzzle2" class="quiz-input" placeholder="Your answer">

                <p>
                    <b>3.</b> Virat Kohli made his Test debut against ______.
                </p>
                <input id="puzzle3" class="quiz-input" placeholder="Your answer">

                <p>
                    <b>4.</b> He has scored over ______ ODI runs as of 2024.
                </p>
                <input id="puzzle4" class="quiz-input" placeholder="Your answer">

                <p>
                    <b>5.</b> His jersey number is ______.
                </p>
                <input id="puzzle5" class="quiz-input" placeholder="Your answer">

                <p>
                    <b>6.</b> He is known for his ______ celebrations.
                </p>
                <input id="puzzle6" class="quiz-input" placeholder="Your answer">

                <div id="puzzleFeedback" style="text-align:center; margin-top:18px;"></div>

            </div>

            <button class="next-btn" onclick="checkCricketPuzzle()">
                Submit Puzzle →
            </button>

        </section>

    `, "one final puzzle...");

}

function checkCricketPuzzle() {

    const values = [
        document.getElementById("puzzle1").value.trim().toLowerCase(),
        document.getElementById("puzzle2").value.trim().toLowerCase(),
        document.getElementById("puzzle3").value.trim().toLowerCase(),
        document.getElementById("puzzle4").value.trim().toLowerCase().replace(/,/g, "").replace(/\s/g, ""),
        document.getElementById("puzzle5").value.trim().toLowerCase(),
        document.getElementById("puzzle6").value.trim().toLowerCase()
    ];

    const valid = [
        ["king"],
        ["5 november", "5th november", "november 5", "november 5th"],
        ["west indies"],
        ["13000", "13000+"],
        ["18"],
        ["aggressive", "aggression", "aggressive on-field"]
    ];

    const ok = values.every((value, index) => valid[index].includes(value));
    const feedback = document.getElementById("puzzleFeedback");

    if (!ok) {
        feedback.innerHTML = `<p style="color:#ff9fbd;">Almost! Check your answers again 😭❤️</p>`;
        toast("Try again 😭");
        return;
    }

    feedback.innerHTML = `
        <p style="color:#73dfa6; font-size:22px;">You solved it! 🏏❤️</p>
        <button class="next-btn" onclick="game12()">Finish Game →</button>
    `;

    toast("Puzzle solved! ❤️");
}


/* =========================================================
   GAME 12
   WELL DONE
========================================================= */

function game12() {

    render(`

        <section class="screen">

            <div class="kicker">
                Game Zone • 12 / 12
            </div>

            <h1 class="title">
                Well <span>Done!</span> 👑
            </h1>

            <p class="subtitle">

                You're a true cricket + Virat fan!

                <br><br>

                You know the game,
                you know the player,

                <br>

                and most importantly...

                <br>

                you play, love and learn together. ❤️

            </p>


            <div class="frame">

                <p class="script"
                   style="
                   text-align:center;
                   font-size:32px;
                   color:#ff9fbd;
                   ">

                    Ready for something
                    more personal?

                    <br>

                    Let's see how well
                    you know our relationship. ❤️

                </p>

            </div>


            <button class="next-btn"
                    onclick="gamesToSpecial()">

                Continue →

            </button>

        </section>

    `, "you made it...");

}


/* =========================================================
   GAME → BOYFRIEND'S DAY
========================================================= */

function gamesToSpecial() {

    render(`

        <section class="screen">

            <div class="frame"
                 style="text-align:center;">

                <div style="
                    font-size:65px;
                ">
                    🌻
                </div>

                <h2 class="title"
                    style="font-size:62px;">

                    One Last Door

                </h2>

                <p class="subtitle">

                    You've survived the games.

                    <br><br>

                    But there's one final world
                    I made just for you.

                </p>

                <button class="next-btn"
                        onclick="special1()">

                    Open It 🌻

                </button>

            </div>

        </section>

    `, "something special...");

}


/* =========================================================
   SPECIAL 1
   HAPPY BOYFRIEND'S DAY
========================================================= */

function special1() {

    render(`

        <section class="screen">

            <div class="kicker">
                Boyfriend's Day • 1 / 8
            </div>

            <div class="sunflower-bg"></div>

            <h1 class="title">

                Happy<br>

                <span>Boyfriend's Day</span>

            </h1>

            <p class="subtitle">

                To the boy who makes
                my world brighter...

            </p>

            <div class="paper">

                <p style="text-align:center;">

                    Today is your day,

                    <br><br>

                    but honestly...

                    <br><br>

                    every day is better
                    because you're in it. ❤️

                </p>

            </div>

            <button class="next-btn"
                    onclick="special2()">

                Next →

            </button>

        </section>

    `, "for you...");

}


/* =========================================================
   SPECIAL 2
   WHY YOU'RE SPECIAL
========================================================= */

function special2() {

    const notes = [

        "You make me laugh, even on my worst days.",

        "You care, even when you act like you don't.",

        "You're my biggest support and my safest place.",

        "You love me in the most beautiful ways.",

        "You're kind, hardworking, and so, so strong."

    ];


    render(`

        <section class="screen">

            <div class="kicker">
                Boyfriend's Day • 2 / 8
            </div>

            <h2 class="title">

                Why You're <span>Special</span> ♡

            </h2>

            <p class="subtitle">

                Just a few of the million reasons...

            </p>

            <div class="special-note-grid">

                ${notes.map(note => `

                    <div class="note">

                        <h3>
                            ♡
                        </h3>

                        <p>
                            ${note}
                        </p>

                    </div>

                `).join("")}

            </div>

            <button class="next-btn"
                    onclick="special3()">

                Next →

            </button>

        </section>

    `, "a few reasons...");

}


/* =========================================================
   SPECIAL 3
   SUNFLOWERS & YOU
========================================================= */

function special3() {

    render(`

        <section class="screen">

            <div class="kicker">
                Boyfriend's Day • 3 / 8
            </div>

            <h2 class="title">

                Sunflowers <span>& You</span> 🌻

            </h2>

            <p class="subtitle">

                You love sunflowers...
                <br>
                and now, so do I.

            </p>

            <div class="special-note-grid">

                <div class="note">

                    <div style="
                        font-size:70px;
                        text-align:center;
                    ">
                        🌻
                    </div>

                    <p>
                        Just like you...
                        always bright. ♡
                    </p>

                </div>


                <div class="note">

                    <p>

                        You noticed the little things.

                        <br><br>

                        You made me see beauty
                        in the simplest moments.

                        <br><br>

                        You made sunflowers
                        my favourite too.

                    </p>

                </div>

            </div>

            <button class="next-btn"
                    onclick="special4()">

                Next →

            </button>

        </section>

    `, "sunflowers...");

}


/* =========================================================
   SPECIAL 4
   MADE ME A VIRAT FAN
========================================================= */

function special4() {

    render(`

        <section class="screen">

            <div class="kicker">
                Boyfriend's Day • 4 / 8
            </div>

            <h2 class="title">

                Made Me a<br>
                <span>Virat Fan</span> ♡

            </h2>

            <div class="quiz-layout">

                <img
                    class="quiz-image"
                    src="${VIRAT_BATTING}"
                    alt="Virat cricket">


                <div class="frame">

                    <p class="script"
                       style="
                       font-size:31px;
                       color:#ff9fbd;
                       ">

                        I wasn't even a fan...
                        <br>
                        And then you happened.

                    </p>


                    <p style="
                       margin-top:20px;
                       line-height:2;
                    ">

                        ✓ Your love for cricket

                        <br>

                        ✓ Your love for Virat

                        <br>

                        ✓ Your passion

                        <br>

                        ✓ Your excitement

                        <br>

                        ✓ Your endless talks

                        <br><br>

                        = Me, now a fan too. 😂❤️

                    </p>

                </div>

            </div>


            <button class="next-btn"
                    onclick="special5()">

                Next →

            </button>

        </section>

    `, "and then you happened...");

}


/* =========================================================
   SPECIAL 5
========================================================= */

function special5() {

    render(`

        <section class="screen">

            <div class="kicker">
                Boyfriend's Day • 5 / 8
            </div>

            <h2 class="title">
                And now...
            </h2>

            <h1 class="title"
                style="font-size:65px;">

                Happy Boyfriend's Day ♡

            </h1>

            <p class="subtitle"
               style="font-size:18px;">

                To the boy who is my peace,
                my chaos, my happiness,
                my favourite person,
                and my biggest blessing.

                <br><br>

                You are so important to me.
                I hope you always know
                how loved, appreciated
                and special you are —
                not just today,
                but every single day.

            </p>

            <button class="next-btn"
                    onclick="special6()">

                Next →

            </button>

        </section>

    `, "and now...");

}


/* =========================================================
   SPECIAL 6
   YOU MATTER
========================================================= */

function special6() {

    const items = [

        ["☁", "You're my calm in the chaos."],

        ["☀", "You make ordinary days feel special."],

        ["🏆", "You're my biggest cheerleader."],

        ["♡", "You bring out the best in me."],

        ["⌂", "You're my home."],

        ["∞", "You are my always."]

    ];


    render(`

        <section class="screen">

            <div class="kicker">
                Boyfriend's Day • 6 / 8
            </div>

            <h2 class="title">

                You Matter... <span>A Lot</span> ♡

            </h2>


            <div class="special-note-grid">

                ${items.map(item => `

                    <div class="note">

                        <h3>
                            ${item[0]}
                        </h3>

                        <p>
                            ${item[1]}
                        </p>

                    </div>

                `).join("")}

            </div>


            <div class="paper">

                <p style="text-align:center;">

                    Without you,
                    my favourite chapter
                    wouldn't be complete. ♡

                </p>

            </div>


            <button class="next-btn"
                    onclick="special7()">

                Next →

            </button>

        </section>

    `, "you matter...");

}


/* =========================================================
   SPECIAL 7
========================================================= */

function special7() {

    render(`

        <section class="screen">

            <div class="kicker">
                Boyfriend's Day • 7 / 8
            </div>

            <h2 class="title">

                Just in Case You<br>
                <span>Forgot...</span> ♡

            </h2>


            <div class="paper">

                <p style="
                    font-size:18px;
                    line-height:2.2;
                ">

                    ☑ You are loved.

                    <br>

                    ☑ You are enough.

                    <br>

                    ☑ You are my favourite person.

                    <br>

                    ☑ You are doing great.

                    <br>

                    ☑ You mean the world to me.

                    <br><br>

                    Today, on Boyfriend's Day
                    and always...

                </p>


                <p class="script"
                   style="
                   margin-top:20px;
                   color:#e65e91;
                   font-size:32px;
                   text-align:center;
                   ">

                    I'm just so grateful
                    for you. ♡

                </p>

            </div>


            <button class="next-btn"
                    onclick="special8()">

                Final Chapter →

            </button>

        </section>

    `, "just in case...");

}


/* =========================================================
   SPECIAL 8
   FINAL
========================================================= */

function special8() {

    render(`

        <section class="final-scene">

            <div class="final-sun"></div>


            <div class="final-content">

                <div style="
                    font-size:45px;
                    margin-bottom:15px;
                ">

                    ♕ ♡

                </div>


                <h1>

                    Happy<br>

                    <span>Boyfriend's Day</span>

                </h1>


                <p>

                    You're not just my boyfriend...

                </p>


                <p class="script"
                   style="
                   color:#ff9fbd;
                   font-size:42px;
                ">

                    You're my person.

                </p>


                <p>

                    Here's to you...

                    <br>

                    and to all the beautiful days
                    yet to come. ♡

                </p>


                <button class="next-btn"
                        onclick="story1()">

                    Replay Our Story ↻

                </button>

            </div>

        </section>

    `, "our story continues...");

}


/* =========================================================
   SHARE
========================================================= */

async function shareWebsite() {

    const data = {

        title:
            "7 Months, 1000 Stories ❤️",

        text:
            "I made you something. ❤️",

        url:
            window.location.href

    };


    if (navigator.share) {

        try {

            await navigator.share(data);

        } catch (error) {

            // User cancelled sharing

        }

    } else {

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            toast("Link copied! ❤️");

        } catch (error) {

            toast(
                "Copy the link from your browser."
            );

        }

    }

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHeart() {

    if (!particles) return;


    const heart =
        document.createElement("span");


    heart.className =
        "floating-heart";


    heart.textContent =
        Math.random() > 0.5
        ? "♡"
        : "✦";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (10 + Math.random() * 18) + "px";


    heart.style.animationDuration =
        (8 + Math.random() * 7) + "s";


    particles.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


setInterval(createHeart, 1200);


/* =========================================================
   START WEBSITE
========================================================= */

story1();