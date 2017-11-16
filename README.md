## Boi app generator
---
[![license](https://img.shields.io/github/license/boijs/boi.svg?style=plastic)](https://github.com/boijs/boi/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/generator-boiapp.svg?style=plastic)](https://www.npmjs.com/package/boi)

创建适用于[boi](https://github.com/boijs/boi)的webapp脚手架，已集成到`boi new`命令行。

### Install
```
npm install generator-boiapp -g
```

### Usage

#### 使用yo创建项目
```
yo boiapp [options] [<appname>]
```
Options:
* `-c`,`--current`：在当前目录创建项目，默认为`false`
* `appname`：项目名称以及创建的子目录名称，默认为`"boiapp"`


#### 使用boi创建项目
```
boi new [<appname>] -t [<template>]
```
Options:
* `appname`：项目名称以及创建的子目录名称，默认为`"boiapp"`；
* `-t`，`--template`：模板名称，默认为`"boiapp"`。

`boi new`命令支持使用任何**不带有特殊options**的yeoman generator。比如`boi new demo -t webapp`将会以[generator-webapp](https://github.com/yeoman/generator-webapp)为模板创建项目。
