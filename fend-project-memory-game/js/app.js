// Initialize common values
var moves = document.querySelector('.moves').innerHTML;
let matches = document.querySelector('.matches').innerHTML;
let stars = [...document.querySelectorAll('.stars li i')];
let openCards = [];

/*
 * Create a list that holds all of your cards
 */
let deck = [...document.querySelectorAll('.deck i')];
// Had to use spread operators to make both the above and below work as arrays
let cardArray = [...document.querySelectorAll('.fa-diamond, .fa-paper-plane-o, .fa-anchor, .fa-bolt, .fa-cube, .fa-leaf, .fa-bicycle, .fa-bomb')];

/*
 * Display the cards on the page

 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function gameStart (array) {
  document.querySelector('.moves').innerHTML = 0;
  document.querySelector('.matches').innerHTML = 0;
  shuffle(array);
  let newVals = [];
  for (let i = 0; i < deck.length; i++) {
    newVals.push(array[i].classList[1]);
  }
  for (let i = 0; i < deck.length; i++) {
    deck[i].classList.replace(deck[i].classList[1], newVals[i]);
  }
}

// function ties to reset event listener below
function gameReset () {
  reset();
  if (!active) {
    changeState();
  }
  moves = 0;
  matches = 0;
  stars[2].classList.replace('fa-star-o', 'fa-star');
  stars[1].classList.replace('fa-star-o', 'fa-star');
  stars[0].classList.replace('fa-star-o', 'fa-star');
  let clearCards = [...document.querySelectorAll('.deck li')];
  for (let card in clearCards) {
    clearCards[card].classList.remove('open', 'match', 'show');
  }
  gameStart(cardArray); // gameStart already does the heavy lifting
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle (array) {
  let currentIndex =
    array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function showCard (card) {
  card.classList.add('open', 'show');
  card.setAttribute('style', 'pointer-events: none');
}

function addCard (card) {
  openCards.push(card);
}

function matchCards (array) {
  for (let card of array) {
    card.classList.replace('show', 'match');
  }
  clearArray(array);
}

function clearArray (array) {
  for (let card of array) {
    card.setAttribute('style', 'pointer-events: auto');
  }
  array.length = 0;
}

function countMoves () {
  moves++;
  document.querySelector('.moves').innerHTML = moves;
  if (moves <= 40) {
    if (moves === 21) {
      stars[2].classList.replace('fa-star', 'fa-star-o');
    } else if (moves === 31) {
      stars[1].classList.replace('fa-star', 'fa-star-o');
    } else if (moves === 41) {
      stars[0].classList.replace('fa-star', 'fa-star-o');
    }
  }
}

function countMatches () {
  matches++;
  document.querySelector('.matches').innerHTML = matches;
}

function displayModal () {
  let modal = document.getElementById('chickenDinner');
  let close = document.getElementsByClassName('close')[0];
  modal.style.display = 'block';
  close.addEventListener('click', function () {
    modal.style.display = 'none';
  });
}

// function to display modal and output the game info
function gameWin () {
  changeState();
  let fullStars = document.querySelectorAll('.fa-star');
  let starCount = fullStars.length;
  let finishTime = document.querySelector('.timer').innerHTML;
  document.querySelector('.modalP1').innerHTML = `Time: ${finishTime}`;
  document.querySelector('.modalP2').innerHTML = `Score = ${starCount}`;
  displayModal();
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

gameStart(cardArray);

document.querySelector('.deck').addEventListener('click', function flip (event) {
  if (openCards.length < 2 && event.target.className === 'card') {
    showCard(event.target);
    addCard(event.target);
    countMoves();
  } else {
    event.stopPropagation();
  }

  if (openCards.length === 2) {
    if (openCards[0].firstElementChild.classList[1] === openCards[1].firstElementChild.classList[1]) {
      matchCards(openCards);
      countMatches();
    } else {
      openCards[0].setAttribute('style', 'background: red');
      openCards[1].setAttribute('style', 'background: red');
      setTimeout(function hideCards () {
        openCards[0].classList.remove('open', 'show');
        openCards[1].classList.remove('open', 'show');
        openCards[0].setAttribute('style', 'background: #02b3e4;');
        openCards[1].setAttribute('style', 'background: #02b3e4;');
        clearArray(openCards);
      }, 500);
    }
  }

  if (matches === 8) {
    gameWin();
  }
});
// Section for eventListeners on various click functions
document.querySelector('.fa-repeat').addEventListener('click', function () {
  gameReset();
});

document.querySelector('.yes').addEventListener('click', function () {
  let modal = document.getElementById('chickenDinner');
  modal.style.display = 'none';
  changeState();
  gameReset();
});

// Timer functionality from here down
// Contains the timer functionality
let active = false;

function startTimer () {
  // This function will "go" if active is set to true
  if (active) {
    let timer = document.querySelector('.timer').innerHTML;
    let timeArray = timer.split(':');
    let minute = timeArray[0];
    let second = timeArray[1];

    if (second == 59) {
      minute++;
      second = 0;
      if (second < 10) second = '0' + second;
      if (minute < 10) minute = '0' + minute;
    } else {
      second++;
      if (second < 10) second = '0' + second;
    }
    document.querySelector('.timer').innerHTML = minute + ':' + second;
    setTimeout(startTimer, 1000);
  }
}

function changeState () {
  if (!active) {
    active = true;
    startTimer();
  } else {
    active = false;
  }
}

function reset () {
  document.querySelector('.timer').innerHTML = '00' + ':' + '00';
  clearArray(openCards);
}

document.addEventListener('DOMContentLoaded', changeState());
