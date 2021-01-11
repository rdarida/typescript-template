#!/usr/bin/env node

import { greet } from './index';

((argv: Array<string>): void => {
  try {
    console.log(greet(argv.join(' ')));
  } catch (error) {
    console.log(error.message);
  }

  process.exit();
})(process.argv.slice(2));
