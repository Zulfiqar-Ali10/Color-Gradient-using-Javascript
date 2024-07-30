
let myBtn1 = document.getElementById("btn1");
let myBtn2 = document.getElementById("btn2");
let copyCodeBackGround = document.querySelector(".copyCode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexValues = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const handleBtn1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    myBtn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCodeBackGround.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;

};


const handleBtn2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    myBtn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCodeBackGround.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;

};

myBtn1.addEventListener("click", handleBtn1);
myBtn2.addEventListener("click", handleBtn2); 

copyCodeBackGround.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCodeBackGround.innerText);
    console.log(alert("Your Code is Copy"));
});