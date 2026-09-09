import "./CSS/AboutUs.css";


function AboutUs() {

    return (

        <div className="eventcrew-about-page">

            <div className="eventcrew-about-container">

                <h1>
                    About Us
                </h1>

                <p className="eventcrew-about-intro">
                    EventCrew is a volunteer management platform
                    that connects volunteers with organizations
                    and meaningful community opportunities.
                </p>


                <div className="eventcrew-about-section">

                    <h2>
                        Our purpose
                    </h2>

                    <p>
                        Our goal is to make volunteering easier
                        by providing one place where volunteers
                        can discover opportunities and organizations
                        can manage their volunteer activities.
                    </p>

                </div>


                <div className="eventcrew-about-section">

                    <h2>
                        For volunteers
                    </h2>

                    <p>
                        Volunteers can browse opportunities,
                        apply for events, follow their application
                        status, and manage their profile and skills.
                    </p>

                </div>


                <div className="eventcrew-about-section">

                    <h2>
                        For organizations
                    </h2>

                    <p>
                        Organizations can create opportunities,
                        manage applications, review volunteers,
                        and keep their organization information
                        up to date.
                    </p>

                </div>

            </div>

        </div>

    );

}


export default AboutUs;