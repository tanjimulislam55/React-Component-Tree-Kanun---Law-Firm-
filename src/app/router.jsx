import {Router} from '@reach/router'

import HomePage from '../pages'
import AboutPage from '../pages/about'
import BlogPage from '../pages/blog'
import ContactPage from '../pages/contact'
import ServicePage from '../pages/service'
import PortfolioPage from '../pages/portfolio'
import SinglePage from '../pages/single'
import TeamPage from '../pages/team'

function AppRouter() {
    return (
        <Router>
            <HomePage path='/' />
            <AboutPage path='/about' />
            <BlogPage path='/blog' />
            <ContactPage path='/contact' />
            <PortfolioPage path='/portfolio' />
            <TeamPage path='/team' />
            <SinglePage path='/single' />
            <ServicePage path='/service' />
        </Router>
    )
}

export default AppRouter