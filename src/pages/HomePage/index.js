import React from "react";
import Header from "../../components/Header";

import * as S from "./styles";

const HomePage = () => {
  const message = "Hello World!";

  return (
    <S.HomePageWrapper>
      <Header />
      {message}
    </S.HomePageWrapper>
  )
}

export default HomePage;