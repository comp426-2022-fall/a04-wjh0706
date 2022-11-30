#!/usr/bin/env node

import { roll } from "../lib/roll.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2))

const result = roll(args.sides || 6, args.dice || 2, args.rolls || 1)

console.log(JSON.stringify(result))
