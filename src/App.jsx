import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background: ${({ currentTheme }) => currentTheme.backgroundColor};
`;
