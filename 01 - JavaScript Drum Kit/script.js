function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// function playClickSound(e) {
//     const clicked = e.target;
//     console.log(clicked);
    
//     // if(clicked[])

//     // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     // const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
// }

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// keys.forEach(key => key.addEventListener('click', playClickSound));
window.addEventListener('keydown', playSound);
