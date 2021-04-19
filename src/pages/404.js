import React from 'react'
import Layout from "../components/Layout"
import {Link} from "gatsby"

function Error() {
    return (
        <>
        <Layout>
            <section className="Container Text-center">
                <h4>The Page is not found</h4>
                <Link to="/">Click here to go to Home page</Link>

            </section>
        </Layout>
            Error page
        </>
    )
}

export default Error
