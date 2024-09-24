# ember-widget

Your dApp, as easy as texting a friend.

The Ember Widget is a simple to integrate chat widget that allows your users to use your dApp through a conversation with Ember, an AI assistant that takes actions.

![simple code snippet]([http://url/to/img.png](https://cdn.prod.website-files.com/665df398da20e7e4232eeb7f/66e9cca4eca92d58e2164008_Snap%201.png))

## Features

- AI-powered chat interface for dApp interactions
- Easy integration with React applications
- Customizable dApp feature integration

## Requirements

- React 18+
- Node.js 18+ (LTS)

## Installation

You can install the ember-widget package using npm, yarn, or pnpm:

```
pnpm install ember-widget
```

## Usage

Next, in your project, you can import the widget like this in either `main.tsx` or `App.tsx`:

```
import "ember-widget/dist/style.css";
import { EmberChat } from "ember-widget";
```

You also need to pass a configuration object to the EmberChat component, like this:

```
<EmberChat config={config} />
```

where config is an object with the following properties:

```
const config = {
  secret: "process.env.YOUR_EMBER_API_KEY",
};
```

_Note: Please message the Ember team to get your API key._

### Full Example

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "ember-widget/dist/style.css";
import { EmberChat } from "ember-widget";

const config = {
    secret: process.env.YOUR_EMBER_API_KEY,
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
        <App />
        <EmberChat config={config} />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}

```

## Configuration Options

The `config` object passed to the EmberChat component supports the following properties:

- `secret` (required): Your Ember Widget API key

Additional configuration options may be available. Please refer to the latest documentation or contact the Ember team for more details.

## Troubleshooting

If you encounter any issues while integrating or using the Ember Widget, try the following:

1. Ensure you have the correct API key set in your configuration.
2. Check that you've imported both the CSS file and the EmberChat component correctly.
3. Verify that your React version is compatible (16.8+).
4. Make sure you're using the latest version of the ember-widget package.

If problems persist, please contact the Ember support team for assistance.

## Getting Your API Key

To obtain an API key for the Ember Widget, please contact the Ember team directly. They will provide you with the necessary credentials to use the widget in your application.

## Support

If you need help or have any questions, please reach out to the Ember team at hello@emberai.xyz.
