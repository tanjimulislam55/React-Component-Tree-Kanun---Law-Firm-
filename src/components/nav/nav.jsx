function Nav() {
    return (
        <div className="nav-bar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/service" className="nav-item nav-link">Practice</a>
                            <a href="/team" className="nav-item nav-link">Attorneys</a>
                            <a href="/portfolio" className="nav-item nav-link">Case Studies</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="/blog" className="dropdown-item">Blog Page</a>
                                    <a href="/single" className="dropdown-item">Single Page</a>
                                </div>
                            </div>
                            <a href="/contact" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="ml-auto">
                            <a className="btn" href="/portfolio">Get Appointment</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav