import styled from "styled-components";

import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation.js/Navigation";
import { useMemo, useState } from "react";


function App() {
  const [active, setActive] = useState(1)
  
  const orbMemo = useMemo(()=>{
    return <Orb />
  },[])
  
  
  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
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
