function setup() {
    canvas = createCanvas(300,300);
    canvas.position(580, 430);
    // canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Nr2EvVOETP/model.json',modelLoaded);

}

function modelLoaded() {
    console.log("Model Loaded!!!")
}

function draw() {
    image(video,0,0,300,300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_output").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}