import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact">

        <div className="contact-content">

          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
              alt="Contact"
            />
          </div>

          <div className="contact-card">

            <span>Contact Us</span>

            <h1>Dear Mary</h1>

            <p>
              Reach out to us anytime. We are available on Instagram and Email
              for questions, support, or collaborations.
            </p>

            <p>
              <h3>Contact Information</h3>
              <a href="https://www.instagram.com/_maryajibola?igsh=d2p0a3MzamRqYjFi&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
              <br />
              <a href="mailto:maryajibola2005@gmail.com">Email</a>
            </p>
          
            <a href="https://wa.me/2349012082088" target="_blank" rel="noopener noreferrer">WhatsApp</a>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;