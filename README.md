# ember-widget

Your dApp, as easy as texting a friend.

Usage:

To test locally, clone the repo and run the following commands:

pnpm install
pnpm run build
npm link ember-widget

Now you have the ember-widget "npm package" linked to your local version, and you can use it in your project.

Then, in your project, run:

npm link ember-widget # this will link the local version of ember-widget to your project, so you can use it as a dependency

Then, in your project, you can import the widget like this:

import "ember-widget/dist/style.css";
import { EmberChat } from "ember-widget";

You also need to pass a configuration object to the EmberChat component, like this:

<EmberChat config={config}></EmberChat>

where config is an object with the following properties:

const config = {
secret: "process.env.YOUR_API_KEY",
};
