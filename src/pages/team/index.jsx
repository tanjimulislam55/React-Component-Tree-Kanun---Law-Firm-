import Top from '../../components/top/top'
import Nav from '../../components/nav/nav'
import Newsletter from '../../components/newsletter/newsletter'
import Team from '../../components/team/team'
import Footer from '../../components/footer/footer'
import PageHeader from '../../components/pageheader/pageheader'
import About from '../../components/about/about'

function TeamPage() {
    return (
        <div className='wrapper'>
            <Top />
            <Nav />
            <PageHeader header='Attorneys' />
            <About />
            <Team />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default TeamPage