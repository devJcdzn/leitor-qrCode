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

let camback = false
function changeCam() {
    camback = !camback
}

// If you want to prefer front camera
html5QrCode.start({ facingMode: `${camback ? "user" : "environment"}` }, config, qrCodeSuccessCallback);

// domLoaded(function() {
//     let myqr = document.getElementById('my-result');
//     let lastResult, countResults = 0;

//     // se qrCode for encontrado
//     function onScanSuccess(decodedText, decodedResult) {
//         if(decodedText !== lastResult) {
//             ++countResults;
//             lastResult = decodedText;

//             alert("Resultado: " + decodedText, decodedResult);
//             myqr.innerHTML = `seus  qr: ${countResults} : ${decodedText}`;
//         }
//     }

//     let htmlScanner = new Html5QrcodeScanner(
//         "my-reader", {fps:10, qrbox:250}
//     )

//     htmlScanner.render(onScanSuccess)
// })

