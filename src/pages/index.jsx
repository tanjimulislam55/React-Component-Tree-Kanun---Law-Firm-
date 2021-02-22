import React from 'react'
import Top from '../components/top/top'
import Nav from '../components/nav/nav'
import Carousel from '../components/carousel/carousel'
import TopFeature from '../components/feature/topfeature'
import About from '../components/about/about'
import Service from '../components/service/service'
import Feature from '../components/feature/feature'
import Team from '../components/team/team'
import FAQ from '../components/faq/faq'
import Testimonial from '../components/testimonial/testimonial'
import Blog from '../components/blog/blog'
import Newsletter from '../components/newsletter/newsletter'
import Footer from '../components/footer/footer'

class HomePage extends React.Component {
    render() {
            return (
                <div className='wrapper'>
                    <Top />
                    <Nav />
                    <Carousel />
                    <TopFeature />
                    <About />
                    <Service />
                    <Feature />
                    <Team />
                    <FAQ />
                    <Testimonial />
                    <Blog />
                    <Newsletter />
                    <Footer />
                </div>
            )
        }
}

export default HomePage