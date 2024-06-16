let allbox = document.getElementsByClassName("box");
console.log(allbox);
let boxes = document.querySelectorAll(".bx1")
console.dir(boxes)
let winnermsg = document.querySelector(".main");
let winnbtn = document.getElementById("nwbtn")
let msg = document.querySelector("#msg");
console.log(msg)
console.dir(winnbtn);
let resetbtn = document.querySelector(".reset")
let turno = true;
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const resetbutton = () => {
    turno = true;
    enablebox();
    winnermsg.classList.add("hide");


}

const winnerdecide = (winner) => {
    msg.innerText = (`congratulation, Winner is ${winner}`);
    winnermsg.classList.remove("hide");
    disablebox();

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("you clicked");
        if (turno) {
            box.innerHTML = ("o")
            turno = false;
        }
        else {
            box.innerHTML = ("X")
            turno = true;
        }
        box.disabled = true;
        winner();
    })

});
const winner = () => {
    for (Element of winPattern) {

        let pos1 = boxes[Element[0]].innerHTML;
        let pos2 = boxes[Element[1]].innerHTML;
        let pos3 = boxes[Element[2]].innerHTML;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                winnerdecide(pos1);

            }
        }

    }
}
resetbtn.addEventListener("click", resetbutton);
winnbtn.addEventListener("click", resetbutton);

