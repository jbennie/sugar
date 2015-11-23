var cache, e, insertFont, key, md5;

md5 = 'e90ba95faca6e63b5516ed839f4514ec';

key = 'fonts';

cache = void 0;

insertFont = function(value) {
  var style;
  style = document.createElement('style');
  style.innerHTML = value;
  document.head.appendChild(style);
};

try {
  cache = window.localStorage.getItem(key);
  if (cache) {
    cache = JSON.parse(cache);
    if (cache.md5 === md5) {
      insertFont(cache.value);
    } else {
      window.localStorage.removeItem(key);
      cache = null;
    }
  }
} catch (_error) {
  e = _error;
}

if (!cache) {
  window.addEventListener('load', function() {
    var request, response;
    request = new XMLHttpRequest;
    response = void 0;
    request.open('GET', '/path/to/fonts.json', true);
    request.onload = function() {
      if (this.status === 200) {
        try {
          response = JSON.parse(this.response);
          insertFont(response.value);
          window.localStorage.setItem(key, this.response);
        } catch (_error) {
          e = _error;
        }
      }
    };
    request.send();
  });
}

//# sourceMappingURL=webfonts.js.map
