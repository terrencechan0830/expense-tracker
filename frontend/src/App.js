import styled from "styled-components";
import Nativation from "./components/Navigation/Nativation";
import Orb from "./components/Orb/Orb";
import bg from "./img/bg.png";
import { MainLayout } from "./style/Layout";

function App() {
  return (
    <Appstyled bg={bg} className="App">
      <Orb />
      <MainLayout>
        <Nativation />
      </MainLayout>
    </Appstyled>
  );
}

const Appstyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App;
