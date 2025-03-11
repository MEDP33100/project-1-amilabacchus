//sparkles
const sparkleContainer = document.getElementById('sparkles');

for (let i = 0; i < 80; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkleContainer.appendChild(sparkle);
}

//button
document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById('enterButton');
    const entryPage = document.querySelector('.entry-page');
    const spaceContainer = document.querySelector('.space-container');

    enterButton.addEventListener('click', () => {
        //hide entry page 
        entryPage.style.display = 'none';
        spaceContainer.style.display = 'block';
    });
});