import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import { bodyParagraphs, onlineElements, title } from './texts';

const colors = {
  black: '#181e1e',
  white: '#f6f6f6',
  blueGrey: '#a0a9bb',
  funBlue: '#7f8ed1',
  selectionGreen: '#47ff90',
};

const sansFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const serifFontFamily = '"Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times","Source Serif Pro", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: ${colors.black};
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: ${colors.selectionGreen};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }

  @keyframes fadeInAndRise {
    0% {
      color: white;
      transform: translateY(2%);
    }
    100% {
      color: black;
      transform: translateY(0);
    }
  }
`;

const Page = styled.div`
  min-height: 100vh;
  padding: 2px;
  line-height: 1.5;
	overflow-x: hidden;
`;

const Content = `
  margin: auto;
  min-width: 310px;
  width: 80%;
  max-width: 600px;
`;

const TextBody = styled.div`
  ${Content}
  min-width: 300px;
  font-family: ${serifFontFamily};
  padding: 20px 0 50px;
  font-size: 22px;
  animation: 700ms ease-out 0s 1 fadeInAndRise;
`;

const BlocklyHeader = styled.div`
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

const Select = styled.select`
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
`

export const OnlineContent = ({ language }) => (
  <Page style={{ backgroundColor: colors.blueGrey }}>
		<BlocklyHeader highlighterColor={colors.black}>
			{onlineElements(language)}
		</BlocklyHeader>
  </Page>
);

export const OfflineContent = ({ language }) => (
  <Page style={{ backgroundColor: colors.white }}>
		<BlocklyHeader highlighterColor={colors.funBlue}>
			<h1>
				{title(language)}
			</h1>
		</BlocklyHeader>
		<TextBody>
			{bodyParagraphs(language)}
		</TextBody>
  </Page>
);


export const LanguageSwitcher = ({language, onChange}) => (
	<Select value={language} onChange={onChange} >
		<option value="en">english</option>
    <option value="es">español</option>
		<option value="fr">français</option>
		<option value="it">italiano</option>
	</Select>
);
