webpackJsonp([20],{

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Subheader = __webpack_require__(1239);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Subheader2.default;

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var verticalPosition = props.verticalPosition;
  var horizontalPosition = props.horizontalPosition;
  var touchMarginOffset = props.touch ? 10 : 0;
  var touchOffsetTop = props.touch ? -20 : -10;
  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      zIndex = _context$muiTheme.zIndex,
      tooltip = _context$muiTheme.tooltip,
      borderRadius = _context$muiTheme.borderRadius;


  var styles = {
    root: {
      position: 'absolute',
      fontFamily: baseTheme.fontFamily,
      fontSize: '10px',
      lineHeight: '22px',
      padding: '0 8px',
      zIndex: zIndex.tooltip,
      color: tooltip.color,
      overflow: 'hidden',
      top: -10000,
      borderRadius: borderRadius,
      userSelect: 'none',
      opacity: 0,
      right: horizontalPosition === 'left' ? 12 : null,
      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    label: {
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    ripple: {
      position: 'absolute',
      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
      top: verticalPosition === 'bottom' ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    },
    rootWhenShown: {
      top: verticalPosition === 'top' ? touchOffsetTop : 36,
      opacity: 0.9,
      transform: 'translate(0px, ' + offset + 'px)',
      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    rootWhenTouched: {
      fontSize: '14px',
      lineHeight: '32px',
      padding: '0 16px'
    },
    rippleWhenShown: {
      backgroundColor: tooltip.rippleBackgroundColor,
      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    }
  };

  return styles;
}

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetWidth: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setRippleSize();
      this.setTooltipPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setTooltipPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setRippleSize();
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var ripple = this.refs.ripple;
      var tooltip = this.refs.tooltip;
      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
      if (this.props.show) {
        ripple.style.height = rippleDiameter + 'px';
        ripple.style.width = rippleDiameter + 'px';
      } else {
        ripple.style.width = '0px';
        ripple.style.height = '0px';
      }
    }
  }, {
    key: 'setTooltipPosition',
    value: function setTooltipPosition() {
      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          horizontalPosition = _props.horizontalPosition,
          label = _props.label,
          show = _props.show,
          touch = _props.touch,
          verticalPosition = _props.verticalPosition,
          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: 'tooltip',
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
        }),
        _react2.default.createElement('div', {
          ref: 'ripple',
          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
        }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          label
        )
      );
    }
  }]);
  return Tooltip;
}(_react.Component);

Tooltip.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? Tooltip.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  horizontalPosition: _propTypes2.default.oneOf(['left', 'right', 'center']),
  label: _propTypes2.default.node.isRequired,
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  touch: _propTypes2.default.bool,
  verticalPosition: _propTypes2.default.oneOf(['top', 'bottom'])
} : void 0;
exports.default = Tooltip;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Divider = __webpack_require__(1245);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var color = props.color,
      hoverColor = props.hoverColor;
  var baseTheme = context.muiTheme.baseTheme;

  var offColor = color || baseTheme.palette.textColor;
  var onColor = hoverColor || offColor;

  return {
    root: {
      color: state.hovered ? onColor : offColor,
      position: 'relative',
      fontSize: baseTheme.spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: _transitions2.default.easeOut()
    }
  };
}

var FontIcon = function (_Component) {
  (0, _inherits3.default)(FontIcon, _Component);

  function FontIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FontIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FontIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hoverColor = _props.hoverColor,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
      }));
    }
  }]);
  return FontIcon;
}(_react.Component);

FontIcon.muiName = 'FontIcon';
FontIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};
FontIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? FontIcon.propTypes = {
  /**
   * This is the font color of the font icon. If not specified,
   * this component will default to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = FontIcon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(802);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

var clickAwayEvents = ['mouseup', 'touchend'];
var bind = function bind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.on(document, event, callback);
  });
};
var unbind = function unbind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.off(document, event, callback);
  });
};

var ClickAwayListener = function (_Component) {
  (0, _inherits3.default)(ClickAwayListener, _Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (_this.isCurrentlyMounted) {
        var el = _reactDom2.default.findDOMNode(_this);

        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClickAwayListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isCurrentlyMounted = true;
      if (this.props.onClickAway) {
        bind(this.handleClickAway);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.onClickAway !== this.props.onClickAway) {
        unbind(this.handleClickAway);
        if (this.props.onClickAway) {
          bind(this.handleClickAway);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isCurrentlyMounted = false;
      unbind(this.handleClickAway);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ClickAwayListener;
}(_react.Component);

process.env.NODE_ENV !== "production" ? ClickAwayListener.propTypes = {
  children: _propTypes2.default.element,
  onClickAway: _propTypes2.default.func
} : void 0;
exports.default = ClickAwayListener;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Avatar = __webpack_require__(1244);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(771);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _colorManipulator = __webpack_require__(77);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedButton = __webpack_require__(793);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _IconButton = __webpack_require__(925);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _expandLess = __webpack_require__(1241);

var _expandLess2 = _interopRequireDefault(_expandLess);

var _expandMore = __webpack_require__(1233);

var _expandMore2 = _interopRequireDefault(_expandMore);

var _NestedList = __webpack_require__(1235);

var _NestedList2 = _interopRequireDefault(_NestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var insetChildren = props.insetChildren,
      leftAvatar = props.leftAvatar,
      leftCheckbox = props.leftCheckbox,
      leftIcon = props.leftIcon,
      nestedLevel = props.nestedLevel,
      rightAvatar = props.rightAvatar,
      rightIcon = props.rightIcon,
      rightIconButton = props.rightIconButton,
      rightToggle = props.rightToggle,
      secondaryText = props.secondaryText,
      secondaryTextLines = props.secondaryTextLines;
  var muiTheme = context.muiTheme;
  var listItem = muiTheme.listItem;


  var textColor = muiTheme.baseTheme.palette.textColor;
  var hoverColor = props.hoverColor || (0, _colorManipulator.fade)(textColor, 0.1);
  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
  var twoLine = secondaryText && secondaryTextLines === 1;
  var threeLine = secondaryText && secondaryTextLines > 1;

  var isKeyboardFocused = (props.isKeyboardFocused !== undefined ? props : state).isKeyboardFocused;

  var styles = {
    root: {
      backgroundColor: (isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
      color: textColor,
      display: 'block',
      fontSize: 16,
      lineHeight: '16px',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },

    // This inner div is needed so that ripples will span the entire container
    innerDiv: {
      marginLeft: nestedLevel * listItem.nestedLevelDepth,
      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
      paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
      paddingBottom: singleAvatar ? 20 : 16,
      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
      position: 'relative'
    },

    icons: {
      height: 24,
      width: 24,
      display: 'block',
      position: 'absolute',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      margin: 12
    },

    leftIcon: {
      left: 4
    },

    rightIcon: {
      right: 4
    },

    avatars: {
      position: 'absolute',
      top: singleAvatar ? 8 : 16
    },

    label: {
      cursor: 'pointer'
    },

    leftAvatar: {
      left: 16
    },

    rightAvatar: {
      right: 16
    },

    leftCheckbox: {
      position: 'absolute',
      display: 'block',
      width: 24,
      top: twoLine ? 24 : singleAvatar ? 16 : 12,
      left: 16
    },

    primaryText: {},

    rightIconButton: {
      position: 'absolute',
      display: 'block',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      right: 4
    },

    rightToggle: {
      position: 'absolute',
      display: 'block',
      width: 54,
      top: twoLine ? 25 : singleAvatar ? 17 : 13,
      right: 8
    },

    secondaryText: {
      fontSize: 14,
      lineHeight: threeLine ? '18px' : '16px',
      height: threeLine ? 36 : 16,
      margin: 0,
      marginTop: 4,
      color: listItem.secondaryTextColor,

      // needed for 2 and 3 line ellipsis
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: threeLine ? null : 'nowrap',
      display: threeLine ? '-webkit-box' : null,
      WebkitLineClamp: threeLine ? 2 : null,
      WebkitBoxOrient: threeLine ? 'vertical' : null
    }
  };

  return styles;
}

var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      open: false,
      rightIconButtonHovered: false,
      rightIconButtonKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleNestedListToggle = function (event) {
      event.stopPropagation();

      if (_this.props.open === null) {
        _this.setState({ open: !_this.state.open }, function () {
          _this.props.onNestedListToggle(_this);
        });
      } else {
        // Exposing `this` in the callback is quite a bad API.
        // I'm doing a one level deep clone to expose a fake state.open.
        _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
          state: {
            open: !_this.state.open
          }
        }));
      }
    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
      if (isKeyboardFocused) {
        _this.setState({
          isKeyboardFocused: false,
          rightIconButtonKeyboardFocused: isKeyboardFocused
        });
      }

      var iconButton = _this.props.rightIconButton;

      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleRightIconButtonMouseLeave = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: false });
      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
    }, _this.handleRightIconButtonMouseEnter = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: true });
      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
    }, _this.handleRightIconButtonMouseUp = function (event) {
      var iconButton = _this.props.rightIconButton;
      event.stopPropagation();
      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
    }, _this.handleRightIconButtonTouchTap = function (event) {
      var iconButton = _this.props.rightIconButton;

      // Stop the event from bubbling up to the list-item
      event.stopPropagation();
      if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _this.handleTouchEnd = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchEnd(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state when the component is controlled.
      if (nextProps.open !== null) this.setState({ open: nextProps.open });
      if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }

    // This method is needed by the `MenuItem` component.

  }, {
    key: 'applyFocusState',
    value: function applyFocusState(focusState) {
      if (this.button) {
        var buttonEl = _reactDom2.default.findDOMNode(this.button);

        switch (focusState) {
          case 'none':
            buttonEl.blur();
            break;
          case 'focused':
            buttonEl.focus();
            break;
          case 'keyboard-focused':
            this.button.setKeyboardFocus();
            buttonEl.focus();
            break;
        }
      }
    }
  }, {
    key: 'createDisabledElement',
    value: function createDisabledElement(styles, contentChildren, additionalProps) {
      var _props = this.props,
          innerDivStyle = _props.innerDivStyle,
          style = _props.style;


      var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, additionalProps, {
          style: this.context.muiTheme.prepareStyles(mergedDivStyles)
        }),
        contentChildren
      );
    }
  }, {
    key: 'createLabelElement',
    value: function createLabelElement(styles, contentChildren, additionalProps) {
      var _props2 = this.props,
          innerDivStyle = _props2.innerDivStyle,
          style = _props2.style;


      var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);

      return _react2.default.createElement(
        'label',
        (0, _extends3.default)({}, additionalProps, {
          style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
        }),
        contentChildren
      );
    }
  }, {
    key: 'createTextElement',
    value: function createTextElement(styles, data, key) {
      var prepareStyles = this.context.muiTheme.prepareStyles;

      if (_react2.default.isValidElement(data)) {
        var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
        if (typeof data.type === 'string') {
          // if element is a native dom node
          style = prepareStyles(style);
        }
        return _react2.default.cloneElement(data, {
          key: key,
          style: style
        });
      }

      return _react2.default.createElement(
        'div',
        { key: key, style: prepareStyles(styles) },
        data
      );
    }
  }, {
    key: 'pushElement',
    value: function pushElement(children, element, baseStyles, additionalProps) {
      if (element) {
        var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
        children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
          key: children.length,
          style: styles
        }, additionalProps)));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
          children = _props3.children,
          containerElement = _props3.containerElement,
          disabled = _props3.disabled,
          disableKeyboardFocus = _props3.disableKeyboardFocus,
          hoverColor = _props3.hoverColor,
          initiallyOpen = _props3.initiallyOpen,
          innerDivStyle = _props3.innerDivStyle,
          insetChildren = _props3.insetChildren,
          leftAvatar = _props3.leftAvatar,
          leftCheckbox = _props3.leftCheckbox,
          leftIcon = _props3.leftIcon,
          nestedItems = _props3.nestedItems,
          nestedLevel = _props3.nestedLevel,
          nestedListStyle = _props3.nestedListStyle,
          onKeyboardFocus = _props3.onKeyboardFocus,
          isKeyboardFocused = _props3.isKeyboardFocused,
          onMouseEnter = _props3.onMouseEnter,
          onMouseLeave = _props3.onMouseLeave,
          onNestedListToggle = _props3.onNestedListToggle,
          onTouchStart = _props3.onTouchStart,
          onTouchTap = _props3.onTouchTap,
          rightAvatar = _props3.rightAvatar,
          rightIcon = _props3.rightIcon,
          rightIconButton = _props3.rightIconButton,
          rightToggle = _props3.rightToggle,
          primaryText = _props3.primaryText,
          primaryTogglesNestedList = _props3.primaryTogglesNestedList,
          secondaryText = _props3.secondaryText,
          secondaryTextLines = _props3.secondaryTextLines,
          style = _props3.style,
          other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'isKeyboardFocused', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var contentChildren = [children];

      if (leftIcon) {
        var additionalProps = {
          color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
        };
        this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
      }

      if (rightIcon) {
        var _additionalProps = {
          color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
        };
        this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
      }

      if (leftAvatar) {
        this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
      }

      if (rightAvatar) {
        this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
      }

      if (leftCheckbox) {
        this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
      }

      // RightIconButtonElement
      var hasNestListItems = nestedItems.length;
      var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
      var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

      if (rightIconButton || needsNestedIndicator) {
        var rightIconButtonElement = rightIconButton;
        var rightIconButtonHandlers = {
          onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
          onMouseEnter: this.handleRightIconButtonMouseEnter,
          onMouseLeave: this.handleRightIconButtonMouseLeave,
          onTouchTap: this.handleRightIconButtonTouchTap,
          onMouseDown: this.handleRightIconButtonMouseUp,
          onMouseUp: this.handleRightIconButtonMouseUp
        };

        // Create a nested list indicator icon if we don't have an icon on the right
        if (needsNestedIndicator) {
          rightIconButtonElement = this.state.open ? _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_expandLess2.default, null)
          ) : _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_expandMore2.default, null)
          );
          rightIconButtonHandlers.onTouchTap = this.handleNestedListToggle;
        }

        this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
      }

      if (rightToggle) {
        this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
      }

      if (primaryText) {
        var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
        contentChildren.push(primaryTextElement);
      }

      if (secondaryText) {
        var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
        contentChildren.push(secondaryTextElement);
      }

      var nestedList = nestedItems.length ? _react2.default.createElement(
        _NestedList2.default,
        { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
        nestedItems
      ) : undefined;

      var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);

      return _react2.default.createElement(
        'div',
        null,
        simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({
            containerElement: containerElement
          }, other, {
            disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
            onKeyboardFocus: this.handleKeyboardFocus,
            onMouseLeave: this.handleMouseLeave,
            onMouseEnter: this.handleMouseEnter,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd,
            onTouchTap: primaryTogglesNestedList ? this.handleNestedListToggle : onTouchTap,
            ref: function ref(node) {
              return _this2.button = node;
            },
            style: (0, _simpleAssign2.default)({}, styles.root, style)
          }),
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
            contentChildren
          )
        ),
        nestedList
      );
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem.muiName = 'ListItem';
ListItem.defaultProps = {
  autoGenerateNestedIndicator: true,
  containerElement: 'span',
  disableKeyboardFocus: false,
  disabled: false,
  initiallyOpen: false,
  insetChildren: false,
  nestedItems: [],
  nestedLevel: 0,
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onNestedListToggle: function onNestedListToggle() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {},
  open: null,
  primaryTogglesNestedList: false,
  secondaryTextLines: 1
};
ListItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  /**
   * If true, generate a nested-list-indicator icon when nested list
   * items are detected. Note that an indicator will not be created
   * if a `rightIcon` or `rightIconButton` has been provided to
   * the element.
   */
  autoGenerateNestedIndicator: _propTypes2.default.bool,
  /**
   * Children passed into the `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * The element to use as the container for the ListItem. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * ListItem in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element will not be able to be focused by the keyboard.
   */
  disableKeyboardFocus: _propTypes2.default.bool,
  /**
   * If true, the element will not be clickable
   * and will not display hover effects.
   * This is automatically disabled if either `leftCheckbox`
   * or `rightToggle` is set.
   */
  disabled: _propTypes2.default.bool,
  /**
  * Override the hover background color.
  */
  hoverColor: _propTypes2.default.string,
  /**
   * If true, the nested `ListItem`s are initially displayed.
   */
  initiallyOpen: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the inner div element.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented by 72px.
   * This is useful if there is no left avatar or left icon.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * Use to control if the list item should render as keyboard focused.  If
   * undefined (default), this will be automatically managed.  If provided,
   * it will change the components style.  Note that this will not change the
   * actual focus - and should only be used when you want to simulate
   * keyboard focus (eg. in a rich text input autocomplete).
   */
  isKeyboardFocused: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the left side.
   */
  leftAvatar: _propTypes2.default.element,
  /**
   * This is the `Checkbox` element to be displayed on the left side.
   */
  leftCheckbox: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * An array of `ListItem`s to nest underneath the current `ListItem`.
   */
  nestedItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * Controls how deep a `ListItem` appears.
   * This property is automatically managed, so modify at your own risk.
   */
  nestedLevel: _propTypes2.default.number,
  /**
   * Override the inline-styles of the nested items' `NestedList`.
   */
  nestedListStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Callbak function fired when the `ListItem` toggles its nested list.
   *
   * @param {object} listItem The `ListItem`.
   */
  onNestedListToggle: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /** @ignore */
  onTouchTap: _propTypes2.default.func,
  /**
   * Control toggle state of nested list.
   */
  open: _propTypes2.default.bool,
  /**
   * This is the block element that contains the primary text.
   * If a string is passed in, a div tag will be rendered.
   */
  primaryText: _propTypes2.default.node,
  /**
   * If true, clicking or tapping the primary text of the `ListItem`
   * toggles the nested list.
   */
  primaryTogglesNestedList: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the right side.
   */
  rightAvatar: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * This is the `IconButton` to be displayed on the right side.
   * Hovering over this button will remove the `ListItem` hover.
   * Also, clicking on this button will not trigger a
   * ripple on the `ListItem`; the event will be stopped and prevented
   * from bubbling up to cause a `ListItem` click.
   */
  rightIconButton: _propTypes2.default.element,
  /**
   * This is the `Toggle` element to display on the right side.
   */
  rightToggle: _propTypes2.default.element,
  /**
   * This is the block element that contains the secondary text.
   * If a string is passed in, a div tag will be rendered.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Can be 1 or 2. This is the number of secondary
   * text lines before ellipsis will show.
   */
  secondaryTextLines: _propTypes2.default.oneOf([1, 2]),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = ListItem;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(844);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(792);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__(819);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(821);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = __webpack_require__(791);

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      overflow: 'visible',
      display: 'table',
      height: 'auto',
      width: '100%'
    },
    input: {
      position: 'absolute',
      cursor: 'inherit',
      pointerEvents: 'all',
      opacity: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      left: 0,
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    controls: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    label: {
      float: 'left',
      position: 'relative',
      display: 'block',
      width: 'calc(100% - 60px)',
      lineHeight: '24px',
      color: baseTheme.palette.textColor,
      fontFamily: baseTheme.fontFamily
    },
    wrap: {
      transition: _transitions2.default.easeOut(),
      float: 'left',
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 60 - baseTheme.spacing.desktopGutterLess,
      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
    },
    ripple: {
      color: props.rippleColor || baseTheme.palette.primary1Color,
      height: '200%',
      width: '200%',
      top: -12,
      left: -12
    }
  };
}

var EnhancedSwitch = function (_Component) {
  (0, _inherits3.default)(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedSwitch.__proto__ || (0, _getPrototypeOf2.default)(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleChange = function (event) {
      _this.tabPressed = false;
      _this.setState({
        isKeyboardFocused: false
      });

      var isInputChecked = _this.refs.checkbox.checked;

      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
        _this.props.onParentShouldUpdate(isInputChecked);
      }

      if (_this.props.onSwitch) {
        _this.props.onSwitch(event, isInputChecked);
      }
    }, _this.handleKeyDown = function (event) {
      var code = (0, _keycode2.default)(event);

      if (code === 'tab') {
        _this.tabPressed = true;
      }
      if (_this.state.isKeyboardFocused && code === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.refs.touchRipple.start(event);
      }
    }, _this.handleMouseUp = function () {
      _this.refs.touchRipple.end();
    }, _this.handleMouseLeave = function () {
      _this.refs.touchRipple.end();
    }, _this.handleTouchStart = function (event) {
      _this.refs.touchRipple.start(event);
    }, _this.handleTouchEnd = function () {
      _this.refs.touchRipple.end();
    }, _this.handleBlur = function (event) {
      _this.setState({
        isKeyboardFocused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      // setTimeout is needed becuase the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
      setTimeout(function () {
        if (_this.tabPressed) {
          _this.setState({
            isKeyboardFocused: true
          });
        }
      }, 150);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedSwitch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var inputNode = this.refs.checkbox;
      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
        this.props.onParentShouldUpdate(inputNode.checked);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasCheckedProp = nextProps.hasOwnProperty('checked');
      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

      if (hasCheckedProp || hasNewDefaultProp) {
        var switched = nextProps.checked || nextProps.defaultChecked || false;

        this.setState({
          switched: switched
        });

        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
          this.props.onParentShouldUpdate(switched);
        }
      }
    }
  }, {
    key: 'isSwitched',
    value: function isSwitched() {
      return this.refs.checkbox.checked;
    }

    // no callback here because there is no event

  }, {
    key: 'setSwitched',
    value: function setSwitched(newSwitchedValue) {
      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
        if (this.props.onParentShouldUpdate) {
          this.props.onParentShouldUpdate(newSwitchedValue);
        }
        this.refs.checkbox.checked = newSwitchedValue;
      } else {
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.') : void 0;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.checkbox.value;
    }

    // Checkbox inputs only use SPACE to change their state. Using ENTER will
    // update the ui but not the input.


    /**
     * Because both the ripples and the checkbox input cannot share pointer
     * events, the checkbox input takes control of pointer events and calls
     * ripple animations manually.
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          iconStyle = _props.iconStyle,
          inputStyle = _props.inputStyle,
          inputType = _props.inputType,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onSwitch = _props.onSwitch,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onParentShouldUpdate = _props.onParentShouldUpdate,
          disabled = _props.disabled,
          disableTouchRipple = _props.disableTouchRipple,
          disableFocusRipple = _props.disableFocusRipple,
          className = _props.className,
          rippleColor = _props.rippleColor,
          rippleStyle = _props.rippleStyle,
          style = _props.style,
          switched = _props.switched,
          switchElement = _props.switchElement,
          thumbStyle = _props.thumbStyle,
          trackStyle = _props.trackStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var wrapStyles = (0, _simpleAssign2.default)(styles.wrap, iconStyle);
      var mergedRippleStyle = (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

      if (thumbStyle) {
        wrapStyles.marginLeft /= 2;
        wrapStyles.marginRight /= 2;
      }

      var labelElement = label && _react2.default.createElement(
        'label',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
        label
      );

      var showTouchRipple = !disabled && !disableTouchRipple;
      var showFocusRipple = !disabled && !disableFocusRipple;

      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
        ref: 'touchRipple',
        key: 'touchRipple',
        style: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        centerRipple: true
      });

      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
        key: 'focusRipple',
        innerStyle: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        show: this.state.isKeyboardFocused
      });

      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

      var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
        ref: 'checkbox',
        type: inputType,
        style: prepareStyles((0, _simpleAssign2.default)(styles.input, inputStyle)),
        name: name,
        value: value,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onMouseUp: showTouchRipple && this.handleMouseUp,
        onMouseDown: showTouchRipple && this.handleMouseDown,
        onMouseLeave: showTouchRipple && this.handleMouseLeave,
        onTouchStart: showTouchRipple && this.handleTouchStart,
        onTouchEnd: showTouchRipple && this.handleTouchEnd
      }));

      // If toggle component (indicated by whether the style includes thumb) manually lay out
      // elements in order to nest ripple elements
      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        switchElement,
        ripples
      ) : _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, trackStyle)) }),
        _react2.default.createElement(
          _Paper2.default,
          { style: thumbStyle, zDepth: 1, circle: true },
          ' ',
          ripples,
          ' '
        )
      );

      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
        'div',
        { style: styles.controls },
        switchOrThumbElement,
        labelElement
      ) : _react2.default.createElement(
        'div',
        { style: styles.controls },
        labelElement,
        switchOrThumbElement
      );

      return _react2.default.createElement(
        'div',
        { ref: 'root', className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp
        }),
        inputElement,
        elementsInOrder
      );
    }
  }]);
  return EnhancedSwitch;
}(_react.Component);

EnhancedSwitch.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? EnhancedSwitch.propTypes = {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  disableFocusRipple: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  iconStyle: _propTypes2.default.object,
  inputStyle: _propTypes2.default.object,
  inputType: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node,
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  labelStyle: _propTypes2.default.object,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onParentShouldUpdate: _propTypes2.default.func,
  onSwitch: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  rippleColor: _propTypes2.default.string,
  rippleStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  switchElement: _propTypes2.default.element.isRequired,
  switched: _propTypes2.default.bool.isRequired,
  thumbStyle: _propTypes2.default.object,
  trackStyle: _propTypes2.default.object,
  value: _propTypes2.default.any
} : void 0;
exports.default = EnhancedSwitch;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _dom = __webpack_require__(820);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
var RenderToLayer = function (_Component) {
  (0, _inherits3.default)(RenderToLayer, _Component);

  function RenderToLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RenderToLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      if (!_this.props.componentClickAway) {
        return;
      }

      if (!_this.props.open) {
        return;
      }

      var el = _this.layer;
      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
        _this.props.componentClickAway(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RenderToLayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderLayer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderLayer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unrenderLayer();
    }
  }, {
    key: 'getLayer',
    value: function getLayer() {
      return this.layer;
    }
  }, {
    key: 'unrenderLayer',
    value: function unrenderLayer() {
      if (!this.layer) {
        return;
      }

      if (this.props.useLayerForClickAway) {
        this.layer.style.position = 'relative';
        this.layer.removeEventListener('touchstart', this.onClickAway);
        this.layer.removeEventListener('click', this.onClickAway);
      } else {
        window.removeEventListener('touchstart', this.onClickAway);
        window.removeEventListener('click', this.onClickAway);
      }

      (0, _reactDom.unmountComponentAtNode)(this.layer);
      document.body.removeChild(this.layer);
      this.layer = null;
    }

    /**
     * By calling this method in componentDidMount() and
     * componentDidUpdate(), you're effectively creating a "wormhole" that
     * funnels React's hierarchical updates through to a DOM node on an
     * entirely different part of the page.
     */

  }, {
    key: 'renderLayer',
    value: function renderLayer() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          render = _props.render;


      if (open) {
        if (!this.layer) {
          this.layer = document.createElement('div');
          document.body.appendChild(this.layer);

          if (this.props.useLayerForClickAway) {
            this.layer.addEventListener('touchstart', this.onClickAway);
            this.layer.addEventListener('click', this.onClickAway);
            this.layer.style.position = 'fixed';
            this.layer.style.top = 0;
            this.layer.style.bottom = 0;
            this.layer.style.left = 0;
            this.layer.style.right = 0;
            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
          } else {
            setTimeout(function () {
              window.addEventListener('touchstart', _this2.onClickAway);
              window.addEventListener('click', _this2.onClickAway);
            }, 0);
          }
        }

        var layerElement = render();
        this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
      } else {
        this.unrenderLayer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return RenderToLayer;
}(_react.Component);

RenderToLayer.defaultProps = {
  useLayerForClickAway: true
};
RenderToLayer.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? RenderToLayer.propTypes = {
  componentClickAway: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  render: _propTypes2.default.func.isRequired,
  useLayerForClickAway: _propTypes2.default.bool
} : void 0;
exports.default = RenderToLayer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandMore = function NavigationExpandMore(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
  );
};
NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
NavigationExpandMore.displayName = 'NavigationExpandMore';
NavigationExpandMore.muiName = 'SvgIcon';

exports.default = NavigationExpandMore;

/***/ }),

/***/ 1234:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(943);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedList = function NestedList(props) {
  var children = props.children,
      open = props.open,
      nestedLevel = props.nestedLevel,
      style = props.style;


  if (!open) {
    return null;
  }

  return _react2.default.createElement(
    _List2.default,
    { style: style },
    _react.Children.map(children, function (child) {
      return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
        nestedLevel: nestedLevel + 1
      }) : child;
    })
  );
};

process.env.NODE_ENV !== "production" ? NestedList.propTypes = {
  children: _propTypes2.default.node,
  nestedLevel: _propTypes2.default.number.isRequired,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

exports.default = NestedList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;

var _List2 = __webpack_require__(943);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(1230);

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _makeSelectable2 = __webpack_require__(1479);

var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.makeSelectable = _makeSelectable3.default;
exports.default = _List3.default;

/***/ }),

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HotKeyHolder = undefined;

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HotKeyHolder = exports.HotKeyHolder = function () {
  function HotKeyHolder() {
    var _this = this;

    (0, _classCallCheck3.default)(this, HotKeyHolder);

    this.clear = function () {
      _this.timerId = null;
      _this.lastKeys = null;
    };
  }

  (0, _createClass3.default)(HotKeyHolder, [{
    key: 'append',
    value: function append(key) {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(this.clear, 500);
      return this.lastKeys = (this.lastKeys || '') + key;
    }
  }]);
  return HotKeyHolder;
}();

/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(778);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(791);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
      maxHeight: '100%'
    },
    horizontal: {
      maxHeight: '100%',
      overflowY: 'auto',
      transform: open ? 'scaleX(1)' : 'scaleX(0)',
      opacity: open ? 1 : 0,
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
    },
    vertical: {
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
    }
  };
}

var PopoverAnimationDefault = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationDefault, _Component);

  function PopoverAnimationDefault() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationDefault);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationDefault.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationDefault)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PopoverAnimationDefault, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: zDepth,
          className: className
        },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.horizontal) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.vertical) },
            this.props.children
          )
        )
      );
    }
  }]);
  return PopoverAnimationDefault;
}(_react.Component);

PopoverAnimationDefault.defaultProps = {
  style: {},
  zDepth: 1
};
PopoverAnimationDefault.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? PopoverAnimationDefault.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
} : void 0;
exports.default = PopoverAnimationDefault;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subheader = function Subheader(props, context) {
  var children = props.children,
      inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      prepareStyles = _context$muiTheme.prepareStyles,
      subheader = _context$muiTheme.subheader;


  var styles = {
    root: {
      boxSizing: 'border-box',
      color: subheader.color,
      fontSize: 14,
      fontWeight: subheader.fontWeight,
      lineHeight: '48px',
      paddingLeft: inset ? 72 : 16,
      width: '100%'
    }
  };

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
    children
  );
};

Subheader.muiName = 'Subheader';

process.env.NODE_ENV !== "production" ? Subheader.propTypes = {
  /**
   * Node that will be placed inside the `Subheader`.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the `Subheader` will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

Subheader.defaultProps = {
  inset: false
};

Subheader.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = Subheader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationCheck = function NavigationCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
  );
};
NavigationCheck = (0, _pure2.default)(NavigationCheck);
NavigationCheck.displayName = 'NavigationCheck';
NavigationCheck.muiName = 'SvgIcon';

exports.default = NavigationCheck;

/***/ }),

/***/ 1241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandLess = function NavigationExpandLess(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
  );
};
NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
NavigationExpandLess.displayName = 'NavigationExpandLess';
NavigationExpandLess.muiName = 'SvgIcon';

exports.default = NavigationExpandLess;

/***/ }),

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Returns a number of pixels from the top of the screen for given dom element.
*
* @param {object} dom element
* @returns {number} A position from the top of the screen in pixels
*/
var getOffsetTop = exports.getOffsetTop = function getOffsetTop(elem) {
  var yPos = elem.offsetTop;
  var tempEl = elem.offsetParent;

  while (tempEl != null) {
    yPos += tempEl.offsetTop;
    tempEl = tempEl.offsetParent;
  }

  return yPos;
};

var isIOS = exports.isIOS = function isIOS() {
  return (/iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
  );
};

/***/ }),

/***/ 1243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.IconMenu = undefined;

var _IconMenu2 = __webpack_require__(1246);

var _IconMenu3 = _interopRequireDefault(_IconMenu2);

var _MenuItem2 = __webpack_require__(944);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IconMenu = _IconMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _IconMenu3.default;

/***/ }),

/***/ 1244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var backgroundColor = props.backgroundColor,
      color = props.color,
      size = props.size;
  var avatar = context.muiTheme.avatar;


  var styles = {
    root: {
      color: color || avatar.color,
      backgroundColor: backgroundColor || avatar.backgroundColor,
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 2,
      borderRadius: '50%',
      height: size,
      width: size
    },
    icon: {
      color: color || avatar.color,
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2
    }
  };

  return styles;
}

var Avatar = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          icon = _props.icon,
          src = _props.src,
          style = _props.style,
          className = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'icon', 'src', 'style', 'className']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      if (src) {
        return _react2.default.createElement('img', (0, _extends3.default)({
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, other, {
          src: src,
          className: className
        }));
      } else {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, {
            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
            className: className
          }),
          icon && _react2.default.cloneElement(icon, {
            color: styles.icon.color,
            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
          }),
          this.props.children
        );
      }
    }
  }]);
  return Avatar;
}(_react.Component);

Avatar.muiName = 'Avatar';
Avatar.defaultProps = {
  size: 40
};
Avatar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? Avatar.propTypes = {
  /**
   * The backgroundColor of the avatar. Does not apply to image avatars.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root `div` or `img` element.
   */
  className: _propTypes2.default.string,
  /**
   * The icon or letter's color.
   */
  color: _propTypes2.default.string,
  /**
   * This is the SvgIcon or FontIcon to be used inside the avatar.
   */
  icon: _propTypes2.default.element,
  /**
   * This is the size of the avatar in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
   */
  src: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Avatar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(props, context) {
  var inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      prepareStyles = _context$muiTheme.prepareStyles;


  var styles = {
    root: {
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: baseTheme.palette.borderColor
    }
  };

  return _react2.default.createElement('hr', (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }));
};

Divider.muiName = 'Divider';

process.env.NODE_ENV !== "production" ? Divider.propTypes = {
  /**
   * If true, the `Divider` will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

Divider.defaultProps = {
  inset: false
};

Divider.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = Divider;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(802);

var _events2 = _interopRequireDefault(_events);

var _propTypes3 = __webpack_require__(778);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Menu = __webpack_require__(926);

var _Menu2 = _interopRequireDefault(_Menu);

var _Popover = __webpack_require__(927);

var _Popover2 = _interopRequireDefault(_Popover);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconMenu = function (_Component) {
  (0, _inherits3.default)(IconMenu, _Component);

  function IconMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconMenu.__proto__ || (0, _getPrototypeOf2.default)(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuInitiallyKeyboardFocused: false,
      open: false
    }, _this.handleItemTouchTap = function (event, child) {
      if (_this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
        var isKeyboard = _events2.default.isKeyboard(event);
        _this.timerCloseId = setTimeout(function () {
          _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
        }, _this.props.touchTapCloseDelay);
      }

      _this.props.onItemTouchTap(event, child);
    }, _this.handleRequestClose = function (reason) {
      _this.close(reason);
    }, _this.handleEscKeyDownMenu = function (event) {
      _this.close('escape', event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IconMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open != null) {
        this.setState({
          open: nextProps.open,
          anchorEl: this.refs.iconMenuContainer
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerCloseId);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.state.open;
    }
  }, {
    key: 'close',
    value: function close(reason, isKeyboard) {
      var _this2 = this;

      if (!this.state.open) {
        return;
      }

      if (this.props.open !== null) {
        this.props.onRequestChange(false, reason);
      } else {
        this.setState({ open: false }, function () {
          // Set focus on the icon button when the menu close
          if (isKeyboard) {
            var iconButton = _this2.refs.iconButton;
            _reactDom2.default.findDOMNode(iconButton).focus();
            iconButton.setKeyboardFocus();
          }
        });
      }
    }
  }, {
    key: 'open',
    value: function open(reason, event) {
      if (this.props.open !== null) {
        this.props.onRequestChange(true, reason);

        return this.setState({
          menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
          anchorEl: event.currentTarget
        });
      }

      this.setState({
        open: true,
        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
        anchorEl: event.currentTarget
      });

      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          anchorOrigin = _props.anchorOrigin,
          className = _props.className,
          animated = _props.animated,
          animation = _props.animation,
          iconButtonElement = _props.iconButtonElement,
          iconStyle = _props.iconStyle,
          onItemTouchTap = _props.onItemTouchTap,
          onKeyboardFocus = _props.onKeyboardFocus,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          onMouseUp = _props.onMouseUp,
          onRequestChange = _props.onRequestChange,
          onTouchTap = _props.onTouchTap,
          listStyle = _props.listStyle,
          menuStyle = _props.menuStyle,
          style = _props.style,
          targetOrigin = _props.targetOrigin,
          touchTapCloseDelay = _props.touchTapCloseDelay,
          useLayerForClickAway = _props.useLayerForClickAway,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'className', 'animated', 'animation', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onRequestChange', 'onTouchTap', 'listStyle', 'menuStyle', 'style', 'targetOrigin', 'touchTapCloseDelay', 'useLayerForClickAway']);
      var prepareStyles = this.context.muiTheme.prepareStyles;
      var _state = this.state,
          open = _state.open,
          anchorEl = _state.anchorEl;


      var styles = {
        root: {
          display: 'inline-block',
          position: 'relative'
        },
        menu: {
          position: 'relative'
        }
      };

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedMenuStyles = (0, _simpleAssign2.default)(styles.menu, menuStyle);

      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(iconButtonElement.type.muiName !== 'SvgIcon', 'Material-UI: You shoud not provide an <SvgIcon /> to the \'iconButtonElement\' property of <IconMenu />.\nYou should wrapped it with an <IconButton />.') : void 0;

      var iconButtonProps = {
        onKeyboardFocus: onKeyboardFocus,
        onTouchTap: function onTouchTap(event) {
          _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
          if (iconButtonElement.props.onTouchTap) {
            iconButtonElement.props.onTouchTap(event);
          }
        },
        ref: 'iconButton'
      };
      if (iconStyle || iconButtonElement.props.iconStyle) {
        iconButtonProps.iconStyle = iconStyle ? (0, _simpleAssign2.default)({}, iconStyle, iconButtonElement.props.iconStyle) : iconButtonElement.props.iconStyle;
      }
      var iconButton = _react2.default.cloneElement(iconButtonElement, iconButtonProps);

      var menu = _react2.default.createElement(
        _Menu2.default,
        (0, _extends3.default)({}, other, {
          initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
          onEscKeyDown: this.handleEscKeyDownMenu,
          onItemTouchTap: this.handleItemTouchTap,
          style: mergedMenuStyles,
          listStyle: listStyle
        }),
        this.props.children
      );

      return _react2.default.createElement(
        'div',
        {
          ref: 'iconMenuContainer',
          className: className,
          onMouseDown: onMouseDown,
          onMouseLeave: onMouseLeave,
          onMouseEnter: onMouseEnter,
          onMouseUp: onMouseUp,
          onTouchTap: onTouchTap,
          style: prepareStyles(mergedRootStyles)
        },
        iconButton,
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            open: open,
            anchorEl: anchorEl,
            childContextTypes: this.constructor.childContextTypes,
            useLayerForClickAway: useLayerForClickAway,
            onRequestClose: this.handleRequestClose,
            animated: animated,
            animation: animation,
            context: this.context
          },
          menu
        )
      );
    }
  }]);
  return IconMenu;
}(_react.Component);

IconMenu.muiName = 'IconMenu';
IconMenu.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  animated: true,
  multiple: false,
  open: null,
  onItemTouchTap: function onItemTouchTap() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseDown: function onMouseDown() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseUp: function onMouseUp() {},
  onRequestChange: function onRequestChange() {},
  onTouchTap: function onTouchTap() {},
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  touchTapCloseDelay: 200,
  useLayerForClickAway: false
};
IconMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? IconMenu.propTypes = {
  /**
   * This is the point on the icon where the menu
   * `targetOrigin` will attach.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * Should be used to pass `MenuItem` components.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * This is the `IconButton` to render. This button will open the menu.
   */
  iconButtonElement: _propTypes2.default.element.isRequired,
  /**
   * Override the inline-styles of the underlying icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the menu element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, the value can an be array and allow the menu to be a multi-select.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is selected with a touch-tap.
   *
   * @param {object} event TouchTap event targeting the selected menu item element.
   * @param {object} child The selected element.
   */
  onItemTouchTap: _propTypes2.default.func,
  /**
   * Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /**
   * Callback function fired when the `open` state of the menu is requested to be changed.
   *
   * @param {boolean} open If true, the menu was requested to be opened.
   * @param {string} reason The reason for the open or close request. Possible values are
   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
   * for close requests.
   */
  onRequestChange: _propTypes2.default.func,
  /**
   * Callback function fired when the `IconButton` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the `IconButton` element.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, the `IconMenu` is opened.
   */
  open: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the menu which will stick to the menu
   * origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Sets the delay in milliseconds before closing the
   * menu when an item is clicked.
   * If set to 0 then the auto close functionality
   * will be disabled.
   */
  touchTapCloseDelay: _propTypes2.default.number,
  /**
   * If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying elements.
   */
  useLayerForClickAway: _propTypes2.default.bool
} : void 0;
exports.default = IconMenu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Checkbox = __webpack_require__(1251);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Checkbox2.default;

/***/ }),

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Toggle = __webpack_require__(1258);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Toggle2.default;

/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedSwitch = __webpack_require__(1231);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = __webpack_require__(1262);

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = __webpack_require__(1263);

var _checkBox2 = _interopRequireDefault(_checkBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var checkbox = context.muiTheme.checkbox;

  var checkboxSize = 24;

  return {
    icon: {
      height: checkboxSize,
      width: checkboxSize
    },
    check: {
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0)',
      transitionOrigin: '50% 50%',
      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
      fill: checkbox.checkedColor
    },
    checkWhenSwitched: {
      opacity: 1,
      transform: 'scale(1)',
      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
    },
    checkWhenDisabled: {
      fill: checkbox.disabledColor
    },
    box: {
      position: 'absolute',
      opacity: 1,
      fill: checkbox.boxColor,
      transition: _transitions2.default.easeOut('1000ms', 'opacity', '200ms')
    },
    boxWhenSwitched: {
      opacity: 0,
      transition: _transitions2.default.easeOut('650ms', 'opacity', '150ms'),
      fill: checkbox.checkedColor
    },
    boxWhenDisabled: {
      fill: props.checked ? 'transparent' : checkbox.disabledColor
    },
    label: {
      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
    }
  };
}

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleCheck = function (event, isInputChecked) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          valueLink = _props.valueLink;


      if (checked || defaultChecked || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.checked !== nextProps.checked) {
        this.setState({
          switched: nextProps.checked
        });
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          iconStyle = _props2.iconStyle,
          onCheck = _props2.onCheck,
          checkedIcon = _props2.checkedIcon,
          uncheckedIcon = _props2.uncheckedIcon,
          other = (0, _objectWithoutProperties3.default)(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon']);

      var styles = getStyles(this.props, this.context);
      var boxStyles = (0, _simpleAssign2.default)(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
      var checkStyles = (0, _simpleAssign2.default)(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

      var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
        style: (0, _simpleAssign2.default)(checkStyles, checkedIcon.props.style)
      }) : _react2.default.createElement(_checkBox2.default, {
        style: checkStyles
      });

      var unCheckedElement = uncheckedIcon ? _react2.default.cloneElement(uncheckedIcon, {
        style: (0, _simpleAssign2.default)(boxStyles, uncheckedIcon.props.style)
      }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
        style: boxStyles
      });

      var checkboxElement = _react2.default.createElement(
        'div',
        null,
        unCheckedElement,
        checkedElement
      );

      var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
      var mergedIconStyle = (0, _simpleAssign2.default)(styles.icon, iconStyle);

      var labelStyle = (0, _simpleAssign2.default)(styles.label, this.props.labelStyle);

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switched: this.state.switched,
        switchElement: checkboxElement,
        rippleColor: rippleColor,
        iconStyle: mergedIconStyle,
        onSwitch: this.handleCheck,
        labelStyle: labelStyle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
    }
  }]);
  return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
  labelPosition: 'right',
  disabled: false
};
Checkbox.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  /**
   * Checkbox is checked if true.
   */
  checked: _propTypes2.default.bool,
  /**
   * The SvgIcon to use for the checked state.
   * This is useful to create icon toggles.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * The default state of our checkbox component.
   * **Warning:** This cannot be used in conjunction with `checked`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * Disabled if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Where the label will be placed next to the checkbox.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the checkbox is checked.
   *
   * @param {object} event `change` event targeting the underlying checkbox `input`.
   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The SvgIcon to use for the unchecked state.
   * This is useful to create icon toggles.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * ValueLink for when using controlled checkbox.
   */
  valueLink: _propTypes2.default.object
} : void 0;
exports.default = Checkbox;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = __webpack_require__(791);

var _Paper2 = _interopRequireDefault(_Paper);

var _EnhancedSwitch = __webpack_require__(1231);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var disabled = props.disabled,
      elementStyle = props.elementStyle,
      trackSwitchedStyle = props.trackSwitchedStyle,
      thumbSwitchedStyle = props.thumbSwitchedStyle,
      trackStyle = props.trackStyle,
      thumbStyle = props.thumbStyle,
      iconStyle = props.iconStyle,
      rippleStyle = props.rippleStyle,
      labelStyle = props.labelStyle;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toggle = _context$muiTheme.toggle;


  var toggleSize = 20;
  var toggleTrackWidth = 36;
  var styles = {
    icon: {
      width: 36,
      padding: '4px 0px 6px 2px'
    },
    ripple: {
      top: -10,
      left: -10,
      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
    },
    toggleElement: {
      width: toggleTrackWidth
    },
    track: {
      transition: _transitions2.default.easeOut(),
      width: '100%',
      height: 14,
      borderRadius: 30,
      backgroundColor: toggle.trackOffColor
    },
    thumb: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      top: 1,
      left: 0,
      width: toggleSize,
      height: toggleSize,
      lineHeight: '24px',
      borderRadius: '50%',
      backgroundColor: toggle.thumbOffColor
    },
    trackWhenSwitched: {
      backgroundColor: toggle.trackOnColor
    },
    thumbWhenSwitched: {
      backgroundColor: toggle.thumbOnColor,
      left: '100%'
    },
    trackWhenDisabled: {
      backgroundColor: toggle.trackDisabledColor
    },
    thumbWhenDisabled: {
      backgroundColor: toggle.thumbDisabledColor
    },
    label: {
      color: disabled ? toggle.labelDisabledColor : toggle.labelColor,
      width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
    }
  };

  (0, _simpleAssign2.default)(styles.track, trackStyle, state.switched && styles.trackWhenSwitched, state.switched && trackSwitchedStyle, disabled && styles.trackWhenDisabled);

  (0, _simpleAssign2.default)(styles.thumb, thumbStyle, state.switched && styles.thumbWhenSwitched, state.switched && thumbSwitchedStyle, disabled && styles.thumbWhenDisabled);

  if (state.switched) {
    styles.thumb.marginLeft = 0 - styles.thumb.width;
  }

  (0, _simpleAssign2.default)(styles.icon, iconStyle);

  (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

  (0, _simpleAssign2.default)(styles.label, labelStyle);

  (0, _simpleAssign2.default)(styles.toggleElement, elementStyle);

  return styles;
}

var Toggle = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleToggle = function (event, isInputChecked) {
      if (_this.props.onToggle) {
        _this.props.onToggle(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          toggled = _props.toggled,
          defaultToggled = _props.defaultToggled,
          valueLink = _props.valueLink;


      if (toggled || defaultToggled || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'isToggled',
    value: function isToggled() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setToggled',
    value: function setToggled(newToggledValue) {
      this.refs.enhancedSwitch.setSwitched(newToggledValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          defaultToggled = _props2.defaultToggled,
          elementStyle = _props2.elementStyle,
          onToggle = _props2.onToggle,
          trackSwitchedStyle = _props2.trackSwitchedStyle,
          thumbSwitchedStyle = _props2.thumbSwitchedStyle,
          toggled = _props2.toggled,
          other = (0, _objectWithoutProperties3.default)(_props2, ['defaultToggled', 'elementStyle', 'onToggle', 'trackSwitchedStyle', 'thumbSwitchedStyle', 'toggled']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var toggleElement = _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)({}, styles.toggleElement)) },
        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.track)) }),
        _react2.default.createElement(_Paper2.default, { style: styles.thumb, circle: true, zDepth: 1 })
      );

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switchElement: toggleElement,
        rippleStyle: styles.ripple,
        rippleColor: styles.ripple.color,
        iconStyle: styles.icon,
        trackStyle: styles.track,
        thumbStyle: styles.thumb,
        labelStyle: styles.label,
        switched: this.state.switched,
        onSwitch: this.handleToggle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      if (this.props.hasOwnProperty('toggled')) {
        enhancedSwitchProps.checked = toggled;
      } else if (this.props.hasOwnProperty('defaultToggled')) {
        enhancedSwitchProps.defaultChecked = defaultToggled;
      }

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
    }
  }]);
  return Toggle;
}(_react.Component);

Toggle.defaultProps = {
  defaultToggled: false,
  disabled: false,
  labelPosition: 'left'
};
Toggle.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? Toggle.propTypes = {
  /**
   * Determines whether the Toggle is initially turned on.
   * **Warning:** This cannot be used in conjunction with `toggled`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultToggled: _propTypes2.default.bool,
  /**
   * Will disable the toggle if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the Toggle element.
   */
  elementStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the Icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Label for toggle.
   */
  label: _propTypes2.default.node,
  /**
   * Where the label will be placed next to the toggle.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Toggle element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the toggle switch is toggled.
   *
   * @param {object} event Change event targeting the toggle.
   * @param {bool} isInputChecked The new value of the toggle.
   */
  onToggle: _propTypes2.default.func,
  /**
   * Override style of ripple.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override style for thumb.
   */
  thumbStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for thumb when the toggle switch is toggled on.
  */
  thumbSwitchedStyle: _propTypes2.default.object,
  /**
   * Toggled if set to true.
   */
  toggled: _propTypes2.default.bool,
  /**
   * Override style for track.
   */
  trackStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for track when the toggle switch is toggled on.
  */
  trackSwitchedStyle: _propTypes2.default.object,
  /**
   * ValueLink prop for when using controlled toggle.
   */
  valueLink: _propTypes2.default.object
} : void 0;
exports.default = Toggle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBoxOutlineBlank = function ToggleCheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
  );
};
ToggleCheckBoxOutlineBlank = (0, _pure2.default)(ToggleCheckBoxOutlineBlank);
ToggleCheckBoxOutlineBlank.displayName = 'ToggleCheckBoxOutlineBlank';
ToggleCheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = ToggleCheckBoxOutlineBlank;

/***/ }),

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBox = function ToggleCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};
ToggleCheckBox = (0, _pure2.default)(ToggleCheckBox);
ToggleCheckBox.displayName = 'ToggleCheckBox';
ToggleCheckBox.muiName = 'SvgIcon';

exports.default = ToggleCheckBox;

/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionGrade = function ActionGrade(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' })
  );
};
ActionGrade = (0, _pure2.default)(ActionGrade);
ActionGrade.displayName = 'ActionGrade';
ActionGrade.muiName = 'SvgIcon';

exports.default = ActionGrade;

/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileFolder = function FileFolder(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z' })
  );
};
FileFolder = (0, _pure2.default)(FileFolder);
FileFolder.displayName = 'FileFolder';
FileFolder.muiName = 'SvgIcon';

exports.default = FileFolder;

/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationMoreVert = function NavigationMoreVert(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
  );
};
NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
NavigationMoreVert.displayName = 'NavigationMoreVert';
NavigationMoreVert.muiName = 'SvgIcon';

exports.default = NavigationMoreVert;

/***/ }),

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionInfo = function ActionInfo(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' })
  );
};
ActionInfo = (0, _pure2.default)(ActionInfo);
ActionInfo.displayName = 'ActionInfo';
ActionInfo.muiName = 'SvgIcon';

exports.default = ActionInfo;

/***/ }),

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommunicationChatBubble = function CommunicationChatBubble(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' })
  );
};
CommunicationChatBubble = (0, _pure2.default)(CommunicationChatBubble);
CommunicationChatBubble.displayName = 'CommunicationChatBubble';
CommunicationChatBubble.muiName = 'SvgIcon';

exports.default = CommunicationChatBubble;

/***/ }),

/***/ 1295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentDrafts = function ContentDrafts(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z' })
  );
};
ContentDrafts = (0, _pure2.default)(ContentDrafts);
ContentDrafts.displayName = 'ContentDrafts';
ContentDrafts.muiName = 'SvgIcon';

exports.default = ContentDrafts;

/***/ }),

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentInbox = function ContentInbox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z' })
  );
};
ContentInbox = (0, _pure2.default)(ContentInbox);
ContentInbox.displayName = 'ContentInbox';
ContentInbox.muiName = 'SvgIcon';

exports.default = ContentInbox;

/***/ }),

/***/ 1297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentSend = function ContentSend(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' })
  );
};
ContentSend = (0, _pure2.default)(ContentSend);
ContentSend.displayName = 'ContentSend';
ContentSend.muiName = 'SvgIcon';

exports.default = ContentSend;

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(1227);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = __webpack_require__(1236);

var _Subheader = __webpack_require__(1184);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = __webpack_require__(1219);

var _Divider2 = _interopRequireDefault(_Divider);

var _chatBubble = __webpack_require__(1294);

var _chatBubble2 = _interopRequireDefault(_chatBubble);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ListExampleChat = function ListExampleChat() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Chat list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, null, 'Recent chats'), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Brendan Lim',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/chexee-128.jpg' }),
    rightIcon: _react2.default.createElement(_chatBubble2.default, null)
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Eric Hoffman',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kolage-128.jpg' }),
    rightIcon: _react2.default.createElement(_chatBubble2.default, null)
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Grace Ng',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/jsa-128.jpg' }),
    rightIcon: _react2.default.createElement(_chatBubble2.default, null)
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Kerem Suer',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kerem-128.jpg' }),
    rightIcon: _react2.default.createElement(_chatBubble2.default, null)
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Raquel Parrado',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/adellecharles-128.jpg' }),
    rightIcon: _react2.default.createElement(_chatBubble2.default, null)
  })), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, null, 'Previous chats'), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Chelsea Otakan',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/adhamdannaway-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'James Anderson',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/angelceballos-128.jpg' })
  }))));
};
// import MobileTearSheet from '../../../MobileTearSheet';
exports.default = ListExampleChat;

/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(1236);

var _grade = __webpack_require__(1276);

var _grade2 = _interopRequireDefault(_grade);

var _Divider = __webpack_require__(1219);

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = __webpack_require__(1227);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _colors = __webpack_require__(61);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Contact list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, {
    primaryText: 'Chelsea Otakan',
    leftIcon: _react2.default.createElement(_grade2.default, { color: _colors.pinkA200 }),
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/chexee-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Eric Hoffman',
    insetChildren: true,
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kolage-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'James Anderson',
    insetChildren: true,
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/jsa-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Kerem Suer',
    insetChildren: true,
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kerem-128.jpg' })
  })), _react2.default.createElement(_Divider2.default, { inset: true }), _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, {
    primaryText: 'Adelle Charles',
    leftAvatar: _react2.default.createElement(_Avatar2.default, {
      color: _colors.pinkA200, backgroundColor: _colors.transparent,
      style: { left: 8 }
    }, 'A'),
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/adellecharles-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Adham Dannaway',
    insetChildren: true,
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/adhamdannaway-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Allison Grayce',
    insetChildren: true,
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/allisongrayce-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Angel Ceballos',
    insetChildren: true,
    rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/angelceballos-128.jpg' })
  }))));
};
// import MobileTearSheet from '../../../MobileTearSheet';
exports.default = ListExampleSimple;

/***/ }),

/***/ 1416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(1236);

var _info = __webpack_require__(1293);

var _info2 = _interopRequireDefault(_info);

var _Divider = __webpack_require__(1219);

var _Divider2 = _interopRequireDefault(_Divider);

var _Subheader = __webpack_require__(1184);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Avatar = __webpack_require__(1227);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _folder = __webpack_require__(1277);

var _folder2 = _interopRequireDefault(_folder);

var _assignment = __webpack_require__(1519);

var _assignment2 = _interopRequireDefault(_assignment);

var _colors = __webpack_require__(61);

var _insertChart = __webpack_require__(1531);

