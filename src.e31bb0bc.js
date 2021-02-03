// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\icons\\feature-icons\\1mean.svg":[["1mean.7b29ea2d.svg","icons/feature-icons/1mean.svg"],"icons/feature-icons/1mean.svg"],"./..\\icons\\feature-icons\\1mob.svg":[["1mob.b4364c6d.svg","icons/feature-icons/1mob.svg"],"icons/feature-icons/1mob.svg"],"./..\\icons\\feature-icons\\1dol.svg":[["1dol.1d68e5d5.svg","icons/feature-icons/1dol.svg"],"icons/feature-icons/1dol.svg"],"./..\\icons\\feature-icons\\2mean.svg":[["2mean.8f5e20d2.svg","icons/feature-icons/2mean.svg"],"icons/feature-icons/2mean.svg"],"./..\\icons\\feature-icons\\2mob.svg":[["2mob.14c7436b.svg","icons/feature-icons/2mob.svg"],"icons/feature-icons/2mob.svg"],"./..\\icons\\feature-icons\\2dol.svg":[["2dol.09fa8774.svg","icons/feature-icons/2dol.svg"],"icons/feature-icons/2dol.svg"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-bg-768.png":[["img-bg-768.288550a6.png","images/hero/img-bg-768.png"],"images/hero/img-bg-768.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-bg-768@2x.png":[["img-bg-768@2x.5986ec8d.png","images/hero/img-bg-768@2x.png"],"images/hero/img-bg-768@2x.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-02-hero-320.png":[["img-02-hero-320.41ff7180.png","images/hero/img-02-hero-320.png"],"images/hero/img-02-hero-320.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-01-hero-320.png":[["img-01-hero-320.572a30ca.png","images/hero/img-01-hero-320.png"],"images/hero/img-01-hero-320.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-02-hero-320@2x.png":[["img-02-hero-320@2x.cd494897.png","images/hero/img-02-hero-320@2x.png"],"images/hero/img-02-hero-320@2x.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-01-hero-320@2x.png":[["img-01-hero-320@2x.115ab69c.png","images/hero/img-01-hero-320@2x.png"],"images/hero/img-01-hero-320@2x.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-02-hero-768.png":[["img-02-hero-768.569b3409.png","images/hero/img-02-hero-768.png"],"images/hero/img-02-hero-768.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-01-hero-768.png":[["img-01-hero-768.6c547b60.png","images/hero/img-01-hero-768.png"],"images/hero/img-01-hero-768.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-02-hero-768@2x.png":[["img-02-hero-768@2x.98681928.png","images/hero/img-02-hero-768@2x.png"],"images/hero/img-02-hero-768@2x.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-01-hero-768@2x.png":[["img-01-hero-768@2x.a90bf390.png","images/hero/img-01-hero-768@2x.png"],"images/hero/img-01-hero-768@2x.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-bg-1344.png":[["img-bg-1344.a1750412.png","images/hero/img-bg-1344.png"],"images/hero/img-bg-1344.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-bg-1344@2x.png":[["img-bg-1344@2x.55270b5b.png","images/hero/img-bg-1344@2x.png"],"images/hero/img-bg-1344@2x.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-02-hero-1344.png":[["img-02-hero-1344.419b7fae.png","images/hero/img-02-hero-1344.png"],"images/hero/img-02-hero-1344.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-01-hero-1344.png":[["img-01-hero-1344.24930601.png","images/hero/img-01-hero-1344.png"],"images/hero/img-01-hero-1344.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-02-hero-1344@2x.png":[["img-02-hero-1344@2x.d0bf9d1a.png","images/hero/img-02-hero-1344@2x.png"],"images/hero/img-02-hero-1344@2x.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\hero\\img-01-hero-1344@2x.png":[["img-01-hero-1344@2x.3a009af6.png","images/hero/img-01-hero-1344@2x.png"],"images/hero/img-01-hero-1344@2x.png"],"./..\\icons\\our-guarantees-line.svg":[["our-guarantees-line.006bd358.svg","icons/our-guarantees-line.svg"],"icons/our-guarantees-line.svg"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\our-programm\\our-programmimg.png":[["our-programmimg.1202f2d4.png","images/our-programm/our-programmimg.png"],"images/our-programm/our-programmimg.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\our-programm\\our-programmimgtabl.png":[["our-programmimgtabl.c64f166c.png","images/our-programm/our-programmimgtabl.png"],"images/our-programm/our-programmimgtabl.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\images\\our-programm\\our-programmimgdesk.png":[["our-programmimgdesk.6227ca1d.png","images/our-programm/our-programmimgdesk.png"],"images/our-programm/our-programmimgdesk.png"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\icons\\logo-mob.svg":[["logo-mob.27c41e25.svg","icons/logo-mob.svg"],"icons/logo-mob.svg"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\icons\\logo-mob-white.svg":[["logo-mob-white.512d98e2.svg","icons/logo-mob-white.svg"],"icons/logo-mob-white.svg"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\icons\\logo-big-white.svg":[["logo-big-white.0ab6928d.svg","icons/logo-big-white.svg"],"icons/logo-big-white.svg"],"C:\\Users\\tatil\\Documents\\GitHub\\first-project\\src\\icons\\logo-big.svg":[["logo-big.fff87073.svg","icons/logo-big.svg"],"icons/logo-big.svg"],"./..\\images\\registration-form\\back-mob-png1x.png":[["back-mob-png1x.91bda9ad.png","images/registration-form/back-mob-png1x.png"],"images/registration-form/back-mob-png1x.png"],"./..\\images\\registration-form\\back-mob-png2x.png":[["back-mob-png2x.79662e2d.png","images/registration-form/back-mob-png2x.png"],"images/registration-form/back-mob-png2x.png"],"./..\\images\\registration-form\\back-tablet-png1x.png":[["back-tablet-png1x.25e4c3f8.png","images/registration-form/back-tablet-png1x.png"],"images/registration-form/back-tablet-png1x.png"],"./..\\images\\registration-form\\back-tablet-png2x.png":[["back-tablet-png2x.076883c9.png","images/registration-form/back-tablet-png2x.png"],"images/registration-form/back-tablet-png2x.png"],"./..\\images\\registration-form\\back-desktop-png1x.png":[["back-desktop-png1x.1024f41b.png","images/registration-form/back-desktop-png1x.png"],"images/registration-form/back-desktop-png1x.png"],"./..\\images\\registration-form\\back-desktop-png2x.png":[["back-desktop-png2x.ed19ccbe.png","images/registration-form/back-desktop-png2x.png"],"images/registration-form/back-desktop-png2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59279" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map