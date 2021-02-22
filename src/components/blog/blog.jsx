import blog1 from '../../assets/img/blog-1.jpg'
import blog2 from '../../assets/img/blog-2.jpg'
import blog3 from '../../assets/img/blog-3.jpg'

function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <div className="section-header">
                    <h2>Latest From Blog</h2>
                </div>
                <div className="owl-carousel blog-carousel">
                    <div className="blog-item">
                        <img src={blog1} alt="Blog" />
                            <h3>Lorem ipsum dolor</h3>
                            <div className="meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Civil Law</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                            </p>
                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                        <div className="blog-item">
                            <img src={blog2} alt="Blog" />
                                <h3>Lorem ipsum dolor</h3>
                                <div className="meta">
                                    <i className="fa fa-list-alt"></i>
                                    <a href="">Family Law</a>
                                    <i className="fa fa-calendar-alt"></i>
                                    <p>01-Jan-2045</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                            </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                            <div className="blog-item">
                                <img src={blog3} alt="Blog" />
                                    <h3>Lorem ipsum dolor</h3>
                                    <div className="meta">
                                        <i className="fa fa-list-alt"></i>
                                        <a href="">Business Law</a>
                                        <i className="fa fa-calendar-alt"></i>
                                        <p>01-Jan-2045</p>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                            </p>
                                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                                <div className="blog-item">
                                    <img src={blog1} alt="Blog" />
                                        <h3>Lorem ipsum dolor</h3>
                                        <div className="meta">
                                            <i className="fa fa-list-alt"></i>
                                            <a href="">Education Law</a>
                                            <i className="fa fa-calendar-alt"></i>
                                            <p>01-Jan-2045</p>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                            </p>
                                        <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                                    <div className="blog-item">
                                        <img src={blog2} alt="Blog" />
                                            <h3>Lorem ipsum dolor</h3>
                                            <div className="meta">
                                                <i className="fa fa-list-alt"></i>
                                                <a href="">Criminal Law</a>
                                                <i className="fa fa-calendar-alt"></i>
                                                <p>01-Jan-2045</p>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                            </p>
                                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                                        <div className="blog-item">
                                            <img src={blog3} alt="Blog" />
                                                <h3>Lorem ipsum dolor</h3>
                                                <div className="meta">
                                                    <i className="fa fa-list-alt"></i>
                                                    <a href="">Cyber Law</a>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <p>01-Jan-2045</p>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                            </p>
                                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                                            <div className="blog-item">
                                                <img src={blog1} alt="Blog" />
                                                    <h3>Lorem ipsum dolor</h3>
                                                    <div className="meta">
                                                        <i className="fa fa-list-alt"></i>
                                                        <a href="">Business Law</a>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <p>01-Jan-2045</p>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                            </p>
                                                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                                            </div>
                                        </div>
                                    </div>
    )
}

export default Blog