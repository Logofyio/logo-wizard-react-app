// src/components/LogoPreview.jsx
import React, { useRef } from 'react'; // Import useRef hook
import html2canvas from 'html2canvas'; // Import html2canvas
import './LogoPreview.css';

function LogoPreview({ logoText }) {
  const logoRef = useRef(null); // Create a ref for the logo display area HTML element

  const handleDownloadClick = async () => { // Make the function asynchronous
    if (logoRef.current) { // Ensure the ref is attached to an element
      try {
        // Capture the content of the div referenced by logoRef
        const canvas = await html2canvas(logoRef.current, {
          useCORS: true, // Important for handling external resources if any (e.g., fonts, images)
          backgroundColor: null, // Makes the background transparent if your logo has transparency
        });

        // Convert the captured canvas to a data URL (PNG image)
        const image = canvas.toDataURL('image/png');

        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = image;
        link.download = `${logoText || 'logo'}_wizard.png`; // Suggest a filename based on logoText

        // Programmatically click the link to trigger the download
        document.body.appendChild(link); // Append to body to make it clickable in all browsers
        link.click(); // Simulate a click on the link
        document.body.removeChild(link); // Clean up the temporary link element

        console.log("Logo downloaded!"); // Log success to console
      } catch (error) {
        console.error("Error generating or downloading logo:", error); // Log any errors
      }
    } else {
      console.log("Logo preview element not found for download.");
    }
  };

  return (
    <div className="logo-preview-container">
      {/* Attach the ref to the div you want html2canvas to capture */}
      <div className="logo-display-area" ref={logoRef}>
        <p className="placeholder-text">
          {logoText || "Your Logo Will Appear Here"}
        </p>
      </div>
      {/* Ensure the button has the onClick handler */}
      <button className="download-button" onClick={handleDownloadClick}>
        Download Logo
      </button>
    </div>
  );
}
export default LogoPreview;