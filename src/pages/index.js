import React from 'react'

import Layout from "../components/Layout"




function Home() {
    return (
        <>
        <Layout>
            <div className="container">

            
        <div className="p-5 mb-4 bg-oragne text-white rounded-3">
      <div className="container-fluid py-5">
     
        <h1 className="display-5 fw-bold text-center text-white">Hosted Voice for your Business</h1>
        <p className="mx-auto w-75 fs-4 text-center text-white">A cost-effective cloud based phone system, giving your business greater flexibility and control</p>
        
      </div>
    </div>
          
            <div className="row row-cols-1 row-cols-md-3 g-4">
 
            <div className="col">
    <div className="card h-100  border-0">
     
      <div className="card-body">
        <h5 className="card-title">Products</h5>
        <ul>
           <li>Softphone</li>
           <li>Contact center Synchronizer</li>
           <li>Agent Dashboard</li>
           <li>Auditor</li>
           <li>Data Manaager</li>

        </ul>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100  border-0">
      
      <div className="card-body">
        <h5 className="card-title">Services</h5>
        <p className="card-text">We offer following services</p>
        <ul>
           <li>Custom application development</li>
           <li>Application Maintenance</li>
           <li>Offshore development center</li>
           

        </ul>
      </div>
   
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
     
      <div className="card-body ">
        <h5 className="card-title">WHY US?</h5>
        <ul>
           <li>Flexible, cost-effective service delivery</li>
           <li>Teams with global exposure and expertise</li>
           <li>Nearshoring & Offshoring capabilities</li>
           <li>Responding to changes in demand</li>
           <li>Focus on Customer Service</li>

        </ul>
      </div>
      
    </div>
  </div>
  

  
</div>
</div>
        </Layout>
        </>
    )
}

export default Home
