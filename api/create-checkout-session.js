import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID, // Use env variable for price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://www.europegreatagain.net?success=true`,
      cancel_url: `https://www.europegreatagain.net?canceled=true`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: error.message });
  }
}
