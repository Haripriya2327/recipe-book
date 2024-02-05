import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'

function HomePage(){
    return(
    <>
    <Navbar />
    <Footer  className='footer'/>
    <Sidebar />
    </>
    );
}

export default HomePage;