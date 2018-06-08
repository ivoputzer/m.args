m.args
===
[![ci](https://img.shields.io/travis/ivoputzer/m.args.svg?style=flat-square)](https://travis-ci.org/ivoputzer/m.args) [![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json) [![style](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![Coverage Status](https://img.shields.io/coveralls/ivoputzer/m.args.svg?style=flat-square)](https://coveralls.io/github/ivoputzer/m.args?branch=master) [![quality](http://npm.packagequality.com/shield/m.args.svg?style=flat-square&colorB=44CC11)](http://packagequality.com/#?package=m.args) [![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=flat-square)](https://nodejs.org/docs/v6.0.0/api) [![version](https://img.shields.io/npm/v/m.args.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/m.args) [![license](https://img.shields.io/npm/l/m.args.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/MIT)

**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[m.args](https://github.com/ivoputzer/m.args)** is a lightweight arguments parser written in es6+

# Usage
```js
  #/usr/bin/env node
  const {parse} = require('m.args')
  const args = parse(process.argv.slice(2))
```
