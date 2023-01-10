import styled from "styled-components";
import First from "./components/First";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Message from "./components/Message";

const Container = styled.div`
  height: 100vh;
  position: relative;
`;
const Clip = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%);
  background-color: #ffdbda;
`
const Clip2 = styled.div`
  width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(100% 0, 0% 100%, 0 0);
    background-color: #C1CEFE;
`
const Clip3 = styled.div`
  width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
    background-color: #A2C5AC;
`
const Clip4 = styled.div`
  width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(0 70%, 0% 100%, 30% 100%);
    clip-path: polygon(70% 0, 100% 0, 100% 30%);
    background-color: #A2C5AC;
`


const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <First />
        <Clip />
      </Container>
      <Container>
        <Services />
        <Clip3/>
      </Container>
      <Container>
        <CategoryList />
        <Clip2/>
      </Container>
      <Container>
        <Message/>
        <Footer/>
        <Clip4/>
      </Container>
    </>
  );
};

export default App;
