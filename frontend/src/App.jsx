import React, { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import QRCodeGenerator from "qrcode";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [qrImage, setQrImage] = useState("");

  const handleShorten = async () => {
    if (!url) {
      alert("Please enter a url");
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/api/shorten`, {
        originalUrl: url,
      });

      const newShortUrl = res.data.shortUrl;
      setShortUrl(newShortUrl);
      setCopied(false);

      const qr = await QRCodeGenerator.toDataURL(newShortUrl);
      setQrImage(qr);
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("SERVER ERROR:", error?.response?.data);
      alert(error?.response?.data?.message || "Request failed");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-2">
            🔗 URL Shortener
          </h1>

          {/* INPUT SECTION */}
          <div className="join w-full">
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="input input-bordered join-item w-full focus:outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={handleShorten}
              className="btn btn-warning join-item"
            >
              Shorten
            </button>
          </div>

          {/* RESULT SECTION */}
          {shortUrl && (
            <div className="mt-6 space-y-4">
              <div className="alert">
                <span className="font-medium">Your short link:</span>
                <a
                  href={shortUrl}
                  className="link link-primary break-all ml-2"
                  target="_blank"
                >
                  {shortUrl}
                </a>
              </div>

              <button
                onClick={handleCopy}
                className={`btn w-full ${
                  copied ? "btn-success" : "btn-secondary"
                }`}
              >
                {copied ? "Copied ✓" : "Copy Link"}
              </button>

              {/* QR CARD */}
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body items-center text-center">
                  <p className="font-semibold">Scan QR Code</p>

                  <div className="bg-white p-4 rounded-xl shadow">
                    <QRCode value={shortUrl} size={180} />
                  </div>

                  {qrImage && (
                    <a
                      download="QRCode.png"
                      href={qrImage}
                      className="btn btn-accent btn-sm mt-3"
                    >
                      Download QR
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
