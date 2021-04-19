import React from 'react'
import NavBar from "../components/navbar"
import Footer from "../components/Footer"

function Layout({children}) {
    return (
        <>
        <header>
           <NavBar/>
        </header>
        <main className="container-fluid">
          {children}
        </main>
        <footer>
<Footer/>
        </footer>
           
        </>
    )
}

export default Layout