var _insertChart2 = _interopRequireDefault(_insertChart);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Folder list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, { inset: true }, 'Folders'), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }),
    rightIcon: _react2.default.createElement(_info2.default, null),
    primaryText: 'Photos',
    secondaryText: 'Jan 9, 2014'
  }), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }),
    rightIcon: _react2.default.createElement(_info2.default, null),
    primaryText: 'Recipes',
    secondaryText: 'Jan 17, 2014'
  }), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }),
    rightIcon: _react2.default.createElement(_info2.default, null),
    primaryText: 'Work',
    secondaryText: 'Jan 28, 2014'
  })), _react2.default.createElement(_Divider2.default, { inset: true }), _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, { inset: true }, 'Files'), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_assignment2.default, null), backgroundColor: _colors.blue500 }),
    rightIcon: _react2.default.createElement(_info2.default, null),
    primaryText: 'Vacation itinerary',
    secondaryText: 'Jan 20, 2014'
  }), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_insertChart2.default, null), backgroundColor: _colors.yellow600 }),
    rightIcon: _react2.default.createElement(_info2.default, null),
    primaryText: 'Kitchen remodel',
    secondaryText: 'Jan 10, 2014'
  }))));
};
// import MobileTearSheet from '../../../MobileTearSheet';
exports.default = ListExampleSimple;

/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _rcQueueAnim = __webpack_require__(758);

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

var _Simple = __webpack_require__(1423);

var _Simple2 = _interopRequireDefault(_Simple);

var _Chat = __webpack_require__(1414);

var _Chat2 = _interopRequireDefault(_Chat);

var _Contacts = __webpack_require__(1415);

var _Contacts2 = _interopRequireDefault(_Contacts);

var _Folder = __webpack_require__(1416);

var _Folder2 = _interopRequireDefault(_Folder);

var _Nested = __webpack_require__(1419);

var _Nested2 = _interopRequireDefault(_Nested);

var _Settings = __webpack_require__(1422);

var _Settings2 = _interopRequireDefault(_Settings);

var _Phone = __webpack_require__(1420);

var _Phone2 = _interopRequireDefault(_Phone);

var _Messages = __webpack_require__(1418);

var _Messages2 = _interopRequireDefault(_Messages);

var _Selectable = __webpack_require__(1421);

var _Selectable2 = _interopRequireDefault(_Selectable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Lists = function Lists() {
  return _react2.default.createElement('div', { className: 'container-fluid with-maxwidth chapter' }, _react2.default.createElement(_rcQueueAnim2.default, { type: 'bottom', className: 'ui-animate' }, _react2.default.createElement('div', { key: '1' }, _react2.default.createElement('article', { className: 'article' }, _react2.default.createElement('h2', { className: 'article-title' }, 'Material Lists'), _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Simple2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Chat2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Contacts2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Folder2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Nested2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Phone2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Settings2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Messages2.default, null)), _react2.default.createElement('div', { className: 'col-xl-4' }, _react2.default.createElement(_Selectable2.default, null)))))));
};
// Material UI


module.exports = Lists;

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(1236);

var _Divider = __webpack_require__(1219);

var _Divider2 = _interopRequireDefault(_Divider);

var _Subheader = __webpack_require__(1184);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Avatar = __webpack_require__(1227);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _colors = __webpack_require__(61);

var _IconButton = __webpack_require__(925);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(1278);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _IconMenu = __webpack_require__(1243);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(931);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var iconButtonElement = _react2.default.createElement(_IconButton2.default, {
  touch: true,
  tooltip: 'more',
  tooltipPosition: 'bottom-left'
}, _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 }));
// import MobileTearSheet from '../../../MobileTearSheet';


var rightIconMenu = _react2.default.createElement(_IconMenu2.default, { iconButtonElement: iconButtonElement }, _react2.default.createElement(_MenuItem2.default, null, 'Reply'), _react2.default.createElement(_MenuItem2.default, null, 'Forward'), _react2.default.createElement(_MenuItem2.default, null, 'Delete'));

var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Messages list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, null, 'Today'), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/ok-128.jpg' }),
    rightIconButton: rightIconMenu,
    primaryText: 'Brendan Lim',
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, 'Brunch this weekend?'), _react2.default.createElement('br', null), 'I\'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'),
    secondaryTextLines: 2
  }), _react2.default.createElement(_Divider2.default, { inset: true }), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kolage-128.jpg' }),
    rightIconButton: rightIconMenu,
    primaryText: 'me, Scott, Jennifer',
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, 'Summer BBQ'), _react2.default.createElement('br', null), 'Wish I could come, but I\'m out of town this weekend.'),
    secondaryTextLines: 2
  }), _react2.default.createElement(_Divider2.default, { inset: true }), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/uxceo-128.jpg' }),
    rightIconButton: rightIconMenu,
    primaryText: 'Grace Ng',
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, 'Oui oui'), _react2.default.createElement('br', null), 'Do you have any Paris recs? Have you ever been?'),
    secondaryTextLines: 2
  }), _react2.default.createElement(_Divider2.default, { inset: true }), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kerem-128.jpg' }),
    rightIconButton: rightIconMenu,
    primaryText: 'Kerem Suer',
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, 'Birthday gift'), _react2.default.createElement('br', null), 'Do you have any ideas what we can get Heidi for her birthday? How about a pony?'),
    secondaryTextLines: 2
  }), _react2.default.createElement(_Divider2.default, { inset: true }), _react2.default.createElement(_List.ListItem, {
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/raquelromanp-128.jpg' }),
    rightIconButton: rightIconMenu,
    primaryText: 'Raquel Parrado',
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, 'Recipe to try'), _react2.default.createElement('br', null), 'We should eat this: grated squash. Corn and tomatillo tacos.'),
    secondaryTextLines: 2
  }))));
};

exports.default = ListExampleSimple;

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(1236);

var _grade = __webpack_require__(1276);

var _grade2 = _interopRequireDefault(_grade);

var _inbox = __webpack_require__(1296);

var _inbox2 = _interopRequireDefault(_inbox);

var _drafts = __webpack_require__(1295);

var _drafts2 = _interopRequireDefault(_drafts);

var _send = __webpack_require__(1297);

var _send2 = _interopRequireDefault(_send);

var _Subheader = __webpack_require__(1184);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import MobileTearSheet from '../../../MobileTearSheet';
var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Nested list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, null, 'Nested List Items'), _react2.default.createElement(_List.ListItem, { primaryText: 'Sent mail', leftIcon: _react2.default.createElement(_send2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Drafts', leftIcon: _react2.default.createElement(_drafts2.default, null) }), _react2.default.createElement(_List.ListItem, {
    primaryText: 'Inbox',
    leftIcon: _react2.default.createElement(_inbox2.default, null),
    initiallyOpen: true,
    primaryTogglesNestedList: true,
    nestedItems: [_react2.default.createElement(_List.ListItem, {
      key: 1,
      primaryText: 'Starred',
      leftIcon: _react2.default.createElement(_grade2.default, null)
    }), _react2.default.createElement(_List.ListItem, {
      key: 2,
      primaryText: 'Sent Mail',
      leftIcon: _react2.default.createElement(_send2.default, null),
      disabled: true,
      nestedItems: [_react2.default.createElement(_List.ListItem, { key: 1, primaryText: 'Drafts', leftIcon: _react2.default.createElement(_drafts2.default, null) })]
    })]
  }))));
};

exports.default = ListExampleSimple;

/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(1236);

var _Divider = __webpack_require__(1219);

var _Divider2 = _interopRequireDefault(_Divider);

var _call = __webpack_require__(1525);

var _call2 = _interopRequireDefault(_call);

var _chatBubble = __webpack_require__(1294);

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _colors = __webpack_require__(61);

var _email = __webpack_require__(1526);

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import MobileTearSheet from '../../../MobileTearSheet';
var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Simple list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, {
    leftIcon: _react2.default.createElement(_call2.default, { color: _colors.indigo500 }),
    rightIcon: _react2.default.createElement(_chatBubble2.default, null),
    primaryText: '(650) 555 - 1234',
    secondaryText: 'Mobile'
  }), _react2.default.createElement(_List.ListItem, {
    insetChildren: true,
    rightIcon: _react2.default.createElement(_chatBubble2.default, null),
    primaryText: '(323) 555 - 6789',
    secondaryText: 'Work'
  })), _react2.default.createElement(_Divider2.default, { inset: true }), _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, {
    leftIcon: _react2.default.createElement(_email2.default, { color: _colors.indigo500 }),
    primaryText: 'aliconnors@example.com',
    secondaryText: 'Personal'
  }), _react2.default.createElement(_List.ListItem, {
    insetChildren: true,
    primaryText: 'ali_connors@example.com',
    secondaryText: 'Work'
  }))));
};

exports.default = ListExampleSimple;

/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(1236);

var _Avatar = __webpack_require__(1227);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Subheader = __webpack_require__(1184);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
// import MobileTearSheet from '../../../MobileTearSheet';


var SelectableList = (0, _List.makeSelectable)(_List.List);

function wrapState(ComposedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(SelectableList, _React$Component);

    function SelectableList() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SelectableList);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectableList.__proto__ || Object.getPrototypeOf(SelectableList)).call.apply(_ref, [this].concat(args))), _this), _this.handleRequestChange = function (event, index) {
        _this.setState({
          selectedIndex: index
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectableList, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({
          selectedIndex: this.props.defaultValue
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, {
          value: this.state.selectedIndex,
          onChange: this.handleRequestChange
        }, this.props.children);
      }
    }]);

    return SelectableList;
  }(_react2.default.Component), _class.propTypes = {
    children: _propTypes2.default.node.isRequired,
    defaultValue: _propTypes2.default.number.isRequired
  }, _temp2;
}

SelectableList = wrapState(SelectableList);

var ListExampleSelectable = function ListExampleSelectable() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Selectable list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(SelectableList, { defaultValue: 3 }, _react2.default.createElement(_Subheader2.default, null, 'Selectable Contacts'), _react2.default.createElement(_List.ListItem, {
    value: 1,
    primaryText: 'Brendan Lim',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/ok-128.jpg' }),
    nestedItems: [_react2.default.createElement(_List.ListItem, {
      value: 2,
      primaryText: 'Grace Ng',
      leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/uxceo-128.jpg' })
    })]
  }), _react2.default.createElement(_List.ListItem, {
    value: 3,
    primaryText: 'Kerem Suer',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kerem-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    value: 4,
    primaryText: 'Eric Hoffman',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/kolage-128.jpg' })
  }), _react2.default.createElement(_List.ListItem, {
    value: 5,
    primaryText: 'Raquel Parrado',
    leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'assets/images-demo/avatars/raquelromanp-128.jpg' })
  }))));
};

exports.default = ListExampleSelectable;

/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(1236);

var _Subheader = __webpack_require__(1184);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = __webpack_require__(1219);

var _Divider2 = _interopRequireDefault(_Divider);

var _Checkbox = __webpack_require__(1249);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Toggle = __webpack_require__(1250);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Settings list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, {
    primaryText: 'When calls and notifications arrive',
    secondaryText: 'Always interrupt'
  })), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, null, 'Priority Interruptions'), _react2.default.createElement(_List.ListItem, { primaryText: 'Events and reminders', rightToggle: _react2.default.createElement(_Toggle2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Calls', rightToggle: _react2.default.createElement(_Toggle2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Messages', rightToggle: _react2.default.createElement(_Toggle2.default, null) })), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, null, 'Hangout Notifications'), _react2.default.createElement(_List.ListItem, { primaryText: 'Notifications', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Sounds', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Video sounds', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) }))));
};
// import MobileTearSheet from '../../../MobileTearSheet';
exports.default = ListExampleSimple;

/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(1236);

var _inbox = __webpack_require__(1296);

var _inbox2 = _interopRequireDefault(_inbox);

var _grade = __webpack_require__(1276);

var _grade2 = _interopRequireDefault(_grade);

var _send = __webpack_require__(1297);

var _send2 = _interopRequireDefault(_send);

var _drafts = __webpack_require__(1295);

var _drafts2 = _interopRequireDefault(_drafts);

var _Divider = __webpack_require__(1219);

var _Divider2 = _interopRequireDefault(_Divider);

var _info = __webpack_require__(1293);

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement('section', { className: 'box box-default' }, _react2.default.createElement('div', { className: 'box-header' }, 'Simple list'), _react2.default.createElement('div', { className: 'box-body' }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, { primaryText: 'Inbox', leftIcon: _react2.default.createElement(_inbox2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Starred', leftIcon: _react2.default.createElement(_grade2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Sent mail', leftIcon: _react2.default.createElement(_send2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Drafts', leftIcon: _react2.default.createElement(_drafts2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Inbox', leftIcon: _react2.default.createElement(_inbox2.default, null) })), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_List.List, null, _react2.default.createElement(_List.ListItem, { primaryText: 'All mail', rightIcon: _react2.default.createElement(_info2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Trash', rightIcon: _react2.default.createElement(_info2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Spam', rightIcon: _react2.default.createElement(_info2.default, null) }), _react2.default.createElement(_List.ListItem, { primaryText: 'Follow up', rightIcon: _react2.default.createElement(_info2.default, null) }))));
};
// import MobileTearSheet from '../../../MobileTearSheet';
exports.default = ListExampleSimple;

/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectable = undefined;

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorManipulator = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSelectable = function makeSelectable(MyComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
        }
        return previousValue || _this.isChildSelected(child, _this.props);
      }, _this.handleItemTouchTap = function (event, item) {
        var itemValue = item.props.value;

        if (itemValue !== _this.props.value) {
          if (_this.props.onChange) {
            _this.props.onChange(event, itemValue);
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
      key: 'extendChild',
      value: function extendChild(child, styles, selectedItemStyle) {
        var _this2 = this;

        if (child && child.type && child.type.muiName === 'ListItem') {
          var selected = this.isChildSelected(child, this.props);
          var selectedChildrenStyles = void 0;
          if (selected) {
            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
          }

          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);

          this.keyIndex += 1;

          return _react2.default.cloneElement(child, {
            onTouchTap: function onTouchTap(event) {
              _this2.handleItemTouchTap(event, child);
              if (child.props.onTouchTap) {
                child.props.onTouchTap(event);
              }
            },
            key: this.keyIndex,
            style: mergedChildrenStyles,
            nestedItems: child.props.nestedItems.map(function (child) {
              return _this2.extendChild(child, styles, selectedItemStyle);
            }),
            initiallyOpen: this.isInitiallyOpen(child)
          });
        } else {
          return child;
        }
      }
    }, {
      key: 'isInitiallyOpen',
      value: function isInitiallyOpen(child) {
        if (child.props.initiallyOpen) {
          return child.props.initiallyOpen;
        }
        return this.hasSelectedDescendant(false, child);
      }
    }, {
      key: 'isChildSelected',
      value: function isChildSelected(child, props) {
        return props.value === child.props.value;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            children = _props.children,
            selectedItemStyle = _props.selectedItemStyle,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'selectedItemStyle']);


        this.keyIndex = 0;
        var styles = {};

        if (!selectedItemStyle) {
          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
        }

        return _react2.default.createElement(
          MyComponent,
          (0, _extends3.default)({}, other, this.state),
          _react.Children.map(children, function (child) {
            return _this3.extendChild(child, styles, selectedItemStyle);
          })
        );
      }
    }]);
    return _class;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    onChange: _propTypes2.default.func,
    selectedItemStyle: _propTypes2.default.object,
    value: _propTypes2.default.any
  }, _class.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  }, _temp2;
};

exports.makeSelectable = makeSelectable;
exports.default = makeSelectable;

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionAssignment = function ActionAssignment(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' })
  );
};
ActionAssignment = (0, _pure2.default)(ActionAssignment);
ActionAssignment.displayName = 'ActionAssignment';
ActionAssignment.muiName = 'SvgIcon';

exports.default = ActionAssignment;

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommunicationCall = function CommunicationCall(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' })
  );
};
CommunicationCall = (0, _pure2.default)(CommunicationCall);
CommunicationCall.displayName = 'CommunicationCall';
CommunicationCall.muiName = 'SvgIcon';

exports.default = CommunicationCall;

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommunicationEmail = function CommunicationEmail(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' })
  );
};
CommunicationEmail = (0, _pure2.default)(CommunicationEmail);
CommunicationEmail.displayName = 'CommunicationEmail';
CommunicationEmail.muiName = 'SvgIcon';

exports.default = CommunicationEmail;

/***/ }),

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(776);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(775);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorInsertChart = function EditorInsertChart(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' })
  );
};
EditorInsertChart = (0, _pure2.default)(EditorInsertChart);
EditorInsertChart.displayName = 'EditorInsertChart';
EditorInsertChart.muiName = 'SvgIcon';

exports.default = EditorInsertChart;

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(746);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};


/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(163);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.toArrayChildren = toArrayChildren;
exports.dataToArray = dataToArray;
exports.objectEqual = objectEqual;
exports.findChildInChildrenByKey = findChildInChildrenByKey;
exports.mergeChildren = mergeChildren;
exports.transformArguments = transformArguments;
exports.getChildrenFromProps = getChildrenFromProps;
exports.startConvertToEndUnit = startConvertToEndUnit;
exports.parsePath = parsePath;
exports.getTransformValue = getTransformValue;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _deepEql = __webpack_require__(753);

var _deepEql2 = _interopRequireDefault(_deepEql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toArrayChildren(children) {
  var ret = [];
  _react2["default"].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}

function objectEqual(obj1, obj2) {
  if (obj1 === obj2 || (0, _deepEql2["default"])(obj1, obj2)) {
    return true;
  }
  if (!obj1 || !obj2) {
    return false;
  }
  // animation 写在标签上的进行判断是否相等， 判断每个参数有没有 function;
  var equalBool = true;
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (var i = 0; i < obj1.length; i++) {
      var currentObj = obj1[i];
      var nextObj = obj2[i];
      for (var p in currentObj) {
        if (currentObj[p] !== nextObj[p]) {
          if ((0, _typeof3["default"])(currentObj[p]) === 'object' && (0, _typeof3["default"])(nextObj[p]) === 'object') {
            equalBool = objectEqual(currentObj[p], nextObj[p]);
          } else if (typeof currentObj[p] === 'function' && typeof nextObj[p] === 'function') {
            if (currentObj[p].name !== nextObj[p].name) {
              equalBool = false;
            }
          } else {
            equalBool = false;
            return false;
          }
        }
      }
    }
  }

  var setEqualBool = function setEqualBool(objA, objB) {
    Object.keys(objA).forEach(function (key) {
      if (!(key in objB)) {
        equalBool = false;
      }

      if ((0, _typeof3["default"])(objA[key]) === 'object' && (0, _typeof3["default"])(objB[key]) === 'object') {
        equalBool = objectEqual(objA[key], objB[key]);
      } else if (typeof objA[key] === 'function' && typeof objB[key] === 'function') {
        if (objA[key].name !== objB[key].name) {
          equalBool = false;
        }
      } else if (objA[key] !== objB[key]) {
        equalBool = false;
      }
    });
  };

  setEqualBool(obj1, obj2);
  setEqualBool(obj2, obj1);
  return equalBool;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (c) {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  var ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey = void 0;
  prev.forEach(function (c) {
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });
  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }

  next.forEach(function (c) {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });

  return ret;
}

function transformArguments(arg, key, i) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg({
      key: key,
      index: i
    });
  } else {
    result = arg;
  }
  return result;
}

function getChildrenFromProps(props) {
  return props && props.children;
}

function startConvertToEndUnit(target, style, num, unit, dataUnit, fixed, isOriginWidth) {
  var horiz = /(?:Left|Right|Width|X)/i.test(style) || isOriginWidth;
  var t = style.indexOf('border') !== -1 ? target : target.parentNode || document.body;
  t = fixed ? document.body : t;
  var pix = void 0;

  if (unit === '%') {
    pix = parseFloat(num) / 100 * (horiz ? t.clientWidth : t.clientHeight);
  } else if (unit === 'vw') {
    pix = parseFloat(num) * document.body.clientWidth / 100;
  } else if (unit === 'vh') {
    pix = parseFloat(num) * document.body.clientHeight / 100;
  } else if (unit && unit.match(/em/i)) {
    pix = parseFloat(num) * 16;
  } else {
    pix = parseFloat(num);
  }
  if (dataUnit === '%') {
    pix = pix * 100 / (horiz ? t.clientWidth : t.clientHeight);
  } else if (dataUnit === 'vw') {
    pix = parseFloat(num) / document.body.clientWidth * 100;
  } else if (dataUnit === 'vh') {
    pix = parseFloat(num) / document.body.clientHeight * 100;
  } else if (dataUnit && dataUnit.match(/em/i)) {
    pix = parseFloat(num) / 16;
  }
  return pix;
}
var domPath = void 0;
function parsePath(path) {
  if (typeof path === 'string') {
    if (path.charAt(0).match(/m/i)) {
      domPath = domPath || document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    }
    return document.querySelector(path);
  } else if (path.style) {
    return path;
  }
  throw new Error('Error while parsing the path');
}

function getTransformValue(t, supports3D) {
  if (typeof t === 'string') {
    return t;
  }
  var perspective = t.perspective;
  var angle = t.rotate;
  var rotateX = t.rotateX;
  var rotateY = t.rotateY;
  var sx = t.scaleX;
  var sy = t.scaleY;
  var sz = t.scaleZ;
  var skx = t.skewX;
  var sky = t.skewY;
  var xPercent = t.xPercent || 0;
  var yPercent = t.yPercent || 0;
  var translateX = xPercent ? 0 : t.translateX;
  var translateY = yPercent ? 0 : t.translateY;
  var translateZ = t.translateZ || 0;
  var percent = xPercent || yPercent ? 'translate(' + (xPercent || translateX + 'px') + ',' + (yPercent || translateY + 'px') + ')' : '';
  var sk = skx || sky ? 'skew(' + skx + 'deg,' + sky + 'deg)' : '';
  var an = angle ? 'rotate(' + angle + 'deg)' : '';
  var ss = void 0;
  if (!perspective && !rotateX && !rotateY && !translateZ && sz === 1 || !supports3D) {
    ss = sx !== 1 || sy !== 1 ? 'scale(' + sx + ',' + sy + ')' : '';
    var translate = percent || 'translate(' + translateX + 'px,' + translateY + 'px)';
    return translate + ' ' + an + ' ' + ss + ' ' + sk;
  }
  ss = sx !== 1 || sy !== 1 || sz !== 1 ? 'scale3d(' + sx + ',' + sy + ',' + sz + ')' : '';
  var rX = rotateX ? 'rotateX(' + rotateX + 'deg)' : '';
  var rY = rotateY ? 'rotateY(' + rotateY + 'deg)' : '';
  var per = perspective ? 'perspective(' + perspective + 'px)' : '';
  var translate3d = percent ? percent + ' translate3d(0,0,' + translateZ + 'px)' : 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)';
  return per + ' ' + translate3d + ' ' + ss + ' ' + an + ' ' + rX + ' ' + rY + ' ' + sk;
}

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, easeFunction) {
    easeFunction = easeFunction || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      var transitions = '';
      for (var i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, easeFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },
  create: function create(duration, property, delay, easeFunction) {
    duration = duration || '450ms';
    property = property || 'all';
    delay = delay || '0ms';
    easeFunction = easeFunction || 'linear';

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable func-names */
var Plugins = function Plugins() {};
var p = Plugins.prototype;
p.push = function (plugin) {
  this[plugin.prototype.name] = plugin;
};
exports["default"] = new Plugins();
module.exports = exports['default'];

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFixed = toFixed;
exports.createMatrix = createMatrix;
exports.checkStyleName = checkStyleName;
exports.getGsapType = getGsapType;
exports.parseColor = parseColor;
exports.parseShadow = parseShadow;
exports.getColor = getColor;
exports.isTransform = isTransform;
exports.isConvert = isConvert;
exports.splitFilterToObject = splitFilterToObject;
exports.getMatrix = getMatrix;
exports.getTransform = getTransform;
exports.stylesToCss = stylesToCss;
exports.getUnit = getUnit;
exports.getValues = getValues;
exports.findStyleByName = findStyleByName;
exports.mergeStyle = mergeStyle;
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

var IE = function () {
  if (typeof document === 'undefined') {
    return false;
  }
  if (navigator && (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0)) {
    return true;
  }
  return false;
}();

var rnd = 100000;

var colorLookup = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
};
var _hue = function _hue(hh, m1, m2) {
  var h = hh > 1 ? hh - 1 : hh;
  h = hh < 0 ? hh + 1 : h;
  var a = h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1;
  var b = h < 0.5 ? m2 : a;
  var c = h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : b;
  return c * 255 + 0.5 | 0;
};
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;

var cssList = {
  _lists: {
    transformsBase: ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'rotateZ', 'rotate'],
    transforms3D: ['translate3d', 'translateZ', 'scaleZ', 'rotateX', 'rotateY', 'perspective']
  },
  transformGroup: { translate: 1, translate3d: 1, scale: 1, scale3d: 1, rotate: 1, rotate3d: 1 },
  filter: ['grayScale', 'sepia', 'hueRotate', 'invert', 'brightness', 'contrast', 'blur'],
  filterConvert: { grayScale: 'grayscale', hueRotate: 'hue-rotate' }
};
cssList._lists.transformsBase = !IE ? cssList._lists.transformsBase.concat(cssList._lists.transforms3D) : cssList._lists.transformsBase;

function toFixed(num, length) {
  var _rnd = length ? Math.pow(10, length) : rnd;
  var n = num | 0;
  var dec = num - n;
  return dec ? (dec * _rnd + (num < 0 ? -0.5 : 0.5) | 0) / _rnd + n : num;
}

function createMatrix(style) {
  return window.WebKitCSSMatrix && new window.WebKitCSSMatrix(style) || window.MozCSSMatrix && new window.MozCSSMatrix(style) || window.DOMMatrix && new window.DOMMatrix(style) || window.MsCSSMatrix && new window.MsCSSMatrix(style) || window.OCSSMatrix && new window.OCSSMatrix(style) || window.CSSMatrix && new window.CSSMatrix(style) || null;
}

function checkStyleName(p) {
  var a = ['O', 'Moz', 'ms', 'Ms', 'Webkit'];
  if (p !== 'filter' && p in document.body.style) {
    return p;
  }
  var _p = p.charAt(0).toUpperCase() + p.substr(1);
  var prefixCss = a.filter(function (key) {
    return '' + key + _p in document.body.style;
  });
  return prefixCss[0] ? '' + prefixCss[0] + _p : null;
}

function getGsapType(_p) {
  var p = _p;
  p = p === 'x' ? 'translateX' : p;
  p = p === 'y' ? 'translateY' : p;
  p = p === 'z' ? 'translateZ' : p;
  // p = p === 'r' ? 'rotate' : p;
  return p;
}

function parseColor(_v) {
  var a = void 0;
  var r = void 0;
  var g = void 0;
  var b = void 0;
  var h = void 0;
  var s = void 0;
  var l = void 0;
  var v = _v;
  var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g;
  if (!v) {
    a = colorLookup.black;
  } else if (typeof v === 'number') {
    a = [v >> 16, v >> 8 & 255, v & 255];
  } else {
    if (v.charAt(v.length - 1) === ',') {
      v = v.substr(0, v.length - 1);
    }
    if (colorLookup[v]) {
      a = colorLookup[v];
    } else if (v.charAt(0) === '#') {
      // is #FFF
      if (v.length === 4) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = '#' + r + r + g + g + b + b;
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else if (v.substr(0, 3) === 'hsl') {
      a = v.match(_numExp);
      h = Number(a[0]) % 360 / 360;
      s = Number(a[1]) / 100;
      l = Number(a[2]) / 100;
      g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
      r = l * 2 - g;
      if (a.length > 3) {
        a[3] = Number(a[3]);
      }
      a[0] = _hue(h + 1 / 3, r, g);
      a[1] = _hue(h, r, g);
      a[2] = _hue(h - 1 / 3, r, g);
    } else {
      a = v.match(_numExp) || colorLookup.transparent;
    }
    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    a[2] = Number(a[2]);

    if (a.length > 3) {
      a[3] = Number(a[3]);
    }
  }
  return a;
}

function parseShadow(v) {
  if (!v) {
    return [0, 0, 0, 0, 0, 0, 0];
  }
  var inset = void 0;
  if (v.indexOf('rgb') >= 0) {
    var t = v.match(/rgb+(?:a)?\((.*)\)/);
    var s = v.replace(t[0], '').trim().split(/\s+/);
    inset = s.indexOf('inset');
    if (inset >= 0) {
      s.splice(inset, 1);
    }
    var c = t[1].replace(/\s+/g, '').split(',');
    if (c.length === 3) {
      c.push(1);
    }
    return s.concat(c, inset >= 0 ? ['inset'] : []);
  }
  var vArr = v.split(/\s+/);
  inset = vArr.indexOf('inset');
  if (inset >= 0) {
    vArr.splice(inset, 1);
  }
  var color = parseColor(vArr[vArr.length - 1]);
  color[3] = typeof color[3] === 'number' ? color[3] : 1;
  vArr = vArr.splice(0, vArr.length - 1);
  return vArr.concat(color, inset >= 0 ? ['inset'] : []);
}

function getColor(v) {
  var rgba = v.length === 4 ? 'rgba' : 'rgb';
  var _vars = v.map(function (d, i) {
    return i < 3 ? Math.round(d) : d;
  });
  return rgba + '(' + _vars.join(',') + ')';
}

function isTransform(p) {
  return cssList._lists.transformsBase.indexOf(p) >= 0 ? 'transform' : p;
}

function isConvert(p) {
  var cssName = isTransform(p);
  return cssList.filter.indexOf(cssName) >= 0 ? 'filter' : cssName;
}

function splitFilterToObject(data) {
  if (data === 'none' || !data || data === '') {
    return null;
  }
  var filter = data.replace(' ', '').split(')').filter(function (item) {
    return item;
  });
  var startData = {};
  filter.forEach(function (item) {
    var dataArr = item.split('(');
    startData[dataArr[0]] = dataArr[1];
  });
  return startData;
}

function getMatrix(t) {
  var arr = t.match(/(?:\-|\b)[\d\-\.e]+\b/gi);
  var m = {};
  if (arr.length === 6) {
    m.m11 = parseFloat(arr[0]);
    m.m12 = parseFloat(arr[1]);
    m.m13 = 0;
    m.m14 = 0;
    m.m21 = parseFloat(arr[2]);
    m.m22 = parseFloat(arr[3]);
    m.m23 = 0;
    m.m24 = 0;
    m.m31 = 0;
    m.m32 = 0;
    m.m33 = 1;
    m.m34 = 0;
    m.m41 = parseFloat(arr[4]);
    m.m42 = parseFloat(arr[5]);
    m.m43 = 0;
    m.m44 = 0;
  } else {
    arr.forEach(function (item, i) {
      var ii = i % 4 + 1;
      var j = Math.floor(i / 4) + 1;
      m['m' + j + ii] = parseFloat(item);
    });
  }
  return m;
}

function getTransform(transform) {
  var _transform = transform === 'none' || transform === '' ? 'matrix(1, 0, 0, 1, 0, 0)' : transform;
  var m = getMatrix(_transform);
  var m11 = m.m11;
  var m12 = m.m12;
  var m13 = m.m13;
  var m14 = m.m14;
  var m21 = m.m21;
  var m22 = m.m22;
  var m23 = m.m23;
  var m24 = m.m24;
  var m31 = m.m31;
  var m32 = m.m32;
  var m33 = m.m33;
  var m34 = m.m34;
  var m43 = m.m43;
  var t1 = void 0;
  var t2 = void 0;
  var t3 = void 0;
  var tm = {};
  tm.perspective = m34 ? toFixed(m33 / (m34 < 0 ? -m34 : m34)) : 0;
  tm.rotateX = toFixed(Math.asin(m23) * RAD2DEG);
  var angle = tm.rotateX * DEG2RAD;
  var skewX = Math.tan(m21);
  var skewY = Math.tan(m12);
  var cos = m34 * tm.perspective;
  var sin = void 0;
  // rotateX
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m21 * cos + m31 * sin;
    t2 = m22 * cos + m32 * sin;
    t3 = m23 * cos + m33 * sin;
    m31 = m21 * -sin + m31 * cos;
    m32 = m22 * -sin + m32 * cos;
    m33 = m23 * -sin + m33 * cos;
    m34 = m24 * -sin + m34 * cos;
    m21 = t1;
    m22 = t2;
    m23 = t3;
  }
  // rotateY
  angle = Math.atan2(m31, m33);
  tm.rotateY = toFixed(angle * RAD2DEG);
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m11 * cos - m31 * sin;
    t2 = m12 * cos - m32 * sin;
    t3 = m13 * cos - m33 * sin;
    m32 = m12 * sin + m32 * cos;
    m33 = m13 * sin + m33 * cos;
    m34 = m14 * sin + m34 * cos;
    m11 = t1;
    m12 = t2;
    m13 = t3;
  }
  // rotateZ
  angle = Math.atan2(m12, m11);
  tm.rotate = toFixed(angle * RAD2DEG);
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    m11 = m11 * cos + m21 * sin;
    t2 = m12 * cos + m22 * sin;
    m22 = m12 * -sin + m22 * cos;
    m23 = m13 * -sin + m23 * cos;
    m12 = t2;
  }

  if (tm.rotateX && Math.abs(tm.rotateX) + Math.abs(tm.rotate) > 359.9) {
    tm.rotateX = tm.rotate = 0;
    tm.rotateY += 180;
  }
  tm.scaleX = toFixed(Math.sqrt(m11 * m11 + m12 * m12));
  tm.scaleY = toFixed(Math.sqrt(m22 * m22 + m32 * m32));
  tm.scaleZ = toFixed(Math.sqrt(m23 * m23 + m33 * m33));
  // 不管 skewX skewY了；
  tm.skewX = skewX === -skewY ? 0 : skewX;
  tm.skewY = skewY === -skewX ? 0 : skewY;
  tm.perspective = m34 ? 1 / (m34 < 0 ? -m34 : m34) : 0;
  tm.translateX = m.m41;
  tm.translateY = m.m42;
  tm.translateZ = m43;
  return tm;
}

function stylesToCss(key, value) {
  var _value = void 0;
  if (!isUnitlessNumber[key] && typeof value === 'number') {
    _value = ' ' + value + 'px';
  } else if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    _value = '\'' + value.replace(/'/g, "\\'") + '\'';
  }
  return _value || value;
}

function getUnit(p, v) {
  var currentUnit = v && v.toString().replace(/[^a-z|%]/ig, '');
  var unit = '';
  if (p.indexOf('translate') >= 0 || p.indexOf('perspective') >= 0 || p.indexOf('blur') >= 0) {
    unit = 'px';
  } else if (p.indexOf('skew') >= 0 || p.indexOf('rotate') >= 0) {
    unit = 'deg';
  }
  return currentUnit || unit;
}

function getValues(p, d, u) {
  return p + '(' + d + (u || '') + ')';
}

function findStyleByName(cssArray, name) {
  var ret = null;
  if (cssArray) {
    cssArray.forEach(function (_cname) {
      if (ret) {
        return;
      }
      var cName = _cname.split('(')[0];
      var a = cName in cssList.transformGroup && name.substring(0, name.length - 1).indexOf(cName) >= 0;
      var b = name in cssList.transformGroup && cName.substring(0, cName.length - 1).indexOf(name) >= 0;
      var c = cName in cssList.transformGroup && name in cssList.transformGroup && (cName.substring(0, cName.length - 2) === name || name.substring(0, name.length - 2) === cName);
      if (cName === name || a || b || c) {
        ret = _cname;
      }
    });
  }
  return ret;
}

function mergeStyle(current, change) {
  if (!current || current === '') {
    return change;
  }
  if (!change || change === '') {
    return current;
  }
  var _current = current.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  }).map(function (item) {
    return item + ')';
  });
  var _change = change.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  });
  _change.forEach(function (changeOnly) {
    var changeArr = changeOnly.split('(');
    var changeName = changeArr[0];
    var currentSame = findStyleByName(_current, changeName);
    if (!currentSame) {
      _current.push(changeOnly + ')');
    } else {
      var index = _current.indexOf(currentSame);
      _current[index] = changeOnly + ')';
    }
  });
  _current.forEach(function (item, i) {
    if (item.indexOf('perspective') >= 0 && i) {
      _current.splice(i, 1);
      _current.unshift(item);
    }
  });
  return _current.join(' ').trim();
}

exports.default = cssList;


/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = __webpack_require__(727);

var _styleUtils = __webpack_require__(734);

var _TimeLine = __webpack_require__(760);

var _TimeLine2 = _interopRequireDefault(_TimeLine);

var _ticker = __webpack_require__(742);

var _ticker2 = _interopRequireDefault(_ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var perFrame = Math.round(1000 / 60);

var TweenOne = function (_Component) {
  (0, _inherits3["default"])(TweenOne, _Component);

  function TweenOne() {
    (0, _classCallCheck3["default"])(this, TweenOne);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));

    _this.restart = function () {
      _this.startMoment = _this.timeLine.progressTime;
      _this.startFrame = _ticker2["default"].frame;
      _this.play();
    };

    _this.start = function () {
      _this.updateAnim = null;
      var props = _this.props;
      if (props.animation && Object.keys(props.animation).length) {
        _this.timeLine = new _TimeLine2["default"](_this.dom, (0, _util.dataToArray)(props.animation), { attr: props.attr, willChange: props.willChange });
        // 预先注册 raf, 初始动画数值。
        _this.raf();
        // 开始动画
        _this.play();
      }
    };

    _this.play = function () {
      _this.cancelRequestAnimationFrame();
      if (_this.paused) {
        return;
      }
      _this.rafID = _ticker2["default"].add(_this.raf);
    };

    _this.updateAnimFunc = function () {
      _this.cancelRequestAnimationFrame();
      _this.startFrame = _ticker2["default"].frame;
      if (_this.updateAnim === 'update') {
        if (_this.props.resetStyleBool && _this.timeLine) {
          _this.timeLine.resetDefaultStyle();
        }
        _this.startMoment = 0;
      }
    };

    _this.frame = function () {
      var moment = (_ticker2["default"].frame - _this.startFrame) * perFrame + _this.startMoment;
      if (_this.reverse) {
        moment = (_this.startMoment || 0) - (_ticker2["default"].frame - _this.startFrame) * perFrame;
      }
      moment = moment > _this.timeLine.totalTime ? _this.timeLine.totalTime : moment;
      moment = moment <= 0 ? 0 : moment;
      if (moment < _this.moment && !_this.reverse) {
        _this.timeLine.resetDefaultStyle();
      }
      _this.moment = moment;
      _this.timeLine.onChange = _this.onChange;
      _this.timeLine.frame(moment);
    };

    _this.raf = function () {
      _this.frame();
      if (_this.updateAnim) {
        if (_this.updateStartStyle) {
          _this.timeLine.reStart(_this.props.style);
        }
        _this.updateAnimFunc();
        _this.start();
      }
      if (_this.moment >= _this.timeLine.totalTime && !_this.reverse || _this.paused || _this.reverse && _this.moment === 0) {
        return _this.cancelRequestAnimationFrame();
      }
    };

    _this.cancelRequestAnimationFrame = function () {
      _ticker2["default"].clear(_this.rafID);
      _this.rafID = -1;
    };

    _this.rafID = -1;
    _this.moment = _this.props.moment || 0;
    _this.startMoment = _this.props.moment || 0;
    _this.startFrame = _ticker2["default"].frame;
    _this.paused = _this.props.paused;
    _this.reverse = _this.props.reverse;
    _this.onChange = _this.props.onChange;
    _this.newMomentAnim = false;
    _this.updateAnim = null;
    return _this;
  }

  TweenOne.prototype.componentDidMount = function componentDidMount() {
    this.dom = _reactDom2["default"].findDOMNode(this);
    this.start();
  };

  TweenOne.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.resetStyleBool && this.timeLine && this.rafID === -1) {
      this.timeLine.resetDefaultStyle();
    }
    this.onChange = nextProps.onChange;
    // 跳帧事件 moment;
    var newMoment = nextProps.moment;
    this.newMomentAnim = false;
    if (typeof newMoment === 'number' && newMoment !== this.moment) {
      this.startMoment = newMoment;
      this.startFrame = _ticker2["default"].frame;
      if (this.rafID === -1 && !nextProps.paused) {
        this.timeLine.resetAnimData();
        var style = nextProps.style;
        this.dom.setAttribute('style', '');
        Object.keys(style).forEach(function (key) {
          _this2.dom.style[key] = (0, _styleUtils.stylesToCss)(key, style[key]);
        });
        this.play();
      } else {
        this.newMomentAnim = true;
      }
    }
    // 动画处理
    var newAnimation = nextProps.animation;
    var currentAnimation = this.props.animation;
    var equal = (0, _util.objectEqual)(currentAnimation, newAnimation);
    var styleEqual = (0, _util.objectEqual)(this.props.style, nextProps.style);
    // 如果 animation 不同， 在下一帧重新动画
    if (!equal) {
      if (this.rafID !== -1) {
        this.updateAnim = 'update';
      } else if (nextProps.updateReStart) {
        this.startFrame = _ticker2["default"].frame;
        this.updateAnim = 'start';
      }
      // 只做动画，不做回调处理。。。
      if (this.timeLine) {
        this.timeLine.updateAnim = this.updateAnim;
      }
    }

    if (!styleEqual) {
      // 在动画时更改了 style, 作为更改开始数值。
      if (this.rafID !== -1) {
        this.updateStartStyle = true;
      }
    }

    // 暂停倒放
    if (this.paused !== nextProps.paused || this.reverse !== nextProps.reverse) {
      this.paused = nextProps.paused;
      this.reverse = nextProps.reverse;
      if (this.paused) {
        this.cancelRequestAnimationFrame();
      } else {
        if (this.reverse && nextProps.reverseDelay) {
          this.cancelRequestAnimationFrame();
          _ticker2["default"].timeout(this.restart, nextProps.reverseDelay);
        } else {
          this.restart();
        }
      }
    }
  };

  TweenOne.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.updateStartStyle && !this.updateAnim) {
      this.timeLine.reStart(this.props.style);
      this.updateStartStyle = false;
    }

    if (this.newMomentAnim) {
      this.raf();
    }

    // 样式更新了后再执行动画；
    if (this.updateAnim === 'start') {
      this.start();
    }
  };

  TweenOne.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelRequestAnimationFrame();
  };

  TweenOne.prototype.render = function render() {
    var props = (0, _extends3["default"])({}, this.props);
    ['animation', 'component', 'componentReplace', 'reverseDelay', 'attr', 'paused', 'reverse', 'moment', 'resetStyleBool', 'updateReStart', 'willChange'].forEach(function (key) {
      return delete props[key];
    });
    props.style = (0, _extends3["default"])({}, this.props.style);
    Object.keys(props.style).forEach(function (p) {
      if (p.match(/filter/i)) {
        ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
          return props.style[prefix + 'Filter'] = props.style[p];
        });
      }
    });
    // 子级是组件，生成组件需要替换的 component;
    props.component = typeof props.component === 'function' ? this.props.componentReplace : props.component;
    if (!props.component) {
      delete props.component;
    }
    // component 为空时调用子级的。。
    if (!this.props.component) {
      var childrenProps = this.props.children.props;
      var style = childrenProps.style,
          className = childrenProps.className;
      // 合并 style 与 className。

      var newStyle = (0, _extends3["default"])({}, style, props.style);
      var newClassName = props.className ? props.className + ' ' + className : className;
      return _react2["default"].cloneElement(this.props.children, { style: newStyle, className: newClassName });
    }
    return _react2["default"].createElement(this.props.component, props);
  };

  return TweenOne;
}(_react.Component);

var objectOrArray = _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].array]);

TweenOne.propTypes = {
  component: _propTypes2["default"].any,
  componentReplace: _propTypes2["default"].string,
  animation: objectOrArray,
  children: _propTypes2["default"].any,
  style: _propTypes2["default"].object,
  paused: _propTypes2["default"].bool,
  reverse: _propTypes2["default"].bool,
  reverseDelay: _propTypes2["default"].number,
  moment: _propTypes2["default"].number,
  attr: _propTypes2["default"].string,
  willChange: _propTypes2["default"].bool,
  onChange: _propTypes2["default"].func,
  resetStyleBool: _propTypes2["default"].bool,
  updateReStart: _propTypes2["default"].bool
};

TweenOne.defaultProps = {
  component: 'div',
  reverseDelay: 0,
  attr: 'style',
  onChange: noop,
  willChange: true,
  updateReStart: true
};
exports["default"] = TweenOne;
module.exports = exports['default'];

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tweenFunctions = __webpack_require__(764);

var _tweenFunctions2 = _interopRequireDefault(_tweenFunctions);

var _util = __webpack_require__(727);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_tweenFunctions2["default"].path = function (_path, _param) {
  var param = _param || {};
  var pathNode = (0, _util.parsePath)(_path);
  var pathLength = pathNode.getTotalLength();
  var rect = param.rect || 100; // path 的大小，100 * 100，
  var lengthPixel = param.lengthPixel || 200; // 线上取点像素，默认分为 200 段。。
  var points = [];
  for (var i = 0; i < lengthPixel; i++) {
    points.push(pathNode.getPointAtLength(pathLength / lengthPixel * i));
  }
  return function path(t, b, _c, d) {
    var p = _tweenFunctions2["default"].linear(t, b, _c, d);
    var timePointX = rect * p; // X 轴的百分比;
    // 取出 x 轴百分比上的点;
    var point = points.filter(function (item) {
      return item.x >= timePointX;
    })[0] || pathNode.getPointAtLength(p * pathLength);
    return 1 - point.y / rect;
  };
};

exports["default"] = _tweenFunctions2["default"];
module.exports = exports['default'];

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = __webpack_require__(755);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Ticker = function Ticker() {}; /* eslint-disable func-names */


var p = Ticker.prototype = {
  tickFnArray: [],
  tickKeyObject: {},
  id: -1,
  tweenId: 0,
  frame: 0,
  perFrame: Math.round(1000 / 60),
  getTime: Date.now || function () {
    return new Date().getTime();
  },
  elapsed: 0,
  lastUpdate: 0,
  skipFrameMax: 166
};
p.add = function (fn) {
  var key = 'TweenOneTicker' + this.tweenId;
  this.tweenId++;
  this.wake(key, fn);
  return key;
};
p.wake = function (key, fn) {
  var _this = this;

  this.tickKeyObject[key] = fn;
  this.tickFnArray = Object.keys(this.tickKeyObject).map(function (k) {
    return _this.tickKeyObject[k];
  });
  if (this.id === -1) {
    this.id = (0, _raf2["default"])(this.tick);
  }
};
p.clear = function (key) {
  var _this2 = this;

  delete this.tickKeyObject[key];
  this.tickFnArray = Object.keys(this.tickKeyObject).map(function (k) {
    return _this2.tickKeyObject[k];
  });
};
p.sleep = function () {
  _raf2["default"].cancel(this.id);
  this.id = -1;
  this.frame = 0;
};
var ticker = new Ticker();
p.tick = function (a) {
  ticker.elapsed = ticker.lastUpdate ? ticker.getTime() - ticker.lastUpdate : 0;
  ticker.lastUpdate = ticker.lastUpdate ? ticker.lastUpdate + ticker.elapsed : ticker.getTime() + ticker.elapsed;
  ticker.tickFnArray.forEach(function (func) {
    return func(a);
  });
  // 如果 object 里没对象了，自动杀掉；
  if (!ticker.tickFnArray.length) {
    ticker.sleep();
    return;
  }
  if (ticker.elapsed > ticker.skipFrameMax || !ticker.frame) {
    ticker.frame++;
  } else {
    ticker.frame += Math.round(ticker.elapsed / ticker.perFrame);
  }
  ticker.id = (0, _raf2["default"])(ticker.tick);
};
var timeoutIdNumber = 0;
p.timeout = function (fn, time) {
  var _this3 = this;

  if (!(typeof fn === 'function')) {
    return console.warn('not function'); // eslint-disable-line
  }
  var timeoutID = 'timeout' + Date.now() + '-' + timeoutIdNumber;
  var startFrame = this.frame;
  this.wake(timeoutID, function () {
    var moment = (_this3.frame - startFrame) * _this3.perFrame;
    if (moment >= (time || 0)) {
      _this3.clear(timeoutID);
      fn();
    }
  });
  timeoutIdNumber++;
  return timeoutID;
};
var intervalIdNumber = 0;
p.interval = function (fn, time) {
  var _this4 = this;

  if (!(typeof fn === 'function')) {
    console.warn('not function'); // eslint-disable-line
    return null;
  }
  var intervalID = 'interval' + Date.now() + '-' + intervalIdNumber;
  var starFrame = this.frame;
  this.wake(intervalID, function () {
    var moment = (_this4.frame - starFrame) * _this4.perFrame;
    if (moment >= (time || 0)) {
      starFrame = _this4.frame;
      fn();
    }
  });
  intervalIdNumber++;
  return intervalID;
};
exports["default"] = ticker;
module.exports = exports['default'];

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(750), __esModule: true };

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(752);
module.exports = __webpack_require__(18).Object.assign;

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(60)
  , gOPS     = __webpack_require__(164)
  , pIE      = __webpack_require__(99)
  , toObject = __webpack_require__(76)
  , IObject  = __webpack_require__(286)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(59)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(34);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(751)});

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* globals Symbol: true, Uint8Array: true, WeakMap: true */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var type = __webpack_require__(765);
function FakeMap() {
  this.clear();
}
FakeMap.prototype = {
  clear: function clearMap() {
    this.keys = [];
    this.values = [];
    return this;
  },
  set: function setMap(key, value) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
    return this;
  },
  get: function getMap(key) {
    return this.values[this.keys.indexOf(key)];
  },
  delete: function deleteMap(key) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values = this.values.slice(0, index).concat(this.values.slice(index + 1));
      this.keys = this.keys.slice(0, index).concat(this.keys.slice(index + 1));
    }
    return this;
  },
};

var MemoizeMap = null;
if (typeof WeakMap === 'function') {
  MemoizeMap = WeakMap;
} else {
  MemoizeMap = FakeMap;
}

/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === 'boolean') {
      return result;
    }
  }
  return null;
}

/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}

/*!
 * Primary Export
 */

module.exports = deepEqual;
module.exports.MemoizeMap = MemoizeMap;

/**
 * Assert deeply nested sameValue equality between two objects of any type.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
 */
function deepEqual(leftHandOperand, rightHandOperand, options) {
  // If we have a comparator, we can't assume anything; so bail to its check first.
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }

  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }

  // Deeper comparisons are pushed through to a larger function
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}

/**
 * Many comparisons can be canceled out early via simple equality or primitive checks.
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @return {Boolean|null} equal match
 */
function simpleEqual(leftHandOperand, rightHandOperand) {
  // Equal references (except for Numbers) can be returned early
  if (leftHandOperand === rightHandOperand) {
    // Handle +-0 cases
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }

  // handle NaN cases
  if (
    leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
    rightHandOperand !== rightHandOperand // eslint-disable-line no-self-compare
  ) {
    return true;
  }

  // Anything that is not an 'object', i.e. symbols, functions, booleans, numbers,
  // strings, and undefined, can be compared by reference.
  if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    // Easy out b/c it would have passed the first equality check
    return false;
  }
  return null;
}

/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator = options && options.comparator;

  // Check if a memoized result exists.
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }

  // If a comparator is present, use it.
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    // Comparators may return null, in which case we want to go back to default behavior.
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    // To allow comparators to override *any* behavior, we ran them first. Since it didn't decide
    // what to do, we need to make sure to return the basic tests first before we move on.
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      // Don't memoize this, it takes longer to set/retrieve than to just compare.
      return simpleResult;
    }
  }

  var leftHandType = type(leftHandOperand);
  if (leftHandType !== type(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }

  // Temporarily set the operands in the memoize object to prevent blowing the stack
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);

  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}

function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
      // If these types are their instance types (e.g. `new Number`) then re-deepEqual against their values
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case 'Promise':
    case 'Symbol':
    case 'function':
    case 'WeakMap':
    case 'WeakSet':
    case 'Error':
      return leftHandOperand === rightHandOperand;
    case 'Arguments':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Array':
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case 'RegExp':
      return regexpEqual(leftHandOperand, rightHandOperand);
    case 'Generator':
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case 'DataView':
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case 'ArrayBuffer':
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case 'Set':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case 'Map':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}

/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */

function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}

/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function entriesEqual(leftHandOperand, rightHandOperand, options) {
  // IE11 doesn't support Set#entries or Set#@@iterator, so we need manually populate using Set#forEach
  if (leftHandOperand.size !== rightHandOperand.size) {
    return false;
  }
  if (leftHandOperand.size === 0) {
    return true;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(function gatherEntries(key, value) {
    leftHandItems.push([ key, value ]);
  });
  rightHandOperand.forEach(function gatherEntries(key, value) {
    rightHandItems.push([ key, value ]);
  });
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}

/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index = -1;
  while (++index < length) {
    if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}

/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function hasIteratorFunction(target) {
  return typeof Symbol !== 'undefined' &&
    typeof target === 'object' &&
    typeof Symbol.iterator !== 'undefined' &&
    typeof target[Symbol.iterator] === 'function';
}

/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}

/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [ generatorResult.value ];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}

/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function getEnumerableKeys(target) {
  var keys = [];
  for (var key in target) {
    keys.push(key);
  }
  return keys;
}

/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function keysEqual(leftHandOperand, rightHandOperand, keys, options) {
  var length = keys.length;
  if (length === 0) {
    return true;
  }
  for (var i = 0; i < length; i += 1) {
    if (deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    leftHandKeys.sort();
    rightHandKeys.sort();
    if (iterableEqual(leftHandKeys, rightHandKeys) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }

  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }

  if (leftHandKeys.length === 0 &&
      leftHandEntries.length === 0 &&
      rightHandKeys.length === 0 &&
      rightHandEntries.length === 0) {
    return true;
  }

  return false;
}

/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}


/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(754)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__(285);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTweenOne = __webpack_require__(762);

var _rcTweenOne2 = _interopRequireDefault(_rcTweenOne);

var _utils = __webpack_require__(759);

var _animTypes = __webpack_require__(757);

var _animTypes2 = _interopRequireDefault(_animTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var placeholderKeyPrefix = 'ant-queue-anim-placeholder-';

var noop = function noop() {};

var QueueAnim = function (_React$Component) {
  (0, _inherits3["default"])(QueueAnim, _React$Component);

  function QueueAnim() {
    (0, _classCallCheck3["default"])(this, QueueAnim);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

    _initialiseProps.call(_this);

    _this.isEnterKey = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];
    // 记录转换成 TweenOne 组件。
    _this.saveTweenTag = {};
    _this.keysToEnterPaused = {};
    _this.placeholderTimeoutIds = {};

    // 第一次进入，默认进场
    var children = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this.props));
    var childrenShow = {};
    children.forEach(function (child) {
      if (!child || !child.key) {
        return;
      }
      if (_this.props.appear) {
        _this.keysToEnter.push(child.key);
      } else {
        childrenShow[child.key] = true;
      }
    });
    _this.keysToEnterToCallback = [].concat((0, _toConsumableArray3["default"])(_this.keysToEnter));
    _this.originalChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this.props));
    _this.state = {
      children: children,
      childrenShow: childrenShow
    };
    return _this;
  }

  QueueAnim.prototype.componentDidMount = function componentDidMount() {
    if (this.props.appear) {
      this.componentDidUpdate();
    }
  };

  QueueAnim.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var nextChildren = (0, _utils.toArrayChildren)(nextProps.children);
    var currentChildren = this.originalChildren;
    var newChildren = (0, _utils.mergeChildren)(currentChildren, nextChildren);

    var childrenShow = !newChildren.length ? {} : this.state.childrenShow;
    this.keysToEnterPaused = {};
    // 在出场没结束时，childrenShow 里的值将不会清除。再触发进场时， childrenShow 里的值是保留着的, 设置了 enterForcedRePlay 将重新播放进场。
    this.keysToLeave.forEach(function (key) {
      // 将所有在出场里的停止掉。避免间隔性出现
      // 因为进场是用的间隔性进入，这里不做 stop 处理将会在这间隔里继续出场的动画。。
      _this2.keysToEnterPaused[key] = true;
      if (nextProps.enterForcedRePlay) {
        // 清掉所有出场的。
        delete childrenShow[key];
      }
    });

    this.keysToEnter = [];
    this.keysToLeave = [];

    // need render to avoid update
    this.setState({
      childrenShow: childrenShow,
      children: newChildren
    });

    nextChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasPrev = (0, _utils.findChildInChildrenByKey)(currentChildren, key);
      if (!hasPrev && key) {
        _this2.keysToEnter.push(key);
      }
      // 如果当前 key 已存在 saveTweenTag 里，，刷新 child;
      if (_this2.saveTweenTag[key]) {
        _this2.saveTweenTag[key] = _react2["default"].cloneElement(_this2.saveTweenTag[key], {}, c);
      }
    });

    currentChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasNext = (0, _utils.findChildInChildrenByKey)(nextChildren, key);
      if (!hasNext && key) {
        // 出场时删出动画标签，render 时重新生成。
        delete _this2.saveTweenTag[key];
        _this2.keysToLeave.push(key);
      }
    });
    this.keysToEnterToCallback = [].concat((0, _toConsumableArray3["default"])(this.keysToEnter));
  };

  QueueAnim.prototype.componentDidUpdate = function componentDidUpdate() {
    this.originalChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(this.props));
    var keysToEnter = [].concat((0, _toConsumableArray3["default"])(this.keysToEnter));
    var keysToLeave = [].concat((0, _toConsumableArray3["default"])(this.keysToLeave));
    keysToEnter.forEach(this.performEnter);
    keysToLeave.forEach(this.performLeave);
  };

  QueueAnim.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    Object.keys(this.placeholderTimeoutIds).forEach(function (key) {
      _rcTweenOne.ticker.clear(_this3.placeholderTimeoutIds[key]);
    });
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  QueueAnim.prototype.getTweenType = function getTweenType(type, num) {
    var data = _animTypes2["default"][type];
    return this.getTweenAnimConfig(data, num);
  };

  QueueAnim.prototype.getTweenAnimConfig = function getTweenAnimConfig(data, num) {
    var obj = {};
    Object.keys(data).forEach(function (key) {
      obj[key] = data[key][num];
    });
    return obj;
  };

  QueueAnim.prototype.render = function render() {
    var _this4 = this;

    var tagProps = (0, _objectWithoutProperties3["default"])(this.props, []);

    var childrenToRender = (0, _utils.toArrayChildren)(this.state.children).map(function (child) {
      if (!child || !child.key) {
        return child;
      }
      var key = child.key;
      if (_this4.keysToLeave.indexOf(key) >= 0 && _this4.state.childrenShow[key] || _this4.state.childrenShow[key]) {
        if (!_this4.saveTweenTag[key]) {
          var animation = _this4.keysToLeave.indexOf(key) >= 0 ? _this4.getTweenLeaveData(key, _this4.keysToLeave.indexOf(key)) : _this4.getTweenEnterData(key, _this4.keysToEnterToCallback.indexOf(key));

          _this4.saveTweenTag[key] = (0, _react.createElement)(_rcTweenOne2["default"], {
            key: key,
            component: null,
            animation: animation
          }, child);
        }
        if (_this4.keysToEnterPaused[key] && !(_this4.keysToLeave.indexOf(key) >= 0 && _this4.state.childrenShow[key])) {
          return (0, _react.cloneElement)(_this4.saveTweenTag[key], { paused: true });
        }
        return _this4.saveTweenTag[key];
      }

      return (0, _react.createElement)('div', {
        ref: placeholderKeyPrefix + child.key,
        key: placeholderKeyPrefix + child.key,
        className: child.props.className,
        style: child.props.style
      });
    });

    ['component', 'interval', 'duration', 'delay', 'type', 'animConfig', 'ease', 'leaveReverse', 'animatingClassName', 'enterForcedRePlay', 'onEnd', 'appear'].forEach(function (key) {
      return delete tagProps[key];
    });
    return (0, _react.createElement)(this.props.component, (0, _extends3["default"])({}, tagProps), childrenToRender);
  };

  return QueueAnim;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.getTweenEnterData = function (key, i) {
    var props = _this5.props;
    var startAnim = _this5.getAnimData(props, key, i, 0, 1);
    var enterAnim = _this5.getAnimData(props, key, i, 0, 0);
    startAnim = props.enterForcedRePlay || !_this5.isEnterKey[key] ? startAnim : {};
    var ease = (0, _utils.transformArguments)(props.ease, key, i)[0];
    var duration = (0, _utils.transformArguments)(props.duration, key, i)[0];
    if (Array.isArray(ease)) {
      ease = ease.map(function (num) {
        return num * 100;
      });
      ease = _rcTweenOne2["default"].easing.path('M0,100C' + ease[0] + ',' + (100 - ease[1]) + ',' + ease[2] + ',' + (100 - ease[3]) + ',100,0', { lengthPixel: duration / 16.6667 });
    }

    return [(0, _extends3["default"])({ duration: 0 }, startAnim), (0, _extends3["default"])({
      onStart: _this5.enterBegin.bind(_this5, key),
      onComplete: _this5.enterComplete.bind(_this5, key),
      duration: duration,
      ease: ease
    }, enterAnim)];
  };

  this.getTweenLeaveData = function (key, i) {
    var props = _this5.props;
    var startAnim = _this5.getAnimData(props, key, i, 1, 0);
    var leaveAnim = _this5.getAnimData(props, key, i, 1, 1);
    startAnim = props.enterForcedRePlay || !_this5.isEnterKey[key] ? startAnim : {};
    var interval = (0, _utils.transformArguments)(props.interval, key, i)[1];
    var delay = (0, _utils.transformArguments)(props.delay, key, i)[1];
    var order = props.leaveReverse ? _this5.keysToLeave.length - i - 1 : i;
    var ease = (0, _utils.transformArguments)(props.ease, key, i)[0];
    var duration = (0, _utils.transformArguments)(props.duration, key, i)[0];
    if (Array.isArray(ease)) {
      ease = ease.map(function (num) {
        return num * 100;
      });
      ease = _rcTweenOne2["default"].easing.path('M0,100C' + ease[0] + ',' + (100 - ease[1]) + ',' + ease[2] + ',' + (100 - ease[3]) + ',100,0', { lengthPixel: duration / 16.6667 });
    }
    return [(0, _extends3["default"])({ duration: 0 }, startAnim), (0, _extends3["default"])({
      onStart: _this5.leaveBegin.bind(_this5, key),
      onComplete: _this5.leaveComplete.bind(_this5, key),
      duration: (0, _utils.transformArguments)(props.duration, key, i)[0],
      ease: ease,
      delay: interval * order + delay
    }, leaveAnim)];
  };

  this.getAnimData = function (props, key, i, enterOrLeave, startOrEnd) {
    /*
     * transformArguments 第一个为 enter, 第二个为 leave；
     * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
     * 用 tween-one 的数组来实现老的动画逻辑。。。
     */
    return props.animConfig ? _this5.getTweenAnimConfig((0, _utils.transformArguments)(props.animConfig, key, i)[enterOrLeave], startOrEnd) : _this5.getTweenType((0, _utils.transformArguments)(props.type, key, i)[enterOrLeave], startOrEnd);
  };

  this.performEnter = function (key, i) {
    var interval = (0, _utils.transformArguments)(_this5.props.interval, key, i)[0];
    var delay = (0, _utils.transformArguments)(_this5.props.delay, key, i)[0];
    _this5.placeholderTimeoutIds[key] = _rcTweenOne.ticker.timeout(_this5.performEnterBegin.bind(_this5, key), interval * i + delay);
    if (_this5.keysToEnter.indexOf(key) >= 0) {
      _this5.keysToEnter.splice(_this5.keysToEnter.indexOf(key), 1);
    }
  };

  this.performEnterBegin = function (key) {
    var childrenShow = _this5.state.childrenShow;
    childrenShow[key] = true;
    delete _this5.keysToEnterPaused[key];
    _this5.setState({ childrenShow: childrenShow });
  };

  this.performLeave = function (key) {
    _rcTweenOne.ticker.clear(_this5.placeholderTimeoutIds[key]);
    delete _this5.placeholderTimeoutIds[key];
  };

  this.enterBegin = function (key, e) {
    var elem = e.target;
    var animatingClassName = _this5.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[1], '');
    if (elem.className.indexOf(animatingClassName[0]) === -1) {
      elem.className += '' + (elem.className ? ' ' : '') + animatingClassName[0];
    }
    _this5.isEnterKey[key] = true;
  };

  this.enterComplete = function (key, e) {
    if (_this5.keysToEnterPaused[key]) {
      return;
    }
    var elem = e.target;
    elem.className = elem.className.replace(_this5.props.animatingClassName[0], '').trim();
    _this5.props.onEnd({ key: key, type: 'enter' });
  };

  this.leaveBegin = function (key, e) {
    var elem = e.target;
    var animatingClassName = _this5.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[0], '');
    if (elem.className.indexOf(animatingClassName[1]) === -1) {
      elem.className += ' ' + animatingClassName[1];
    }
  };

  this.leaveComplete = function (key, e) {
    // 切换时同时触发 onComplete。 手动跳出。。。
    if (_this5.keysToEnterToCallback.indexOf(key) >= 0) {
      return;
    }
    var childrenShow = _this5.state.childrenShow;
    delete childrenShow[key];
    if (_this5.keysToLeave.indexOf(key) >= 0) {
      _this5.keysToLeave.splice(_this5.keysToLeave.indexOf(key), 1);
      delete _this5.saveTweenTag[key];
      delete _this5.isEnterKey[key];
    }
    var needLeave = _this5.keysToLeave.some(function (c) {
      return childrenShow[c];
    });
    if (!needLeave) {
      var currentChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this5.props));
      _this5.setState({
        children: currentChildren,
        childrenShow: childrenShow
      });
    }
    var elem = e.target;
    elem.className = elem.className.replace(_this5.props.animatingClassName[1], '').trim();
    _this5.props.onEnd({ key: key, type: 'leave' });
  };
};

QueueAnim.propTypes = {
  component: _propTypes2["default"].any,
  interval: _propTypes2["default"].any,
  duration: _propTypes2["default"].any,
  delay: _propTypes2["default"].any,
  type: _propTypes2["default"].any,
  animConfig: _propTypes2["default"].any,
  ease: _propTypes2["default"].any,
  leaveReverse: _propTypes2["default"].bool,
  enterForcedRePlay: _propTypes2["default"].bool,
  animatingClassName: _propTypes2["default"].array,
  onEnd: _propTypes2["default"].func,
  appear: _propTypes2["default"].bool
};

QueueAnim.defaultProps = {
  component: 'div',
  interval: 100,
  duration: 450,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: 'easeOutQuart',
  leaveReverse: false,
  enterForcedRePlay: false,
  animatingClassName: ['queue-anim-entering', 'queue-anim-leaving'],
  onEnd: noop,
  appear: true
};

exports["default"] = QueueAnim;
module.exports = exports['default'];

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  left: {
    opacity: [1, 0],
    translateX: [0, -30]
  },
  top: {
    opacity: [1, 0],
    translateY: [0, -30]
  },
  right: {
    opacity: [1, 0],
    translateX: [0, 30]
  },
  bottom: {
    opacity: [1, 0],
    translateY: [0, 30]
  },
  alpha: {
    opacity: [1, 0]
  },
  scale: {
    opacity: [1, 0],
    scale: [1, 0]
  },
  scaleBig: {
    opacity: [1, 0],
    scale: [1, 2]
  },
  scaleX: {
    opacity: [1, 0],
    scaleX: [1, 0]
  },
  scaleY: {
    opacity: [1, 0],
    scaleY: [1, 0]
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _QueueAnim = __webpack_require__(756);

var _QueueAnim2 = _interopRequireDefault(_QueueAnim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_QueueAnim2["default"].isQueueAnim = true; // export this package's api
exports["default"] = _QueueAnim2["default"];
module.exports = exports['default'];

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArrayChildren = toArrayChildren;
exports.findChildInChildrenByKey = findChildInChildrenByKey;
exports.mergeChildren = mergeChildren;
exports.transformArguments = transformArguments;
exports.getChildrenFromProps = getChildrenFromProps;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toArrayChildren(children) {
  var ret = [];
  _react2["default"].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (c) {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  var ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey = void 0;
  prev.forEach(function (c) {
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });
  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }
  next.forEach(function (c) {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });

  return ret;
}

function transformArguments(arg, key, i) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg({
      key: key,
      index: i
    });
  } else {
    result = arg;
  }
  if (Array.isArray(result) && result.length === 2) {
    return result;
  }
  return [result, result];
}

function getChildrenFromProps(props) {
  return props && props.children;
}

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _easing = __webpack_require__(741);

var _easing2 = _interopRequireDefault(_easing);

var _plugins = __webpack_require__(733);

var _plugins2 = _interopRequireDefault(_plugins);

var _StylePlugin = __webpack_require__(763);

var _StylePlugin2 = _interopRequireDefault(_StylePlugin);

var _styleUtils = __webpack_require__(734);

var _util = __webpack_require__(727);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_EASING = 'easeInOutQuad'; /* eslint-disable func-names */
/**
 * Created by jljsj on 16/1/27.
 */

var DEFAULT_DURATION = 450;
var DEFAULT_DELAY = 0;
function noop() {}
_plugins2["default"].push(_StylePlugin2["default"]);
// 设置默认数据
function defaultData(vars, now) {
  return {
    duration: vars.duration || vars.duration === 0 ? vars.duration : DEFAULT_DURATION,
    delay: vars.delay || DEFAULT_DELAY,
    ease: typeof vars.ease === 'function' ? vars.ease : _easing2["default"][vars.ease || DEFAULT_EASING],
    onUpdate: vars.onUpdate || noop,
    onComplete: vars.onComplete || noop,
    onStart: vars.onStart || noop,
    onRepeat: vars.onRepeat || noop,
    repeat: vars.repeat || 0,
    repeatDelay: vars.repeatDelay || 0,
    yoyo: vars.yoyo || false,
    type: vars.type || 'to',
    initTime: now,
    appearTo: typeof vars.appearTo === 'number' ? vars.appearTo : null
  };
}

var timeLine = function timeLine(target, toData, props) {
  this.target = target;
  this.attr = props.attr || 'style';
  this.willChange = props.willChange;
  // 记录总时间;
  this.totalTime = 0;
  // 记录当前时间;
  this.progressTime = 0;
  // 记录时间轴数据;
  this.defaultData = [];
  // 每个的开始数据；
  this.start = {};
  // 记录动画开始;
  this.onStart = {};
  // 开始默认的数据；
  this.startDefaultData = {};
  // 动画过程
  this.tween = {};
  // toData;
  this.data = toData;
  // 每帧的时间;
  this.perFrame = Math.round(1000 / 60);
  // 注册，第一次进入执行注册
  this.register = false;
  // 设置 style
  var data = this.setAttrIsStyle();
  // 设置默认动画数据;
  this.setDefaultData(data);
};
var p = timeLine.prototype;
p.setAttrIsStyle = function () {
  var _this = this;

  var data = [];
  this.data.forEach(function (d, i) {
    var _d = (0, _extends3["default"])({}, d);
    if (_this.attr === 'style') {
      data[i] = {};
      Object.keys(_d).forEach(function (key) {
        if (key in defaultData({}, 0)) {
          data[i][key] = _d[key];
          delete _d[key];
        }
      });
      data[i].style = _d;
      _this.startDefaultData.style = _this.target.getAttribute('style');
    } else if (_this.attr === 'attr') {
      Object.keys(_d).forEach(function (key) {
        if (key === 'style' && Array.isArray(d[key])) {
          throw new Error('Style should be the object.');
        }
        if (key === 'bezier') {
          _d.style = (0, _extends3["default"])({}, _d.style, { bezier: _d[key] });
          delete _d[key];
          _this.startDefaultData.style = _this.target.getAttribute('style');
        } else {
          _this.startDefaultData[key] = _this.target.getAttribute(key);
        }
      });
      data[i] = _d;
    }
  });
  return data;
};
p.setDefaultData = function (_vars) {
  var _this2 = this;

  var now = 0;
  var repeatMax = false;
  var data = _vars.map(function (item) {
    var appearToBool = typeof item.appearTo === 'number';
    // 加上延时，在没有播放过时；
    if (!appearToBool) {
      now += item.delay || 0;
    }
    var appearToTime = (item.appearTo || 0) + (item.delay || 0);
    // 获取默认数据
    var tweenData = defaultData(item, appearToBool ? appearToTime : now);
    tweenData.vars = {};
    Object.keys(item).forEach(function (_key) {
      if (!(_key in tweenData)) {
        var _data = item[_key];
        if (_key in _plugins2["default"]) {
          tweenData.vars[_key] = new _plugins2["default"][_key](_this2.target, _data, tweenData.type);
        } else if (_key.match(/color/i) || _key === 'stroke' || _key === 'fill') {
          tweenData.vars[_key] = { type: 'color', vars: (0, _styleUtils.parseColor)(_data) };
        } else if (typeof _data === 'number' || _data.split(/[,|\s]/g).length <= 1) {
          var vars = parseFloat(_data);
          var unit = _data.toString().replace(/[^a-z|%]/g, '');
          var count = _data.toString().replace(/[^+|=|-]/g, '');
          tweenData.vars[_key] = { unit: unit, vars: vars, count: count };
        } else if ((_key === 'd' || _key === 'points') && 'SVGMorph' in _plugins2["default"]) {
          tweenData.vars[_key] = new _plugins2["default"].SVGMorph(_this2.target, _data, _key);
        }
      }
    });
    if (tweenData.yoyo && !tweenData.repeat) {
      console.warn('Warning: yoyo must be used together with repeat;'); // eslint-disable-line
    }
    if (tweenData.repeat === -1) {
      repeatMax = true;
    }
    var repeat = tweenData.repeat === -1 ? 0 : tweenData.repeat;
    if (appearToBool) {
      // 如果有 appearTo 且这条时间比 now 大时，，总时间用这条；
      var appearNow = item.appearTo + (item.delay || 0) + tweenData.duration * (repeat + 1) + tweenData.repeatDelay * repeat;
      now = appearNow >= now ? appearNow : now;
    } else {
      if (tweenData.delay < -tweenData.duration) {
        // 如果延时小于 负时间时,,不加,再减回延时;
        now -= tweenData.delay;
      } else {
        // repeat 为 -1 只记录一次。不能跟 reverse 同时使用;
        now += tweenData.duration * (repeat + 1) + tweenData.repeatDelay * repeat;
      }
    }
    tweenData.mode = '';
    return tweenData;
  });
  this.totalTime = repeatMax ? Number.MAX_VALUE : now;
  this.defaultData = data;
};
p.getComputedStyle = function () {
  return document.defaultView ? document.defaultView.getComputedStyle(this.target) : {};
};
p.getAnimStartData = function (item) {
  var _this3 = this;

  var start = {};
  this.computedStyle = this.computedStyle || this.getComputedStyle();
  Object.keys(item).forEach(function (_key) {
    if (_key in _plugins2["default"] || _this3.attr === 'attr' && (_key === 'd' || _key === 'points')) {
      start[_key] = item[_key].getAnimStart(_this3.computedStyle, _this3.willChange);
      return;
    }
    if (_this3.attr === 'attr') {
      // 除了d和这points外的标签动画；
      var attribute = _this3.target.getAttribute(_key);
      var data = attribute === 'null' || !attribute ? 0 : attribute;
      if (_key.match(/color/i) || _key === 'stroke' || _key === 'fill') {
        data = !data && _key === 'stroke' ? 'rgba(255, 255, 255, 0)' : data;
        data = (0, _styleUtils.parseColor)(data);
        start[_key] = data;
      } else if (parseFloat(data) || parseFloat(data) === 0 || data === 0) {
        var unit = data.toString().replace(/[^a-z|%]/g, '');
        start[_key] = unit !== item[_key].unit ? (0, _util.startConvertToEndUnit)(_this3.target, _key, parseFloat(data), unit, item[_key].unit) : parseFloat(data);
      }
      return;
    }
    start[_key] = _this3.target[_key] || 0;
  });
  return start;
};
p.setAnimData = function (data) {
  var _this4 = this;

  Object.keys(data).forEach(function (key) {
    if (key in _plugins2["default"] || _this4.attr === 'attr' && (key === 'd' || key === 'points')) {
      return;
    }
    _this4.target[key] = data[key];
  });
};
p.setRatio = function (ratio, endData, i) {
  var _this5 = this;

  Object.keys(endData.vars).forEach(function (_key) {
    if (_key in _plugins2["default"] || _this5.attr === 'attr' && (_key === 'd' || _key === 'points')) {
      endData.vars[_key].setRatio(ratio, _this5.tween);
      return;
    }
    var endVars = endData.vars[_key];
    var startVars = _this5.start[i][_key];
    var data = void 0;
    if (_this5.attr === 'attr') {
      // 除了d和这points外的标签动画；
      if (!endVars.type) {
        data = endVars.unit.charAt(1) === '=' ? startVars + endVars.vars * ratio + endVars.unit : (endVars.vars - startVars) * ratio + startVars + endVars.unit;
        _this5.target.setAttribute(_key, data);
      } else if (endVars.type === 'color') {
        if (endVars.vars.length === 3 && startVars.length === 4) {
          endVars.vars[3] = 1;
        }
        data = endVars.vars.map(function (_endData, _i) {
          var startData = startVars[_i] || 0;
          return (_endData - startData) * ratio + startData;
        });
        _this5.target.setAttribute(_key, (0, _styleUtils.getColor)(data));
      }
    }
  });
  this.setAnimData(this.tween);
};
p.render = function () {
  var _this6 = this;

  this.defaultData.forEach(function (item, i) {
    var initTime = item.initTime;
    var duration = (0, _styleUtils.toFixed)(item.duration);
    // 处理 yoyo 和 repeat; yoyo 是在时间轴上的, 并不是倒放
    var repeatNum = Math.ceil((_this6.progressTime - initTime) / (duration + item.repeatDelay)) - 1;
    repeatNum = repeatNum < 0 ? 0 : repeatNum;
    if (item.repeat) {
      if (item.repeat < repeatNum && item.repeat !== -1) {
        return;
      }
      if (item.repeat || item.repeat <= repeatNum) {
        initTime = initTime + repeatNum * (duration + item.repeatDelay);
      }
    }
    var startData = item.yoyo && repeatNum % 2 || item.type === 'from' ? 1 : 0;
    var endData = item.yoyo && repeatNum % 2 || item.type === 'from' ? 0 : 1;
    //  精度损失，只取小数点后10位。
    var progressTime = (0, _styleUtils.toFixed)(_this6.progressTime - initTime);

    var ratio = void 0;

    // 开始注册;
    // from 时需先执行参数位置;
    var fromDelay = item.type === 'from' ? item.delay : 0;
    if (progressTime + fromDelay >= 0) {
      if (!_this6.start[i]) {
        // 设置 start
        _this6.start[i] = _this6.getAnimStartData(item.vars);
        if (progressTime < _this6.perFrame) {
          ratio = !item.duration && !item.delay ? item.ease(1, startData, endData, 1) : item.ease(0, startData, endData, 1);
          _this6.setRatio(ratio, item, i);
        } else if (progressTime > duration) {
          ratio = item.ease(1, startData, endData, 1);
          _this6.setRatio(ratio, item, i);
        }
        if (!_this6.register) {
          _this6.register = true;
          if (progressTime === 0) {
            return;
          }
        }
      }
    }

    var e = {
      index: i,
      target: _this6.target
    };

    if (progressTime >= 0 && !(progressTime > duration && item.mode === 'onComplete')) {
      var updateAnim = _this6.updateAnim === 'update';
      if (progressTime >= duration) {
        ratio = item.ease(1, startData, endData, 1);
        _this6.setRatio(ratio, item, i);
        if (item.mode !== 'reset' && !updateAnim) {
          item.onComplete(e);
        }
        item.mode = 'onComplete';
      } else if (progressTime < _this6.perFrame) {
        ratio = item.ease(0, startData, endData, 1);
        _this6.setRatio(ratio, item, i);
        // 将第一帧作动画开始 start;
        if (!updateAnim) {
          if (item.repeat && repeatNum > 0) {
            item.mode = 'onRepeat';
            item.onRepeat((0, _extends3["default"])({}, e, { repeatNum: repeatNum }));
          } else {
            item.mode = 'onStart';
            item.onStart(e);
          }
        }
      } else if (progressTime > 0 && progressTime < duration) {
        item.mode = 'onUpdate';
        ratio = item.ease(progressTime, startData, endData, duration);
        _this6.setRatio(ratio, item, i);
        if (!updateAnim) {
          item.onUpdate((0, _extends3["default"])({ ratio: ratio }, e));
        }
      }
      if (!updateAnim) {
        _this6.onChange((0, _extends3["default"])({
          moment: _this6.progressTime,
          mode: item.mode
        }, e));
      }
    }
  });
};
// 播放帧
p.frame = function (moment) {
  this.progressTime = moment;
  this.render();
};
p.resetAnimData = function () {
  this.tween = {};
  this.start = {};
  this.onStart = {};
};

p.resetDefaultStyle = function () {
  var _this7 = this;

  this.tween = {};
  this.defaultData = this.defaultData.map(function (item) {
    item.mode = 'reset';
    return item;
  });
  Object.keys(this.startDefaultData).forEach(function (key) {
    if (!(key in defaultData({}, 0))) {
      _this7.target.setAttribute(key, _this7.startDefaultData[key]);
    }
  });
};

p.reStart = function (style) {
  var _this8 = this;

  this.start = {};
  Object.keys(style).forEach(function (key) {
    _this8.target.style[key] = (0, _styleUtils.stylesToCss)(key, style[key]);
  });
  this.setAttrIsStyle();
  this.resetDefaultStyle();
};

p.onChange = noop;
exports["default"] = timeLine;
module.exports = exports['default'];

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TweenOne = __webpack_require__(740);

var _TweenOne2 = _interopRequireDefault(_TweenOne);

var _util = __webpack_require__(727);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var TweenOneGroup = function (_Component) {
  (0, _inherits3["default"])(TweenOneGroup, _Component);

  function TweenOneGroup() {
    (0, _classCallCheck3["default"])(this, TweenOneGroup);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));

    _initialiseProps.call(_this);

    _this.keysToEnter = [];
    _this.keysToLeave = [];
    _this.saveTweenTag = {};
    _this.onEnterBool = false;
    _this.isTween = {};
    // 第一进入，appear 为 true 时默认用 enter 或 tween-one 上的效果
    var children = (0, _util.toArrayChildren)((0, _util.getChildrenFromProps)(_this.props));
    _this.state = {
      children: children
    };
    return _this;
  }

  TweenOneGroup.prototype.componentDidMount = function componentDidMount() {
    this.onEnterBool = true;
  };

  TweenOneGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var nextChildren = (0, _util.toArrayChildren)(nextProps.children);
    var currentChildren = (0, _util.toArrayChildren)(this.state.children);
    var newChildren = (0, _util.mergeChildren)(currentChildren, nextChildren);

    this.keysToEnter = [];
    this.keysToLeave = [];
    nextChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasPrev = (0, _util.findChildInChildrenByKey)(currentChildren, key);
      // 如果当前 key 已存在 saveTweenTag 里，，刷新 child;
      if (_this2.saveTweenTag[key]) {
        _this2.saveTweenTag[key] = _react2["default"].cloneElement(_this2.saveTweenTag[key], {}, c);
      }
      if (!hasPrev && key) {
        _this2.keysToEnter.push(key);
      }
    });

    currentChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasNext = (0, _util.findChildInChildrenByKey)(nextChildren, key);
      if (!hasNext && key) {
        _this2.keysToLeave.push(key);
        delete _this2.saveTweenTag[key];
      }
    });
    this.setState({
      children: newChildren
    });
  };

  TweenOneGroup.prototype.render = function render() {
    var childrenToRender = this.getChildrenToRender(this.state.children);
    if (!this.props.component) {
      return childrenToRender[0] || null;
    }
    var componentProps = (0, _extends3["default"])({}, this.props);
    ['component', 'appear', 'enter', 'leave', 'animatingClassName', 'onEnd', 'resetStyleBool', 'willChange'].forEach(function (key) {
      return delete componentProps[key];
    });
    return (0, _react.createElement)(this.props.component, componentProps, childrenToRender);
  };

  return TweenOneGroup;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (animation, key, type, obj) {
    var length = (0, _util.dataToArray)(animation).length;
    var animatingClassName = _this3.props.animatingClassName;
    var tag = obj.target;
    var isEnter = type === 'enter' || type === 'appear';
    if (obj.mode === 'onStart') {
      tag.className = tag.className.replace(animatingClassName[isEnter ? 1 : 0], '').trim();
      if (tag.className.indexOf(animatingClassName[isEnter ? 0 : 1]) === -1) {
        tag.className = (tag.className + ' ' + animatingClassName[isEnter ? 0 : 1]).trim();
      }
    } else if (obj.index === length - 1 && obj.mode === 'onComplete') {
      if (type === 'enter') {
        _this3.keysToEnter.splice(_this3.keysToEnter.indexOf(key), 1);
      } else if (type === 'leave') {
        var children = _this3.state.children.filter(function (child) {
          return key !== child.key;
        });
        _this3.keysToLeave.splice(_this3.keysToLeave.indexOf(key), 1);
        delete _this3.saveTweenTag[key];
        _this3.setState({
          children: children
        });
      }
      tag.className = tag.className.replace(animatingClassName[isEnter ? 0 : 1], '').trim();
      delete _this3.isTween[key];
      var _obj = { key: key, type: type };
      _this3.props.onEnd(_obj);
    }
  };

  this.getTweenChild = function (child) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var key = child.key;
    _this3.saveTweenTag[key] = _react2["default"].createElement(_TweenOne2["default"], (0, _extends3["default"])({}, props, {
      key: key,
      component: null
    }), child);
    return _this3.saveTweenTag[key];
  };

  this.getCoverAnimation = function (child, i, type) {
    var animation = void 0;
    var onChange = void 0;
    animation = type === 'leave' ? _this3.props.leave : _this3.props.enter;
    if (type === 'appear') {
      var appear = (0, _util.transformArguments)(_this3.props.appear, child.key, i);
      animation = appear && _this3.props.enter || null;
    }
    onChange = _this3.onChange.bind(_this3, animation, child.key, type);
    var animate = (0, _util.transformArguments)(animation, child.key, i);
    var props = {
      willChange: _this3.props.willChange,
      key: child.key,
      animation: animate,
      onChange: onChange,
      resetStyleBool: _this3.props.resetStyleBool
    };
    var children = _this3.getTweenChild(child, props);
    if (_this3.keysToEnter.concat(_this3.keysToLeave).indexOf(child.key) >= 0 || !_this3.onEnterBool && animation) {
      _this3.isTween[child.key] = type;
    }
    return children;
  };

  this.getChildrenToRender = function (children) {
    return children.map(function (child, i) {
      if (!child || !child.key) {
        return child;
      }
      var key = child.key;

      if (_this3.keysToLeave.indexOf(key) >= 0) {
        return _this3.getCoverAnimation(child, i, 'leave');
      } else if (_this3.keysToEnter.indexOf(key) >= 0 || _this3.isTween[key] && _this3.keysToLeave.indexOf(key) === -1) {
        return _this3.getCoverAnimation(child, i, 'enter');
      } else if (!_this3.onEnterBool) {
        return _this3.getCoverAnimation(child, i, 'appear');
      }
      return _this3.saveTweenTag[key];
    });
  };
};

TweenOneGroup.propTypes = {
  component: _propTypes2["default"].any,
  children: _propTypes2["default"].any,
  style: _propTypes2["default"].object,
  appear: _propTypes2["default"].bool,
  enter: _propTypes2["default"].any,
  leave: _propTypes2["default"].any,
  animatingClassName: _propTypes2["default"].array,
  onEnd: _propTypes2["default"].func,
  willChange: _propTypes2["default"].bool,
  resetStyleBool: _propTypes2["default"].bool
};

TweenOneGroup.defaultProps = {
  component: 'div',
  appear: true,
  animatingClassName: ['tween-one-entering', 'tween-one-leaving'],
  enter: { x: 50, opacity: 0, type: 'from' },
  leave: { x: -50, opacity: 0 },
  onEnd: noop,
  willChange: true,
  resetStyleBool: true
};
TweenOneGroup.isTweenOneGroup = true;
exports["default"] = TweenOneGroup;
module.exports = exports['default'];

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TweenOne = __webpack_require__(740);
TweenOne.TweenOneGroup = __webpack_require__(761);
TweenOne.easing = __webpack_require__(741);
TweenOne.plugins = __webpack_require__(733);
TweenOne.ticker = __webpack_require__(742);
TweenOne.isTweenOne = true;
module.exports = TweenOne;

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _styleUtils = __webpack_require__(734);

var _styleUtils2 = _interopRequireDefault(_styleUtils);

var _util = __webpack_require__(727);

var _plugins = __webpack_require__(733);

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StylePlugin = function StylePlugin(target, vars, type) {
  this.target = target;
  this.vars = vars;
  this.type = type;
  this.propsData = {};
  this.setDefaultData();
}; /* eslint-disable func-names, no-console */

var p = StylePlugin.prototype = {
  name: 'style'
};
p.getTweenData = function (key, vars) {
  var data = {
    data: {},
    dataType: {},
    dataUnit: {},
    dataCount: {},
    dataSplitStr: {}
  };
  if (key.match(/colo|fill|storker/i)) {
    data.data[key] = (0, _styleUtils.parseColor)(vars);
    data.dataType[key] = 'color';
  } else if (key.match(/shadow/i)) {
    data.data[key] = (0, _styleUtils.parseShadow)(vars);
    data.dataType[key] = 'shadow';
  } else if (typeof vars === 'string' && vars.split(/[\s|,]/).length > 1) {
    data.data[key] = vars.split(/[\s|,]/);
    data.dataSplitStr[key] = vars.replace(/[^\s|,]/g, '');
    data.dataType[key] = 'string';
  } else {
    data.data[key] = vars;
    data.dataType[key] = 'other';
  }
  if (Array.isArray(data.data[key])) {
    data.dataUnit[key] = data.data[key].map(function (_item) {
      return _item.toString().replace(/[^a-z|%]/g, '');
    });
    data.dataCount[key] = data.data[key].map(function (_item) {
      return _item.toString().replace(/[^+|=|-]/g, '');
    });

    data.data[key] = data.data[key].map(function (_item) {
      return !parseFloat(_item) && parseFloat(_item) !== 0 ? _item : parseFloat(_item);
    });
  } else {
    data.dataUnit[key] = data.data[key].toString().replace(/[^a-z|%]/g, '');
    data.dataCount[key] = data.data[key].toString().replace(/[^+|=|-]/g, '');
    var d = parseFloat(data.data[key].toString().replace(/[a-z|%|=]/g, ''));
    data.data[key] = !d && d !== 0 ? data.data[key] : d;
  }
  return data;
};
p.setDefaultData = function () {
  var _this = this;

  this.propsData.data = {};
  this.propsData.dataType = {};
  this.propsData.dataUnit = {};
  this.propsData.dataCount = {};
  this.propsData.dataSplitStr = {};
  Object.keys(this.vars).forEach(function (_key) {
    if (_key in _plugins2["default"]) {
      _this.propsData.data[_key] = new _plugins2["default"][_key](_this.target, _this.vars[_key]);
      return;
    }
    var key = (0, _styleUtils.getGsapType)(_key);
    var _data = _this.getTweenData(key, _this.vars[_key]);
    _this.propsData.data[key] = _data.data[key];
    _this.propsData.dataType[key] = _data.dataType[key];
    _this.propsData.dataUnit[key] = _data.dataUnit[key];
    _this.propsData.dataCount[key] = _data.dataCount[key];
    if (_data.dataSplitStr[key]) {
      _this.propsData.dataSplitStr[key] = _data.dataSplitStr[key];
    }
  });
};
p.convertToMarksArray = function (unit, key, data, i) {
  var startUnit = data.toString().replace(/[^a-z|%]/g, '');
  var endUnit = unit[i];
  if (startUnit === endUnit) {
    return parseFloat(data);
  } else if (!parseFloat(data) && parseFloat(data) !== 0) {
    return data;
  }
  return (0, _util.startConvertToEndUnit)(this.target, key, data, startUnit, endUnit, null, key === 'transformOrigin' && !i);
};
p.getAnimStart = function (computedStyle, willChangeBool) {
  var _this2 = this;

  var style = {};
  this.supports3D = (0, _styleUtils.checkStyleName)('perspective');
  var willChangeArray = void 0;
  if (willChangeBool) {
    this.willChange = computedStyle.willChange === 'auto' || !computedStyle.willChange || computedStyle.willChange === 'none' ? '' : computedStyle.willChange;
    willChangeArray = this.willChange.split(',').filter(function (k) {
      return k;
    });
  }
  Object.keys(this.propsData.data).forEach(function (key) {
    var cssName = (0, _styleUtils.isConvert)(key);
    if (willChangeBool) {
      var willStyle = key in _plugins2["default"] ? _this2.propsData.data[key].useStyle || cssName : cssName;
      if (willChangeArray.indexOf(willStyle) === -1 && (willStyle in computedStyle || key in _plugins2["default"])) {
        willChangeArray.push(willStyle.replace(/([A-Z])/g, '-$1').toLocaleLowerCase());
      }
      _this2.willChange = willChangeArray.join(',');
    }
    var startData = computedStyle[cssName];
    var fixed = computedStyle.position === 'fixed';
    if (!startData || startData === 'none' || startData === 'auto') {
      startData = '';
    }
    var transform = void 0;
    var endUnit = void 0;
    var startUnit = void 0;
    if (key in _plugins2["default"]) {
      if (key === 'bezier') {
        _this2.transform = (0, _styleUtils.checkStyleName)('transform');
        startData = computedStyle[_this2.transform];
        style.transform = style.transform || (0, _styleUtils.getTransform)(startData);
      }
      _this2.propsData.data[key].getAnimStart(computedStyle);
    } else if (cssName === 'transform') {
      _this2.transform = (0, _styleUtils.checkStyleName)('transform');
      startData = computedStyle[_this2.transform];
      endUnit = _this2.propsData.dataUnit[key];
      transform = style.transform || (0, _styleUtils.getTransform)(startData);
      if (endUnit && endUnit.match(/%|vw|vh|em|rem/i)) {
        var percent = key === 'translateX' ? 'xPercent' : 'yPercent';
        transform[percent] = (0, _util.startConvertToEndUnit)(_this2.target, key, transform[key], null, endUnit);
        transform[key] = 0;
      }
      style.transform = transform;
    } else if (cssName === 'filter') {
      _this2.filterName = (0, _styleUtils.checkStyleName)('filter') || 'filter';
      startData = computedStyle[_this2.filterName];
      _this2.filterObject = (0, _extends3["default"])({}, _this2.filterObject, (0, _styleUtils.splitFilterToObject)(startData));
      startData = _this2.filterObject[key] || 0;
      startUnit = startData.toString().replace(/[^a-z|%]/g, '');
      endUnit = _this2.propsData.dataUnit[key];
      if (endUnit !== startUnit) {
        startData = (0, _util.startConvertToEndUnit)(_this2.target, cssName, parseFloat(startData), startUnit, endUnit, fixed);
      }
      style[key] = parseFloat(startData);
    } else if (key.match(/color|fill/i) || key === 'stroke') {
      startData = !startData && key === 'stroke' ? 'rgba(255, 255, 255, 0)' : startData;
      style[cssName] = (0, _styleUtils.parseColor)(startData);
    } else if (key.match(/shadow/i)) {
      startData = (0, _styleUtils.parseShadow)(startData);
      endUnit = _this2.propsData.dataUnit[key];
      startData = startData.map(_this2.convertToMarksArray.bind(_this2, endUnit, key));
      style[cssName] = startData;
    } else if (Array.isArray(_this2.propsData.data[key])) {
      startData = startData.split(/[\s|,]/);
      endUnit = _this2.propsData.dataUnit[key];
      startData = startData.map(_this2.convertToMarksArray.bind(_this2, endUnit, key));
      style[cssName] = startData;
    } else {
      // 计算单位
      endUnit = _this2.propsData.dataUnit[cssName];
      startUnit = startData.toString().replace(/[^a-z|%]/g, '');
      if (endUnit !== startUnit) {
        startData = (0, _util.startConvertToEndUnit)(_this2.target, cssName, parseFloat(startData), startUnit, endUnit, fixed);
      }
      style[cssName] = parseFloat(startData || 0);
    }
  });
  this.start = style;
  return style;
};
p.setArrayRatio = function (ratio, start, vars, unit, type) {
  if (type === 'color' && start.length === 4 && vars.length === 3) {
    vars[3] = 1;
  }
  var startInset = start.indexOf('inset') >= 0;
  var endInset = vars.indexOf('inset') >= 0;
  if (startInset && !endInset || endInset && !startInset) {
    throw console.error('Error: "box-shadow" inset have to exist');
  }
  var length = endInset ? 9 : 8;
  if (start.length === length && vars.length === length - 1) {
    vars.splice(3, 0, 0);
    unit.splice(3, 0, '');
  } else if (vars.length === length && start.length === length - 1) {
    start.splice(3, 0, 0);
  }
  var _vars = vars.map(function (endData, i) {
    var startIsAlpha = type === 'color' && i === 3 && !start[i] ? 1 : 0;
    var startData = typeof start[i] === 'number' ? start[i] : startIsAlpha;
    if (typeof endData === 'string') {
      return endData;
    }
    return (endData - startData) * ratio + startData + (unit[i] || 0);
  });
  if (type === 'color') {
    return (0, _styleUtils.getColor)(_vars);
  } else if (type === 'shadow') {
    var l = _vars.length === length ? 4 : 3;
    var s = _vars.slice(0, l).map(function (item) {
      if (typeof item === 'number') {
        return item + 'px';
      }
      return item;
    });
    var c = _vars.slice(l, endInset ? _vars.length - 1 : _vars.length);
    var color = (0, _styleUtils.getColor)(c);
    return (s.join(' ') + ' ' + color + ' ' + (endInset ? 'inset' : '')).trim();
  }
  return _vars;
};

p.setRatio = function (ratio, tween) {
  var _this3 = this;

  tween.style = tween.style || {};
  if (this.start.transform) {
    tween.style.transform = tween.style.transform || (0, _extends3["default"])({}, this.start.transform);
  }
  var style = this.target.style;
  if (this.willChange) {
    if (ratio === (this.type === 'from' ? 0 : 1)) {
      style.willChange = null;
    } else {
      style.willChange = this.willChange;
    }
  }
  Object.keys(this.propsData.data).forEach(function (key) {
    var _isTransform = (0, _styleUtils.isTransform)(key) === 'transform';
    var startVars = _isTransform ? _this3.start.transform[key] : _this3.start[key];
    var endVars = _this3.propsData.data[key];
    var unit = _this3.propsData.dataUnit[key];
    var count = _this3.propsData.dataCount[key];
    if (key in _plugins2["default"]) {
      _this3.propsData.data[key].setRatio(ratio, tween);
      if (key === 'bezier') {
        style[_this3.transform] = (0, _util.getTransformValue)(tween.style.transform, _this3.supports3D);
      } else {
        Object.keys(tween.style).forEach(function (css) {
          return style[css] = tween.style[css];
        });
      }
      return;
    } else if (_isTransform) {
      if (unit && unit.match(/%|vw|vh|em|rem/i)) {
        var pName = key === 'translateX' ? 'xPercent' : 'yPercent';
        startVars = _this3.start.transform[pName];
        if (count.charAt(1) === '=') {
          tween.style.transform[pName] = startVars + endVars * ratio + unit;
        } else {
          tween.style.transform[pName] = (endVars - startVars) * ratio + startVars + unit;
        }
      } else if (key === 'scale') {
        var xStart = _this3.start.transform.scaleX;
        var yStart = _this3.start.transform.scaleY;
        if (count.charAt(1) === '=') {
          tween.style.transform.scaleX = xStart + endVars * ratio;
          tween.style.transform.scaleY = yStart + endVars * ratio;
        } else {
          tween.style.transform.scaleX = (endVars - xStart) * ratio + xStart;
          tween.style.transform.scaleY = (endVars - yStart) * ratio + yStart;
        }
      }
      if (count.charAt(1) === '=') {
        tween.style.transform[key] = startVars + endVars * ratio;
      } else {
        tween.style.transform[key] = (endVars - startVars) * ratio + startVars;
      }
      style[_this3.transform] = (0, _util.getTransformValue)(tween.style.transform, _this3.supports3D);
      return;
    } else if (Array.isArray(endVars)) {
      var _type = _this3.propsData.dataType[key];
      tween.style[key] = _this3.setArrayRatio(ratio, startVars, endVars, unit, _type);
      if (_type === 'string') {
        tween.style[key] = tween.style[key].join(_this3.propsData.dataSplitStr[key]);
      }
    } else {
      var styleUnit = (0, _styleUtils.stylesToCss)(key, 0);
      styleUnit = typeof styleUnit === 'number' ? '' : styleUnit.replace(/[^a-z|%]/g, '');
      unit = unit || (_styleUtils2["default"].filter.indexOf(key) >= 0 ? '' : styleUnit);
      if (typeof endVars === 'string') {
        tween.style[key] = endVars;
      } else {
        if (count.charAt(1) === '=') {
          tween.style[key] = startVars + endVars * ratio + unit;
        } else {
          tween.style[key] = (endVars - startVars) * ratio + startVars + unit;
        }
      }
    }
    if (_styleUtils2["default"].filter.indexOf(key) >= 0) {
      if (!_this3.filterObject) {
        return;
      }
      _this3.filterObject[key] = tween.style[key];
      var filterStyle = '';
      Object.keys(_this3.filterObject).forEach(function (filterKey) {
        filterStyle += ' ' + filterKey + '(' + _this3.filterObject[filterKey] + ')';
      });
      style[_this3.filterName] = filterStyle.trim();
      return;
    }
    style[key] = tween.style[key];
  });
};
exports["default"] = StylePlugin;
module.exports = exports['default'];

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// t: current time, b: beginning value, _c: final value, d: total duration
var tweenFunctions = {
  linear: function(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
  },
  easeInQuad: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
  easeInCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  easeInQuart: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    } else {
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  easeInQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  easeInSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  easeInCirc: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  easeInElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
  },
  easeInBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  },
  easeInBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  },
  easeOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    if (t < d / 2) {
      v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
      return v * 0.5 + b;
    } else {
      v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
      return v * 0.5 + c * 0.5 + b;
    }
  }
};

module.exports = tweenFunctions;


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var getPrototypeOfExists = typeof Object.getPrototypeOf === 'function';
var promiseExists = typeof Promise === 'function';
var globalObject = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self; // eslint-disable-line
var isDom = 'location' in globalObject && 'document' in globalObject;
var htmlElementExists = typeof HTMLElement !== 'undefined';
var isArrayExists = typeof Array.isArray === 'function';
var symbolExists = typeof Symbol !== 'undefined';
var mapExists = typeof Map !== 'undefined';
var setExists = typeof Set !== 'undefined';
var weakMapExists = typeof WeakMap !== 'undefined';
var weakSetExists = typeof WeakSet !== 'undefined';
var dataViewExists = typeof DataView !== 'undefined';
var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
var setIteratorPrototype = getPrototypeOfExists && setEntriesExists && Object.getPrototypeOf(new Set().entries());
var mapIteratorPrototype = getPrototypeOfExists && mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var stringIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var toStringLeftSliceLength = 8;
var toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
module.exports = function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (isArrayExists && Array.isArray(obj)) {
    return 'Array';
  }

  if (isDom) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (obj === globalObject.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (obj === globalObject.document) {
      return 'Document';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
     * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
     *  - IE <=10 === "[object MSMimeTypesCollection]"
     */
    if (obj === (globalObject.navigator || {}).mimeTypes) {
      return 'MimeTypeArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
     * Test: `Object.prototype.toString.call(navigator.plugins)``
     *  - IE <=10 === "[object MSPluginsCollection]"
     */
    if (obj === (globalObject.navigator || {}).plugins) {
      return 'PluginArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
     * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
     *  - IE <=10 === "[object HTMLBlockElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'BLOCKQUOTE') {
      return 'HTMLQuoteElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltabledatacellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('td'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TD') {
      return 'HTMLTableDataCellElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltableheadercellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('th'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TH') {
      return 'HTMLTableHeaderCellElement';
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  if (getPrototypeOfExists) {
    var objPrototype = Object.getPrototypeOf(obj);
    /* ! Speed optimisation
    * Pre:
    *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
    *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
    * Post:
    *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
    *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
    */
    if (objPrototype === RegExp.prototype) {
      return 'RegExp';
    }

    /* ! Speed optimisation
    * Pre:
    *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
    * Post:
    *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
    */
    if (objPrototype === Date.prototype) {
      return 'Date';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
     * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
     * Test: `Object.prototype.toString.call(Promise.resolve())``
     *  - Chrome <=47 === "[object Object]"
     *  - Edge <=20 === "[object Object]"
     *  - Firefox 29-Latest === "[object Promise]"
     *  - Safari 7.1-Latest === "[object Promise]"
     */
    if (promiseExists && objPrototype === Promise.prototype) {
      return 'Promise';
    }

    /* ! Speed optimisation
    * Pre:
    *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
    * Post:
    *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
    */
    if (setExists && objPrototype === Set.prototype) {
      return 'Set';
    }

    /* ! Speed optimisation
    * Pre:
    *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
    * Post:
    *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
    */
    if (mapExists && objPrototype === Map.prototype) {
      return 'Map';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
    * Post:
    *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
    */
    if (weakSetExists && objPrototype === WeakSet.prototype) {
      return 'WeakSet';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
    * Post:
    *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
    */
    if (weakMapExists && objPrototype === WeakMap.prototype) {
      return 'WeakMap';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
     * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
     * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
     *  - Edge <=13 === "[object Object]"
     */
    if (dataViewExists && objPrototype === DataView.prototype) {
      return 'DataView';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
     * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
     * Test: `Object.prototype.toString.call(new Map().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (mapExists && objPrototype === mapIteratorPrototype) {
      return 'Map Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
     * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
     * Test: `Object.prototype.toString.call(new Set().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (setExists && objPrototype === setIteratorPrototype) {
      return 'Set Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
     * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
     * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
      return 'Array Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
     * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
     * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
      return 'String Iterator';
    }

    /* ! Speed optimisation
    * Pre:
    *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
    * Post:
    *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
    */
    if (objPrototype === null) {
      return 'Object';
    }
  }

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(toStringLeftSliceLength, toStringRightSliceLength);
};

module.exports.typeDetect = module.exports;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(100);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SvgIcon = __webpack_require__(934);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SvgIcon2.default;

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shouldUpdate = __webpack_require__(939);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(771);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _createHelper = __webpack_require__(853);

var _createHelper2 = _interopRequireDefault(_createHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
  return !(0, _shallowEqual2.default)(props, nextProps);
});

exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var horizontal = _propTypes2.default.oneOf(['left', 'middle', 'right']);
var vertical = _propTypes2.default.oneOf(['top', 'center', 'bottom']);

exports.default = {

  corners: _propTypes2.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

  horizontal: horizontal,

  vertical: vertical,

  origin: _propTypes2.default.shape({
    horizontal: horizontal,
    vertical: vertical
  }),

  cornersAndCenter: _propTypes2.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

  stringOrNumber: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5])

};

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  set: function set(style, key, value) {
    style[key] = value;
  }
};

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChildFragment = createChildFragment;
exports.extendChildren = extendChildren;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = __webpack_require__(852);

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createChildFragment(fragments) {
  var newFragments = {};
  var validChildrenCount = 0;
  var firstKey = void 0;

  // Only create non-empty key fragments
  for (var key in fragments) {
    var currentChild = fragments[key];

    if (currentChild) {
      if (validChildrenCount === 0) firstKey = key;
      newFragments[key] = currentChild;
      validChildrenCount++;
    }
  }

  if (validChildrenCount === 0) return undefined;
  if (validChildrenCount === 1) return newFragments[firstKey];
  return (0, _reactAddonsCreateFragment2.default)(newFragments);
}

function extendChildren(children, extendedProps, extendedChildren) {
  return _react2.default.Children.map(children, function (child) {
    if (!_react2.default.isValidElement(child)) {
      return child;
    }

    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

    return _react2.default.cloneElement(child, newProps, newChildren);
  });
}

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Paper = __webpack_require__(845);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Paper2.default;

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _childUtils = __webpack_require__(790);

var _events = __webpack_require__(802);

var _events2 = _interopRequireDefault(_events);

var _keycode = __webpack_require__(792);

var _keycode2 = _interopRequireDefault(_keycode);

var _FocusRipple = __webpack_require__(819);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(821);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleInjected = false;
var listening = false;
var tabPressed = false;

function injectStyle() {
  if (!styleInjected) {
    // Remove inner padding and border in Firefox 4+.
    var style = document.createElement('style');
    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

    document.body.appendChild(style);
    styleInjected = true;
  }
}

function listenForTabPresses() {
  if (!listening) {
    _events2.default.on(window, 'keydown', function (event) {
      tabPressed = (0, _keycode2.default)(event) === 'tab';
    });
    listening = true;
  }
}

var EnhancedButton = function (_Component) {
  (0, _inherits3.default)(EnhancedButton, _Component);

  function EnhancedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleKeyDown = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
          _this.removeKeyboardFocus(event);
        }
      }
      _this.props.onKeyDown(event);
    }, _this.handleKeyUp = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
      }
      _this.props.onKeyUp(event);
    }, _this.handleBlur = function (event) {
      _this.cancelFocusTimeout();
      _this.removeKeyboardFocus(event);
      _this.props.onBlur(event);
    }, _this.handleFocus = function (event) {
      if (event) event.persist();
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        // setTimeout is needed because the focus event fires first
        // Wait so that we can capture if this was a keyboard focus
        // or touch focus
        _this.focusTimeout = setTimeout(function () {
          if (tabPressed) {
            _this.setKeyboardFocus(event);
            tabPressed = false;
          }
        }, 150);

        _this.props.onFocus(event);
      }
    }, _this.handleClick = function (event) {
      if (!_this.props.disabled) {
        tabPressed = false;
        _this.props.onClick(event);
      }
    }, _this.handleTouchTap = function (event) {
      _this.cancelFocusTimeout();
      if (!_this.props.disabled) {
        tabPressed = false;
        _this.removeKeyboardFocus(event);
        _this.props.onTouchTap(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          disabled = _props.disabled,
          disableKeyboardFocus = _props.disableKeyboardFocus,
          keyboardFocused = _props.keyboardFocused;

      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
        this.setState({ isKeyboardFocused: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      injectStyle();
      listenForTabPresses();
      if (this.state.isKeyboardFocused) {
        this.button.focus();
        this.props.onKeyboardFocus(null, true);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: false });
        if (nextProps.onKeyboardFocus) {
          nextProps.onKeyboardFocus(null, false);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }
    }
  }, {
    key: 'isKeyboardFocused',
    value: function isKeyboardFocused() {
      return this.state.isKeyboardFocused;
    }
  }, {
    key: 'removeKeyboardFocus',
    value: function removeKeyboardFocus(event) {
      if (this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: false });
        this.props.onKeyboardFocus(event, false);
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus(event) {
      if (!this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: true });
        this.props.onKeyboardFocus(event, true);
      }
    }
  }, {
    key: 'cancelFocusTimeout',
    value: function cancelFocusTimeout() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
        this.focusTimeout = null;
      }
    }
  }, {
    key: 'createButtonChildren',
    value: function createButtonChildren() {
      var _props2 = this.props,
          centerRipple = _props2.centerRipple,
          children = _props2.children,
          disabled = _props2.disabled,
          disableFocusRipple = _props2.disableFocusRipple,
          disableKeyboardFocus = _props2.disableKeyboardFocus,
          disableTouchRipple = _props2.disableTouchRipple,
          focusRippleColor = _props2.focusRippleColor,
          focusRippleOpacity = _props2.focusRippleOpacity,
          touchRippleColor = _props2.touchRippleColor,
          touchRippleOpacity = _props2.touchRippleOpacity;
      var isKeyboardFocused = this.state.isKeyboardFocused;

      // Focus Ripple

      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
        color: focusRippleColor,
        opacity: focusRippleOpacity,
        show: isKeyboardFocused
      }) : undefined;

      // Touch Ripple
      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
        _TouchRipple2.default,
        {
          centerRipple: centerRipple,
          color: touchRippleColor,
          opacity: touchRippleOpacity
        },
        children
      ) : undefined;

      return (0, _childUtils.createChildFragment)({
        focusRipple: focusRipple,
        touchRipple: touchRipple,
        children: touchRipple ? undefined : children
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          centerRipple = _props3.centerRipple,
          children = _props3.children,
          containerElement = _props3.containerElement,
          disabled = _props3.disabled,
          disableFocusRipple = _props3.disableFocusRipple,
          disableKeyboardFocus = _props3.disableKeyboardFocus,
          disableTouchRipple = _props3.disableTouchRipple,
          focusRippleColor = _props3.focusRippleColor,
          focusRippleOpacity = _props3.focusRippleOpacity,
          href = _props3.href,
          keyboardFocused = _props3.keyboardFocused,
          touchRippleColor = _props3.touchRippleColor,
          touchRippleOpacity = _props3.touchRippleOpacity,
          onBlur = _props3.onBlur,
          onClick = _props3.onClick,
          onFocus = _props3.onFocus,
          onKeyUp = _props3.onKeyUp,
          onKeyDown = _props3.onKeyDown,
          onKeyboardFocus = _props3.onKeyboardFocus,
          onTouchTap = _props3.onTouchTap,
          style = _props3.style,
          tabIndex = _props3.tabIndex,
          type = _props3.type,
          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          enhancedButton = _context$muiTheme.enhancedButton;


      var mergedStyles = (0, _simpleAssign2.default)({
        border: 10,
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
        cursor: disabled ? 'default' : 'pointer',
        textDecoration: 'none',
        margin: 0,
        padding: 0,
        outline: 'none',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        position: 'relative', // This is needed so that ripples do not bleed past border radius.
        verticalAlign: href ? 'middle' : null,
        zIndex: 1 }, style);

      // Passing both background:none & backgroundColor can break due to object iteration order
      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
        mergedStyles.background = 'none';
      }

      if (disabled && href) {
        return _react2.default.createElement(
          'span',
          (0, _extends3.default)({}, other, {
            style: mergedStyles
          }),
          children
        );
      }

      var buttonProps = (0, _extends3.default)({}, other, {
        style: prepareStyles(mergedStyles),
        ref: function ref(node) {
          return _this2.button = node;
        },
        disabled: disabled,
        href: href,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onKeyUp: this.handleKeyUp,
        onKeyDown: this.handleKeyDown,
        onTouchTap: this.handleTouchTap,
        tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
      });

      var buttonChildren = this.createButtonChildren();

      if (_react2.default.isValidElement(containerElement)) {
        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
      }

      if (!href && containerElement === 'button') {
        buttonProps.type = type;
      }

      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
    }
  }]);
  return EnhancedButton;
}(_react.Component);

