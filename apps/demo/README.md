# Demo App

This is a demo application showcasing the Ember Widget using React and TypeScript.

You can either build and run the demo app from this repo or visit https://demo.emberai.xyz to see it in action.

## Purpose

The demo app is used to showcase the Ember Widget and provides a simple example of how to integrate it into your application.

## Prerequisites

- Node.js (version 20 or higher)
- pnpm (version 9 or higher)

## Installation

_Note: You can setup and run the demo app from the root of the monorepo._

1. Clone the repository:
   ```
   git clone https://github.com/EmberAGI/ember-widget.git
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Create a `.env` file in the root of the monorepo with the following:
   ```
   VITE_EMBER_API_KEY={{YOUR_EMBER_API_KEY}}
   ```

4. Build the ember-widget package and demo app:
   ```
   pnpm run build
   ```

## Usage

To run the demo app locally:

```
pnpm run dev
```

This will start the development server and open your default browser to `http://localhost:5173`.
