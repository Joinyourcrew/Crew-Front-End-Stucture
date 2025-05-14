// This is a placeholder for your radar background logic
// You can add code here to draw on the canvas element

console.log('main.js loaded. Canvas ID:', document.getElementById('bgCanvas'));

// Example: Basic canvas setup
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Redraw content after resize if needed
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial size

// You can add your drawing logic here, e.g.,
// ctx.fillStyle = 'white';
// ctx.fillRect(10, 10, 50, 50);
