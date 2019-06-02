# gist-load

Load the content of a Gist file in the browser.

**Features**

 * Does not use the Github API, does not require an API token.
 * No dependency.
 * Written in conservative ES5.
 * Small bundle size.

**Warning**

Github may break this at any time so it isn't recommended to use this in any critical project.
It is perfect to maintain an external list of presets for creative coding projects and the likes though.

## Installing

With [npm](http://npmjs.org) do:

```
npm install gist-load --production
```

## Examples

### Load json from a Gist with a single file

```js
const gistLoad = require('gist-load');

gistLoad(
    {
        url: 'https://gist.github.com/kchapelier/8f0d755cc77e7e5a53d1cf9a38cbee6d',
        contentType: 'json'
    },
    function (error, data) {
        console.log('ERR:', error);
        console.log('DAT:', data);
    }
);
```


### Load text from a Gist with multiple files

```js
const gistLoad = require('gist-load');

gistLoad(
    {
        url: 'https://gist.github.com/kchapelier/8e41a80f88a4aec685a343151c38efcf',
        file: 'file2.txt',
    },
    function (error, data) {
        console.log('ERR:', error);
        console.log('DAT:', data);
    }
);
```

## API

### gistLoad(options, callback)

Load the content of a gist file.

**Arguments**

 * **options :**
   * *url :* String. Url of the Gist (mandatory)
   * *file :* String. Name of the file (mandatory for Gist with multiple files)
   * *contentType :* String. `string` or `json`, default to `string`
   * *cache :* Boolean. Whether to cache the result of the query, default to `false`
 * **callback :** A node-style / error-first callback.

## History

### [1.0.0](https://github.com/kchapelier/gist-load/tree/1.0.0) (2019-06-02) :

 * First release

## License

MIT