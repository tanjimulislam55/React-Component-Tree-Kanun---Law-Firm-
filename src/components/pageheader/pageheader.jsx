function PageHeader(props) {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{props.header}</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href="">{props.header}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader