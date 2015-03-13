# Basic package to start with bootstrap and sass

## Overview

This package contains bootstrap sass version in version 3.3.1 which can easily be customized by overwriting bootstrap variables in ```_variables.scss``` file. Additional sass can be added in ```custom.scss``` file.

## How to use

Edit files in ```src``` directory as desired and run following commands:

```shell
npm install
gulp
```

A new folder ```dist``` will be created with minified css and js as well as compiled sass.

## In place editing

Instead of compiling the code over and over again you can run a simple http-server in src folder:

```shell
npm install http-server
cd src
http-server
```

Once you have edited any ```*.scss``` file you can use the gulp task ```compile-sass``` to compile sass to css.
The css files will appear in css folder inside the src folder.
Now you can access the template in your browser by browsing to http://127.0.0.1:8080