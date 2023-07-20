import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = ({ photo, description, setPhoto, setDescription, title, setTitle }) => {

  const hedleTitle = (event) => {
    setTitle(event.target.value)
  }

  const hedlePhoto = (event) => {

    setPhoto(event.target.value)
  }

  const hedleDescription = (event) => {

    setDescription(event.target.value)
  }

  console.log(photo)
  console.log(description)

  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
            id="titulo"
            onChange={hedleTitle}
            value={title}
          />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
            id="foto"
            onChange={hedlePhoto}
            value={photo}
          />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            onChange={hedleDescription}
            value={description}
          />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
