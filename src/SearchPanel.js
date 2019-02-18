import React, {Component} from 'react';
import {Panel} from 'bee-panel';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const emFun = () => {}

const propTypes =  {
    searchOpen: PropTypes.bool,//是否默认展开，false默认关闭
        search: PropTypes.func,//查询的回调
    reset: PropTypes.func,//重置的回调
    resetName: PropTypes.string,//重置的文字
    searchName: PropTypes.string,//查询的文字
    title: PropTypes.string
};

const defaultProps = {
    className: "",
    clsPrefix: 'u-search',
    searchOpen: true,
    onSearch: emFun,
    onReset: emFun,
    title: "默认筛选",
    resetName: "清除查询",
    searchName: "查询",
    bgColor: "#F7F9FB"
};


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOpen: props.searchOpen
        };
    }
    componentDidMount() {

    }

    open = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        })
    }

    search = () => {
        const { onSearch } = this.props;
        onSearch && onSearch();
    }
    reset = () => {
        const { onReset } = this.props;
        onReset && onReset();
    }
    render() {
        const { children, clsPrefix, className, resetName, searchName, onCallback, bgColor } = this.props;

        let PanelHeader = (
            <div className={clsPrefix + "-header"}>
                <div className={clsPrefix + "-header-title"}>
                    <span>{this.props.title}</span>
                    {/*<Icon type="uf-arrow-c-o-down"/>*/}
                </div>

                <div className={clsPrefix + "-header-oper"}>
                    <a
                        className="header-oper-btn"
                        role="button"
                        onClick={this.open}
                    >
                        {this.state.searchOpen ? '收起' : '展开'}
                        <i className={classnames({
                            'uf': true,
                            'uf-arrow-down': !this.state.searchOpen,
                            'uf-arrow-up': this.state.searchOpen
                        })} />
                    </a>
                    <a className="header-oper-btn" role="button" onClick={this.reset}>{resetName}</a>
                    <a className="header-oper-btn primary" role="button" onClick={this.search}>{searchName}</a>
                </div>
            </div>
        );
        return (
            <Panel
                className={clsPrefix + ' ' + className}
                header={PanelHeader}
                collapsible

                expanded={this.state.searchOpen}
                onExited={() => onCallback && onCallback(false)}//隐藏完成回调
                onEntered={() => onCallback && onCallback(true)}//显示后回调
                style={{
                    backgroundColor: bgColor
                }}
            >
                {children}
            </Panel>

        )
    }
}
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
export default SearchPanel;