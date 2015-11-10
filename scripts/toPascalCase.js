#!/usr/bin/env node
'use strict';
var changeCase = require('change-case');
console.log( changeCase.pascalCase( process.argv[2] ));
