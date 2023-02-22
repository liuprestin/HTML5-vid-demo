const  videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play it

async function selectMediaStream(){
    try {
        //use the screen capture api 
        // https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        //catch the error 
    }
}

// Events 

button.addEventListener('click', async () => {
// disable the button 
button.disabled = true;
// start picture in picture 
await videoElement.requestPictureInPicture();
// reset Button
button.disabled = false;

});

// On load

selectMediaStream();