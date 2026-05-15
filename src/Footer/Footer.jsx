import {
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPaperPlane
} from "react-icons/fa"

import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-container">
                <div className="column">
                    <h3>About</h3>
                    <p>
                        "V-Ex Tech Solution is a software development company that provides
                        innovative software, applications, and professional internship programs."
                    </p>

                    <p><FaPaperPlane className="icon" /> 301, Dhun Complex, Nizampura...</p>
                    <p><FaPhoneAlt className="icon" /> +91 96647 68292</p>
                    <p><FaEnvelope className="icon" /> hrteam@v-extechsolution.in</p>
                    <p><FaWhatsapp className="icon" /> Chat on WhatsApp</p>
                    <p><FaMapMarkerAlt className="icon" /> Google Map Location</p>
                </div>

                <div className="column">
                    <h3>V-Ex World</h3>
                    <ul>
                        <li>V Ex Tech Solution</li>
                        <li>Open Source UI</li>
                        <li>VHX View</li>
                        <li>Veer Consultancy</li>
                        <li>Vemox</li>
                    </ul>
                </div>

                <div className="column">
                    <h3>Services</h3>
                    <ul>
                        <li>Web Design & Development</li>
                        <li>Mobile App Development</li>
                        <li>Custom Software Development</li>
                        <li>E-Commerce Solutions</li>
                        <li>Admin Panel & Dashboard</li>
                        <li>Digital Marketing & SEO</li>
                        <li>IT Consulting</li>
                    </ul>
                </div>

                <div className="column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Tools</li>
                        <li>Code Editor</li>
                        <li>Verify Certificate</li>
                        <li>Student Registration</li>
                        <li>Internship Report</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>

            </div>

            <div className="bottom">
                <p>&copy; Copyrights Reserved - V-Ex Tech 2023</p>
            </div>

        </div>
    )
}

export default Footer