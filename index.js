#!/usr/bin/env node

// Usage: node __filename [--key1 path to read ...]
var fs = require('fs');
var minimist = require('minimist');
var transform = require('lodash.transform');
var argv = minimist(process.argv.slice(2));

process.stdout.write(JSON.stringify(transform(argv, function(res, v, k) {
  if (k !== '_') res[k] = fs.readFileSync(v, 'utf8');
})));
