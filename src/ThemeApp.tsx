import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const Icon = styled.div`
  position: absolute;
  font-size: 40px;
`;

function ThemeApp() {
  const [black, setBlack] = useState(false);
  const onClick = () => {
    setBlack((current) => !current);
  };

  return (
    <>
      <ThemeProvider theme={black ? darkTheme : theme}>
        <Icon>
          <FontAwesomeIcon
            icon={black ? faToggleOn : faToggleOff}
            onClick={onClick}
          />
        </Icon>
        <App />
      </ThemeProvider>
    </>
  );
}

export default ThemeApp;
