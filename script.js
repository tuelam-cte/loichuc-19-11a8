const textToType = "Gửi tụi con trai A8... Người ta vẫn bảo thế giới ngoài kia vốn dĩ rất ồn ào, nhưng may mắn sao khi ở trong căn phòng A8 này, chúng mình luôn tìm thấy những niềm vui thật bình dị. Hôm nay là một ngày đặc biệt, tụi con gái chúng mình chẳng muốn chúc những lời hoa mỹ hay rập khuôn đâu. Chỉ mong các cậu luôn giữ được sự kiên định, nụ cười bình yên và sự nhiệt huyết như cách tụi mình vẫn cùng nhau đi qua từng tiết học. Cảm ơn vì đã luôn là một phần không thể thiếu, thanh lặng nhưng vô cùng vững chãi ở bên cạnh hội con gái tụi mình nhé. Chúc mừng ngày 19/11! ✨💖";
let index = 0;
const typingSpeed = 55;

function runTypingEffect() {
    if (index < textToType.length) {
        document.getElementById("typing-text").innerHTML += textToType.charAt(index);
        index++;
        setTimeout(runTypingEffect, typingSpeed);
    }
}

window.onload = function() {
    runTypingEffect();
    setInterval(spawnVisualParticle, 380); 
};

const visualElements = ['✨', '💖', '🍀', '🌸', '🎈', '☁️'];

function spawnVisualParticle() {
    const space = document.getElementById('particles-background');
    if (!space) return;
    
    const token = document.createElement('div');
    token.classList.add('falling-particle');
    
    token.innerText = visualElements[Math.floor(Math.random() * visualElements.length)];
    token.style.left = Math.random() * 98 + 'vw';
    token.style.fontSize = Math.random() * 8 + 14 + 'px'; 
    token.style.animationDuration = Math.random() * 3 + 5 + 's'; 
    token.style.opacity = Math.random() * 0.5 + 0.3; 
    
    space.appendChild(token);
    
    setTimeout(() => { token.remove(); }, 8000);
}

function toggleAudioPlayer() {
    const stream = document.getElementById("audio-core-player");
    const indicator = document.getElementById("play-status-text");
    const block = document.querySelector(".premium-card");
    
    if (stream.paused) {
        stream.play().then(() => {
            indicator.innerText = "PAUSE";
            block.classList.add("playing");
        }).catch(error => {
            console.log("Trình duyệt chặn tự động phát thanh:", error);
        });
    } else {
        stream.pause();
        indicator.innerText = "PLAY TRACK";
        block.classList.remove("playing");
    }
}
