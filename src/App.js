import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [title, setTitle] = useState('')
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <GlobalStyle />

      <Container>

        <FormularioPostagem
          photo={photo}
          description={description}
          setPhoto={setPhoto}
          setDescription={setDescription}
          title={title}
          setTitle={setTitle}
        />

        <TelaDaPostagem
          photo={photo}
          description={description}
          title={title}
        />
      </Container>
    </>
  );
}

export default App;
