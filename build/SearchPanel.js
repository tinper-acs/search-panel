'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beePanel = require('bee-panel');

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    searchOpen: _propTypes2["default"].bool,
    showIcon: _propTypes2["default"].bool,
    searchHead: _propTypes2["default"].string,
    searchClick: _propTypes2["default"].func,
    clearClick: _propTypes2["default"].func
};
var defaultProps = {
    searchOpen: false, //是否默认展开，false默认关闭
    showIcon: true, //是否显示icon
    searchHead: '',
    searchContent: '',
    searchClick: function searchClick() {//查询回调

    },
    clearClick: function clearClick() {//清空回调

    },
    clsPrefix: 'u-search',
    style: {}
};

var SearchPanel = function (_Component) {
    _inherits(SearchPanel, _Component);

    function SearchPanel(props) {
        _classCallCheck(this, SearchPanel);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            searchOpen: _this.props.searchOpen
        };
        _this.open = _this.open.bind(_this);
        return _this;
    }

    SearchPanel.prototype.open = function open() {
        this.setState({
            searchOpen: !this.state.searchOpen
        });
    };

    SearchPanel.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            className = _props.className,
            clsPrefix = _props.clsPrefix,
            searchClick = _props.searchClick,
            clearClick = _props.clearClick,
            searchContent = _props.searchContent,
            showIcon = _props.showIcon,
            searchHead = _props.searchHead,
            searchOpen = _props.searchOpen,
            style = _props.style,
            others = _objectWithoutProperties(_props, ['className', 'clsPrefix', 'searchClick', 'clearClick', 'searchContent', 'showIcon', 'searchHead', 'searchOpen', 'style']);

        className = className ? className : '';
        var header = function header() {
            return _react2["default"].createElement(
                'div',
                _extends({ className: 'clearfix', onClick: _this2.open }, others),
                _react2["default"].createElement(
                    'span',
                    { className: clsPrefix + '-title' },
                    searchHead
                ),
                _react2["default"].createElement(
                    'span',
                    { className: clsPrefix + '-icon' },
                    _this2.state.searchOpen ? '收起' : '展开',
                    showIcon ? _react2["default"].createElement('i', { className: (0, _classnames2["default"])({
                            'uf': true,
                            'uf-2arrow-down': _this2.state.searchOpen,
                            'uf-2arrow-up': !_this2.state.searchOpen
                        }) }) : ''
                )
            );
        };

        return _react2["default"].createElement(
            'div',
            { className: clsPrefix + ' ' + className, style: style },
            _react2["default"].createElement(
                _beePanel.Panel,
                { header: header(), className: clsPrefix + '-content', collapsible: true, expanded: this.state.searchOpen },
                searchContent,
                _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-footer pull-right' },
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { bordered: true, colors: 'primary', onClick: searchClick },
                        '\u67E5\u8BE2'
                    ),
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { bordered: true, colors: 'primary', onClick: clearClick },
                        '\u6E05\u7A7A'
                    )
                )
            )
        );
    };

    return SearchPanel;
}(_react.Component);

;
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
exports["default"] = SearchPanel;
module.exports = exports['default'];