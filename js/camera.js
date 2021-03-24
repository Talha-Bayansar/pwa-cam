navigator.mediaDevices.enumerateDevices().then((device) => console.log(device));
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

let context = canvas.getContext("2d");
const width = 320;
let height = 0;

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        setSize();
        video.play();
    });
}

function setSize() {
    height = video.videoHeight / (video.videoWidth / width);
    if (isNaN(height)) {
        height = width / (4 / 3);
    }
    video.setAttribute("width", width);
    video.setAttribute("height", height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
}

button.addEventListener("click", () => {
    context.drawImage(video, 0, 0, width, height);
});