EnhancedButton.defaultProps = {
  containerElement: 'button',
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onTouchTap: function onTouchTap() {},
  tabIndex: 0,
  type: 'button'
};
EnhancedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? EnhancedButton.propTypes = {
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  disableFocusRipple: _propTypes2.default.bool,
  disableKeyboardFocus: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  focusRippleColor: _propTypes2.default.string,
  focusRippleOpacity: _propTypes2.default.number,
  href: _propTypes2.default.string,
  keyboardFocused: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyboardFocus: _propTypes2.default.func,
  onTouchTap: _propTypes2.default.func,
  style: _propTypes2.default.object,
  tabIndex: _propTypes2.default.number,
  touchRippleColor: _propTypes2.default.string,
  touchRippleOpacity: _propTypes2.default.number,
  type: _propTypes2.default.string
} : void 0;
exports.default = EnhancedButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(850);

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  once: function once(el, type, callback) {
    var typeArray = type ? type.split(' ') : [];
    var recursiveFunction = function recursiveFunction(event) {
      event.target.removeEventListener(event.type, recursiveFunction);
      return callback(event);
    };

    for (var i = typeArray.length - 1; i >= 0; i--) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },
  on: function on(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      // IE8+ Support
      el.attachEvent('on' + type, function () {
        callback.call(el);
      });
    }
  },
  off: function off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      // IE8+ Support
      el.detachEvent('on' + type, callback);
    }
  },
  isKeyboard: function isKeyboard(event) {
    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
  }
};

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(287);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(771);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(784);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

var _ScaleIn = __webpack_require__(847);

var _ScaleIn2 = _interopRequireDefault(_ScaleIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pulsateDuration = 750;

var FocusRipple = function (_Component) {
  (0, _inherits3.default)(FocusRipple, _Component);

  function FocusRipple() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FocusRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
      if (!innerCircle) return;

      var startScale = 'scale(1)';
      var endScale = 'scale(0.85)';
      var currentScale = innerCircle.style.transform || startScale;
      var nextScale = currentScale === startScale ? endScale : startScale;

      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FocusRipple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      } else {
        if (this.timeout) clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'getRippleElement',
    value: function getRippleElement(props) {
      var color = props.color,
          innerStyle = props.innerStyle,
          opacity = props.opacity;
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          ripple = _context$muiTheme.ripple;


      var innerStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        opacity: opacity ? opacity : 0.16,
        backgroundColor: color || ripple.color,
        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
      }, innerStyle);

      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
      var height = el.offsetHeight;
      var width = el.offsetWidth;
      var size = Math.max(height, width);

      var oldTop = 0;
      // For browsers that don't support endsWith()
      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top);
      }
      el.style.height = size + 'px';
      el.style.top = height / 2 - size / 2 + oldTop + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          style = _props.style;


      var mergedRootStyles = (0, _simpleAssign2.default)({
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }, style);

      var ripple = show ? this.getRippleElement(this.props) : null;

      return _react2.default.createElement(
        _ScaleIn2.default,
        {
          maxScale: 0.85,
          style: mergedRootStyles
        },
        ripple
      );
    }
  }]);
  return FocusRipple;
}(_react.Component);

FocusRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? FocusRipple.propTypes = {
  color: _propTypes2.default.string,
  innerStyle: _propTypes2.default.object,
  opacity: _propTypes2.default.number,
  show: _propTypes2.default.bool,
  style: _propTypes2.default.object
} : void 0;
exports.default = FocusRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isDescendant: function isDescendant(parent, child) {
    var node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },
  offset: function offset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  }
};

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(285);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toArray2 = __webpack_require__(818);

var _toArray3 = _interopRequireDefault(_toArray2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTransitionGroup = __webpack_require__(801);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _dom = __webpack_require__(820);

var _dom2 = _interopRequireDefault(_dom);

var _CircleRipple = __webpack_require__(846);

var _CircleRipple2 = _interopRequireDefault(_CircleRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the first element of the array
var shift = function shift(_ref) {
  var _ref2 = (0, _toArray3.default)(_ref),
      newArray = _ref2.slice(1);

  return newArray;
};

var TouchRipple = function (_Component) {
  (0, _inherits3.default)(TouchRipple, _Component);

  function TouchRipple(props, context) {
    (0, _classCallCheck3.default)(this, TouchRipple);

    // Touch start produces a mouse down event for compat reasons. To avoid
    // showing ripples twice we skip showing a ripple for the first mouse down
    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
    // to avoid re-rendering when we change it.
    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));

    _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.start(event, false);
      }
    };

    _this.handleMouseUp = function () {
      _this.end();
    };

    _this.handleMouseLeave = function () {
      _this.end();
    };

    _this.handleTouchStart = function (event) {
      event.stopPropagation();
      // If the user is swiping (not just tapping), save the position so we can
      // abort ripples if the user appears to be scrolling.
      if (_this.props.abortOnScroll && event.touches) {
        _this.startListeningForScrollAbort(event);
        _this.startTime = Date.now();
      }
      _this.start(event, true);
    };

    _this.handleTouchEnd = function () {
      _this.end();
    };

    _this.handleTouchMove = function (event) {
      // Stop trying to abort if we're already 300ms into the animation
      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
      if (timeSinceStart > 300) {
        _this.stopListeningForScrollAbort();
        return;
      }

      // If the user is scrolling...
      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
      if (deltaY > 6 || deltaX > 6) {
        var currentRipples = _this.state.ripples;
        var ripple = currentRipples[0];
        // This clone will replace the ripple in ReactTransitionGroup with a
        // version that will disappear immediately when removed from the DOM
        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
        // Remove the old ripple and replace it with the new updated one
        currentRipples = shift(currentRipples);
        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
        _this.setState({ ripples: currentRipples }, function () {
          // Call end after we've set the ripple to abort otherwise the setState
          // in end() merges with this and the ripple abort fails
          _this.end();
        });
      }
    };

    _this.ignoreNextMouseDown = false;

    _this.state = {
      // This prop allows us to only render the ReactTransitionGroup
      // on the first click of the component, making the inital render faster.
      hasRipples: false,
      nextKey: 0,
      ripples: []
    };
    return _this;
  }

  (0, _createClass3.default)(TouchRipple, [{
    key: 'start',
    value: function start(event, isRippleTouchGenerated) {
      var theme = this.context.muiTheme.ripple;

      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false;
        return;
      }

      var ripples = this.state.ripples;

      // Add a ripple to the ripples array
      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
        key: this.state.nextKey,
        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
        color: this.props.color || theme.color,
        opacity: this.props.opacity,
        touchGenerated: isRippleTouchGenerated
      })]);

      this.ignoreNextMouseDown = isRippleTouchGenerated;
      this.setState({
        hasRipples: true,
        nextKey: this.state.nextKey + 1,
        ripples: ripples
      });
    }
  }, {
    key: 'end',
    value: function end() {
      var currentRipples = this.state.ripples;
      this.setState({
        ripples: shift(currentRipples)
      });
      if (this.props.abortOnScroll) {
        this.stopListeningForScrollAbort();
      }
    }

    // Check if the user seems to be scrolling and abort the animation if so

  }, {
    key: 'startListeningForScrollAbort',
    value: function startListeningForScrollAbort(event) {
      this.firstTouchY = event.touches[0].clientY;
      this.firstTouchX = event.touches[0].clientX;
      // Note that when scolling Chrome throttles this event to every 200ms
      // Also note we don't listen for scroll events directly as there's no general
      // way to cover cases like scrolling within containers on the page
      document.body.addEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'stopListeningForScrollAbort',
    value: function stopListeningForScrollAbort() {
      document.body.removeEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'getRippleStyle',
    value: function getRippleStyle(event) {
      var el = _reactDom2.default.findDOMNode(this);
      var elHeight = el.offsetHeight;
      var elWidth = el.offsetWidth;
      var offset = _dom2.default.offset(el);
      var isTouchEvent = event.touches && event.touches.length;
      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      var pointerX = pageX - offset.left;
      var pointerY = pageY - offset.top;
      var topLeftDiag = this.calcDiag(pointerX, pointerY);
      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
      var rippleSize = rippleRadius * 2;
      var left = pointerX - rippleRadius;
      var top = pointerY - rippleRadius;

      return {
        directionInvariant: true,
        height: rippleSize,
        width: rippleSize,
        top: top,
        left: left
      };
    }
  }, {
    key: 'calcDiag',
    value: function calcDiag(a, b) {
      return Math.sqrt(a * a + b * b);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;
      var _state = this.state,
          hasRipples = _state.hasRipples,
          ripples = _state.ripples;
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var rippleGroup = void 0;

      if (hasRipples) {
        var mergedStyles = (0, _simpleAssign2.default)({
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }, style);

        rippleGroup = _react2.default.createElement(
          _reactAddonsTransitionGroup2.default,
          { style: prepareStyles(mergedStyles) },
          ripples
        );
      }

      return _react2.default.createElement(
        'div',
        {
          onMouseUp: this.handleMouseUp,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        },
        rippleGroup,
        children
      );
    }
  }]);
  return TouchRipple;
}(_react.Component);

TouchRipple.defaultProps = {
  abortOnScroll: true
};
TouchRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
  abortOnScroll: _propTypes2.default.bool,
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object
} : void 0;
exports.default = TouchRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(163);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(293);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(746);

var _assign2 = _interopRequireDefault(_assign);

exports.withOptions = withOptions;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(100);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

var _supports = __webpack_require__(930);

var supports = _interopRequireWildcard(_supports);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};
/* eslint-disable prefer-spread */

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  if (supports.addEventListener) {
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.attachEvent) {
    // IE8+ Support
    target.attachEvent('on' + eventName, function () {
      callback.call(target);
    });
  }
}

function off(target, eventName, callback, options) {
  if (supports.removeEventListener) {
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.detachEvent) {
    // IE8+ Support
    target.detachEvent('on' + eventName, callback);
  }
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: Should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_Component) {
  (0, _inherits3.default)(EventListener, _Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react.Component);

process.env.NODE_ENV !== "production" ? EventListener.propTypes = {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.element,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : void 0;
exports.default = EventListener;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(778);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
    }
  };
}

var Paper = function (_Component) {
  (0, _inherits3.default)(Paper, _Component);

  function Paper() {
    (0, _classCallCheck3.default)(this, Paper);
    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          circle = _props.circle,
          rounded = _props.rounded,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          zDepth = _props.zDepth,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return Paper;
}(_react.Component);

Paper.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
};
Paper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? Paper.propTypes = {
  /**
   * Children passed into the paper element.
   */
  children: _propTypes2.default.node,
  /**
   * Set to true to generate a circlular paper container.
   */
  circle: _propTypes2.default.bool,
  /**
   * By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Set to false to disable CSS transitions for the paper element.
   */
  transitionEnabled: _propTypes2.default.bool,
  /**
   * This number represents the zDepth of the paper shadow.
   */
  zDepth: _propTypes4.default.zDepth
} : void 0;
exports.default = Paper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(771);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(784);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleRipple = function (_Component) {
  (0, _inherits3.default)(CircleRipple, _Component);

  function CircleRipple() {
    (0, _classCallCheck3.default)(this, CircleRipple);
    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircleRipple, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = 0;
      // If the animation is aborted, remove from the DOM immediately
      var removeAfter = this.props.aborted ? 0 : 2000;
      this.enterTimer = setTimeout(callback, removeAfter);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;
      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
      _autoPrefix2.default.set(style, 'transition', transitionValue);
      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = this.props.opacity;
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
      this.leaveTimer = setTimeout(callback, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          aborted = _props.aborted,
          color = _props.color,
          opacity = _props.opacity,
          style = _props.style,
          touchGenerated = _props.touchGenerated,
          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundColor: color
      }, style);

      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
    }
  }]);
  return CircleRipple;
}(_react.Component);

CircleRipple.defaultProps = {
  opacity: 0.1,
  aborted: false
};
CircleRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? CircleRipple.propTypes = {
  aborted: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object,
  touchGenerated: _propTypes2.default.bool
} : void 0;
exports.default = CircleRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsTransitionGroup = __webpack_require__(801);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _ScaleInChild = __webpack_require__(848);

var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleIn = function (_Component) {
  (0, _inherits3.default)(ScaleIn, _Component);

  function ScaleIn() {
    (0, _classCallCheck3.default)(this, ScaleIn);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          childStyle = _props.childStyle,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }, style);

      var newChildren = _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _ScaleInChild2.default,
          {
            key: child.key,
            enterDelay: enterDelay,
            maxScale: maxScale,
            minScale: minScale,
            style: childStyle
          },
          child
        );
      });

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        (0, _extends3.default)({}, other, {
          style: prepareStyles(mergedRootStyles),
          component: 'div'
        }),
        newChildren
      );
    }
  }]);
  return ScaleIn;
}(_react.Component);

ScaleIn.defaultProps = {
  enterDelay: 0
};
ScaleIn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? ScaleIn.propTypes = {
  childStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = ScaleIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = __webpack_require__(784);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleInChild = function (_Component) {
  (0, _inherits3.default)(ScaleInChild, _Component);

  function ScaleInChild() {
    (0, _classCallCheck3.default)(this, ScaleInChild);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleInChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

      this.leaveTimer = setTimeout(callback, 450);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '1';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');

      this.enterTimer = setTimeout(callback, this.props.enterDelay);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
      }, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
        children
      );
    }
  }]);
  return ScaleInChild;
}(_react.Component);

ScaleInChild.defaultProps = {
  enterDelay: 0,
  maxScale: 1,
  minScale: 0
};
ScaleInChild.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? ScaleInChild.propTypes = {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  style: _propTypes2.default.object
} : void 0;
exports.default = ScaleInChild;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var flattenChildren = __webpack_require__(851);

var ReactTransitionChildMapping = {
  /**
   * Given `this.props.children`, return an object mapping key to child. Just
   * simple syntactic sugar around flattenChildren().
   *
   * @param {*} children `this.props.children`
   * @param {number=} selfDebugID Optional debugID of the current internal instance.
   * @return {object} Mapping of key to child
   */
  getChildMapping: function (children, selfDebugID) {
    if (!children) {
      return children;
    }

    if (process.env.NODE_ENV !== 'production') {
      return flattenChildren(children, selfDebugID);
    }

    return flattenChildren(children);
  },

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  mergeChildMappings: function (prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      if (next.hasOwnProperty(key)) {
        return next[key];
      } else {
        return prev[key];
      }
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (next.hasOwnProperty(prevKey)) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending.hasOwnProperty(nextKey)) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
};

module.exports = ReactTransitionChildMapping;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(42);
var ReactTransitionChildMapping = __webpack_require__(849);

var propTypesFactory = __webpack_require__(165);
var PropTypes = propTypesFactory(React.isValidElement);

var emptyFunction = __webpack_require__(15);

/**
 * A basis for animations. When children are declaratively added or removed,
 * special lifecycle hooks are called.
 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
 */

var ReactTransitionGroup = function (_React$Component) {
  _inherits(ReactTransitionGroup, _React$Component);

  function ReactTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReactTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      // TODO: can we get useful debug information to show at this point?
      children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
    }, _this.performAppear = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
      } else {
        _this._handleDoneAppearing(key);
      }
    }, _this._handleDoneAppearing = function (key) {
      var component = _this.refs[key];
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key);
      }
    }, _this.performEnter = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
      } else {
        _this._handleDoneEntering(key);
      }
    }, _this._handleDoneEntering = function (key) {
      var component = _this.refs[key];
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key);
      }
    }, _this.performLeave = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];
      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key);
      }
    }, _this._handleDoneLeaving = function (key) {
      var component = _this.refs[key];

      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.performEnter(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _assign({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key);
      }
    }
  };

  ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
    });

    var key;

    for (key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
        this.keysToLeave.push(key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  };

  ReactTransitionGroup.prototype.render = function render() {
    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];
    for (var key in this.state.children) {
      var child = this.state.children[key];
      if (child) {
        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
      }
    }

    // Do not forward ReactTransitionGroup props to primitive DOM nodes
    var props = _assign({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return React.createElement(this.props.component, props, childrenToRender);
  };

  return ReactTransitionGroup;
}(React.Component);

ReactTransitionGroup.displayName = 'ReactTransitionGroup';
ReactTransitionGroup.propTypes = {
  component: PropTypes.any,
  childFactory: PropTypes.func
};
ReactTransitionGroup.defaultProps = {
  component: 'span',
  childFactory: emptyFunction.thatReturnsArgument
};


module.exports = ReactTransitionGroup;

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var KeyEscapeUtils = __webpack_require__(288);
var traverseAllChildren = __webpack_require__(289);
var warning = __webpack_require__(2);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(14);
}

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */
function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
  // We found a component instance.
  if (traverseContext && typeof traverseContext === 'object') {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if (process.env.NODE_ENV !== 'production') {
      if (!ReactComponentTreeHook) {
        ReactComponentTreeHook = __webpack_require__(14);
      }
      if (!keyUnique) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
      }
    }
    if (keyUnique && child != null) {
      result[name] = child;
    }
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children, selfDebugID) {
  if (children == null) {
    return children;
  }
  var result = {};

  if (process.env.NODE_ENV !== 'production') {
    traverseAllChildren(children, function (traverseContext, child, name) {
      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
    }, result);
  } else {
    traverseAllChildren(children, flattenSingleChildIntoContext, result);
  }
  return result;
}

module.exports = flattenChildren;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var React = __webpack_require__(12);

var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
  Symbol.for &&
  Symbol.for('react.element')) ||
  0xeac7;

var emptyFunction = __webpack_require__(15);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(2);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

var didWarnAboutMaps = false;

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function(match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function traverseAllChildrenImpl(
  children,
  nameSoFar,
  callback,
  traverseContext
) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (
    children === null ||
    type === 'string' ||
    type === 'number' ||
    // The following is inlined from ReactElement. This means we can optimize
    // some checks. React Fiber also inlines this logic for similar purposes.
    (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE)
  ) {
    callback(
      traverseContext,
      children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
    );
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(
        child,
        nextName,
        callback,
        traverseContext
      );
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      if (process.env.NODE_ENV !== "production") {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(
            didWarnAboutMaps,
            'Using Maps as children is unsupported and will likely yield ' +
              'unexpected results. Convert it to a sequence/iterable of keyed ' +
              'ReactElements instead.'
          );
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(
          child,
          nextName,
          callback,
          traverseContext
        );
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== "production") {
        addendum = ' If you meant to render a collection of children, use an array ' +
          'instead or wrap the object using createFragment(object) from the ' +
          'React add-ons.';
      }
      var childrenString = '' + children;
      invariant(
        false,
        'Objects are not valid as a React child (found: %s).%s',
        childrenString === '[object Object]'
          ? 'object with keys {' + Object.keys(children).join(', ') + '}'
          : childrenString,
        addendum
      );
    }
  }

  return subtreeCount;
}

function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

function cloneAndReplaceKey(oldElement, newKey) {
  return React.cloneElement(
    oldElement,
    { key: newKey },
    oldElement.props !== undefined
      ? oldElement.props.children
      : undefined
  );
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

var oneArgumentPooler = function(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var addPoolingTo = function addPoolingTo(
  CopyConstructor,
  pooler
) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var standardReleaser = function standardReleaser(instance) {
  var Klass = this;
  invariant(
    instance instanceof Klass,
    'Trying to release an instance into a pool of a different type.'
  );
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function() {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result;
  var keyPrefix = bookKeeping.keyPrefix;
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(
      mappedChild,
      result,
      childKey,
      emptyFunction.thatReturnsArgument
    );
  } else if (mappedChild != null) {
    if (React.isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(
        mappedChild,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix +
          (mappedChild.key && (!child || child.key !== mappedChild.key)
            ? escapeUserProvidedKey(mappedChild.key) + '/'
            : '') +
          childKey
      );
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(
    array,
    escapedPrefix,
    func,
    context
  );
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

var numericPropertyRegex = /^\d+$/;

var warnedAboutNumeric = false;

function createReactFragment(object) {
  if (typeof object !== 'object' || !object || Array.isArray(object)) {
    warning(
      false,
      'React.addons.createFragment only accepts a single object. Got: %s',
      object
    );
    return object;
  }
  if (React.isValidElement(object)) {
    warning(
      false,
      'React.addons.createFragment does not accept a ReactElement ' +
        'without a wrapper object.'
    );
    return object;
  }

  invariant(
    object.nodeType !== 1,
    'React.addons.createFragment(...): Encountered an invalid child; DOM ' +
      'elements are not valid children of React components.'
  );

  var result = [];

  for (var key in object) {
    if (process.env.NODE_ENV !== "production") {
      if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
        warning(
          false,
          'React.addons.createFragment(...): Child objects should have ' +
            'non-numeric keys so ordering is preserved.'
        );
        warnedAboutNumeric = true;
      }
    }
    mapIntoWithKeyPrefixInternal(
      object[key],
      result,
      key,
      emptyFunction.thatReturnsArgument
    );
  }

  return result;
}

module.exports = createReactFragment;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _wrapDisplayName = __webpack_require__(941);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHelper = function createHelper(func, helperName) {
  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    if (noArgs) {
      return function (BaseComponent) {
        var Component = func(BaseComponent);
        Component.displayName = (0, _wrapDisplayName2.default)(BaseComponent, helperName);
        return Component;
      };
    }

    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function (BaseComponent) {
        var Component = func.apply(undefined, args)(BaseComponent);
        Component.displayName = (0, _wrapDisplayName2.default)(BaseComponent, helperName);
        return Component;
      };
    };
  }

  return func;
};

exports.default = createHelper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FontIcon = __webpack_require__(1220);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _IconButton = __webpack_require__(942);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _IconButton2.default;

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toArray2 = __webpack_require__(818);

var _toArray3 = _interopRequireDefault(_toArray2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(771);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _ClickAwayListener = __webpack_require__(1226);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _keycode = __webpack_require__(792);

var _keycode2 = _interopRequireDefault(_keycode);

var _propTypes3 = __webpack_require__(778);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _List = __webpack_require__(943);

var _List2 = _interopRequireDefault(_List);

var _menuUtils = __webpack_require__(1237);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var desktop = props.desktop,
      maxHeight = props.maxHeight,
      width = props.width;
  var muiTheme = context.muiTheme;


  var styles = {
    root: {
      // Nested div bacause the List scales x faster than it scales y
      zIndex: muiTheme.zIndex.menu,
      maxHeight: maxHeight,
      overflowY: maxHeight ? 'auto' : null
    },
    divider: {
      marginTop: 7,
      marginBottom: 8
    },
    list: {
      display: 'table-cell',
      paddingBottom: desktop ? 16 : 8,
      paddingTop: desktop ? 16 : 8,
      userSelect: 'none',
      width: width
    },
    selectedMenuItem: {
      color: muiTheme.menuItem.selectedTextColor
    }
  };

  return styles;
}

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu(props, context) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props, context));

    _initialiseProps.call(_this);

    var filteredChildren = _this.getFilteredChildren(props.children);
    var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);

    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
      props.onMenuItemFocusChange(null, newFocusIndex);
    }
    _this.state = {
      focusIndex: newFocusIndex,
      isKeyboardFocused: props.initiallyKeyboardFocused,
      keyWidth: props.desktop ? 64 : 56
    };

    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
      this.setScollPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selectedIndex = void 0;
      var filteredChildren = this.getFilteredChildren(nextProps.children);

      if (this.props.multiple !== true) {
        selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
      } else {
        selectedIndex = this.state.focusIndex;
      }

      var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
      if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
        this.props.onMenuItemFocusChange(null, newFocusIndex);
      }
      this.setState({
        focusIndex: newFocusIndex,
        keyWidth: nextProps.desktop ? 64 : 56
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoWidth) this.setWidth();
    }
  }, {
    key: 'getValueLink',


    // Do not use outside of this component, it will be removed once valueLink is deprecated
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'setKeyboardFocused',
    value: function setKeyboardFocused(keyboardFocused) {
      this.setState({
        isKeyboardFocused: keyboardFocused
      });
    }
  }, {
    key: 'getFilteredChildren',
    value: function getFilteredChildren(children) {
      var filteredChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (child) {
          filteredChildren.push(child);
        }
      });
      return filteredChildren;
    }
  }, {
    key: 'cloneMenuItem',
    value: function cloneMenuItem(child, childIndex, styles, index) {
      var _this2 = this;

      var childIsDisabled = child.props.disabled;

      var selectedChildStyles = {};
      if (!childIsDisabled) {
        var selected = this.isChildSelected(child, this.props);

        if (selected) {
          (0, _simpleAssign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
        }
      }
      var mergedChildStyles = (0, _simpleAssign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);

      var extraProps = {
        desktop: this.props.desktop,
        style: mergedChildStyles
      };
      if (!childIsDisabled) {
        var isFocused = childIndex === this.state.focusIndex;
        var focusState = 'none';
        if (isFocused) {
          focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
        }

        (0, _simpleAssign2.default)(extraProps, {
          focusState: focusState,
          onTouchTap: function onTouchTap(event) {
            _this2.handleMenuItemTouchTap(event, child, index);
            if (child.props.onTouchTap) child.props.onTouchTap(event);
          },
          ref: isFocused ? 'focusedMenuItem' : null
        });
      }
      return _react2.default.cloneElement(child, extraProps);
    }
  }, {
    key: 'decrementKeyboardFocusIndex',
    value: function decrementKeyboardFocusIndex(event) {
      var index = this.state.focusIndex;

      index--;
      if (index < 0) index = 0;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'getMenuItemCount',
    value: function getMenuItemCount(filteredChildren) {
      var menuItemCount = 0;
      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';
        var childIsDisabled = child.props.disabled;
        if (!childIsADivider && !childIsDisabled) menuItemCount++;
      });
      return menuItemCount;
    }
  }, {
    key: 'getLastSelectedIndex',
    value: function getLastSelectedIndex(props, filteredChildren) {
      var _this3 = this;

      var selectedIndex = -1;
      var menuItemIndex = 0;

      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';

        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
        if (!childIsADivider) menuItemIndex++;
      });

      return selectedIndex;
    }
  }, {
    key: 'setFocusIndexStartsWith',
    value: function setFocusIndexStartsWith(event, keys) {
      var foundIndex = -1;
      _react2.default.Children.forEach(this.props.children, function (child, index) {
        if (foundIndex >= 0) {
          return;
        }
        var primaryText = child.props.primaryText;

        if (typeof primaryText === 'string' && new RegExp('^' + keys, 'i').test(primaryText)) {
          foundIndex = index;
        }
      });
      if (foundIndex >= 0) {
        this.setFocusIndex(event, foundIndex, true);
        return true;
      }
      return false;
    }
  }, {
    key: 'handleMenuItemTouchTap',
    value: function handleMenuItemTouchTap(event, item, index) {
      var children = this.props.children;
      var multiple = this.props.multiple;
      var valueLink = this.getValueLink(this.props);
      var menuValue = valueLink.value;
      var itemValue = item.props.value;
      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

      this.setFocusIndex(event, focusIndex, false);

      if (multiple) {
        menuValue = menuValue || [];

        var itemIndex = menuValue.indexOf(itemValue);

        var _menuValue = menuValue,
            _menuValue2 = (0, _toArray3.default)(_menuValue),
            newMenuValue = _menuValue2.slice(0);

        if (itemIndex === -1) {
          newMenuValue.push(itemValue);
        } else {
          newMenuValue.splice(itemIndex, 1);
        }

        valueLink.requestChange(event, newMenuValue);
      } else if (!multiple && itemValue !== menuValue) {
        valueLink.requestChange(event, itemValue);
      }

      this.props.onItemTouchTap(event, item, index);
    }
  }, {
    key: 'incrementKeyboardFocusIndex',
    value: function incrementKeyboardFocusIndex(event, filteredChildren) {
      var index = this.state.focusIndex;
      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;

      index++;
      if (index > maxIndex) index = maxIndex;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'isChildSelected',
    value: function isChildSelected(child, props) {
      var menuValue = this.getValueLink(props).value;
      var childValue = child.props.value;

      if (props.multiple) {
        return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
      } else {
        return child.props.hasOwnProperty('value') && menuValue === childValue;
      }
    }
  }, {
    key: 'setFocusIndex',
    value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
      if (this.props.onMenuItemFocusChange) {
        // Do this even if `newIndex === this.state.focusIndex` to allow users
        // to detect up-arrow on the first MenuItem or down-arrow on the last.
        this.props.onMenuItemFocusChange(event, newIndex);
      }
      this.setState({
        focusIndex: newIndex,
        isKeyboardFocused: isKeyboardFocused
      });
    }
  }, {
    key: 'setScollPosition',
    value: function setScollPosition() {
      var desktop = this.props.desktop;
      var focusedMenuItem = this.refs.focusedMenuItem;
      var menuItemHeight = desktop ? 32 : 48;

      if (focusedMenuItem) {
        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

        // Make the focused item be the 2nd item in the list the user sees
        var scrollTop = selectedOffSet - menuItemHeight;
        if (scrollTop < menuItemHeight) scrollTop = 0;

        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
      }
    }
  }, {
    key: 'cancelScrollEvent',
    value: function cancelScrollEvent(event) {
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = _reactDom2.default.findDOMNode(this);
      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
      var elWidth = el.offsetWidth;
      var keyWidth = this.state.keyWidth;
      var minWidth = keyWidth * 1.5;
      var keyIncrements = elWidth / keyWidth;
      var newWidth = void 0;

      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
      newWidth = keyIncrements * keyWidth;

      if (newWidth < minWidth) newWidth = minWidth;

      el.style.width = newWidth + 'px';
      listEl.style.width = newWidth + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          autoWidth = _props.autoWidth,
          children = _props.children,
          desktop = _props.desktop,
          disableAutoFocus = _props.disableAutoFocus,
          initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          multiple = _props.multiple,
          onItemTouchTap = _props.onItemTouchTap,
          onEscKeyDown = _props.onEscKeyDown,
          onMenuItemFocusChange = _props.onMenuItemFocusChange,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          menuItemStyle = _props.menuItemStyle,
          style = _props.style,
          value = _props.value,
          valueLink = _props.valueLink,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemTouchTap', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);

      var filteredChildren = this.getFilteredChildren(children);

      var menuItemIndex = 0;
      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
        var childIsDisabled = child.props.disabled;
        var childName = child.type ? child.type.muiName : '';
        var newChild = child;

        switch (childName) {
          case 'MenuItem':
            newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
            break;

          case 'Divider':
            newChild = _react2.default.cloneElement(child, {
              style: (0, _simpleAssign2.default)({}, styles.divider, child.props.style)
            });
            break;
        }

        if (childName === 'MenuItem' && !childIsDisabled) {
          menuItemIndex++;
        }

        return newChild;
      });

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'div',
          {
            onKeyDown: this.handleKeyDown,
            onWheel: this.handleOnWheel,
            style: prepareStyles(mergedRootStyles),
            ref: 'scrollContainer',
            role: 'presentation'
          },
          _react2.default.createElement(
            _List2.default,
            (0, _extends3.default)({}, other, {
              ref: 'list',
              style: mergedListStyles,
              role: 'menu'
            }),
            newChildren
          )
        )
      );
    }
  }]);
  return Menu;
}(_react.Component);

