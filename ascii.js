window.onload = function () {
    let textarea = document.getElementById("text-area");
    let stopBtn = document.getElementById("stop");
    let animation = document.getElementById("animation");
    let startBtn = document.getElementById("start");

    document.getElementById("fontsize").onchange = function () {
        switch (this.value) {
            case "XXL" :
                textarea.style.fontSize = "32pt";
                break;
            case "Extra Large" :
                textarea.style.fontSize = "24pt";
                break;
            case "Large" :
                textarea.style.fontSize = "16pt";
                break;
            case "Medium" :
                textarea.style.fontSize = "12pt";
                break;
            case "Small" :
                textarea.style.fontSize = "10pt";
                break;
            case "Tiny" :
                textarea.style.fontSize = "7pt";
                break;
            default :
                textarea.style.fontSize = "12pt";
        }
    };

    animation.onchange = function () {
        textarea.value = ANIMATIONS[this.value];
    };

    let timer = null;
    let speed = 250;
    let frames;
    startBtn.onclick = function () {
        frames = textarea.value;
        this.disabled = true;
        animation.disabled = true;
        stopBtn.disabled = false;
        runAnimation();
    };

    function runAnimation() {
        timer = setInterval(function () {
            if (frames.indexOf("=====\n") === -1) {
                textarea.value = frames;    //last frame
                frames = ANIMATIONS[animation.value];
            } else {
                textarea.value = frames.substr(0, frames.indexOf("=====\n"));
                frames = frames.substring(frames.indexOf("=====\n") + 6, frames.length);
            }
        }, speed);

    }

    stopBtn.onclick = function () {
        clearTimeout(timer);
        timer = null;
        textarea.value = ANIMATIONS[animation.value];
        animation.disabled = false;
        startBtn.disabled = false;
        this.disabled = true;
    };

    document.getElementById("turbo").onchange = function () {
        if (this.checked) {
            speed = 50;
        } else {
            speed = 250;
        }

        if (timer) {
            clearTimeout(timer);
            runAnimation();
        }
    };

};