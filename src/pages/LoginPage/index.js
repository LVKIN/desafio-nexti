import React, { useState } from "react";
import { useAuthContex } from "../../context/AuthContext";

import * as S from "./styled";

const LoginPage = () => {
  const { handleLogin } = useAuthContex();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHide, setIsHide] = useState(true)
  
  return (
    <S.LoginPageWrapper>
      <S.LoginPageFormContent>
        <S.FormTitle>Faça seu login</S.FormTitle>

        <S.FormLabel htmlFor="username">Usuário</S.FormLabel>
        <S.FormInput
          id="username"
          autoComplete="off"
          name="username"
          type="text"
          onChange={(ev) => setUsername(ev.currentTarget.value)}
        />
        <S.FormLabel htmlFor="password">Senha</S.FormLabel>
        <S.PasswordContainer>
          <S.FormInput
            id="password"
            name="password"
            type={isHide ? "password" : "text"}
            onChange={(ev) => setPassword(ev.currentTarget.value)}
          />
          <S.PasswordShowHide
            className={isHide ? "is--hidden" : "is--showing"}
            type="button"
            onClick={() => setIsHide(!isHide)}
          />
        </S.PasswordContainer>

        <S.FormButton
          type="button"
          onClick={() => handleLogin(username, password)}
        >
          ENVIAR
        </S.FormButton>
      </S.LoginPageFormContent>
    </S.LoginPageWrapper>
  )
}

export default LoginPage;