img = "";
status = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting Objects";
}

function draw() {

}

function GoToBedRoom() {

}

function TVandAC() {

}

function Desk() {

}

function Bottles() {

}

function FruitBasket() {

}