import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { setTimeout } from 'node:timers';

export const terminal = readline.createInterface({ input, output });
export const aguardar = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));