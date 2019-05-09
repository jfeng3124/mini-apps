/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Row_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row.jsx */ \"./client/src/components/Row.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      player1: 1,\n      player2: 2,\n      currentPlayer: null,\n      board: [],\n      gameOver: false,\n      message: ''\n    };\n    _this.play = _this.play.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"initBoard\",\n    value: function initBoard() {\n      var board = [];\n\n      for (var r = 0; r < 6; r++) {\n        var row = [];\n\n        for (var c = 0; c < 7; c++) {\n          row.push(null);\n        }\n\n        board.push(row);\n      }\n\n      this.setState({\n        board: board,\n        currentPlayer: this.state.player1,\n        gameOver: false,\n        message: ''\n      });\n    }\n  }, {\n    key: \"togglePlayer\",\n    value: function togglePlayer() {\n      return this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      this.initBoard();\n    }\n  }, {\n    key: \"play\",\n    value: function play(c) {\n      if (!this.state.gameOver) {\n        var board = this.state.board;\n\n        for (var r = 5; r >= 0; r--) {\n          if (!board[r][c]) {\n            board[r][c] = this.state.currentPlayer;\n            break;\n          }\n        }\n\n        var result = this.checkAll(board);\n\n        if (result === this.state.player1) {\n          this.setState({\n            board: board,\n            gameOver: true,\n            message: 'Player Red wins!'\n          });\n        }\n\n        if (result === this.state.player2) {\n          this.setState({\n            board: board,\n            gameOver: true,\n            message: 'Player Yellow wins!'\n          });\n        }\n\n        if (result === 'draw') {\n          this.setState({\n            board: board,\n            gameOver: true,\n            message: 'Draw game.'\n          });\n        }\n\n        this.setState({\n          board: board,\n          currentPlayer: this.togglePlayer()\n        });\n      } else {\n        this.setState({\n          message: 'Game over. Please start a new game.'\n        });\n      }\n    }\n  }, {\n    key: \"checkVertical\",\n    value: function checkVertical(board) {\n      for (var r = 3; r < 6; r++) {\n        for (var c = 0; c < 7; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r - 1][c] && board[r][c] === board[r - 2][c] && board[r][c] === board[r - 3][c]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkHorizontal\",\n    value: function checkHorizontal(board) {\n      for (var r = 0; r < 6; r++) {\n        for (var c = 0; c < 4; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r][c + 1] && board[r][c] === board[r][c + 2] && board[r][c] === board[r][c + 3]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDiagonalRight\",\n    value: function checkDiagonalRight(board) {\n      for (var r = 3; r < 6; r++) {\n        for (var c = 0; c < 4; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r - 1][c + 1] && board[r][c] === board[r - 2][c + 2] && board[r][c] === board[r - 3][c + 3]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDiagonalLeft\",\n    value: function checkDiagonalLeft(board) {\n      for (var r = 3; r < 6; r++) {\n        for (var c = 3; c < 7; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r - 1][c - 1] && board[r][c] === board[r - 2][c - 2] && board[r][c] === board[r - 3][c - 3]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDraw\",\n    value: function checkDraw(board) {\n      for (var r = 0; r < 6; r++) {\n        for (var c = 0; c < 7; c++) {\n          if (board[r][c] === null) {\n            return null;\n          }\n        }\n      }\n\n      return 'draw';\n    }\n  }, {\n    key: \"checkAll\",\n    value: function checkAll(board) {\n      return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"button\",\n        onClick: function onClick() {\n          _this2.initBoard();\n        }\n      }, \"New Game\"), React.createElement(\"div\", {\n        className: \"message\"\n      }, this.state.message), React.createElement(\"table\", null, React.createElement(\"thead\", null), React.createElement(\"tbody\", null, this.state.board.map(function (row, i) {\n        return React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          key: i,\n          row: row,\n          play: _this2.play\n        });\n      }))));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdyBmcm9tICcuL1Jvdy5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyMTogMSxcbiAgICAgIHBsYXllcjI6IDIsXG4gICAgICBjdXJyZW50UGxheWVyOiBudWxsLFxuICAgICAgYm9hcmQ6IFtdLFxuICAgICAgZ2FtZU92ZXI6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJydcbiAgICB9XG4gICAgXG4gICAgdGhpcy5wbGF5ID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XG4gIH1cblxuICBpbml0Qm9hcmQgKCkge1xuXG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA2OyByKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNzsgYysrKSB7IHJvdy5wdXNoKG51bGwpIH1cbiAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBib2FyZCxcbiAgICAgIGN1cnJlbnRQbGF5ZXI6IHRoaXMuc3RhdGUucGxheWVyMSxcbiAgICAgIGdhbWVPdmVyOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICcnXG4gICAgfSlcbiAgfVxuICBcbiAgdG9nZ2xlUGxheWVyICgpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuY3VycmVudFBsYXllciA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIxKSA/IHRoaXMuc3RhdGUucGxheWVyMiA6IHRoaXMuc3RhdGUucGxheWVyMTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgdGhpcy5pbml0Qm9hcmQoKTtcbiAgfVxuICBcbiAgcGxheSAoYykge1xuICAgIGlmICghdGhpcy5zdGF0ZS5nYW1lT3Zlcikge1xuICAgICAgbGV0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICAgIGZvciAobGV0IHIgPSA1OyByID49IDA7IHItLSkge1xuICAgICAgICBpZiAoIWJvYXJkW3JdW2NdKSB7XG4gICAgICAgICAgYm9hcmRbcl1bY10gPSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuY2hlY2tBbGwoYm9hcmQpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIxKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvYXJkLCBnYW1lT3ZlcjogdHJ1ZSwgbWVzc2FnZTogJ1BsYXllciBSZWQgd2lucyEnIH0pO1xuICAgICAgfSBcbiAgICAgIGlmIChyZXN1bHQgPT09IHRoaXMuc3RhdGUucGxheWVyMikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib2FyZCwgZ2FtZU92ZXI6IHRydWUsIG1lc3NhZ2U6ICdQbGF5ZXIgWWVsbG93IHdpbnMhJyB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQgPT09ICdkcmF3Jykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib2FyZCwgZ2FtZU92ZXI6IHRydWUsIG1lc3NhZ2U6ICdEcmF3IGdhbWUuJyB9KTtcbiAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmQsIGN1cnJlbnRQbGF5ZXI6IHRoaXMudG9nZ2xlUGxheWVyKCkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiAnR2FtZSBvdmVyLiBQbGVhc2Ugc3RhcnQgYSBuZXcgZ2FtZS4nIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tWZXJ0aWNhbCAoYm9hcmQpIHtcbiAgICBmb3IgKGxldCByID0gMzsgciA8IDY7IHIrKykge1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA3OyBjKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMV1bY10gJiZcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAyXVtjXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDNdW2NdKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmRbcl1bY107ICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tIb3Jpem9udGFsIChib2FyZCkge1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDQ7IGMrKykge1xuICAgICAgICBpZiAoYm9hcmRbcl1bY10pIHtcbiAgICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IGJvYXJkW3JdW2MgKyAxXSAmJiBcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3JdW2MgKyAyXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbcl1bYyArIDNdKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmRbcl1bY107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBjaGVja0RpYWdvbmFsUmlnaHQgKGJvYXJkKSB7XG4gICAgZm9yIChsZXQgciA9IDM7IHIgPCA2OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSkge1xuICAgICAgICAgIGlmIChib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDFdW2MgKyAxXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDJdW2MgKyAyXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDNdW2MgKyAzXSkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkW3JdW2NdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tEaWFnb25hbExlZnQgKGJvYXJkKSB7XG4gICAgZm9yIChsZXQgciA9IDM7IHIgPCA2OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAzOyBjIDwgNzsgYysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSkge1xuICAgICAgICAgIGlmIChib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDFdW2MgLSAxXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDJdW2MgLSAyXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDNdW2MgLSAzXSkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkW3JdW2NdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tEcmF3IChib2FyZCkge1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDc7IGMrKykge1xuICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ2RyYXcnOyAgICBcbiAgfVxuICBcbiAgY2hlY2tBbGwgKGJvYXJkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tWZXJ0aWNhbChib2FyZCkgfHwgdGhpcy5jaGVja0RpYWdvbmFsUmlnaHQoYm9hcmQpIHx8IHRoaXMuY2hlY2tEaWFnb25hbExlZnQoYm9hcmQpIHx8IHRoaXMuY2hlY2tIb3Jpem9udGFsKGJvYXJkKSB8fCB0aGlzLmNoZWNrRHJhdyhib2FyZCk7XG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3RoaXMuaW5pdEJvYXJkKCl9fT5OZXcgR2FtZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYm9hcmQubWFwKChyb3csIGkpID0+ICg8Um93IGtleT17aX0gcm93PXtyb3d9IHBsYXk9e3RoaXMucGxheX0gLz4pKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBWkE7QUFhQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUF4SkE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/components/Cell.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Cell.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Cell = function Cell(_ref) {\n  var value = _ref.value,\n      columnIndex = _ref.columnIndex,\n      play = _ref.play;\n  var color = 'empty';\n\n  if (value === 1) {\n    color = 'red';\n  } else if (value === 2) {\n    color = 'yellow';\n  }\n\n  return React.createElement(\"td\", null, React.createElement(\"div\", {\n    className: \"cell\",\n    onClick: function onClick() {\n      play(columnIndex);\n    }\n  }, React.createElement(\"div\", {\n    className: color\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ2VsbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ2VsbC5qc3g/YjMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDZWxsID0gKHsgdmFsdWUsIGNvbHVtbkluZGV4LCBwbGF5IH0pID0+IHtcbiAgdmFyIGNvbG9yID0gJ2VtcHR5JztcbiAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgY29sb3IgPSAncmVkJztcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMikge1xuICAgIGNvbG9yID0gJ3llbGxvdyc7XG4gIH1cbiAgICBcbiAgcmV0dXJuIChcbiAgICA8dGQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIiBvbkNsaWNrPXsoKSA9PiB7cGxheShjb2x1bW5JbmRleCl9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbG9yfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/Cell.jsx\n");

/***/ }),

/***/ "./client/src/components/Row.jsx":
/*!***************************************!*\
  !*** ./client/src/components/Row.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell.jsx */ \"./client/src/components/Cell.jsx\");\n\n\nvar Row = function Row(_ref) {\n  var row = _ref.row,\n      play = _ref.play;\n  return React.createElement(\"tr\", null, row.map(function (cell, i) {\n    return React.createElement(_Cell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: i,\n      value: cell,\n      columnIndex: i,\n      play: play\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUm93LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Sb3cuanN4P2Y3Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGwgZnJvbSAnLi9DZWxsLmpzeCc7XG5cbmNvbnN0IFJvdyA9ICh7IHJvdywgcGxheSB9KSA9PiAoXG4gICAgPHRyPlxuICAgICAge3Jvdy5tYXAoKGNlbGwsIGkpID0+IDxDZWxsIGtleT17aX0gdmFsdWU9e2NlbGx9IGNvbHVtbkluZGV4PXtpfSBwbGF5PXtwbGF5fSAvPil9XG4gICAgPC90cj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Row.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });