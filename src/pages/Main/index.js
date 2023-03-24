import React, { useState } from "react";

import GlobalStyles from "../../GlobalStyles";

import { Container } from "./styles";

import Sidebar from "./../../components/Sidebar";
import MainSection from "./../../components/MainSection";

function Main() {
  const [charId, setCharId] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Sidebar setCharId={setCharId} />
        <MainSection charId={charId} />
      </Container>
    </>
  );
}

export default Main;
