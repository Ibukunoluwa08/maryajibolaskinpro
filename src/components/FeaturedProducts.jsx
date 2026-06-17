import React from "react";

function FeaturedProducts() {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured-top">
          <span>Featured Products</span>
          <h2>Explore Skincare Solutions Tailored to Your Skin</h2>
        </div>

        <div className="featured-grid">
          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVhdHVyZWQlMjBza2luY2FyZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
              alt="featured"
            />
          </div>

          <div className="featured-content">
            <div className="feature-box">
              <h3>Hydration Boost</h3>
              <p>Deep nourishment for skin.</p>
            </div>

            <div className="feature-box">
              <h3>Natural Glow</h3>
              <p>Radiant healthy skin.</p>
            </div>

            <div className="feature-box">
              <h3>Clean Ingredients</h3>
              <p>Safe for all skin types.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
