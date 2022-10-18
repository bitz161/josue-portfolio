import styled from "styled-components";

export const IntroductionContainer = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 4rem;
  //   border: 1px solid white;
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    & {
      padding: 0;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      flex-direction: column;
      padding: 0;
      height: 60vh;
    }
  }
`;

export const ImageWrapper = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    & {
      order: -1;
      width: 100%;
      height: 50%;
    }
  }
  & > img {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    width: 15vw;
    transition: 0.5s ease-out 100ms;
    margin-right: -4vw;
    filter: grayscale(1);
    @media screen and (min-width: 767px) and (max-width: 1023px) {
      & {
        width: 20vw;
        margin-right: -5vw;
      }
    }
    @media screen and (max-width: 767px) {
      & {
        width: 30vw;
        margin-right: -7vw;
      }
    }
    &:nth-of-type(2) {
      width: 18vw;
      @media screen and (min-width: 767px) and (max-width: 1023px) {
        & {
          width: 25vw;
        }
      }
      @media screen and (max-width: 767px) {
        & {
          width: 35vw;
        }
      }
    }
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
    &:hover {
      transform: scale(1.1);
      filter: grayscale(0);
      -webkit-box-shadow: 11.5px 32px 18px 15.5px #dddddd;
      -moz-box-shadow: 11.5px 32px 18px 15.5px #dddddd;
      box-shadow: 11.5px 32px 18px 15.5px #dddddd;
      position: relative;
      z-index: 1;
    }
  }
`;

export const IntroductionDetails = styled.section`
  color: white;
  // border: 1px solid white;
  width: 50%;
  height: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  background-color: rgba(0, 53, 102, 0.2);
  background-size: 50%;
  background-repeat: no-repeat;
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    & {
      width: 35%;
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      height: 50%;
      width: 100%;
      text-align: left;
      padding: 0 1rem;
    }
    & > h1 {
      font-size: 22px;
    }
    & > h4 {
      font-size: 14px;
      margin: 0.5rem 0;
    }
  }
  & > h1 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  & > h4 {
    font-weight: 400;
    margin: 1rem 0;
  }
  & > p {
    font-family: "Advent Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    @media screen and (max-width: 767px) {
      & {
        font-size: 13px;
      }
    }
  }
`;
