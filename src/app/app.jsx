import React, {Fragment} from 'react'
import { Helmet } from 'react-helmet'
import '../assets/css/index.css'
import AppRouter from './router'

class App extends React.Component {
    render() {
        return (
            <Fragment>

                <Helmet>
                    <meta charset="utf-8" />
                    <title>Kanun - Law Firm Website Template</title>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta content="Law Firm Website Template" name="keywords" />
                    <meta content="Law Firm Website Template" name="description" />

                    {/* <!-- Google Font --> */}
                    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,600;1,700;1,800&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

                    {/* <!-- CSS Libraries --> */}
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                </Helmet>

                <AppRouter />

            </Fragment>
    
        )

    }
}

export default App