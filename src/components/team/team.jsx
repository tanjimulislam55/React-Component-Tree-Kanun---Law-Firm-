import team1 from '../../assets/img/team-1.jpg'
import team2 from '../../assets/img/team-2.jpg'
import team3 from '../../assets/img/team-3.jpg'
import team4 from '../../assets/img/team-4.jpg'

function Team() {
    return (
        <div className="team">
            <div className="container">
                <div className="section-header">
                    <h2>Meet Our Expert Attorneys</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team1} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>Business Consultant</p>
                                    <div className="team-social">
                                        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={team2} alt="Team Image" />
                                </div>
                                    <div className="team-text">
                                        <h2>Dylan Adams</h2>
                                        <p>Criminal Consultant</p>
                                        <div className="team-social">
                                            <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                            <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={team3} alt="Team Image" />
                                </div>
                                        <div className="team-text">
                                            <h2>Gloria Edwards</h2>
                                            <p>Divorce Consultant</p>
                                            <div className="team-social">
                                                <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                                <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                                <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img src={team4} alt="Team Image" />
                                </div>
                                            <div className="team-text">
                                                <h2>Josh Dunn</h2>
                                                <p>Immigration Consultant</p>
                                                <div className="team-social">
                                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default Team