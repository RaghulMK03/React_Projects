import React, { useRef, useState } from "react";

const QrCodeGen = () => {
    const imgRef = useRef(null);
    const qrDataRef = useRef("");
    const qrSizeRef = useRef("");
    const [loading, setLoading] = useState(false);

    async function generateQR() {
        const qrData = qrDataRef.current.value.trim();
        const qrSize = qrSizeRef.current.value.trim();

        if (!qrData) {
            alert("Please enter data for QR Code.");
            return;
        }
        if (!qrSize) {
            alert("Please enter Size of QR Code.");
            return;
        }

        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            imgRef.current.src = url;
        } catch (error) {
            console.error("Error generating QR Code", error);
        } finally {
            setLoading(false);
        }
    }

    function downloadQR() {
        fetch(imgRef.current.src)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    }

    function currentWeburl() {
        qrDataRef.current.value = window.location.href;
        imgRef.current.src = "";
    }

    return (
        <div className="app-container">
            <h1>QR Code </h1>
            {loading && <p>Please wait...</p>}
            <img ref={imgRef} alt="Qrcode" className="qr-code" />
            <div>
                <label htmlFor="dataInput" className="input-label">Data for QR Code</label>
                <input type="text" id="dataInput" placeholder="Enter Data for Qr Code" ref={qrDataRef} />
                <label htmlFor="sizeInput" className="input-label">Size of QR Code (e.g., 100)</label>
                <input type="text" id="sizeInput" placeholder="Enter the Size of QR Code" ref={qrSizeRef} />
                <button className="generate" onClick={generateQR} disabled={loading}>Generate QR Code</button>
                <button className="download" onClick={downloadQR}>Download QR Code</button>
                <button className="currentURL" onClick={currentWeburl}> Current Web URL</button>
            </div>
        </div>
    );
}

export default QrCodeGen;

