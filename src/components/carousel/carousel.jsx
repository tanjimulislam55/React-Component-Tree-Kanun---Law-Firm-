import carousel1 from '../../assets/img/carousel-1.jpg'
import carousel2 from '../../assets/img/carousel-2.jpg'
import carousel3 from '../../assets/img/carousel-3.jpg'

function Carousel() {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carousel1} alt="" />
                    <div className="carousel-caption">
                        <h1 className="animated fadeInLeft">We fight for your justice</h1>
                        <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                        <a className="btn animated fadeInUp" href="#">Get free consultation</a>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={carousel2} alt="" />
                    <div className="carousel-caption">
                        <h1 className="animated fadeInLeft">We prepared to oppose for you</h1>
                        <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                        <a className="btn animated fadeInUp" href="#">Get free consultation</a>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={carousel3} alt="" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">We fight for your privilege</h1>
                            <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                            <a className="btn animated fadeInUp" href="#">Get free consultation</a>
                        </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel