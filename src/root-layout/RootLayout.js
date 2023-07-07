// React
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"

// Asset
import { DeviceSize } from '../asset/data/DeviceSize';

// Style
import '../css/welcome.css';

function App() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className='body'>
      <Navbar />
      <div className="flex-container">
        <main>
          <section>
            <div className={`main-wrapper ${isMobile ? "mobile" : ""}`}>
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