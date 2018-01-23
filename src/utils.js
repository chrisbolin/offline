import { injectGlobal } from "styled-components";

export const colors = {
  black: "#181e1e",
  white: "#f6f6f6",
  blueGrey: "#a0a9bb",
  funBlue: "#7f8ed1",
  selectionGreen: "#47ff90"
};

export const forwarderAddress = () => {
  const match = window.location.search.match(/forward=(.*)/);
  return match && match[1];
};

export const globalStyles = () => {
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
};
