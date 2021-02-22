import Nav from '../../components/nav/nav'
import Top from '../../components/top/top'
import PageHeader from '../../components/pageheader/pageheader'
import Contact from '../../components/contact/contact'
import Newsletter from '../../components/newsletter/newsletter'
import Footer from '../../components/footer/footer'


function ContactPage() {
    return (
        <div className='wrapper'>
            <Top />
            <Nav />
            <PageHeader header='Contact Us'/>
            <Contact />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ContactPage