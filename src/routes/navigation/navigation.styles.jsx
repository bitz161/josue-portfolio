import styled from "styled-components";
import { ReactComponent as PageLogo } from "../../assets/icon/page-logo.svg";

export const NavContainer = styled.nav`
  font-family: "Advent Pro", sans-serif;
  font-weight: 500;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ themecolor }) => themecolor.elementColor};

  @media screen and (max-width: 767px) {
    & {
      padding: 1rem 1rem;
    }
  }
`;
export const PageIcon = styled(PageLogo)`
  width: 50%;
  fill: ${({ themecolor }) => themecolor.textColor};
  height: 100%;
`;
export const NavLinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 767px) {
    & {
      justify-content: space-between;
      width: 30%;
    }
    & > .enableSidebar {
      left: 0;
      transition: left 0.5s ease-in;
    }
    & > .disableSidebar {
      left: -100%;
      transition: left 0.5s ease-out;
    }
  }
`;

export const NavLinks = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  letter-spacing: 1px;
  color: ${({ themecolor }) => themecolor.textColor};
  & > li {
    padding: 0.5rem 1rem;
    border-radius: 45px;
    /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
      background-color: #000;
      box-shadow: 0px 15px 20px rgba(255, 255, 255, 0.4);
      color: #fff;
      transform: translateY(-7px);
      &:active {
        transform: translateY(-1px);
      }
    }
    & > a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      text-transform: none;
      outline: none;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    & {
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      position: absolute;
      z-index: 1;
      left: -100%;
      /* background: ${({ themecolor }) => themecolor.elementColor}; */
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0)
      );
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      color: ${({ themecolor }) => themecolor.textColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: absolute;
      width: 60%;
      height: 100%;
      top: 0;
      padding: 0.5rem 0;
      & > li {
        margin: 0.5rem 0;
      }
    }
  }
`;
