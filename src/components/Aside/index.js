import React from "react";

import * as S from "./styled";

const Aside = () => {
  const userInfo = localStorage.getItem("user--info");
  const strArray = userInfo.split(" ", 2);

  return (
    <S.AsideWrapper>
      <S.AsideHeader>
        <S.UserInitials title={userInfo}>
          {strArray.map((item) => (
            item.charAt(0)
          ))}
        </S.UserInitials>
        <S.OrderSelect>
          Novo
        </S.OrderSelect>
      </S.AsideHeader>
    </S.AsideWrapper>
  )
}

export default Aside;