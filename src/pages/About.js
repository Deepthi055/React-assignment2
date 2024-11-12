import React from 'react';

function About() {
    return (
        <div>
            {/* Header Section */}
            <header>
                <nav>
                    
                </nav>
            </header>

            {/* About Us Section */}
            <section className="about-us-section">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Welcome to Cake Store! We are dedicated to bringing you the best cakes in town.</p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="our-story">
                <div className="container">
                    <h2>Our Story</h2>
                    <p>Founded in 2010, Cake Store started as a small bakery in the heart of the city. Our passion for creating delicious and beautiful cakes has turned us into a popular destination for cake lovers.</p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision">
                <div className="container">
                    <div className="mission">
                        <h2>Our Mission</h2>
                        <p>To create high-quality cakes that bring joy to every occasion, made with love and the finest ingredients.</p>
                    </div>
                    <div className="vision">
                        <h2>Our Vision</h2>
                        <p>To be the top choice for cakes in the country, known for our creativity, quality, and exceptional customer service.</p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="our-team">
                <div className="container">
                    <h2>Meet Our Team</h2>
                    <div className="team-member">
                        <img src="team-member1.jpg" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>Founder & Master Baker</p>
                    </div>
                    <div className="team-member">
                        <img src="team-member2.jpg" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>Head of Design</p>
                    </div>
                    <div className="team-member">
                        <img src="team-member3.jpg" alt="Team Member 3" />
                        <h3>Sarah Johnson</h3>
                        <p>Customer Relations</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer>
                <p>&copy; 2024 Cake Store. All rights reserved.</p>
            </footer>
            <a href="/cake">Back to Home</a>
        </div>
    );
}

export default About;
