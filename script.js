function generateQR() {
    const input = document.getElementById('input').value;
    const qr = qrcode(0, 'H');
    qr.addData(input);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag(5);
    document.getElementById("output-section").style.display = "inline";
}

function downloadQR() {
    const img = document.querySelector('#qrcode img');
    if (img) {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = img.src;
        link.click();
    }
}

function copyQR() {
    const img = document.querySelector('#qrcode img');
    if (img) {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob(function(blob) {
            const item = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([item]).then(function() {
                alert('QR Code copied to clipboard!');
            }, function(err) {
                console.error('Could not copy QR Code: ', err);
            });
        });
    }
}

function createBinaryBackground() {
    const bg = document.getElementById('binaryBg');
    for (let i = 0; i < 100; i++) {
        const span = document.createElement('span');
        span.textContent = Math.round(Math.random()).toString();
        span.style.left = `${Math.random() * 100}%`;
        span.style.top = `${Math.random() * 100}%`;
        span.style.animationDuration = `${Math.random() * 5 + 2}s`;
        span.classList.add('binary');
        bg.appendChild(span);
    }
}

createBinaryBackground();

setInterval(() => {
    document.querySelectorAll('.binary').forEach(el => {
        el.textContent = Math.round(Math.random()).toString();
    });
}, 100);
