import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { execa } from 'execa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the demo app's .env file
const envPath = path.resolve(__dirname, 'apps/demo/.env');

// Load environment variables from the specified .env file
dotenv.config({ path: envPath });

// Function to run a command
const run = async (cmd, args) => {
  try {
    await execa(cmd, args, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing ${cmd} ${args.join(' ')}:`, error);
    process.exit(1);
  }
};

// Main build function
const build = async () => {
  if (process.env.USE_PUBLISHED_PACKAGES !== 'true') {
    console.log('Building ember-widget...');
    await run('pnpm', ['run', '--filter', './packages/ember-widget', 'build']);
  } else {
    console.log('Skipping build for ember-widget as USE_PUBLISHED_PACKAGES=true');
  }

  console.log('Building demo app...');
  await run('pnpm', ['run', '--filter', './apps/demo', 'build']);
};

build();