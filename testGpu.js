'use strict';

const GPU = require('gpu.js');
const gpu = new GPU();
const myFunc = gpu.createKernel(function () {
    return this.thread.x;
}).setOutput([100]);

console.log(myFunc());