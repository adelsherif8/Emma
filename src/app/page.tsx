import Nav from "./Home/Nav/NavBAR";
import Shop from "./Home/Shop/Shop";
import Contact from "./Home/contact/Contact";
import FirstBody from "./Home/firstBody/About";
import Footer from "./Home/footer/footer";
import Newsletter from "./Home/newsletter/Achievement";
import UnderHead from "./Home/underHead/Connect";

export default function Home() {
  return (
    <div>
      <Nav />
      <UnderHead />
      <FirstBody/>
      <Newsletter/>
      <Shop/>
      <Contact/>
      <Footer/>
    </div>
  );
}
