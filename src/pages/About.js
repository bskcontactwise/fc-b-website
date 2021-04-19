import React from 'react'

import Layout from "../components/Layout"
import Carrers from "../components/Carrers"
import Why from "../components/Why"
import Company from "../components/company"
import OurPeople from "../components/ourPeople"

function About() {
    return (
        <>
        <Layout>
        <div className="container">
            
            <Company/>
            <Why/>
            <OurPeople/>
            <Carrers/>
         
     </div>
        </Layout>
        </>
    )
}

export default About
