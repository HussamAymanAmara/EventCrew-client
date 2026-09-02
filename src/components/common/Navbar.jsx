import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Navbar.css";

const EventCrewNavbar = () => {
    const navigate = useNavigate();

    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const role = user?.role;

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <Navbar expand="lg" className="eventcrew-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="eventcrew-brand">
                    EventCrew
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="eventcrewNavbar" />

                <Navbar.Collapse id="eventcrewNavbar">

                    {!user && (
                        <>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>

                                <Nav.Link as={Link} to="/opportunities">
                                    Browse Opportunities
                                </Nav.Link>
                            </Nav>

                            <Nav className="eventcrew-actions">
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>

                                <Button
                                    as={Link}
                                    to="/register"
                                    className="eventcrew-register-button"
                                >
                                    Register
                                </Button>
                            </Nav>
                        </>
                    )}

                    {role === "volunteer" && (
                        <>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/volunteer/home">
                                    Home
                                </Nav.Link>

                                <Nav.Link as={Link} to="/opportunities">
                                    Browse Opportunities
                                </Nav.Link>

                                <Nav.Link as={Link} to="/volunteer/applications">
                                    My Applications
                                </Nav.Link>

                                <Nav.Link as={Link} to="/volunteer/dashboard">
                                    Dashboard
                                </Nav.Link>

                                <Nav.Link as={Link} to="/volunteer/profile">
                                    Profile
                                </Nav.Link>
                            </Nav>

                            <Button
                                onClick={handleLogout}
                                className="eventcrew-logout-button"
                            >
                                Logout
                            </Button>
                        </>
                    )}

                    {role === "organization" && (
                        <>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/organization/home">
                                    Home
                                </Nav.Link>

                                <Nav.Link as={Link} to="/organization/dashboard">
                                    Dashboard
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="/organization/opportunities/create"
                                >
                                    Create Opportunity
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="/organization/applications"
                                >
                                    Applications
                                </Nav.Link>

                                <Nav.Link as={Link} to="/organization/profile">
                                    Profile
                                </Nav.Link>
                            </Nav>

                            <Button
                                onClick={handleLogout}
                                className="eventcrew-logout-button"
                            >
                                Logout
                            </Button>
                        </>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default EventCrewNavbar;