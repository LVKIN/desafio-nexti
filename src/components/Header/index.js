import React, { useState } from "react";
import { useAuthContex } from "../../context/AuthContext";

import * as S from "./styled";

const Header = () => {
  const [logout, setLogout] = useState(false)
  const { handleLogout } = useAuthContex()

  const linkConfig = document.getElementById("link--config");
  
  const handleClick = () => {
    setLogout(!logout);
  }

  document.addEventListener("click", (ev) => {
    if (!linkConfig.contains(ev.target)) {
      setLogout(false);
    }
  })

  return (
    <S.HeaderWrapper>
      <S.HeaderMenuIcon src="/icons/menu-icon.svg" />
      <S.HeaderLinks>
        <S.HeaderLink className="link--help" >Ajuda</S.HeaderLink>
        <S.HeaderLink id="link--config" onClick={handleClick}>
          Configurações
        </S.HeaderLink>
        {logout && 
          <S.LogoutLink onClick={handleLogout}>
            Sair
          </S.LogoutLink>
        }
      </S.HeaderLinks>
    </S.HeaderWrapper>
  )
}

export default Header;