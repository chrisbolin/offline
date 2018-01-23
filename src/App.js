import React from "react";
import { Offline, Online } from "react-detect-offline";

import { OnlineContent, OfflineContent, LanguageSwitcher } from "./components";
import { languages } from "./texts";

export default class OfflinePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      language: this.getLanguage()
    };
  }
  componentDidMount() {
    console.log("But how does it work?");
    console.log(
      `Check out https://github.com/chrisbolin/react-detect-offline (if you're online!)`
    );
    console.log(
      `Spoiler: window.addEventListener with 'online' and 'offline', plus navigator.onLine`
    );
    console.log(
      `If it isn't working for you, maybe your browser isn't supported - http://caniuse.com/#feat=online-status.`
    );
    console.log(`If that's the case, run window.help() for the spoiler.`);
    window.help = () => {
      console.log(
        `OK, let's make this easier. just run window.dispatchEvent(new Event('offline'))`
      );
      console.log(`Still didn't work? Damn. I'm just really sorry.`);
    };
  }
  getLanguage = () => {
    const queryStringMatch = window.location.search.match(/lang=(.*)/);
    const abbr = queryStringMatch
      ? queryStringMatch[1]
      : navigator.language.split("-")[0].toLowerCase();
    return languages[abbr] ? abbr : "en";
  };
  onLanguageChange = event => {
    const language = event.target.value;
    const nextPath = `${window.location.pathname}?lang=${language}`;
    window.history.pushState({}, "", nextPath);
    this.setState({ language });
  };
  render() {
    return (
      <div>
        <LanguageSwitcher
          language={this.state.language}
          onChange={this.onLanguageChange}
        />
        <Offline>
          <OfflineContent language={this.state.language} />
        </Offline>
        <Online>
          <OnlineContent language={this.state.language} />
        </Online>
      </div>
    );
  }
}
