import Table from "./components/Table/index";
import styled from "styled-components";

const DivMain = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid cyan;
  
 
  
`;
const DivContent = styled.div`
  border: 1px solid yellow;
`;

function App() {
  return (
    <DivMain className="App">
      <DivContent>
        <Table />
      </DivContent>
    </DivMain>
  );
}

export default App;
