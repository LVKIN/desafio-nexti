import React from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";

import * as S from "./styles";

const HomePage = () => {

  return (
    <S.HomePageWrapper>
      <Header />
      <S.HomePageContainer>
        <Aside />
      </S.HomePageContainer>
    </S.HomePageWrapper>
  )
}

export default HomePage;