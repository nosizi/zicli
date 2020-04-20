#!/usr/bin/env node

const program = require('commander')

program
  .version(`zicli ${require('../package.json').version}`)
  .usage('<command> <options>')

program
  .command('create <app-name>')
  .description('使用zicli创建一个新项目')
  .action((name, cmd) => {
    const createFunc = require('../lib/create')
    createFunc(name)
  })

program.parse(process.argv)