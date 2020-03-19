#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');

const start = debounce(() => {
  console.log('STARTING USERS PROGRAM');
});

chokidar
  .watch('.')
  .on('add', () => console.log('File added'))
  .on('change', () => console.log('File changed'))
  .on('unlink', () => console.log('File unlink'));
