let use = 0;
let turn = "X";
let myArray = ["", "", "", "", "", "", "", "", ""]
function win(value) {
    console.log(value, " wins the game")
    let clear = () => {
        for (let a = 0; a < myArray.length; a++) {
            myArray[a] = "";
        }
    }
    clear()
    document.getElementsByClassName("announse")[0].innerHTML = "Result"
    if (value === "X") {
        document.getElementById("chance").innerHTML = `<line stroke="black" x1="10" y1="10" x2="90" y2="90" stroke-width="3px"></line>
        <line stroke="black" x1="90" y1="10" x2="10" y2="90" stroke-width="3px"></line>`;
    }
    else {
        document.getElementById("chance").innerHTML = `<circle cx="50" cy="50" r="40" stroke="black" class="circle" stroke-width="3" fill="white" stroke="black" fill="purple"/>`;
    }
    document.getElementsByClassName("result")[0].innerHTML = "Wins The Game";
    document.getElementsByClassName("result")[0].style.display = "block";
    let box = document.getElementsByClassName("item");
    for (let a = 0; a < box.length; a++) {
        box[a].innerHTML = "";
    }
}
function tie() {
    document.getElementsByClassName("announse")[0].innerText = "Result";
    document.getElementById("chance").style.display = "none";
    document.getElementsByClassName("result")[0].style.display = "initial";
    document.getElementsByClassName("result")[0].style.textAlign = "center";
    document.getElementsByClassName("result")[0].innerHTML = "Tie";
    document.getElementsByClassName("result")[0].style.fontSize = "56px";
}
function check(value) {

    //  Horizontal Check
    if (myArray[1] === value && myArray[2] === value && myArray[3] === value) {
        win(value)
    }
    else if (myArray[4] === value && myArray[5] === value && myArray[6] === value) {
        win(value)
    }
    else if (myArray[7] === value && myArray[8] === value && myArray[9] === value) {
        win(value)
    }

    //  Vertical Check
    else if (myArray[1] === value && myArray[4] === value && myArray[7] === value) {
        win(value)
    }
    else if (myArray[2] === value && myArray[5] === value && myArray[8] === value) {
        win(value)
    }
    else if (myArray[2] === value && myArray[4] === value && myArray[7] === value) {
        win(value)
    }

    // Diagnol Check
    else if (myArray[1] === value && myArray[5] === value && myArray[9] === value) {
        win(value)
    }
    else if (myArray[3] === value && myArray[5] === value && myArray[7] === value) {
        win(value)
    }

    // Game Ties
    else if (use === 9) {
        tie();
    }
}
function set(event) {
    if (turn === "0") {
        event.path[0].innerHTML = `<circle cx="50" cy="50" r="40" stroke="black" class="circle" stroke-width="3" fill="white" stroke="black" fill="purple"/>`;
        ArraySetting(event.path[1].getAttribute("id")[4], "0")
        setChance("X")
        turn = "X";
        use++;
        check("0");
    }
    else {
        event.path[0].innerHTML = `<line stroke="black" x1="10" y1="10" x2="90" y2="90" stroke-width="3px"></line>
        <line stroke="black" x1="90" y1="10" x2="10" y2="90" stroke-width="3px"></line>`;
        ArraySetting(event.path[1].getAttribute("id")[4], "X")
        setChance("0")
        turn = "0";
        use++;
        check("X");
    }
}
function setChance(value) {
    if (value === "0") {
        document.getElementById("chance").innerHTML = `<circle cx="50" cy="50" r="40" stroke="black" class="circle" stroke-width="3" fill="white" stroke="black" fill="purple"/>`;
    }
    else {
        document.getElementById("chance").innerHTML = `<line stroke="black" x1="10" y1="10" x2="90" y2="90" stroke-width="3px"></line>
        <line stroke="black" x1="90" y1="10" x2="10" y2="90" stroke-width="3px"></line>`;
    }
}
function ArraySetting(index, value) {
    myArray[index] = value;
}
let myitem = document.getElementsByClassName("item");
