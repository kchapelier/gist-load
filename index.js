"use strict";

/**
 * Load the content of a gist file.
 *
 * @param {object} options Request options
 * @param {Function} callback Node-style / Error-first callback
 */
function gistLoad (options, callback) {
  var gistUrl = options.url;
  var file = options.file || null;
  var withCache = !!options.cache;
  var asJson = options.contentType === 'json';

  var match = /^https?:\/\/gist\.(github|githubusercontent)\.com\/([^\/ \?#]+)\/([a-z0-9]+)/.exec(gistUrl);

  if (match !== null) {
    var contentUrl = (
      'https://gist.githubusercontent.com/' + match[2] + '/' + match[3] + '/raw' +
      (file ? '/' + encodeURIComponent(file) : '') +
      (withCache ? '' : '?t=' + Date.now())
    );

    var xhr = new XMLHttpRequest();
    xhr.open('GET', contentUrl, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          var data = xhr.response;

          if (asJson) {
            try {
              data = JSON.parse(data);
            } catch (error) {
              callback(error, null);
              return;
            }
          }

          callback(null, data);
        } else {
          callback(new Error('The request failed with the following code : ' + xhr.status), null);
        }
      }
    };

    xhr.send();
  } else {
    callback(new Error('Invalid gist url'), null);
  }
}

module.exports = gistLoad;