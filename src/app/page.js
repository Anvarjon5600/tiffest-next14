import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewsSection from "./sections/NewsSection";
import MediaSection from "./sections/MediaSection";

function App() {
  return (
    <section>
      <Navbar />
      <Header />
      <div className="section__line"></div>
      <NewsSection />
      <div className="section__line"></div>
      <MediaSection />
      <div className="section__line"></div>
    </section>
  );
}
export default App;
