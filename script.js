const textToType = "Thân gửi tập thể lớp A8! Chúc các bạn và cô giáo có một ngày lễ thật ý nghĩa, trọn vẹn niềm vui và luôn luôn hạnh phúc. Mong rằng trang web nhỏ này sẽ mang lại một nụ cười thật tươi cho mọi người ngày hôm nay! 🎉💖";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        document.getElementById("typing-text").innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = function() {
    typeWriter();
    setInterval(createSticker, 400); // Tần suất rơi vừa phải để máy yếu không bị giật
};

const icons = ['🌸', '✨', '💖', '🎈', '🍀', '🌹'];

function createSticker() {
    const container = document.getElementById('stickers-container');
    if(!container) return;
    
    const sticker = document.createElement('div');
    sticker.classList.add('sticker');
    
    sticker.innerText = icons[Math.floor(Math.random() * icons.length)];
    sticker.style.left = Math.random() * 95 + 'vw';
    sticker.style.animationDuration = Math.random() * 3 + 4 + 's'; 
    sticker.style.opacity = Math.random() * 0.6 + 0.4;
    
    container.appendChild(sticker);
    
    setTimeout(() => { sticker.remove(); }, 7000);
}

function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) { music.play(); } else { music.pause(); }
}
