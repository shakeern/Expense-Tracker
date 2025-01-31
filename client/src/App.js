import styled from "styled-components";
import bg from './img/210001.jpg'
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";


function App() {
  
  
  
  return (
    <AppStyled className="App">
      <Orb />
      <MainLayout>
        <h1>Hello</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  
`;


export default App;
