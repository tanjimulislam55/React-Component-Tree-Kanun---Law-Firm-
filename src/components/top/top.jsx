function Top() {
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <a href="index.html">
                                <h1>Kanun</h1>
                                {/* <!-- <img src="img/logo.jpg" alt="Logo"> --> */}
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="top-bar-right">
                            <div className="text">
                                <h2>8:00 - 9:00</h2>
                                <p>Opening Hour Mon - Fri</p>
                            </div>
                            <div className="text">
                                <h2>+123 456 7890</h2>
                                <p>Call Us For Free Consultation</p>
                            </div>
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top