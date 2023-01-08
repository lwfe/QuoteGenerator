import styled from "styled-components";
import { devices } from "../devices";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 32px;
    text-align: center;
    margin-bottom: 40px;
  }

  button {
    width: 200px;
    margin-top: 30px;
    outline: none;
    background: ${(props) => props.theme.colors.primary};
    padding: 12px;
    border: none;
    border-radius: 2px;
    color: ${(props) => props.theme.colors.background};
    font-size: 16px;
    font-weight: bold;
  }

  button:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.secondary};
  }
`;

export const QuoteCard = styled.div`
  @media ${devices.mobileS} {
    width: 100%;
    padding: 2rem;
    background: ${(props) => props.theme.colors.backgroundSecondary};

    h1 {
      color: ${(props) => props.theme.colors.primary};
      font-size: 25px;
      text-align: right;
    }

    p {
      margin-bottom: 12px;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
  }

  @media ${devices.tablet} {
    width: 80%;
    border-radius: 8px;
  }

  @media ${devices.laptop} {
    width: 50%;
    border-radius: 8px;
  }

  @media ${devices.laptopL} {
    width: 40%;
    border-radius: 8px;
  }
`;
