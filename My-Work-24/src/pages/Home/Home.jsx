import React from 'react'
import StepCard from '../../components/StepCard'

function Home() {
    return (
        <section className="how-it-works-section">

            {/* LEFT COLUMN: Text and Steps */}
            <div className="left-column">
                <div className="section-header">
                    <h2>How It <span className="highlight">Works</span></h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                <div className="steps-container">
                    <StepCard
                        title="Register Our Portal"
                        description="It is a long established fact that a reader will be distracted by the readable"
                        icon="📝" /* Using emojis temporarily until we add your SVG icons */
                    />
                    <StepCard
                        title="Post Your Jobs"
                        description="It is a long established fact that a reader will be distracted by the readable"
                        icon="💼"
                    />
                    <StepCard
                        title="Get Construction Clients"
                        description="It is a long established fact that a reader will be distracted by the readable"
                        icon="📋"
                    />
                </div>
            </div>

            {/* RIGHT COLUMN: Hero Image and Floating Cards */}
            <div className="right-column">
                {/* We will build the visual components for this side next */}
                <div className="visual-placeholder">
                    <p>Right side images will go here</p>
                </div>
            </div>

        </section>
    );
}

export default Home;