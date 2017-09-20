import styled from 'styled-components';

import { colors } from './utils';

const sansFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const serifFontFamily = '"Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times","Source Serif Pro", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const Page = styled.div`
  min-height: 100vh;
  padding: 2px;
  line-height: 1.5;
	overflow-x: hidden;
	background-color: ${colors.white};
`;

export const Content = `
  margin: auto;
  min-width: 310px;
  width: 80%;
  max-width: 600px;
`;

export const TextBody = styled.div`
  ${Content}
  min-width: 300px;
  font-family: ${serifFontFamily};
  padding: 20px 0 50px;
  font-size: 22px;
  animation: 700ms ease-out 0s 1 fadeInAndRise;
`;

export const BlockyHeader = styled.div`
  ${Content}
  font-family: ${sansFontFamily};
  font-size: calc(2.5em + 4.2vmin);
  line-height: 130%;
  color: ${colors.white};
  font-weight: 700;
  padding: 50px 0 10px;
  animation: 300ms ease-out 0s 1 fadeIn;
  h1 {
    display: inline;
    background-color: ${(p) => p.highlighterColor};
    font-size: 100%;
  }
  h2 {
    display: inline;
    background-color: ${(p) => p.highlighterColor};
    font-size: 25px;
    margin: 0;
    padding: 0;
    line-height: 170%;
  }
`;

export const Select = styled.select`
	display: block;
	-moz-appearance: none;
	position: absolute;
	right: 2px;
	top: 2px;
	color: ${colors.white};
	font-size: 13px;
	background: transparent;
	-webkit-appearance: none;
	font-family: ${sansFontFamily};
	outline: none;
	border: none;
	background-color: ${colors.black};
  border-radius: 0;
  padding: 5px 15px;
`;
