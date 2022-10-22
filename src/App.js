import "./App.css";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Section1 from "./Component/Section1/Section1";
import Section2 from "./Component/Section2/Section2";
import Section3 from "./Component/Section3/Section3";
import Section4x from "./Component/Section4/Section4.1";
import Section5 from "./Component/Section5/Section5";
import Section6 from "./Component/Section6/Section6";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4x></Section4x>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>
    </div>
  );
}

export default App;
