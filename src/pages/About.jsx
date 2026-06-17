import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">

        <div className="about-content">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1648203276014-20f97ba1f817?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFib3V0JTIwc2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww"
              alt="Skincare"
            />
          </div>

          <div className="about-card">

            <span>About Us</span>

            <h1>Healthy Skin Starts Here</h1>

            <p>
              At SkincarePro, we believe skincare should
              be simple, effective, and made for every skin type.
              Our products help nourish, hydrate, and reveal
              your natural glow.
            </p>

           

          </div>

        </div>

      </section>
    </>
  );
}

export default About;