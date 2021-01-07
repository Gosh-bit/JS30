
function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if (audio === null) {
        return
    }
    audio.currentTime = 0;
    audio.play();
    addClassToKey(e.keyCode)

}

function addClassToKey(keyCode) {
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    return key.classList.add('playing')

}

const keysElement = document.querySelector('.keys');

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return
    }
    console.log(e.target.classList);

    e.target.classList.remove('playing')

}

window.addEventListener('keydown', playSound)

keysElement.addEventListener('transitionend', removeTransition)