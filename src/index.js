import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Forwarder from "./Forwarder";
import { forwarderAddress, globalStyles } from "./utils";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root");

const address = forwarderAddress();
const element = address ? <Forwarder address={address} /> : <App />;

globalStyles();

ReactDOM.render(element, root);
registerServiceWorker();
