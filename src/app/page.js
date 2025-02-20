"use client"; // Ensure React hooks work properly
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/isabel.png",
  "/marcoaurelio.png",
  "/napoleon.png",
  "/bismarck.png",
  "/velazquez.png",
]; // Ensure these images are in the public/ folder

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Looping effect for the hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.url; // Redirect manually
      } else {
        console.error("Invalid response:", response.status);
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Title Section */}
      <section className="titleSection">
        <h1>
          MAKE EUROPE <br /> GREAT AGAIN
        </h1>
      </section>

      {/* Looping Image Section */}
      <section className="imageSection">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="MEGA Figure"
            layout="fill"
            objectFit="cover"
            className={`${index === currentImage ? "visible" : "hidden"}`}
          />
        ))}
      </section>

      {/* Call to Action */}
      <section className="ctaSection">
        <h2>Get your MEGA hat now</h2>
        <Image src="/real-hat.png" alt="MEGA Hat" width={300} height={300} />
        <button onClick={handleCheckout} disabled={loading} className="ctaButton">
          {loading ? "Processing..." : "Buy Now"}
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 The Bun Cult. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
