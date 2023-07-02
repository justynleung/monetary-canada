import './css/main.css';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Footer from './components/footer/Footer';
export default function App() {
  return (
      <div className='body'>
        <Navbar />
        <div className="flex-container">
          <main>
            <section>
              <div className="main-wrapper">
                <Welcome />
              </div>
              <Footer />
            </section>
          </main>
        </div>
      </div>
  );
}