Menu.defaultProps = {
  autoWidth: true,
  desktop: false,
  disableAutoFocus: false,
  initiallyKeyboardFocused: false,
  maxHeight: null,
  multiple: false,
  onChange: function onChange() {},
  onEscKeyDown: function onEscKeyDown() {},
  onItemTouchTap: function onItemTouchTap() {},
  onKeyDown: function onKeyDown() {}
};
Menu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.handleClickAway = function (event) {
    if (event.defaultPrevented) {
      return;
    }

    _this5.setFocusIndex(event, -1, false);
  };

  this.handleKeyDown = function (event) {
    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var key = (0, _keycode2.default)(event);
    switch (key) {
      case 'down':
        event.preventDefault();
        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        break;
      case 'esc':
        _this5.props.onEscKeyDown(event);
        break;
      case 'tab':
        event.preventDefault();
        if (event.shiftKey) {
          _this5.decrementKeyboardFocusIndex(event);
        } else {
          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        }
        break;
      case 'up':
        event.preventDefault();
        _this5.decrementKeyboardFocusIndex(event);
        break;
      default:
        if (key && key.length === 1) {
          var hotKeys = _this5.hotKeyHolder.append(key);
          if (_this5.setFocusIndexStartsWith(event, hotKeys)) {
            event.preventDefault();
          }
        }
    }
    _this5.props.onKeyDown(event);
  };

  this.handleOnWheel = function (event) {
    var scrollContainer = _this5.refs.scrollContainer;
    // Only scroll lock if the the Menu is scrollable.
    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;

    var scrollTop = scrollContainer.scrollTop,
        scrollHeight = scrollContainer.scrollHeight,
        clientHeight = scrollContainer.clientHeight;

    var wheelDelta = event.deltaY;
    var isDeltaPositive = wheelDelta > 0;

    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
      scrollContainer.scrollTop = scrollHeight;
      return _this5.cancelScrollEvent(event);
    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
      scrollContainer.scrollTop = 0;
      return _this5.cancelScrollEvent(event);
    }
  };
};

process.env.NODE_ENV !== "production" ? Menu.propTypes = {
  /**
   * If true, the width of the menu will be set automatically
   * according to the widths of its children,
   * using proper keyline increments (64px for desktop,
   * 56px otherwise).
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The content of the menu. This is usually used to pass `MenuItem`
   * elements.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the menu item will render with compact desktop styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu will not be auto-focused.
   */
  disableAutoFocus: _propTypes2.default.bool,
  /**
   * If true, the menu will be keyboard-focused initially.
   */
  initiallyKeyboardFocused: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the menu in pixels. If specified,
   * the menu will be scrollable if it is taller than the provided
   * height.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item with `value` not
   * equal to the current `value` of the menu is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {any}  value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is focused and the *Esc* key
   * is pressed.
   *
   * @param {object} event `keydown` event targeting the menu.
   */
  onEscKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {object} menuItem The menu item.
   * @param {number} index The index of the menu item.
   */
  onItemTouchTap: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when the focus on a `MenuItem` is changed.
   * There will be some "duplicate" changes reported if two different
   * focusing event happen, for example if a `MenuItem` is focused via
   * the keyboard and then it is clicked on.
   *
   * @param {object} event The event that triggered the focus change.
   * The event can be null since the focus can be changed for non-event
   * reasons such as prop changes.
   * @param {number} newFocusIndex The index of the newly focused
   * `MenuItem` or `-1` if focus was lost.
   */
  onMenuItemFocusChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   * This component also supports valueLink.
   */
  value: _propTypes2.default.any,
  /**
   * ValueLink for the menu's `value`.
   */
  valueLink: _propTypes2.default.object,
  /**
   * The width of the menu. If not specified, the menu's width
   * will be set according to the widths of its children, using
   * proper keyline increments (64px for desktop, 56px otherwise).
   */
  width: _propTypes4.default.stringOrNumber
} : void 0;
exports.default = Menu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(844);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _RenderToLayer = __webpack_require__(1232);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _propTypes3 = __webpack_require__(778);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(791);

var _Paper2 = _interopRequireDefault(_Paper);

var _lodash = __webpack_require__(1234);

var _lodash2 = _interopRequireDefault(_lodash);

var _PopoverAnimationDefault = __webpack_require__(1238);

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

var _iOSHelpers = __webpack_require__(1242);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'none'
  }
};

var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover(props, context) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props, context));

    _this.timeout = null;

    _this.renderLayer = function () {
      var _this$props = _this.props,
          animated = _this$props.animated,
          animation = _this$props.animation,
          anchorEl = _this$props.anchorEl,
          anchorOrigin = _this$props.anchorOrigin,
          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
          canAutoPosition = _this$props.canAutoPosition,
          children = _this$props.children,
          onRequestClose = _this$props.onRequestClose,
          style = _this$props.style,
          targetOrigin = _this$props.targetOrigin,
          useLayerForClickAway = _this$props.useLayerForClickAway,
          other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway']);


      var styleRoot = style;

      if (!animated) {
        styleRoot = {
          position: 'fixed',
          zIndex: _this.context.muiTheme.zIndex.popover
        };

        if (!_this.state.open) {
          return null;
        }

        return _react2.default.createElement(
          _Paper2.default,
          (0, _extends3.default)({ style: (0, _simpleAssign2.default)(styleRoot, style) }, other),
          children
        );
      }

      var Animation = animation || _PopoverAnimationDefault2.default;

      return _react2.default.createElement(
        Animation,
        (0, _extends3.default)({
          targetOrigin: targetOrigin,
          style: styleRoot
        }, other, {
          open: _this.state.open && !_this.state.closing
        }),
        children
      );
    };

    _this.componentClickAway = function (event) {
      event.preventDefault();
      _this.requestClose('clickAway');
    };

    _this.setPlacement = function (scrolling) {
      if (!_this.state.open) {
        return;
      }

      if (!_this.refs.layer.getLayer()) {
        return;
      }

      var targetEl = _this.refs.layer.getLayer().children[0];
      if (!targetEl) {
        return;
      }

      var _this$props2 = _this.props,
          targetOrigin = _this$props2.targetOrigin,
          anchorOrigin = _this$props2.anchorOrigin;

      var anchorEl = _this.props.anchorEl || _this.anchorEl;

      var anchor = _this.getAnchorPosition(anchorEl);
      var target = _this.getTargetPosition(targetEl);

      var targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      };

      if (scrolling && _this.props.autoCloseWhenOffScreen) {
        _this.autoCloseWhenOffScreen(anchor);
      }

      if (_this.props.canAutoPosition) {
        target = _this.getTargetPosition(targetEl); // update as height may have changed
        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
      targetEl.style.maxHeight = window.innerHeight + 'px';
    };

    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);

    _this.state = {
      open: props.open,
      closing: false
    };
    return _this;
  }

  (0, _createClass3.default)(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setPlacement();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.open === this.props.open) {
        return;
      }

      if (nextProps.open) {
        clearTimeout(this.timeout);
        this.timeout = null;
        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
        this.setState({
          open: true,
          closing: false
        });
      } else {
        if (nextProps.animated) {
          if (this.timeout !== null) return;
          this.setState({ closing: true });
          this.timeout = setTimeout(function () {
            _this2.setState({
              open: false
            }, function () {
              _this2.timeout = null;
            });
          }, 500);
        } else {
          this.setState({
            open: false
          });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setPlacement();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
      this.handleScroll.cancel();

      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
  }, {
    key: 'requestClose',
    value: function requestClose(reason) {
      if (this.props.onRequestClose) {
        this.props.onRequestClose(reason);
      }
    }
  }, {
    key: 'getAnchorPosition',
    value: function getAnchorPosition(el) {
      if (!el) {
        el = _reactDom2.default.findDOMNode(this);
      }

      var rect = el.getBoundingClientRect();
      var a = {
        top: rect.top,
        left: rect.left,
        width: el.offsetWidth,
        height: el.offsetHeight
      };

      a.right = rect.right || a.left + a.width;

      // The fixed positioning isn't respected on iOS when an input is focused.
      // We need to compute the position from the top of the page and not the viewport.
      if ((0, _iOSHelpers.isIOS)() && document.activeElement.tagName === 'INPUT') {
        a.bottom = (0, _iOSHelpers.getOffsetTop)(el) + a.height;
      } else {
        a.bottom = rect.bottom || a.top + a.height;
      }
      a.middle = a.left + (a.right - a.left) / 2;
      a.center = a.top + (a.bottom - a.top) / 2;

      return a;
    }
  }, {
    key: 'getTargetPosition',
    value: function getTargetPosition(targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth
      };
    }
  }, {
    key: 'autoCloseWhenOffScreen',
    value: function autoCloseWhenOffScreen(anchorPosition) {
      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
        this.requestClose('offScreen');
      }
    }
  }, {
    key: 'getOverlapMode',
    value: function getOverlapMode(anchor, target, median) {
      if ([anchor, target].indexOf(median) >= 0) return 'auto';
      if (anchor === target) return 'inclusive';
      return 'exclusive';
    }
  }, {
    key: 'getPositions',
    value: function getPositions(anchor, target) {
      var a = (0, _extends3.default)({}, anchor);
      var t = (0, _extends3.default)({}, target);

      var positions = {
        x: ['left', 'right'].filter(function (p) {
          return p !== t.horizontal;
        }),
        y: ['top', 'bottom'].filter(function (p) {
          return p !== t.vertical;
        })
      };

      var overlap = {
        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
      };

      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

      if (overlap.y !== 'auto') {
        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
        if (overlap.y === 'inclusive') {
          t.vertical = t.vertical;
        }
      }

      if (overlap.x !== 'auto') {
        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
        if (overlap.y === 'inclusive') {
          t.horizontal = t.horizontal;
        }
      }

      return {
        positions: positions,
        anchorPos: a
      };
    }
  }, {
    key: 'applyAutoPositionIfNeeded',
    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
          positions = _getPositions.positions,
          anchorPos = _getPositions.anchorPos;

      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        } else {
          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
          if (newTop + target.bottom <= window.innerHeight) {
            targetPosition.top = Math.max(0, newTop);
          }
        }
      }

      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        } else {
          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
          if (newLeft + target.right <= window.innerWidth) {
            targetPosition.left = Math.max(0, newLeft);
          }
        }
      }

      return targetPosition;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onScroll: this.handleScroll,
          onResize: this.handleResize
        }),
        _react2.default.createElement(_RenderToLayer2.default, {
          ref: 'layer',
          open: this.state.open,
          componentClickAway: this.componentClickAway,
          useLayerForClickAway: this.props.useLayerForClickAway,
          render: this.renderLayer
        })
      );
    }
  }]);
  return Popover;
}(_react.Component);

Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  autoCloseWhenOffScreen: true,
  canAutoPosition: true,
  onRequestClose: function onRequestClose() {},
  open: false,
  style: {
    overflowY: 'auto'
  },
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  useLayerForClickAway: true,
  zDepth: 1
};
Popover.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? Popover.propTypes = {
  /**
   * This is the DOM element that will be used to set the position of the
   * popover.
   */
  anchorEl: _propTypes2.default.object,
  /**
   * This is the point on the anchor where the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it is added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, the popover will hide when the anchor is scrolled off the screen.
   */
  autoCloseWhenOffScreen: _propTypes2.default.bool,
  /**
   * If true, the popover (potentially) ignores `targetOrigin`
   * and `anchorOrigin` to make itself fit on screen,
   * which is useful for mobile devices.
   */
  canAutoPosition: _propTypes2.default.bool,
  /**
   * The content of the popover.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Callback function fired when the popover is requested to be closed.
   *
   * @param {string} reason The reason for the close request. Possibles values
   * are 'clickAway' and 'offScreen'.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * If true, the popover is visible.
   */
  open: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying
   * elements, and trigger an `onRequestClose('clickAway')` call.
   */
  useLayerForClickAway: _propTypes2.default.bool,
  /**
   * The zDepth of the popover.
   */
  zDepth: _propTypes4.default.zDepth
} : void 0;
exports.default = Popover;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(291);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

exports.default = defineProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function defineProperty(o, p, attr) {
  return (0, _defineProperty2.default)(o, p, attr);
}

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = exports.detachEvent = exports.attachEvent = exports.removeEventListener = exports.addEventListener = exports.canUseDOM = undefined;

var _defineProperty = __webpack_require__(929);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = canUseDOM && 'addEventListener' in window;
var removeEventListener = exports.removeEventListener = canUseDOM && 'removeEventListener' in window;

// IE8+ Support
var attachEvent = exports.attachEvent = canUseDOM && 'attachEvent' in window;
var detachEvent = exports.detachEvent = canUseDOM && 'detachEvent' in window;

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, (0, _defineProperty2.default)({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (e) {} // eslint-disable-line no-empty

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _MenuItem = __webpack_require__(944);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MenuItem2.default;

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
      var _context$muiTheme = this.context.muiTheme,
          svgIcon = _context$muiTheme.svgIcon,
          prepareStyles = _context$muiTheme.prepareStyles;


      var offColor = color ? color : 'currentColor';
      var onColor = hoverColor ? hoverColor : offColor;

      var mergedStyles = (0, _simpleAssign2.default)({
        display: 'inline-block',
        color: svgIcon.color,
        fill: this.state.hovered ? onColor : offColor,
        height: 24,
        width: 24,
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }, style);

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, other, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: prepareStyles(mergedStyles),
          viewBox: viewBox
        }),
        children
      );
    }
  }]);
  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * This is the fill color of the svg icon.
   * If not specified, this component will default
   * to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
} : void 0;
exports.default = SvgIcon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createEagerElementUtil = __webpack_require__(940);

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = __webpack_require__(938);

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
};

exports.default = isClassComponent;

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _isClassComponent = __webpack_require__(937);

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(12);

var _createHelper = __webpack_require__(853);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(935);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _class.prototype.render = function render() {
        return factory(this.props);
      };

      return _class;
    }(_react.Component);
  };
};

exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(936);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(731);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(778);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _EnhancedButton = __webpack_require__(793);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__(924);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Tooltip = __webpack_require__(1185);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _childUtils = __webpack_require__(790);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      boxSizing: 'border-box',
      overflow: 'visible',
      transition: _transitions2.default.easeOut(),
      padding: baseTheme.spacing.iconSize / 2,
      width: baseTheme.spacing.iconSize * 2,
      height: baseTheme.spacing.iconSize * 2,
      fontSize: 0
    },
    tooltip: {
      boxSizing: 'border-box'
    },
    disabled: {
      color: baseTheme.palette.disabledColor,
      fill: baseTheme.palette.disabledColor,
      cursor: 'default'
    }
  };
}

var IconButton = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      // Not to be confonded with the touch property.
      // This state is to determined if it's a mobile device.
      touch: false,
      tooltipShown: false
    }, _this.handleBlur = function (event) {
      _this.hideTooltip();
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      _this.showTooltip();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.button.isKeyboardFocused()) {
        _this.hideTooltip();
      }
      _this.setState({ hovered: false });
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseOut = function (event) {
      if (_this.props.disabled) _this.hideTooltip();
      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
    }, _this.handleMouseEnter = function (event) {
      _this.showTooltip();

      // Cancel hover styles for touch devices
      if (!_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyboardFocus = _this$props.onKeyboardFocus;

      if (isKeyboardFocused && !disabled) {
        _this.showTooltip();
        if (onFocus) {
          onFocus(event);
        }
      } else {
        _this.hideTooltip();
        if (onBlur) {
          onBlur(event);
        }
      }

      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      if (onKeyboardFocus) {
        onKeyboardFocus(event, isKeyboardFocused);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({ hovered: false });
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus() {
      this.button.setKeyboardFocus();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      if (this.props.tooltip) {
        this.setState({ tooltipShown: true });
      }
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      if (this.props.tooltip) this.setState({ tooltipShown: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          hoveredStyle = _props.hoveredStyle,
          disableTouchRipple = _props.disableTouchRipple,
          children = _props.children,
          iconClassName = _props.iconClassName,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipPositionProp = _props.tooltipPosition,
          tooltipStyles = _props.tooltipStyles,
          touch = _props.touch,
          iconStyle = _props.iconStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

      var fonticon = void 0;

      var styles = getStyles(this.props, this.context);
      var tooltipPosition = tooltipPositionProp.split('-');

      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});

      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
        label: tooltip,
        show: this.state.tooltipShown,
        touch: touch,
        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
        verticalPosition: tooltipPosition[0],
        horizontalPosition: tooltipPosition[1]
      }) : null;

      if (iconClassName) {
        var iconHoverColor = iconStyle.iconHoverColor,
            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


        fonticon = _react2.default.createElement(
          _FontIcon2.default,
          {
            className: iconClassName,
            hoverColor: disabled ? null : iconHoverColor,
            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
            color: this.context.muiTheme.baseTheme.palette.textColor
          },
          children
        );
      }

      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({
          ref: function ref(_ref2) {
            return _this2.button = _ref2;
          }
        }, other, {
          centerRipple: true,
          disabled: disabled,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          disableTouchRipple: disableTouchRipple,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onMouseOut: this.handleMouseOut,
          onKeyboardFocus: this.handleKeyboardFocus
        }),
        tooltipElement,
        fonticon,
        (0, _childUtils.extendChildren)(children, {
          style: childrenStyle
        })
      );
    }
  }]);
  return IconButton;
}(_react.Component);

IconButton.muiName = 'IconButton';
IconButton.defaultProps = {
  disabled: false,
  disableTouchRipple: false,
  iconStyle: {},
  tooltipPosition: 'bottom-center',
  touch: false
};
IconButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
  /**
   * Can be used to pass a `FontIcon` element as the icon for the button.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the element will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when the component is hovered.
   */
  hoveredStyle: _propTypes2.default.object,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the icon element.
   * Note: you can specify iconHoverColor as a String inside this object.
   */
  iconStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} keyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseOut: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The text to supply to the element's tooltip.
   */
  tooltip: _propTypes2.default.node,
  /**
   * The vertical and horizontal positions, respectively, of the element's tooltip.
   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
   * "bottom-left", and "top-left".
   */
  tooltipPosition: _propTypes4.default.cornersAndCenter,
  /**
   * Override the inline-styles of the tooltip element.
   */
  tooltipStyles: _propTypes2.default.object,
  /**
   * If true, increase the tooltip element's size. Useful for increasing tooltip
   * readability on mobile devices.
   */
  touch: _propTypes2.default.bool
} : void 0;
exports.default = IconButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Subheader = __webpack_require__(1184);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var hasSubheader = false;

      var firstChild = _react.Children.toArray(children)[0];
      if ((0, _react.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
        hasSubheader = true;
      }

      var styles = {
        root: {
          padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
        }
      };

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return List;
}(_react.Component);

List.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? List.propTypes = {
  /**
   * These are usually `ListItem`s that are passed to
   * be part of the list.
   */
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = List;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(722);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(725);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(284);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(283);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(282);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(281);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(726);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(162);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(771);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Popover = __webpack_require__(927);

var _Popover2 = _interopRequireDefault(_Popover);

var _check = __webpack_require__(1240);

var _check2 = _interopRequireDefault(_check);

var _ListItem = __webpack_require__(1230);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Menu = __webpack_require__(926);

var _Menu2 = _interopRequireDefault(_Menu);

var _propTypes3 = __webpack_require__(778);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nestedMenuStyle = {
  position: 'relative'
};

function getStyles(props, context) {
  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
  var textColor = context.muiTheme.baseTheme.palette.textColor;
  var indent = props.desktop ? 64 : 72;
  var sidePadding = props.desktop ? 24 : 16;

  var styles = {
    root: {
      color: props.disabled ? disabledColor : textColor,
      cursor: props.disabled ? 'default' : 'pointer',
      minHeight: props.desktop ? '32px' : '48px',
      lineHeight: props.desktop ? '32px' : '48px',
      fontSize: props.desktop ? 15 : 16,
      whiteSpace: 'nowrap'
    },

    innerDivStyle: {
      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
      paddingRight: props.rightIcon ? indent : sidePadding,
      paddingBottom: 0,
      paddingTop: 0
    },

    secondaryText: {
      float: 'right'
    },

    leftIconDesktop: {
      margin: 0,
      left: 24,
      top: 4
    },

    rightIconDesktop: {
      margin: 0,
      right: 24,
      top: 4,
      fill: context.muiTheme.menuItem.rightIconDesktopFill
    }
  };

  return styles;
}

var MenuItem = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.cloneMenuItem = function (item) {
      return _react2.default.cloneElement(item, {
        onTouchTap: function onTouchTap(event) {
          if (!item.props.menuItems) {
            _this.handleRequestClose();
          }

          if (item.props.onTouchTap) {
            item.props.onTouchTap(event);
          }
        }
      });
    }, _this.handleTouchTap = function (event) {
      event.preventDefault();

      _this.setState({
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this)
      });

      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event);
      }
    }, _this.handleRequestClose = function () {
      _this.setState({
        open: false,
        anchorEl: null
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyFocusState();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.open && nextProps.focusState === 'none') {
        this.handleRequestClose();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.applyFocusState();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.open) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'applyFocusState',
    value: function applyFocusState() {
      this.refs.listItem.applyFocusState(this.props.focusState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          children = _props.children,
          desktop = _props.desktop,
          disabled = _props.disabled,
          focusState = _props.focusState,
          innerDivStyle = _props.innerDivStyle,
          insetChildren = _props.insetChildren,
          leftIcon = _props.leftIcon,
          menuItems = _props.menuItems,
          rightIcon = _props.rightIcon,
          secondaryText = _props.secondaryText,
          style = _props.style,
          animation = _props.animation,
          anchorOrigin = _props.anchorOrigin,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'value']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);

      // Left Icon
      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
      if (leftIconElement) {
        var mergedLeftIconStyles = desktop ? (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
      }

      // Right Icon
      var rightIconElement = void 0;
      if (rightIcon) {
        var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
      }

      // Secondary Text
      var secondaryTextElement = void 0;
      if (secondaryText) {
        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;

        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.secondaryText) },
          secondaryText
        );
      }
      var childMenuPopover = void 0;
      if (menuItems) {
        childMenuPopover = _react2.default.createElement(
          _Popover2.default,
          {
            animation: animation,
            anchorOrigin: anchorOrigin,
            anchorEl: this.state.anchorEl,
            open: this.state.open,
            useLayerForClickAway: false,
            onRequestClose: this.handleRequestClose
          },
          _react2.default.createElement(
            _Menu2.default,
            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
            _react2.default.Children.map(menuItems, this.cloneMenuItem)
          )
        );
        other.onTouchTap = this.handleTouchTap;
      }

      return _react2.default.createElement(
        _ListItem2.default,
        (0, _extends3.default)({}, other, {
          disabled: disabled,
          hoverColor: this.context.muiTheme.menuItem.hoverColor,
          innerDivStyle: mergedInnerDivStyles,
          insetChildren: insetChildren,
          leftIcon: leftIconElement,
          ref: 'listItem',
          rightIcon: rightIconElement,
          role: 'menuitem',
          style: mergedRootStyles
        }),
        children,
        secondaryTextElement,
        childMenuPopover
      );
    }
  }]);
  return MenuItem;
}(_react.Component);

MenuItem.muiName = 'MenuItem';
MenuItem.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  checked: false,
  desktop: false,
  disabled: false,
  focusState: 'none',
  insetChildren: false
};
MenuItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
process.env.NODE_ENV !== "production" ? MenuItem.propTypes = {
  /**
   * Location of the anchor for the popover of nested `MenuItem`
   * elements.
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, a left check mark will be rendered.
   */
  checked: _propTypes2.default.bool,
  /**
   * Elements passed as children to the underlying `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   * If true, the menu item will render with compact desktop
   * styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu item will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The focus state of the menu item. This prop is used to set the focus
   * state of the underlying `ListItem`.
   */
  focusState: _propTypes2.default.oneOf(['none', 'focused', 'keyboard-focused']),
  /**
   * Override the inline-styles of the inner div.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented.
   * This is only needed when there is no `leftIcon`.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * `MenuItem` elements to nest within the menu item.
   */
  menuItems: _propTypes2.default.node,
  /**
   * Callback function fired when the menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Can be used to render primary text within the menu item.
   */
  primaryText: _propTypes2.default.node,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * Can be used to render secondary text within the menu item.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The value of the menu item.
   */
  value: _propTypes2.default.any
} : void 0;
exports.default = MenuItem;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

});
//# sourceMappingURL=20.app.js.map