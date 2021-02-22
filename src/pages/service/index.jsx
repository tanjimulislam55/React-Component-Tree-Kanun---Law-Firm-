import Top from '../../components/top/top'
import Nav from '../../components/nav/nav'
import Newsletter from '../../components/newsletter/newsletter'
import Service from '../../components/service/service'
import Footer from '../../components/footer/footer'
import PageHeader from '../../components/pageheader/pageheader'
import Feature from '../../components/feature/feature'

function ServicePage() {
    return (
        <div className='wrapper'>
            <Top />
            <Nav />
            <PageHeader header='Practices Areas' />
            <Service />
            <Feature />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ServicePage