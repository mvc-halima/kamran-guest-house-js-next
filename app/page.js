
export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">
          KAMRAN GUEST HOUSE
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#rooms">Our Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#booking" className="book-button">
          Book Your Stay
        </a>
      </header>

      {/* Hero Section with 3 Image Slideshow */}
      <section className="hero" id="home">
        <div className="hero-slideshow">
          <img
            className="hero-slide slide-one"
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
            alt="Luxury guest house room"
          />

          <img
            className="hero-slide slide-two"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Luxury hotel swimming pool"
          />

          <img
            className="hero-slide slide-three"
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
            alt="Beautiful hotel interior"
          />
        </div>

        <div className="hero-content">
          <h1>
            Experience Comfort <br />
            & Hospitality
          </h1>

          <p>
            Enjoy a comfortable and relaxing stay in the heart of Mirpur, AJK.
          </p>

          <a href="#rooms" className="book-button">
            Explore Our Rooms
          </a>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <p className="section-label">ABOUT US</p>
        <h2>Welcome to Kamran Guest House</h2>
        <p>
          Experience comfort, convenience and warm hospitality at
          Kamran Guest House in Mirpur, Azad Kashmir.
        </p>
        <p>
          Our aim is to provide guests with a relaxing environment
          and a comfortable accommodation experience.
        </p>
        <a href="#rooms">Discover Our Rooms</a>
      </section>

      {/* Rooms */}
      <section className="rooms" id="rooms">
        <p className="section-label">OUR ACCOMMODATION</p>
        <h2>Discover Our Rooms</h2>
        <p>Find the perfect space for a comfortable and relaxing stay.</p>

        <div className="room-list">
          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
              alt="Deluxe Room"
            />
            <h3>Deluxe Room</h3>
            <p>A stylish and comfortable room for a relaxing stay.</p>
            <a href="#booking">Book Now</a>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
              alt="Luxury Room"
            />
            <h3>Luxury Room</h3>
            <p>Enjoy extra comfort in a beautifully designed space.</p>
            <a href="#booking">Book Now</a>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
              alt="Family Room"
            />
            <h3>Family Room</h3>
            <p>A spacious option for families and group stays.</p>
            <a href="#booking">Book Now</a>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities">
        <p className="section-label">WHAT WE OFFER</p>
        <h2>Our Facilities</h2>
        <p>Everything you need for a comfortable stay.</p>

        <div className="facility-list">
          <div>
            <h3>Free Wi-Fi</h3>
            <p>Stay connected throughout your visit.</p>
          </div>

          <div>
            <h3>Parking</h3>
            <p>Convenient parking for guests.</p>
          </div>

          <div>
            <h3>Air Conditioning</h3>
            <p>Relax in a comfortable environment.</p>
          </div>

          <div>
            <h3>Room Service</h3>
            <p>Enjoy convenient service during your stay.</p>
          </div>

          <div>
            <h3>Security</h3>
            <p>A welcoming and secure environment.</p>
          </div>

          <div>
            <h3>Smart Entertainment</h3>
            <p>Enjoy entertainment in your room.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">
        <p className="section-label">EXPLORE OUR PROPERTY</p>
        <h2>Our Gallery</h2>
        <p>Take a look at the comfort and experience we offer.</p>

        <div className="gallery-list">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel Exterior"
          />
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
            alt="Guest Room"
          />
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
            alt="Swimming Pool"
          />
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
            alt="Luxury Bedroom"
          />
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
            alt="Interior"
          />
          <img
            src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6"
            alt="Hotel Interior"
          />
        </div>
      </section>

      {/* Booking */}
      <section className="booking" id="booking">
        <p className="section-label">RESERVE YOUR STAY</p>
        <h2>Book Your Stay With Us</h2>
        <p>
          Plan your visit and enjoy a comfortable experience at Kamran Guest House.
        </p>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Check In</label>
          <input type="date" />

          <label>Check Out</label>
          <input type="date" />

          <label>Number of Guests</label>
          <select defaultValue="">
            <option value="" disabled>Select guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>

          <button type="button">Submit Booking Request</button>
        </form>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div>
          <h3>KAMRAN GUEST HOUSE</h3>
          <p>
            Experience comfort, hospitality and relaxation in the heart of Mirpur, AJK.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#rooms">Our Rooms</a>
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Mirpur, Azad Kashmir, Pakistan</p>
          <p>Contact: Add your phone number</p>
          <p>Email: Add your email</p>
        </div>

        <p>© 2026 Kamran Guest House. All Rights Reserved.</p>
      </footer>
    </>
  );
}
