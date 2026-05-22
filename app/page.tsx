"use client";

import React, { useState, useEffect } from "react";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Home() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const roomData = [
    {
      title: "Deluxe Room",
      price: "₹2999",
      desc: "Comfortable stay with premium facilities",
    },
    {
      title: "Premium Room",
      price: "₹4999",
      desc: "Luxury interiors with modern ambience",
    },
    {
      title: "Luxury Suite",
      price: "₹7999",
      desc: "Royal experience with spacious suite",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#ffffff",
        scrollBehavior: "smooth",
      }}
    >
      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919336460955"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "20px",
          background: "#25D366",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "28px",
          zIndex: 9999,
          textDecoration: "none",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        }}
      >
        <FaWhatsapp />
      </a>

      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 20px",
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(12px)",
          zIndex: 1000,
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            color: "white",
            letterSpacing: "2px",
            margin: 0,
          }}
        >
          HOTEL VARDHAN
        </h2>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "8px",
          }}
        >
          {["rooms", "amenities", "gallery", "booking"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                textTransform: "capitalize",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${galleryImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "1s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 78px)",
            marginBottom: "10px",
            letterSpacing: "3px",
          }}
        >
          HOTEL VARDHAN
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 3vw, 28px)",
            opacity: 0.9,
          }}
        >
          Luxury • Comfort • Premium Experience
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#booking"
            style={{
              padding: "14px 28px",
              background: "#d4af37",
              color: "black",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Book Now
          </a>

          <a
            href="#rooms"
            style={{
              padding: "14px 28px",
              border: "1px solid white",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Explore Rooms
          </a>
        </div>
      </section>

      {/* ROOMS */}
      <section
        id="rooms"
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Luxury Rooms</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "25px",
            marginTop: "45px",
          }}
        >
          {roomData.map((room) => (
            <div
              key={room.title}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                background: "white",
              }}
            >
              <img
                src={galleryImages[0]}
                alt={room.title}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "24px" }}>
                <h3>{room.title}</h3>

                <p
                  style={{
                    color: "#d4af37",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {room.price}/night
                </p>

                <p style={{ color: "#666" }}>{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section
        id="amenities"
        style={{
          background: "#f8f8f8",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Amenities</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "22px",
            marginTop: "45px",
          }}
        >
          {[
            {
              icon: <FaWifi />,
              title: "Free WiFi",
            },
            {
              icon: <FaSwimmingPool />,
              title: "Swimming Pool",
            },
            {
              icon: <FaParking />,
              title: "Parking Facility",
            },
            {
              icon: <FaPhoneAlt />,
              title: "24/7 Support",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "white",
                padding: "35px 20px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "38px",
                  color: "#d4af37",
                  marginBottom: "12px",
                }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Gallery</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "18px",
            marginTop: "45px",
          }}
        >
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Hotel"
              onClick={() => setSelectedImage(img)}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "16px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            padding: "20px",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              borderRadius: "16px",
            }}
          />
        </div>
      )}

      {/* BOOKING */}
      <section
        id="booking"
        style={{
          background: "#111",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Book Your Stay</h2>

        <div
          style={{
            maxWidth: "500px",
            margin: "40px auto 0",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            style={inputStyle}
          />

          <input
            type="date"
            style={inputStyle}
          />

          <button
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              background: "#d4af37",
              color: "black",
              fontWeight: "bold",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "12px",
            }}
          >
            Confirm Booking
          </button>
        </div>

        <div style={{ marginTop: "40px" }}>
          <a
            href="https://maps.app.goo.gl/B5S4cZJtVD46uPDJ9"
            target="_blank"
            style={{
              color: "#d4af37",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Location on Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#000",
          color: "white",
          textAlign: "center",
          padding: "28px",
        }}
      >
        <p>© 2026 Hotel Vardhan • All Rights Reserved</p>
        <p>Phone: +91 9336460955</p>
      </footer>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  margin: "12px 0",
  borderRadius: "10px",
  border: "none",
  fontSize: "15px",
};