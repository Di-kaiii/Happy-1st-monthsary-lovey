document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('surpriseBtn');
    const message = document.getElementById('secretMessage');
    const dog = document.getElementById('dogSticker');

    // Reveal secret message
    btn.addEventListener('click', () => {
        message.classList.toggle('hidden');
        if (!message.classList.contains('hidden')) {
            btn.textContent = "I Love You!";
            
            // Create a simple heart burst effect
            for(let i = 0; i < 10; i++) {
                createHeart();
            }
        }
    });

    // Make the dog follow the mouse slightly for "entertainment"
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        dog.style.transform = `translate(${x}px, ${y}px)`;
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💙';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.transition = 'transform 3s linear, opacity 3s';
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(-110vh) translateX(${Math.random() * 100 - 50}px)`;
            heart.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});