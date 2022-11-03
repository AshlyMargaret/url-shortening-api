import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import StaticDashBoard from './Component/StaticDashBoard/StaticDashBoard';
import SearchBar from './Component/SearchBar/SearchBar';
import BoostSection from './Component/BoostSection/BoostSection';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">

      <header>
        <Header/>
      </header>

      <main>
        <Banner/>
      </main>

      <section className='staticSection'>

        <div className="urlShortenBox">
        <SearchBar/>
        </div>

        <div className="sectionDashBoard">
        <StaticDashBoard/>
        </div>  
             
      </section>

      <section className='boostSection'>
        <BoostSection/>
      </section>

      <footer>
        <div className="footerSec">
        <Footer/>
        </div>    
      </footer>
     
    </div>
  );
}

export default App;
