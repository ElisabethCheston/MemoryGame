
const bricks = document.querySelectorAll('.brick');

function flipCard() {
    console.log('Clicked!');
    this.classList('flip');
}

bricks.forEach(brick => brick.addEventListener('click', flipCard))

/*
//variables
var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
var lastKnownButtonId = undefined;
var lastKnownButtonNumber = undefined;
var wait = false;
var matches = 0;

//elements
var buttons = document.querySelectorAll("button");

// code
//implementing the array numbers ramdomly to the dataset number in the buttons //
shuffle(numbers);
giveNumbers();

//loop on an eventlistener to give access to everything clicked on.
for (i= 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {

        //variable for turning the buttons
        var turnable = e.target.dataset.turnable;
        //  the first click
        if  (!wait && lastKnownButtonId == undefined && 
            lastKnownButtonNumber == undefined && turnable == 'true') {
                // Otherwise the 'if' statement wont run
                e.target.dataset.turnable = 'false';

                e.target.innerHTML = getgImage(event.target.dataset.number);
                e.target.style.backgroundColor = 'orange';

                //To match the buttons by the dataset number
                lastKnownButtonId = e.target.id;
                lastKnownButtonNumber = e.target.dataset.number;
            }
             // the second click
             // The id and the Number must not be equal to undefine butt is not ALSO it cant click it self
        else if (!wait && lastKnownButtonId != undefined && 
            lastKnownButtonNumber != undefined && turnable == 'true' 
            && e.target.id != lastKnownButtonId) {
                e.target.dataset.turnable = 'false';
                
                e.target.textContent = e.target.dataset.number;

                  //match
                if (e.target.dataset.number == lastKnownButtonNumber) {
                    e.target.style.backgroundColor = 'green';
                    document.getElementById(lastKnownButtonId)
                    .style.backgroundColor = 'green';

                    lastKnownButtonId = undefined;
                    lastKnownButtonNumber = undefined;

                    matches++;

                    if (matches == 1) {
                        showWinScreen();
                    }
                }

                //no match
                else {
                    document.getElementById(lastKnownButtonId)
                    .style.backgroundColor = 'red';
                    e.target.style.backgroundColor = 'red';
                    wait = true;

                    setTimeout(() => {
                        e.target.dataset.turnable = 'true';
                        e.target.style.backgroundColor = 'white';
                        e.target.innerHTML = getgImage(0);

                        var tempLastClickedButton = document.getElementById
                        (lastKnownButtonId);

                        tempLastClickedButton.dataset.turnable = 'true';
                        tempLastClickedButton.style.backgroundColor = 'white';
                        tempLastClickedButton.innerHTML = getgImage(0);

                        lastKnownButtonId = undefined;
                        lastKnownButtonNumber = undefined;
                        wait = false;
                    }, 1000);
    
                  }
                }
    });
}

//functions
function giveNumbers() {
    for (i = 0; i < buttons.length; i++) {
        buttons [i].dataset.number = numbers[i];
    }
}
// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb //

function shuffle(array) {
    var j, x, i;
for(i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array;
}

function showWinScreen() {
    document.querySelector('.win-container').style.display = 'flex';

    document.getElementById("6").style.display = 'none';
    document.getElementById("7").style.display = 'none';
    document.getElementById("10").style.display = 'none';
    document.getElementById("11").style.display = 'none';

}

function getgImage(number) {
    switch(number) {
    case '1':
        return '<img src="images/pic1.png">', '<img src="images/pic-1.png">';
    case '2':
        return '<img src="images/pic2.png">', '<img src="images/pic-2.png">';
    case '3':
        return '<img src="images/pic3.png">', '<img src="images/pic-3.png">';
    case '4':
        return '<img src="images/pic4.png">', '<img src="images/pic-4.png">';
    case '5':
        return '<img src="images/pic5.png">', '<img src="images/pic-5.png">';
    case '6':
        return '<img src="images/pic6.png">', '<img src="images/pic-6.png">';
    case '7':
        return '<img src="images/pic7.png">', '<img src="images/pic-7.png">';
    case '8':
        return '<img src="images/pic8.png">', '<img src="images/pic-8.png">';
    default:
        return '<img src="images/math.jpg">';
    }
}

function reset () {
    lastKnownButtonId = undefined;
    lastKnownButtonNumber = undefined;
    wait = false;
    shuffle(numbers);
    giveNumbers();
    matches = 0;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = getgImage(0);
        buttons[i].style.backgroundColor = 'white';

        document.querySelector('.win-container').style.display = 'none';

        document.getElementById("6").style.display = 'block';
        document.getElementById("7").style.display = 'block';
        document.getElementById("10").style.display = 'block';
        document.getElementById("11").style.display = 'block';
        console.log('reset');
    }
}
*/