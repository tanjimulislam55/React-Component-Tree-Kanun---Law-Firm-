import {Router} from '@reach/router'

import HomePage from '../pages'
import AboutPage from '../pages/about'
import BlogPage from '../pages/blog'
import ContactPage from '../pages/contact'
import ServicePage from '../pages/service'
import PortfolioPage from '../pages/portfolio'
import SinglePage from '../pages/single'
import TeamPage from '../pages/team'
import NotFoundPage from '../pages/404'

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
            <NotFoundPage default />
        </Router>
    )
}

export default AppRouter
