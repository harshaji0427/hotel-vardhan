export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", margin: 0 }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        zIndex: 1000
      }}>
        <h2>Hotel Vardhan</h2>
        <div>
          <a href="#rooms" style={{ marginRight: "20px", color: "white", textDecoration: "none" }}>Rooms</a>
          <a href="#booking" style={{ marginRight: "20px", color: "white", textDecoration: "none" }}>Booking</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "60px"
      }}>
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
          Hotel Vardhan 🏨
        </h1>

        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Luxury • Comfort • Experience
        </p>

        <a
          href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20book%20a%20room%20in%20Hotel%20Vardhan"
          target="_blank"
          style={{
            marginTop: "20px",
            padding: "14px 28px",
            background: "gold",
            color: "black",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Book Now on WhatsApp
        </a>
      </section>

      {/* ROOMS */}
      <section id="rooms" style={{ padding: "60px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>Our Rooms 🛏️</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>

          <div style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}>
            <h3>Deluxe Room</h3>
            <p>₹2999 / night</p>
          </div>

          <div style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}>
            <h3>Premium Room</h3>
            <p>₹4999 / night</p>
          </div>

          <div style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}>
            <h3>Luxury Suite</h3>
            <p>₹7999 / night</p>
          </div>

        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" style={{ padding: "60px", background: "#f5f5f5", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>Book Your Stay 📞</h2>

        <div style={{ maxWidth: "400px", margin: "auto" }}>
          <input placeholder="Name" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
          <input placeholder="Phone" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
          <input placeholder="Date" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />

          <button style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}>
            Book Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "30px",
        background: "#111",
        color: "white"
      }}>
        <p>© 2026 Hotel Vardhan. All rights reserved.</p>
      </footer>

    </main>
  );
}