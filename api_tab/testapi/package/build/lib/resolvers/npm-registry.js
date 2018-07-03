"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _keys=require("babel-runtime/core-js/object/keys"),_keys2=_interopRequireDefault(_keys),_typeof2=require("babel-runtime/helpers/typeof"),_typeof3=_interopRequireDefault(_typeof2),_regenerator=require("babel-runtime/regenerator"),_regenerator2=_interopRequireDefault(_regenerator),_promise=require("babel-runtime/core-js/promise"),_promise2=_interopRequireDefault(_promise),_asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator"),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_create=require("babel-runtime/core-js/object/create"),_create2=_interopRequireDefault(_create),fetch=function(){var e=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function r(e){var t;return _regenerator2["default"].wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e in cache)){r.next=3;break}return debug("using cached version of %s",e),r.abrupt("return",cache[e]);case 3:if(!(e in pending)){r.next=5;break}return r.abrupt("return",pending[e]);case 5:return debug("fetching %s",e),t=new _promise2["default"](function(r,t){(0,_got2["default"])(e,{json:!0,retries:_config2["default"].requestRetries},function(n,a,u){return n?t(n):(200!==u.statusCode&&t(new Error("Unexpected status code "+u.statusCode+" for "+e)),cache[e]=a,void r(a))})}),pending[e]=t,t.then(function(){delete pending[e]}),r.abrupt("return",t);case 10:case"end":return r.stop()}},r,this)}));return function(r){return e.apply(this,arguments)}}(),_semver=require("semver"),_semver2=_interopRequireDefault(_semver),_got=require("got"),_got2=_interopRequireDefault(_got),_url=require("url"),_url2=_interopRequireDefault(_url),_package_uid=require("../util/package_uid"),_package_uid2=_interopRequireDefault(_package_uid),_debug=require("debug"),_debug2=_interopRequireDefault(_debug),_config=require("../config"),_config2=_interopRequireDefault(_config),cache=(0,_create2["default"])(null),pending=(0,_create2["default"])(null),debug=(0,_debug2["default"])("resolver:npm-registry");exports["default"]=function(){function e(e,t,n){return r.apply(this,arguments)}var r=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function t(e,r,n){var a,u,o,i,s,c;return _regenerator2["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="@"===e.charAt(0),u=a?"@"+encodeURIComponent(e.substr(1)):encodeURIComponent(e),o=n.type,t.next=5,fetch(_url2["default"].resolve(_config2["default"].registry,u));case 5:if(i=t.sent,i.versions&&"object"===(0,_typeof3["default"])(i.versions)){t.next=8;break}throw new SyntaxError('package.json should have plain object property "versions"');case 8:if(s=void 0,"tag"!==o){t.next=16;break}if(i["dist-tags"]&&"object"===(0,_typeof3["default"])(i["dist-tags"])){t.next=12;break}throw new SyntaxError("expected to have package with tagged versions");case 12:s=i.versions[i["dist-tags"][r]],s||(s=i.versions[i["dist-tags"][n.spec]]),t.next=18;break;case 16:c="range"===o?_semver2["default"].validRange(r,!0):r,s=i.versions[_semver2["default"].maxSatisfying((0,_keys2["default"])(i.versions),c)];case 18:if(s){t.next=21;break}throw debug("no satisfying version found for %s@%s",e,r),new Error("No satisfying target found for "+e+"@"+r);case 21:return debug("resolved %s@%s to %s@%s",e,r,s.name,s.version),t.abrupt("return",{name:s.name,version:s.version,uid:(0,_package_uid2["default"])(e,s.version),shasum:s.dist.shasum,tarball:s.dist.tarball});case 23:case"end":return t.stop()}},t,this)}));return e}();