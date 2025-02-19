"use client"; // Ensure React hooks work properly
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // ✅ Ensure we are sending a POST request
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
    <div>
      <h1>Welcome to MEGA Store</h1>
      <p>Buy the best MEGA Hat now!</p>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Buy Now"}
      </button>
    </div>
  );
}
