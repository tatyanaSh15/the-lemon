function Contacts() {

    return (
        <div className="Contacts-main-container">
            <div className="Contacts-container">
            <h1 className='Home-contacts-header'>Contacts</h1>

            <div className="Contacts-data-container">
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Our working hours</h3>
                    <p className="Contacts-data-par">Mon-Fri: 8 AM - 8 PM</p>
                    <p className="Contacts-data-par">Sat: 8 AM - 4 PM</p>
                    <p className="Contacts-data-par">Sun: Closed</p>
                </div>
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Our contacts</h3>
                    <p className="Contacts-data-par">+1 500 500 55 55</p>
                    <p className="Contacts-data-par">thelemon@gmail.com</p>
                </div>
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Our address</h3>
                    <p className="Contacts-data-par">Falcon Lake Manitoba R0E 0A8</p>
                </div>
            </div>

            <div className="Contacts-map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10325.501859191581!2d-95.33905672307203!3d49.684901876265116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52bfcee5e516e7b3%3A0xa14e4f6b7a6f58a6!2sFalcon%20Lake%2C%20MB%20R0E%200A8!5e0!3m2!1sen!2sca!4v1706041512604!5m2!1sen!2sca" 
            className="Contacts-map" title="map" allowFullScreen="" loading="lazy"></iframe>
            </div>

            </div>
        </div>
    )
}

export default Contacts;

