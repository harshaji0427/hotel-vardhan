"use client";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages: string[] = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "none",
    borderRadius: "6px"
  };

  return (
    <main style={{ fontFamily: "Arial", margin: 0, background: "#fff" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 40px",
        background: "rgba(0,0,0,0.85)",
        color: "white",
        zIndex: 1000,
        backdropFilter: "blur(10px)"
      }}>
        <h2 style={{ letterSpacing: "2px" }}>HOTEL VARDHAN</h2>

        <div>
          {["Rooms", "Amenities", "Gallery", "Booking"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                marginRight: "18px",
                color: "white",
                textDecoration: "none",
                fontSize: "14px"
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        paddingTop: "60px"
      }}>
        <h1 style={{ fontSize: "70px", letterSpacing: "3px" }}>
          HOTEL VARDHAN
        </h1>

        <p style={{ fontSize: "22px", opacity: 0.9 }}>
          Luxury • Comfort • Royal Experience
        </p>

        <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
          <a href="#booking" style={{
            padding: "14px 28px",
            background: "#c9a24e",
            color: "black",
            fontWeight: "bold",
            borderRadius: "6px",
            textDecoration: "none"
          }}>
            Book Now
          </a>

          <a href="#rooms" style={{
            padding: "14px 28px",
            border: "1px solid white",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none"
          }}>
            Explore Rooms
          </a>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Luxury Rooms</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}>
          {[
            ["Deluxe Room", "₹2999", "Comfort & elegance combined"],
            ["Premium Room", "₹4999", "Perfect for business stays"],
            ["Luxury Suite", "₹7999", "Royal experience stay"]
          ].map(([title, price, desc]) => (
            <div key={title} style={{
              width: "280px",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #eee",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}>
              <h3>{title}</h3>
              <p style={{ color: "#c9a24e", fontWeight: "bold" }}>{price} / night</p>
              <p style={{ fontSize: "14px", color: "#555" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" style={{ padding: "80px 40px", background: "#f8f8f8", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Amenities</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          {[
            "Free WiFi",
            "Swimming Pool",
            "Restaurant",
            "Room Service",
            "24/7 Support",
            "Parking Facility"
          ].map((a) => (
            <div key={a} style={{
              padding: "20px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              {a}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Gallery</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
          marginTop: "40px"
        }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                overflow: "hidden"
              }}
            >
              <img
                src={img}
                alt="hotel gallery"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="selected hotel"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
              }}
            />
          </div>
        </div>
      )}

      {/* BOOKING */}
      <section id="booking" style={{ padding: "80px 40px", background: "#111", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Book Your Stay</h2>

        <div style={{ maxWidth: "450px", margin: "auto", marginTop: "30px" }}>
          <input placeholder="Name" style={inputStyle} type="text" />
          <input placeholder="Phone" style={inputStyle} type="tel" />
          <input placeholder="Check-in Date" style={inputStyle} type="date" />

          <button style={{
            width: "100%",
            padding: "14px",
            background: "#c9a24e",
            color: "black",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px"
          }}>
            Confirm Booking
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "30px",
        background: "#000",
        color: "white"
      }}>
        <p>© 2026 Hotel Vardhan | Luxury Redefined</p>
      </footer>

    </main>
  );
}