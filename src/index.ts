#!/usr/bin/env node
import { CLI } from './cli';

// Initialize the CLI application
const cliApp = new CLI();
cliApp.run(process.argv);
