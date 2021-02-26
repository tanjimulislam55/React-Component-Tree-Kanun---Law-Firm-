import '../../assets/css/404.css'
import notfound from '../../assets/img/404-not-found-t.jpg'

function NotFound() {
    return (
    <body>
        <div class="wrapper">
            <h2>Oops! Page not found.</h2>
            <div>
                <img src={notfound} alt="404" />
            </div>
            <h4>We can't find the page you're looking for.</h4>
            <a href="/"><button type="button" class="main-btn">GO BACK HOME</button></a>
        </div>
    </body>


    )
}

export default NotFound
