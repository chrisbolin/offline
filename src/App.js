import React from 'react';
import { Offline, Online } from 'react-detect-offline';
import styled, { injectGlobal } from 'styled-components';

const MOBILE = /Mobile|Android/.test(navigator.userAgent);

const colors = {
  black: '#181e1e',
  white: '#f6f6f6',
  blueGrey: '#a0a9bb',
  funBlue: '#7f8ed1',
  selectionGreen: '#47ff90',
};

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

  /* medium / wordpress approach https://css-tricks.com/snippets/css/system-font-stack/ */
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
  font-family: "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times","Source Serif Pro", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 20px 0 50px;
  font-size: 22px;
  animation: 700ms ease-out 0s 1 fadeInAndRise;
`;

const BlocklyHeader = styled.div`
  ${Content}
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

const OnlineContent = () => (
  <Page style={{ backgroundColor: colors.blueGrey }}>
    <BlocklyHeader highlighterColor={colors.black}>
      <h1>
        You must go offline to view this page.
      </h1>
      <br />
      <h2>
        { MOBILE ? 'Enable Airplane Mode.' : 'Disconnect to continue'}
      </h2>
    </BlocklyHeader>
  </Page>
);

const OfflineContent = () => (
  <Page style={{ backgroundColor: colors.white }}>
    <BlocklyHeader highlighterColor={colors.funBlue}>
      <h1>
        Offline Only
      </h1>
    </BlocklyHeader>
    <TextBody>
      <p><i>2017. 2-minute read.</i></p>
      <p>
        Do you want to be productive?
        Just go offline, because to maintain a constant connection to the internet is to maintain a constant connection to interruptions, both external and internal.
      </p>

      <p>
        The external interruptions are legion and well-documented: you have a new message on Gmail, Slack, Twitter, Facebook, Instagram, Snapchat, LinkedIn. Friends, family, coworkers, and spammers: each have direct access to your precious attention.
      </p>

      <p>
        But it’s the internal distractions that are truly pernicious.
        You can mute Twitter notifications and log off of Slack, but how do you stop your own mind from derailing you?
        I have spent hours caught in webs of my own curiosity.
        Most dangerous is the split-second whim, apropos of nothing:
        “I wonder what the second most commonly spoken language is?”
        Those 500 milliseconds could change your day, because it is never just one Google search, just one Wikipedia article.
        Disconnecting from the internet short-circuits those whims, allowing you to move on unencumbered.
        (It’s Spanish, by the way.)
      </p>

      <p>
        This page itself is an experiment in this vein: what if certain content required us to disconnect?
        What if readers had access to that glorious attention that makes devouring a novel for hours at a time so satisfying?
        What if creators could pair that with the power of modern devices?
        Our phones and laptops are amazing platforms for novel content — if only we could harness our own attention.
      </p>

      <p>
        Offline-only content would also force creators to think differently.
        Look at this page: there is not a single link, no footnote offering to distract readers.
        How many good articles have you left half-read because you chased a shiny underlined link?
        When you are offline, right here is the only place you can be.
      </p>

      <p>
        I can already hear the groans: “But I have to be online for my job.” I don’t care. Make time.
        I bet the thing that makes you valuable is not your ability to Google something, but your ability to synthesize information. Do your research online, but create offline.
      </p>

      <p>
        Now back to your regularly scheduled internet. Just remember to give yourself an occasional gift of disconnection.
      </p>

      <p>
        <span role="img" aria-label="love">❤️</span> Chris
      </p>
    </TextBody>
  </Page>
);

export default class OfflinePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	componentDidMount() {
		console.log('But how does it work?');
		console.log(`Check out https://github.com/chrisbolin/react-detect-offline (if you're online!)`);
		console.log(`Spoiler: window.addEventListener with 'online' and 'offline', plus navigator.onLine`);
		console.log(`If it isn't working for you, maybe your browser isn't supported - http://caniuse.com/#feat=online-status.`);
		console.log(`If that's the case, run window.help() for the spoiler.`);
		window.help = () => {
			console.log(`OK, let's make this easier. just run window.dispatchEvent(new Event('offline'))`);
			console.log(`Still didn't work? Damn. I'm just really sorry.`);
		};
	}
  render() {
    return (
      <div>
        <Offline><OfflineContent /></Offline>
        <Online><OnlineContent /></Online>
      </div>
    );
  }
}
