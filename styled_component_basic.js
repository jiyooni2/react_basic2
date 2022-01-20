import styled, { key, keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0%
  {
    transform : rotate(0deg);
    border-radius:0px;
  }
  50%
  {
    transform : rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
    // click : active
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  color: white;
  background-color: teal;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">
        <span>Hi</span>
      </Box>
      <Circle bgColor="tomato" />
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>

      <Input required />
    </Wrapper>
  );
}

export default App;
