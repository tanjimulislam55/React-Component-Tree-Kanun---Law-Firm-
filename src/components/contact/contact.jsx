function Contact() {
    return (
        <div class="contact">
            <div class="container">
                <div class="section-header">
                    <h2>Contact Us</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="fa fa-map-marker-alt"></i>
                                <div class="contact-text">
                                    <h2>Location</h2>
                                    <p>123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fa fa-phone-alt"></i>
                                <div class="contact-text">
                                    <h2>Phone</h2>
                                    <p>+012 345 67890</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fa fa-envelope"></i>
                                <div class="contact-text">
                                    <h2>Email</h2>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-form">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Subject" required="required" />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Message" required="required" ></textarea>
                                </div>
                                <div>
                                    <button class="btn" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact