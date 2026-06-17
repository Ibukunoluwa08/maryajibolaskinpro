import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* PRODUCT CARD */}
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
            alt="Brightening Cream"
          />

          <div className="product-info">
            <div>
              <h3>Brightening Cream</h3>
              <p>Best for Darkskins</p>
            </div>

            <Link to="/products" className="arrow-btn">
              ↗
            </Link>
          </div>
        </div>

      
{/* HERO TEXT */}
<div className="hero-text">

  <span className="hero-subtitle">
    Glow Naturally • Feel Beautiful
  </span>

  <h1>
    Your skin deserves care that enhances your natural beauty.
  </h1>

  <p>
    Experience luxurious skincare made to hydrate, brighten,
    and nourish your skin with ingredients your beauty routine
    will love.
  </p>

</div>


      </div>
    </section>
  );
}

export default Hero;