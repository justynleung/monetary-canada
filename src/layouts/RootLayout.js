import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"

function App() {
    return (
        <div className='body'>
          <Navbar />
          <div className="flex-container">
            <main>
              <section>
                <div className="main-wrapper">
                  <Outlet />
                </div>
                <Footer />
              </section>
            </main>
          </div>
        </div>
    );
  }
  
  export default App;