"use client"; // Ensure React hooks work properly
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from 'next/script'

const images = [
  "/char/isabel.png",
  "/char/charlxii.png",
  "/char/marcoaurelio.png",
  "/char/napoleon.png",
  "/char/urraca.png",
  "/char/bismarck.png",
  "/char/venus.png",
  "/char/blasdelezo.png",
  "/char/velazquez.png",
  "/char/vangogh.png",
]; // Ensure these images are in the public/ folder

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Looping effect for the hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500); // Change image every 3 seconds

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
        <Link href={`/`}>
          <h1> MAKE EUROPE <br /> GREAT AGAIN</h1>
        </Link>
      </section>

      {/* Looping Image Section */}
      <main >
        <div className="framed">
          <Image src="/char/_frame.png" alt="frame" className="frame" width={340} height={500}/>
          <div className="imageSection">

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
          </div>
        </div>
        <div className="ctaSection">
          <div className="description">
            <h2>Grab your MEGA hat</h2>
            <p>Bold, resilient, and built to last—just like the European spirit. Order now and start spreading the message of freedom and hope!</p>
          </div>
          <Image src="/hat.png" alt="MEGA Hat" width={600} height={600} />
          <button onClick={handleCheckout} disabled={loading} className="ctaButton">
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </main>

      <section>
        <div className="neon-box">
          <div className="usp-box">
            <img src="/icons/free-shipping-icon.svg" alt="Free Shipping" width="32" height="32" />
            <p>Free Shipping</p>
          </div>
          <div className="usp-box">
            <img src="/icons/secure-payment-icon.svg" alt="Secure Payment" width="32" height="32" />
            <p>Secure Payments</p>
          </div>
          <div className="usp-box">
            <img src="/icons/quality-guarantee-icon.svg" alt="Premium Quality" width="32" height="32" />
            <p>Premium Quality</p>
          </div>
          <div className="usp-box">
            <img src="/icons/satisfaction-guarantee-icon.svg" alt="Satisfaction Guarantee" width="32" height="32" />
            <p>100% Satisfaction Guarantee</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Customer Reviews</h2>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "MEGA Hat",
            "description": "Official MEGA hat, get yours and spread freedom and togetherness!",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "2"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": 5
                },
                "author": {
                  "@type": "Person",
                  "name": "Valdemar"
                }
                "reviewBody": "Hat fits perfect the small strap in the back makes adjusting it for my kids easy.  Seems to be of good quality, used it a few weeks and no signs of wear."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": 5
                },
                "author": {
                  "@type": "Person",
                  "name": "Dan"
                }
                "reviewBody": "Good comfort and appearance + decent delivery time."
              }
            ]
          }
          `}
        </script>
        <div className="reviews">
          <div className="neon-pink-box">
            <h3 >Valdemar</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Hat fits perfect the small strap in the back makes adjusting it for my kids easy.  Seems to be of good quality, used it a few weeks and no signs of wear."</p>
          </div>

          <div className="neon-pink-box">
            <h3 >Dan</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Good comfort and appearance + decent delivery time."</p>
          </div>
        </div>
      </section>

      <section>
        <h2> Frequently Asked Questions (FAQ) </h2>
        <div className="faqs">
          <div className="neon-cyan-box">
            <h3>What does The Bun Cult stand for?</h3>
            <p>The Bun Cult is more than a brand—it’s a movement. We stand for a free Europe, built on the pillars of justice, liberty, and excellence, drawing inspiration from historical European legacies while embracing a bright future.</p>
          </div>

          <div className="neon-cyan-box">
            <h3>Why should I buy from The Bun Cult?</h3>
            <p>We create high-quality apparel that represents boldness, purpose, and identity. Every purchase supports the idea that Europe can be great again—less bureaucracy, stronger individuals, and a united future.</p>
          </div>

          <div className="neon-cyan-box">
            <h3>How long does shipping take?</h3>
            <p>We ship worldwide! Orders within Europe typically arrive in **5-12 business days**.</p>
          </div>

          <div className="neon-cyan-box">
            <h3>Do you offer returns or exchanges?</h3>
            <p>Yes! We have a 30-day return policy. However, customers are responsible for return shipping. Check our <a href="/refund-policy" >Refund Policy</a> for details.</p>
          </div>

          <div className="neon-cyan-box">
            <h3>How can I contact support?</h3>
            <p>You can reach us anytime at support@buncult.com. We’re here to help!</p>
          </div>
        </div>
      </section>

      <footer>
        <p >
          © 2025 The Bun Cult. All Rights Reserved.
        </p>
      </footer>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </div >
  );
}
