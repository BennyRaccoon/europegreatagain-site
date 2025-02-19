"use client"; // Ensure React hooks work properly
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // 🔥 Make a POST request to `/api/create-checkout-session`
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
      });

      // 🔥 Redirects immediately (handled by the API)
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to MEGA Store</h1>
      <p>Buy the best MEGA Hat now!</p>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Redirecting..." : "Buy Now"}
      </button>
    </div>
  );
}