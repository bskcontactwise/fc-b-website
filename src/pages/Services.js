import React from 'react'
import {Link} from "gatsby"

import Layout from "../components/Layout"

function Services() {
    return (
        <>
        <Layout>
            <div className="container">

       <h1> Our Services</h1>
        
 <p>As a software development service provider, FlexiContact strives to provide our customers quality application development services and web development
 services that help them to remain in step with their competitors. For this, we use modern software development platforms, application development tools 
 as well as employ latest project management techniques and software engineering practices.</p>

<p>Using structured methodologies and proven IT processes helps to reduce complexity, risks and costs associated with offshore software outsourcing services, 
We help our customers to develop custom software applications and assist them throughout the entire software development Life Cycle, including project management,
 systems analysis and design, development, implementation, training and application maintenance.</p>

<p>In a nutshell our strong technical team can help ensure that the offshore software development services we provide fit your business needs and meet your expectations.</p>
        
</div>

<section className="container mt-5 ">


<div className="row row-cols-1 row-cols-md-3 g-4">
 
            <div className="col">
    <div className="card h-100">
     
      <div className="card-body">
        <h5 className="card-title">Custom Application development</h5>
        <p className="card-text">Our custom application development services include customized application development as well as product development.</p>
      </div>
      <div className="card-footer">
        <Link className="text-muted" to="/CustomApplication">Read more</Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      
      <div className="card-body">
        <h5 className="card-title">Application Maintenance</h5>
        <p className="card-text">As needs for business changes constantly, application deployed to manage business also needs to accommodate business
         changes as well as additional features are required to be developed.</p>
       
      </div>
      <div className="card-footer">
      <Link className="text-muted" href="/ApplicationMaintenance">Read more</Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
     
      <div className="card-body">
        <h5 className="card-title">Offshore Development Center</h5>
        <p className="card-text">When you are looking for a long term relationship with an offshore outsourcing 
        service provider and also wants to control outsourcing process,
         offshore development center (ODC) is the most suitable approach to go with.</p>
       
      </div>
      <div className="card-footer">
      <Link className="text-muted" to="/OffShore">Read more</Link>
      </div>
    </div>
  </div>

  

</div>
  
</section>


        </Layout>
        </>
    )
}

export default Services
