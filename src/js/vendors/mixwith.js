'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mixwith = mod.exports;
  }
})(undefined, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _cachedApplicationRef = exports._cachedApplicationRef = Symbol('_cachedApplicationRef');

  var _mixinRef = exports._mixinRef = Symbol('_mixinRef');

  var _originalMixin = exports._originalMixin = Symbol('_originalMixin');

  var wrap = exports.wrap = function (mixin, wrapper) {
    Object.setPrototypeOf(wrapper, mixin);
    if (!mixin[_originalMixin]) {
      mixin[_originalMixin] = mixin;
    }
    return wrapper;
  };

  var Cached = exports.Cached = function (mixin) {
    return wrap(mixin, function (superclass) {
      // Get or create a symbol used to look up a previous application of mixin
      // to the class. This symbol is unique per mixin definition, so a class will have N
      // applicationRefs if it has had N mixins applied to it. A mixin will have
      // exactly one _cachedApplicationRef used to store its applications.
      var applicationRef = mixin[_cachedApplicationRef];
      if (!applicationRef) {
        applicationRef = mixin[_cachedApplicationRef] = Symbol(mixin.name);
      }
      // Look up an existing application of `mixin` to `c`, return it if found.
      if (superclass.hasOwnProperty(applicationRef)) {
        return superclass[applicationRef];
      }
      // Apply the mixin
      var application = mixin(superclass);
      // Cache the mixin application on the superclass
      superclass[applicationRef] = application;
      return application;
    });
  };

  var HasInstance = exports.HasInstance = function (mixin) {
    if (Symbol.hasInstance && !mixin.hasOwnProperty(Symbol.hasInstance)) {
      Object.defineProperty(mixin, Symbol.hasInstance, {
        value: function value(o) {
          var originalMixin = this[_originalMixin];
          while (o != null) {
            if (o.hasOwnProperty(_mixinRef) && o[_mixinRef] === originalMixin) {
              return true;
            }
            o = Object.getPrototypeOf(o);
          }
          return false;
        }
      });
    }
    return mixin;
  };

  var BareMixin = exports.BareMixin = function (mixin) {
    return wrap(mixin, function (superclass) {
      // Apply the mixin
      var application = mixin(superclass);

      // Attach a reference from mixin applition to wrapped mixin for RTTI
      // mixin[@@hasInstance] should use this.
      application.prototype[_mixinRef] = mixin[_originalMixin];
      return application;
    });
  };

  var Mixin = exports.Mixin = function (mixin) {
    return Cached(HasInstance(BareMixin(mixin)));
  };

  var mix = exports.mix = function (superClass) {
    return new MixinBuilder(superClass);
  };

  var MixinBuilder = function () {
    function MixinBuilder(superclass) {
      _classCallCheck(this, MixinBuilder);

      this.superclass = superclass;
    }

    _createClass(MixinBuilder, [{
      key: 'with',
      value: function _with() {
        return Array.from(arguments).reduce(function (c, m) {
          return m(c);
        }, this.superclass);
      }
    }]);

    return MixinBuilder;
  }();
});
