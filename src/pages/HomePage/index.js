import React from "react";

import * as S from "./styles";

const HomePage = () => {
  const message = "Hello World!";

  return (
    <S.HomePageWrapper>
      {message}
    </S.HomePageWrapper>
  )
}

export default HomePage;