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

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#050505', 
      backgroundImage: 'radial-gradient(1200px 800px at 50% -10%, rgba(212, 175, 55, 0.05), transparent 60%)',
      color: '#f2f2f2', 
      fontFamily: '"Jost", "Segoe UI", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem'
    }}>
      
      {/* Import Eternal Bliss Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&family=Marcellus&display=swap');
        
        .eb-eyebrow {
          font-family: "Marcellus", Georgia, serif;
          font-size: 0.75rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .eb-h1 {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-weight: 400;
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.15;
          letter-spacing: 0.01em;
          margin: 0 0 0.5rem;
          text-align: center;
        }
        .eb-h1 em {
          font-style: italic;
          color: #d4af37;
        }
        
        .eb-btn {
          display: inline-block;
          width: 100%;
          font-family: "Marcellus", Georgia, serif;
          font-size: 0.8rem;
          letter-spacing: 0.32em;
          text-indent: 0.32em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #d4af37;
          border: 1px solid #d4af37;
          padding: 1.05rem 2.6rem;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.35s, color 0.35s, box-shadow 0.35s;
          margin-top: 1rem;
        }
        .eb-btn:hover:not(:disabled) {
          background: transparent;
          color: #d4af37;
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.2);
        }
        .eb-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .eb-input, .eb-textarea {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 1rem 1.5rem;
          color: #fff;
          font-family: "Jost", sans-serif;
          font-size: 1rem;
          transition: border-color 0.35s;
          margin-bottom: 1.5rem;
        }
        .eb-input:focus, .eb-textarea:focus {
          outline: none;
          border-color: #d4af37;
        }
        .eb-label {
          display: block;
          font-family: "Marcellus", serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: #a3a3a3;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .eb-card {
          background: #0a0a0a;
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: clamp(2rem, 5vw, 4rem);
          width: 100%;
          max-width: 650px;
          position: relative;
        }
        .eb-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          opacity: 0.8;
        }
      `}} />

      {submitted ? (
        <div className="eb-card" style={{textAlign: 'center', padding: '6rem 2rem'}}>
          <p className="eb-eyebrow">Formulation Complete</p>
          <h1 className="eb-h1">Thank You</h1>
          <p style={{ color: '#a3a3a3', marginTop: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: 300 }}>
            Your feedback is invaluable to perfecting this formula. <br/>
            Welcome to the <em style={{color: '#d4af37', fontStyle: 'italic'}}>Trillionaires</em> inner circle.
          </p>
        </div>
      ) : (
        <div className="eb-card">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#d4af37', fontSize: '24px', marginBottom: '1rem' }}>✧</div>
            <h1 className="eb-h1">Beta Feedback</h1>
            <p style={{ fontFamily: '"Marcellus", serif', color: '#a3a3a3', letterSpacing: '0.15em', fontSize: '0.85rem' }}>TRILLIONAIRES BESPOKE TOOTH POLISH</p>
          </div>

          {error && (
            <div style={{ border: '1px solid #ff4444', color: '#ff4444', padding: '1rem', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div>
              <label className="eb-label">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="eb-input"
                placeholder="How should we address you?"
              />
            </div>

            <div>
              <label className="eb-label">Experience Rating (1-5)</label>
              <input
                type="number"
                min="1"
                max="5"
                required
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="eb-input"
              />
            </div>

            <div>
              <label className="eb-label">Your Honest Thoughts</label>
              <textarea
                required
                rows={5}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="eb-textarea"
                placeholder="How did the ritual feel? Did you notice the lack of synthetic foam? Did the MCHA leave your teeth feeling polished?"
              ></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <input
                type="checkbox"
                id="wouldBuy"
                checked={wouldBuy}
                onChange={(e) => setWouldBuy(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#d4af37', marginRight: '1rem' }}
              />
              <label htmlFor="wouldBuy" style={{ color: '#f2f2f2', fontWeight: 300, fontSize: '0.95rem' }}>
                I would purchase this formulation if available.
              </label>
            </div>

            <div>
              <label className="eb-label">Retail Value Estimation ($)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#a3a3a3', marginTop: '-0.75rem' }}>$</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="eb-input"
                  style={{ paddingLeft: '2.5rem' }}
                  placeholder="25.00"
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="eb-btn">
              {loading ? "Transmitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
