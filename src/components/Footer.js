import React from 'react'

function Footer() {
    return (
        <>
           <div className="container-fluid p-3 bg-dark text-muted"
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()},
          {` `}
          <span>Flexicontact, All Rights Reserved.</span>
        </div> 
        </>
    )
}

export default Footer