# Demo App

This is a demo application showcasing the Ember Widget using React and TypeScript.

You can either build and run the demo app from this repo or visit https://demo.emberai.xyz to see it in action.

## Purpose

The demo app is used to showcase the Ember Widget and provides a simple example of how to integrate it into your application.

## Prerequisites

- Node.js (version 20 or higher)
- pnpm (version 9 or higher)

## Installation

_Note: You can also setup and run the demo app from the root of the monorepo. Operating from root is required for local development._

1. Clone the repository:
   ```
   git clone https://github.com/EmberAGI/ember-widget.git
   ```

2. Create a `.env` file in this directory with the following:
   ```
   VITE_EMBER_API_KEY={{YOUR_EMBER_API_KEY}}
   USE_PUBLISHED_PACKAGES=false
   ```

   `USE_PUBLISHED_PACKAGES` is set to `false` for local packages to be used during development. Set to `true` to use the published packages.

3. Install dependencies:
   ```
   pnpm install
   ```

4. Build the ember-widget package and demo app:
   ```
   pnpm run build
   ```

   _Note: When `USE_PUBLISHED_PACKAGES=true`, the local packages will not be built._

## Usage

To run the demo app locally:

```
pnpm run dev
```

This will start the development server and open your default browser to `http://localhost:5173`.
