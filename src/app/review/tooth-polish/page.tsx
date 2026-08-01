"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ToothPolishReview() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [wouldBuy, setWouldBuy] = useState(true);
  const [price, setPrice] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "product_reviews"), {
        product: "Trillionaires Tooth Polish",
        name,
        rating,
        review,
        wouldBuy,
        price,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center border border-yellow-600 p-10 bg-zinc-950 rounded shadow-2xl">
          <h1 className="text-3xl font-serif text-yellow-500 mb-4 uppercase tracking-widest">Thank You</h1>
          <p className="text-zinc-300 font-light leading-relaxed">
            Your feedback is invaluable. Welcome to the Trillionaires inner circle.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full border border-yellow-600 p-8 md:p-12 bg-zinc-950 rounded shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif text-yellow-500 mb-2 uppercase tracking-widest">Beta Review</h1>
          <h2 className="text-xl md:text-2xl font-light text-zinc-300">Trillionaires Bespoke Tooth Polish</h2>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-yellow-500 uppercase tracking-wider mb-2">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded py-3 px-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
              placeholder="e.g., John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-500 uppercase tracking-wider mb-2">Rating (1-5 Stars)</label>
            <input
              type="number"
              min="1"
              max="5"
              required
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full bg-black border border-zinc-700 rounded py-3 px-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-500 uppercase tracking-wider mb-2">Your Honest Thoughts</label>
            <textarea
              required
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded py-3 px-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
              placeholder="How did it feel? Did you like the flavor? Notice any changes in your teeth?"
            ></textarea>
          </div>

          <div className="flex items-center mt-4 mb-2">
            <input
              type="checkbox"
              id="wouldBuy"
              checked={wouldBuy}
              onChange={(e) => setWouldBuy(e.target.checked)}
              className="h-5 w-5 rounded border-zinc-700 bg-black text-yellow-500 focus:ring-yellow-500"
            />
            <label htmlFor="wouldBuy" className="ml-3 block text-sm font-medium text-zinc-300">
              I would buy this if it were available in stores.
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-500 uppercase tracking-wider mb-2">How much would you pay for a 4oz jar?</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">$</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded py-3 pl-8 pr-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="e.g., 25.00"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold uppercase tracking-widest py-4 px-4 rounded transition-colors duration-300 flex justify-center items-center"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
