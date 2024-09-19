# Ember Widget

Your dApp, as easy as texting a friend.

The Ember Widget is a simple to integrate chat widget that allows your users to use your dApp through a conversation with Ember, an AI assistant that takes actions.

## Introduction

This is a monorepo containing the Ember Widget package and a demo that shows how it works.

To learn more about the Ember Widget, visit the [Ember Widget README](./packages/ember-widget/README.md) for detailed documentation.

To see the Ember Widget in action, visit the [Demo README](./apps/demo/README.md).

## Setup for Development

To set up the monorepo for development, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EmberAGI/ember-widget.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd ember-widget
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Create a `.env` file in `apps/demo/` with the following content:**
   ```
   VITE_EMBER_API_KEY={{YOUR_EMBER_API_KEY}}
   USE_PUBLISHED_PACKAGES=false
   ```

   - `USE_PUBLISHED_PACKAGES=false` ensures that local packages are used during development. Set to `true` to use the published packages.

5. **Build the packages and demo app:**
   ```bash
   pnpm run build
   ```

6. **Run the demo app:**
   ```bash
   pnpm run dev
   ```

   This will start the development server and open your default browser to `http://localhost:5173`.