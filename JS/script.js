"use strict";

let NewGame = document.querySelector(".btn--new");
let Roll = document.querySelector(".btn--roll");
let Hold = document.querySelector(".btn--hold");
let TotalPoint0 = document.getElementById("score--0");
let TotalPoint1 = document.getElementById("score--1");
let Player0 = document.querySelector(".player--0");
let Player1 = document.querySelector(".player--1");
let Dice = document.querySelector(".dice");
let Rools = document.querySelector(".btn--rools");
let RoolsText = document.querySelector(".rools-text");
let matBack = document.querySelector(".mat_back");

let TotalPoint, NowPoint, GameStatus, activePlaer;

function GameInit() {
  activePlaer = 0;
  TotalPoint = [0, 0];
  NowPoint = 0;
  GameStatus = true;
  TotalPoint0.textContent = TotalPoint[0];
  TotalPoint1.textContent = TotalPoint[1];
  Player0.classList.add("player--active");
  Player1.classList.remove("player--active");
  Dice.classList.add("invisible");
}

GameInit();
function ChangePlayer() {
  NowPoint = 0;
  document.getElementById(`current--${activePlaer}`).textContent = NowPoint;
  activePlaer = activePlaer === 0 ? 1 : 0;
  Player0.classList.toggle("player--active");
  Player1.classList.toggle("player--active");
}
function RollTheDice() {
  if (GameStatus) {
    let RandomNumber = Math.trunc(Math.random() * 6 + 1);
    Dice.src = `Image/dice${RandomNumber}.png`;
    Dice.classList.remove("invisible");
    if (RandomNumber !== 1) {
      NowPoint += RandomNumber;
      document.getElementById(`current--${activePlaer}`).textContent = NowPoint;
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
    if (TotalPoint[activePlaer] >= 100) {
      document
        .querySelector(`.player--${activePlaer}`)
        .classList.add("player--winner");
      GameStatus = false;
      Dice.classList.add("invisible");
    }
    ChangePlayer();
  }
}
function Restart() {
  document.location.reload();
}

// function Rools() {
//   RoolsText.classList.remove("invisible");
//   matBack.classList.remove("invisible");
// }

Roll.addEventListener("click", RollTheDice);
Hold.addEventListener("click", HoldPoint);
NewGame.addEventListener("click", Restart);
// Rools.addEventListener("click", Rools);
