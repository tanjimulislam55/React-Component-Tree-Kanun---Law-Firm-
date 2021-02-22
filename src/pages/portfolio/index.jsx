import Top from '../../components/top/top'
import Nav from '../../components/nav/nav'
import Newsletter from '../../components/newsletter/newsletter'
import Portfolio from '../../components/portfolio/portfolio'
import Footer from '../../components/footer/footer'
import PageHeader from '../../components/pageheader/pageheader'

function PortfolioPage() {
    return (
        <div className='wrapper'>
            <Top />
            <Nav />
            <PageHeader header='Case Studies' />
            <Portfolio />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default PortfolioPage