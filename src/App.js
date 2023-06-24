import './css/main.css';
import Header from './Header';
import Welcome from './Welcome';
import Footer from './Footer';
export default function App() {
  return (
    <html lang="en">
      <head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="./css/main.css"/>
          <title>(Beta) MonetaryCanada</title>
      </head>
      <body>
        <Header />
        <div class="flex-container">
          <main>
            <section>
              <div class="main-wrapper">
                <Welcome />
              </div>
              <Footer />
              <scrip src="https://kit.fontawesome.com/075992ffe3.js" crossorigin="anonymous" />
              <script src="js/main.js"/>
            </section>
          </main>
        </div>
      </body>
    </html> 
  );
}


