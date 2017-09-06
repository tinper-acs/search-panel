import React, {Component, PropTypes} from 'react';
import {Panel} from 'bee-panel';
import {Row, Col} from 'bee-layout';
import Button from 'bee-button';
import classnames from 'classnames';
const propTypes = {
    searchOpen:PropTypes.bool,
    showIcon:PropTypes.bool,
    searchHead:PropTypes.string,
    searchClick:PropTypes.func,
    clearClick:PropTypes.func,
};
const defaultProps = {
    searchOpen:false,//是否默认展开，false默认关闭
    showIcon:true,//是否显示icon
    searchHead:'',
    searchContent:'',
    searchClick:()=>{//查询回调

    },
    clearClick:()=>{//清空回调

    },
    clsPrefix:'u-search',
    style:{}
};
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOpen: this.props.searchOpen
        };
        this.open = this.open.bind(this);
    }

    open() {
        this.setState({
            searchOpen: !this.state.searchOpen
        })
    }

    render() {
        const {className,clsPrefix,searchClick,clearClick,searchContent,showIcon,searchHead,searchOpen,style,...others}=this.props;
        let header = () => {
            return (
                <div className="clearfix" onClick={this.open} {...others}>
                    <span  className="pull-left">
                        {searchHead}
                    </span>
                    <span  className="pull-right">
                        {this.state.searchOpen ? '收起' : '展开'}
                        {
                            showIcon?( <i className={classnames({
                                'uf': true,
                                'uf-2arrow-down': this.state.searchOpen,
                                'uf-2arrow-up': !this.state.searchOpen
                            })}/>):''
                        }
                    </span>
                </div>
            )
        };

        return (
            <div className={clsPrefix+' '+className} style={style}>
                <Row>
                    <Col xs={12}>
                        <Panel header={header()} className={clsPrefix+'-content'} collapsible expanded={this.state.searchOpen}>
                            {searchContent}
                            <div className={clsPrefix+'-footer pull-right'}>
                                <Button colors="primary"  onClick={searchClick}>查询</Button>
                                <Button onClick={clearClick}>清空</Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </div>

        )
    }
}
;
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
export default SearchPanel;