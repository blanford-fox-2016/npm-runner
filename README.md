# npm-runner

## script

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "sass": "node-sass src/sass/*.scss dist/ss/compiled.css",
    "js": "concat-cli -f src/js/*.js -o dist/js/concat.js",
    "css": "concat-cli -f src/css/*.css -o dist/css/concat-css.js",
    "browser": "browser-sync start --server --files *.html"
  }
```

## How to run compile sass

npm run sass

## How to run concat js

npm run js

## How to run concat css

npm run css

## How to run concat browser

npm run browser