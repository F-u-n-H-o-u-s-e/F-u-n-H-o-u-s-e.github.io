<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 60%;
      }

      body {
        font-family: 'Play', sans-serif;
        font-weight: 400;
        height: 100vh;
        color: #000;
        background-image: linear-gradient(
          to top right,
          #e2b810 0%,
          #ec3b05 100%
        );
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Layout */
      main {
        position: relative;
        width: 100rem;
        height: 60rem;
        background-color: rgba(255, 255, 255, 0.35);
        backdrop-filter: blur(200px);
        filter: blur();
        box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.25);
        border-radius: 9px;
        overflow: hidden;
        display: flex;
      }

      .player {
        flex: 50%;
        padding: 9rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.75s;
      }

      /* Elements */
      .name {
        position: relative;
        font-size: 4rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        word-spacing: 2px;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      .score {
        font-size: 8rem;
        font-weight: 300;
        color: #ee7d05;
        margin-bottom: auto;
      }

      .player--active {
        background-color: rgba(255, 255, 255, 0.4);
      }
      .player--active .name {
        font-weight: 700;
      }
      .player--active .score {
        font-weight: 400;
      }

      .player--active .current {
        opacity: 1;
      }

      .current {
        background-color: #ee7d05;
        opacity: 0.8;
        border-radius: 9px;
        color: #fff;
        width: 65%;
        padding: 2rem;
        text-align: center;
        transition: all 0.75s;
      }

      .current-label {
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-size: 1.7rem;
        color: #eee;
      }

      .current-score {
        font-size: 3.5rem;
      }

      /* ABSOLUTE POSITIONED ELEMENTS */
      .btn {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #444;
        background: none;
        border: none;
        font-family: inherit;
        font-size: 1.8rem;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 400;
        transition: all 0.2s;

        background-color: #fff;
        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(10px);

        padding: 0.7rem 2.5rem;
        border-radius: 50rem;
        box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
      }

      .btn::first-letter {
        font-size: 2.4rem;
        display: inline-block;
        margin-right: 0.7rem;
      }

      .btn--new {
        top: 3rem;
      }
      .btn--roll {
        top: 40rem;
      }
      .btn--hold {
        top: 46rem;
      }

      .btn:active {
        transform: translate(-50%, 3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      }

      .btn:focus {
        outline: none;
      }

      .dice {
        position: absolute;
        left: 50%;
        top: 16.5rem;
        transform: translateX(-50%);
        height: 10rem;
      }

      .player--winner {
        background-color: #2f2f2f;
      }

      .player--winner .name {
        font-weight: 700;
        color: #d50b0b;
      }

      .invisible {
        display: none;
      }
    </style>
    <title>Свинья</title>
  </head>
  <body>
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Игрок 1</h2>
        <p class="score" id="score--0">47</p>
        <div class="current">
          <p class="current-label">Текущие очки</p>
          <p class="current-score" id="current--0">0</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Игрок 2</h2>
        <p class="score" id="score--1">31</p>
        <div class="current">
          <p class="current-label">Текущие очки</p>
          <p class="current-score" id="current--1">0</p>
        </div>
      </section>

      <img src="dice1.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🐷 Новая игра</button>
      <button class="btn btn--roll">🎲 Бросить кубик</button>
      <button class="btn btn--hold">👌 Оставить</button>
    </main>
    <script>
      'use strict';

      let NewGame = document.querySelector('.btn--new');
      let Roll = document.querySelector('.btn--roll');
      let Hold = document.querySelector('.btn--hold');
      let TotalPoint0 = document.getElementById('score--0');
      let TotalPoint1 = document.getElementById('score--1');
      let Player0 = document.querySelector('.player--0');
      let Player1 = document.querySelector('.player--1');
      let Dice = document.querySelector('.dice');

      let TotalPoint, NowPoint, GameStatus, activePlaer;

      function GameInit() {
        activePlaer = 0;
        TotalPoint = [0, 0];
        NowPoint = 0;
        GameStatus = true;
        TotalPoint0.textContent = TotalPoint[0];
        TotalPoint1.textContent = TotalPoint[1];
        Player0.classList.add('player--active');
        Player1.classList.remove('player--active');
        Dice.classList.add('invisible');
      }

      GameInit();
      function ChangePlayer() {
        NowPoint = 0;
        document.getElementById(`current--${activePlaer}`).textContent =
          NowPoint;
        activePlaer = activePlaer === 0 ? 1 : 0;
        Player0.classList.toggle('player--active');
        Player1.classList.toggle('player--active');
      }
      function RollTheDice() {
        if (GameStatus) {
          let RandomNumber = Math.trunc(Math.random() * 6 + 1);
          Dice.src = `dice${RandomNumber}.png`;
          Dice.classList.remove('invisible');
          if (RandomNumber !== 1) {
            NowPoint += RandomNumber;
            document.getElementById(`current--${activePlaer}`).textContent =
              NowPoint;
          } else {
            ChangePlayer();
          }
        }
      }

      function HoldPoint() {
        if (GameStatus) {
          TotalPoint[activePlaer] += NowPoint;
          document.getElementById(`score--${activePlaer}`).textContent =
            TotalPoint[activePlaer];
          if (TotalPoint[activePlaer] >= 10) {
            document
              .querySelector(`.player--${activePlaer}`)
              .classList.add('player--winner');
            GameStatus = false;
          }
          ChangePlayer();
        }
      }
      function Restart() {
        document.location.reload();
      }
      Roll.addEventListener('click', RollTheDice);
      Hold.addEventListener('click', HoldPoint);
      NewGame.addEventListener('click', Restart);
    </script>
  </body>
</html>
