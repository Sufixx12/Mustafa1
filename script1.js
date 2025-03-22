document.addEventListener('DOMContentLoaded', function() {
    const revealBtn = document.getElementById('reveal-btn');
    const revelation = document.getElementById('revelation');
    
    // Array of philosophical quotes inspired by Johan Liebert
    const philosophicalReflections = [
        "The darkest abyss exists within your own heart.",
        "Your name is merely a disguise for the emptiness within.",
        "People can become anything, that is both their greatest strength and most terrifying weakness.",
        "The monster isn't separate from humanity - it is humanity unmasked.",
        "Some mysteries are better left unsolved, for knowing the truth may destroy you.",
        "Identity is but a fragile construct, shaped by the perceptions of others.",
        "The greatest deception is the one we tell ourselves daily.",
        "In searching for your true self, you may find nothing at all.",
        "We create narratives of our lives to hide from the void of meaning.",
        "Everyone is capable of becoming me. That is the most frightening truth."
    ];
    
    // Click event for the reveal button
    revealBtn.addEventListener('click', function() {
        // Get a random quote
        const randomIndex = Math.floor(Math.random() * philosophicalReflections.length);
        const randomReflection = philosophicalReflections[randomIndex];
        
        // Clear previous content
        revelation.innerHTML = '';
        revelation.classList.remove('revealed');
        
        // Create typing effect
        let i = 0;
        const typingEffect = setInterval(function() {
            if (i < randomReflection.length) {
                revelation.innerHTML += randomReflection.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
                revelation.classList.add('revealed');
            }
        }, 50);
        
        // Visual feedback for the button
        revealBtn.style.opacity = '0.5';
        setTimeout(() => {
            revealBtn.style.opacity = '1';
        }, 300);
        
        // Add subtle page flicker effect
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Add subtle scroll effects
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition > (sectionTop - window.innerHeight + sectionHeight / 3)) {
                section.style.opacity = '1';
            } else {
                section.style.opacity = '0.7';
            }
        });
    });
    
    // Add random subtle text flicker effect to quotes
    const quotes = document.querySelectorAll('.quote');
    
    quotes.forEach(quote => {
        setInterval(() => {
            const randomValue = Math.random();
            if (randomValue > 0.95) {
                quote.style.opacity = '0.7';
                setTimeout(() => {
                    quote.style.opacity = '1';
                }, 100);
            }
        }, 3000);
    });
    
    // Add easter egg - secret message when user taps screen 10 times rapidly
    let tapCount = 0;
    let lastTap = 0;
    
    document.addEventListener('click', function() {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500) {
            tapCount++;
        } else {
            tapCount = 1;
        }
        
        lastTap = currentTime;
        
        if (tapCount >= 10) {
            // Reset count
            tapCount = 0;
            
            // Show secret message
            const secretMessage = document.createElement('div');
            secretMessage.style.position = 'fixed';
            secretMessage.style.top = '50%';
            secretMessage.style.left = '50%';
            secretMessage.style.transform = 'translate(-50%, -50%)';
            secretMessage.style.background = 'rgba(0, 0, 0, 0.9)';
            secretMessage.style.padding = '2rem';
            secretMessage.style.zIndex = '100';
            secretMessage.style.textAlign = 'center';
            secretMessage.innerHTML = '<p>"All that matters in life is finding a place where you can be a monster."</p>';
            
            document.body.appendChild(secretMessage);
            
            setTimeout(() => {
                secretMessage.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(secretMessage);
                }, 1000);
            }, 3000);
        }
    });
});