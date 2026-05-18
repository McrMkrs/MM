document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('birthdayCard');
    const confettiContainer = document.getElementById('confetti-container');
    const tabButtons = document.querySelectorAll('.tab-btn');

    const colors = ['#ff6b8b', '#ff9a9e', '#fecfef', '#ffe66d', '#4ecdc4', '#ff85a2'];
    const shapes = ['square', 'circle', 'heart'];

    // Main flip trigger
    card.addEventListener('click', (e) => {
        // Prevent flipping back shut if clicking on the tabs system or buttons
        if (e.target.closest('.card-tabs') || e.target.closest('.tab-content')) {
            return;
        }
        
        card.classList.toggle('open');

        if (card.classList.contains('open')) {
            createConfettiBurst(65);
        }
    });

    // Handle Tabs Switching Logic
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop card from shutting closed

            // Remove active style from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to current button
            button.classList.add('active');

            // Hide all tab contents
            const targetTab = button.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Show current active tab content
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    // Premium drifting confetti burst logic
    function createConfettiBurst(count) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            
            if (shape === 'heart') {
                confetti.innerHTML = '❤️';
                confetti.style.fontSize = `${Math.random() * 10 + 10}px`;
            } else {
                const size = Math.random() * 8 + 6;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                if (shape === 'circle') confetti.style.borderRadius = '50%';
            }

            confetti.style.left = Math.random() * 100 + 'vw';
            
            const drift = (Math.random() * 200 - 100) + 'px';
            const rotation = (Math.random() * 360 + 360) + 'deg';
            confetti.style.setProperty('--drift', drift);
            confetti.style.setProperty('--rotation', rotation);

            confetti.style.animationDuration = Math.random() * 2.5 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 0.2 + 's';

            confettiContainer.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }
});
