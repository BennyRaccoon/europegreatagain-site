"use client";

import Link from "next/link";
import React from "react";

export default function RefundPolicy() {
    return (
        <div className="container">
            {/* Title Section */}
            <section className="titleSection">
                <Link href={`/`}>
                    <h1> MAKE EUROPE <br /> GREAT AGAIN</h1>
                </Link>
            </section>
            <h2>Refund Policy</h2>

            <p>We want you to be fully satisfied with your purchase from The Bun Cult. If for any reason you are not completely happy with your order, we offer a **30-day refund policy** under the following conditions:</p>

            <h3>Eligibility for Refund</h3>
            <ul>
                <li>Refund requests must be made within **30 days** of receiving your order.</li>
                <li>The item must be **unused, unworn, and in its original condition** with all tags and packaging intact.</li>
                <li>Custom or personalized items are **not eligible** for refunds.</li>
            </ul>

            <h3>Return Process</h3>
            <ol>
                <li>Email us at **support@thebuncult.com** with your order number and reason for return.</li>
                <li>We will provide you with the **return shipping address**.</li>
                <li>Ship the item back to us at **your own expense**.</li>
                <li>Once received and inspected, we will process your refund within **5-7 business days**.</li>
            </ol>

            <h3>Important Notes</h3>
            <ul>
                <li>We **do not cover** the cost of return shipping.</li>
                <li>Original shipping costs **are non-refundable**.</li>
                <li>If the item is not in its original condition, we reserve the right to refuse a refund.</li>
            </ul>

            <h3>Frequently Asked Questions</h3>
            <h3>💡 Why does The Bun Cult focus on European heritage and strength?</h3>
            <p>At The Bun Cult, we believe in a **strong, unified Europe** rooted in its **rich history, Christian values, and a commitment to individual strength**. Our products reflect a sense of resilience, cultural pride, and the pursuit of a brighter future. Wearing our items is more than just fashion—it’s a statement of belief in **revival, excellence, and a Europe that values its traditions while embracing strength and progress**.</p>

            <h3>Contact Us</h3>
            <p>If you have any questions regarding our refund policy, please reach out to **support@buncult.com**.</p>

            <footer>
                <p> © 2025 The Bun Cult. All Rights Reserved. </p>
            </footer>
        </div>
    );
}