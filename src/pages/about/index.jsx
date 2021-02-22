import About from '../../components/about/about'
import Top from '../../components/top/top'
import Nav from '../../components/nav/nav'
import Newsletter from '../../components/newsletter/newsletter'
import Team from '../../components/team/team'
import Footer from '../../components/footer/footer'
import PageHeader from '../../components/pageheader/pageheader'
import Timeline from '../../components/timeline/timeline'

function AboutPage() {
    return (
        <div className='wrapper'>
            <Top />
            <Nav />
            <PageHeader header='About Us'/>
            <About />
            <Timeline />
            <Team />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default AboutPage