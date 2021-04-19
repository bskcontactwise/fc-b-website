import React from 'react'
import Layout from "../components/Layout"

function Contact() {
    return (
        <>
        <Layout>
        <div className="container">
         <h4>Contact Us</h4>
         <p>For support, send an email to <a href="mailto:support@flexicontact.com">support@flexicontact.com</a></p>
         <p>For enquirers and any additional information, please use the form below to send an email. Our representative will contact you shortly after receiving your request.</p>
         <br/>
        <h4>Send us mail</h4> 

{/* form */}
<form 
        name="Contact" 
        method="post"
        data-netlify-recaptcha="true"
        data-netlify="true"
        onSubmit="submit"
        action="/Success"

        >

        <input type="hidden" name="form-name" value="Contact v7" />
        <div className="form-group">
                
        
    <label for="fname" >Your Name: </label> 
    <input type="text" name="fname"  className="form-control" id="name" aria-describedby="fname" placeholder="Enter name"/>  
  
  </div>
  <div className="form-group">
    <label  for="email1">Your Email: </label>
        <input type="email" name="email1"  className="form-control" id="name1" aria-describedby="email1" placeholder="Enter email" />
  </div>

  <div className="form-group">
    <label for="message">Message: </label>
        <textarea name="message" class="form-control" id="message" rows="3"></textarea>
  </div>
 
  
  
  <p>
    <button type="submit" className="btn btn-primary">Send</button>
  </p>
           
</form>
 {/* Address */}
<section>
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
 
 <div className="col">
<div className="card h-100 border-0 s">

<div className="card-body">
<h5 className="card-title">Reading, United Kingdom:</h5>
<address>
2 Tower House<br/> 
Hoddesdon<br/>
Hertfordshire<br/>
EN11 8UR <br/>
Tel: +44 (0) 203 322 1658
</address>

</div>
</div>
</div>
<div className="col">
<div className="card h-100 border-0 ">

<div className="card-body">
<h5 className="card-title">Chennai, India:</h5>
<address>
837, T.H.Road,<br/> 
Chennai 600021<br/>
Tamilnadu, India<br/>
Tel:+91 44 25974781
</address>


</div>
</div>
</div>
</div>
</section>

     </div>
        </Layout>
        </>
    )
}

export default Contact
