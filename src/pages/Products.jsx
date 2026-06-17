import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Navbar />

      <section className="products">
        <div className="products-heading">
          <span>Welcome Mary! Our Skincare Collection</span>

          <h1>Healthy Skin Starts Here</h1>

          <p>
            Carefully formulated skincare products designed to nourish,
            protect, and restore your natural glow.
          </p>
        </div>

        <div className="products-grid">

          {/* PRODUCT 1 */}
          <div className="product-box">
            <div className="product-inner">

              <div className="product-front">
                <img src="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?w=900&auto=format&fit=crop&q=60" />
                <h2>Glow Repair Serum</h2>
              </div>

              <div className="product-back">
                <h2>Glow Repair Serum</h2>
                <p>
                  Helps brighten dull skin, reduce dark spots and improve skin texture
                  with deep nourishment.
                </p>

                <Link
                  to="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?w=900&auto=format&fit=crop&q=60"
                  state={{
                    name: "Glow Repair Serum",
                    image: "https://images.unsplash.com/photo-1665763630810-e6251bdd392d?w=900",
                    description: "Helps brighten dull skin, reduce dark spots and improve skin texture."
                  }}
                  className="read-more"
                >
                  View Product
                </Link>
              </div>

            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="product-box">
            <div className="product-inner">

              <div className="product-front">
                <img src="https://images.unsplash.com/photo-1768483018807-bd0b9ab86539?w=900&auto=format&fit=crop&q=60" />
                <h2>Hydrating Cleanser</h2>
              </div>

              <div className="product-back">
                <h2>Hydrating Cleanser</h2>
                <p>
                  Gently removes dirt and excess oil while deeply hydrating and softening your skin.
                </p>

                <Link
                  to="https://images.unsplash.com/photo-1768483018807-bd0b9ab86539?w=900&auto=format&fit=crop&q=60"
                  state={{
                    name: "Hydrating Cleanser",
                    image: "https://images.unsplash.com/photo-1768483018807-bd0b9ab86539?w=900",
                    description: "Deep hydration and gentle cleansing for daily use."
                  }}
                  className="read-more"
                >
                  View Product
                </Link>
              </div>

            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="product-box">
            <div className="product-inner">

              <div className="product-front">
                <img src="https://images.unsplash.com/photo-1723951174326-2a97221d3b7f?w=900&auto=format&fit=crop&q=60" />
                <h2>Vitamin C Cream</h2>
              </div>

              <div className="product-back">
                <h2>Vitamin C Cream</h2>
                <p>
                  Rich in antioxidants to protect the skin, boost collagen, and improve natural glow.
                </p>

                <Link
                  to="https://images.unsplash.com/photo-1723951174326-2a97221d3b7f?w=900&auto=format&fit=crop&q=60"
                  state={{
                    name: "Vitamin C Cream",
                    image: "https://images.unsplash.com/photo-1723951174326-2a97221d3b7f?w=900",
                    description: "Boosts collagen and enhances skin radiance."
                  }}
                  className="read-more"
                >
                  View Product
                </Link>
              </div>

            </div>
          </div>

          {/* PRODUCT 4 */}
          <div className="product-box">
            <div className="product-inner">

              <div className="product-front">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop" />
                <h2>Brightening Cream</h2>
              </div>

              <div className="product-back">
                <h2>Brightening Cream</h2>
                <p>
                  Fades dark spots, evens skin tone, and gives a brighter smooth complexion.
                </p>

                <Link
                  to="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop"
                  state={{
                    name: "Brightening Cream",
                    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
                    description: "Evens skin tone and brightens complexion."
                  }}
                  className="read-more"
                >
                  View Product
                </Link>
              </div>

            </div>
          </div>

          {/* PRODUCT 5 */}
          <div className="product-box">
            <div className="product-inner">

              <div className="product-front">
                <img src="https://images.unsplash.com/photo-1747303969063-3b90bcb3942e?w=900&auto=format&fit=crop&q=60" />
                <h2>Glow Serum</h2>
              </div>

              <div className="product-back">
                <h2>Glow Serum</h2>
                <p>
                  Deeply nourishes skin, improves texture, and gives a smooth radiant finish.
                </p>

                <Link
                  to="https://images.unsplash.com/photo-1747303969063-3b90bcb3942e?w=900&auto=format&fit=crop&q=60"
                  state={{
                    name: "Glow Serum",
                    image: "https://images.unsplash.com/photo-1747303969063-3b90bcb3942e?w=900",
                    description: "Gives smooth radiant glow and deep nourishment."
                  }}
                  className="read-more"
                >
                  View Product
                </Link>
              </div>

            </div>
          </div>

          {/* PRODUCT 6 */}
          <div className="product-box">
            <div className="product-inner">

              <div className="product-front">
                <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=900&auto=format&fit=crop&q=60" />
                <h2>Vitamin C Moisturizer</h2>
              </div>

              <div className="product-back">
                <h2>Vitamin C Moisturizer</h2>
                <p>
                  Hydrates and protects skin while keeping it soft, fresh, and youthful all day.
                </p>

                <Link
                  to="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=900&auto=format&fit=crop&q=60"
                  state={{
                    name: "Vitamin C Moisturizer",
                    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=900&auto=format&fit=crop&q=6",
                    description: "Hydration + protection for youthful skin."
                  }}
                  className="read-more"
                >
                  View Product
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Products;