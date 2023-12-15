function domLoaded(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(fn, 1);
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const html5QrCode = new Html5Qrcode("my-reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    let myqr = document.getElementById('my-result');
    let lastResult, countResults = 0;

    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;

        alert("Resultado: " + decodedText, decodedResult);
        myqr.innerHTML = `seus  qr: ${countResults} : ${decodedText}`;
    }
};

const config = { fps: 10, qrbox: 350 };

// Caso faça um botão de alterar a câmera
let camback = false
function changeCam() {
    camback = !camback
}

// Camera de preferência
html5QrCode.start({ facingMode: `${camback ? "user" : "environment"}` }, config, qrCodeSuccessCallback);



