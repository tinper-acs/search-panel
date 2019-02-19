'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beePanel = require('bee-panel');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var emFun = function emFun() {};

var propTypes = {
    defaultExpanded: _propTypes2["default"].bool,
    expanded: _propTypes2["default"].bool, //是否默认展开，false默认关闭
    onSearch: _propTypes2["default"].func, //查询的回调
    onReset: _propTypes2["default"].func, //重置的回调
    resetName: _propTypes2["default"].string, //重置的文字
    searchName: _propTypes2["default"].string, //查询的文字
    title: _propTypes2["default"].string,
    onPanelChanged: _propTypes2["default"].func,
    onChange: _propTypes2["default"].func
};

var defaultProps = {
    className: "",
    clsPrefix: 'u-search',
    defaultExpanded: false,
    title: "默认筛选",
    resetName: "清空",
    searchName: "查询",
    bgColor: "#F7F9FB"

};

var SearchPanel = function (_Component) {
    _inherits(SearchPanel, _Component);

    function SearchPanel(props) {
        _classCallCheck(this, SearchPanel);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.changeExpanded = function () {
            _this.setState({
                expanded: !_this.state.expanded
            });
        };

        _this._onChange = function () {
            var onChange = _this.props.onChange;

            if ('expanded' in _this.props) {
                _this.setState({ expanded: _this.props.expanded });
            } else {
                _this.setState({ expanded: !_this.state.expanded });
            }
            onChange && onChange();
        };

        _this.search = function () {
            var onSearch = _this.props.onSearch;

            onSearch && onSearch();
        };

        _this.reset = function () {
            var onReset = _this.props.onReset;

            onReset && onReset();
        };

        _this._onPanelChange = function (type) {
            var onPanelChanged = _this.props.onPanelChanged;

            if (onPanelChanged) {
                var status = "";
                if (type === 0) {
                    status = "hide";
                } else if (type === 1) {
                    status = 'visible';
                }
                onPanelChanged(status);
            }
        };

        _this.state = {
            expanded: props.expanded || props.defaultExpanded
        };
        return _this;
    }

    SearchPanel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('expanded' in nextProps) {
            this.setState({ expanded: nextProps.expanded });
        }
    };

    SearchPanel.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            clsPrefix = _props.clsPrefix,
            className = _props.className,
            resetName = _props.resetName,
            searchName = _props.searchName,
            bgColor = _props.bgColor;


        var PanelHeader = _react2["default"].createElement(
            'div',
            { className: clsPrefix + "-header" },
            _react2["default"].createElement(
                'div',
                { className: clsPrefix + "-header-title" },
                _react2["default"].createElement(
                    'span',
                    null,
                    this.props.title
                )
            ),
            _react2["default"].createElement(
                'div',
                { className: clsPrefix + "-header-oper" },
                _react2["default"].createElement(
                    'a',
                    {
                        className: 'header-oper-btn',
                        role: 'button',
                        onClick: this._onChange
                    },
                    this.state.expanded ? '收起' : '展开',
                    _react2["default"].createElement('i', { className: (0, _classnames2["default"])({
                            'uf': true,
                            'uf-arrow-down': !this.state.expanded,
                            'uf-arrow-up': this.state.expanded
                        }) })
                ),
                _react2["default"].createElement(
                    'a',
                    { className: 'header-oper-btn', role: 'button', onClick: this.reset },
                    resetName
                ),
                _react2["default"].createElement(
                    'a',
                    { className: 'header-oper-btn primary', role: 'button', onClick: this.search },
                    searchName
                )
            )
        );
        return _react2["default"].createElement(
            _beePanel.Panel,
            {
                className: clsPrefix + ' ' + className,
                header: PanelHeader,
                collapsible: true,
                expanded: this.state.expanded,
                onExited: this._onPanelChange.bind(this, 0) //隐藏完成回调
                , onEntered: this._onPanelChange.bind(this, 1) //显示后回调
                , style: {
                    backgroundColor: bgColor
                }
            },
            children
        );
    };

    return SearchPanel;
}(_react.Component);

SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
exports["default"] = SearchPanel;
module.exports = exports['default'];