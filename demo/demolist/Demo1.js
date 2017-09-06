/**
 *
 * @title 基础示例
 * @description 基础示例
 *
 */
import React, {Component} from 'react';
import SearchPanel from '../../src';
import {FormControl,Row, Col,Label,FormGroup,Radio} from 'tinper-bee'


class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state={
            state:'all',
            type:'all',
            degree:'all'
        }
    }
    stateChange(value){
        this.setState({
            state:value
        })
    }
    typeChange(value){
        this.setState({
            type:value
        })
    }
    degreeChange(value){
        this.setState({
            degree:value
        })
    }
    search(){

    }
    clear(){

    }
    render() {
        let searchContent=()=>{
            return (
                <div>
                    <Row>
                        <FormGroup>
                            <Col md={1} sm={2} className="text-right">
                                <Label>状态:</Label>
                            </Col>
                            <Col md={3} sm={4}>
                                <Radio.RadioGroup
                                    name="state"
                                    selectedValue={this.state.state}
                                    onChange={this.stateChange.bind(this)}>
                                    <Radio.RadioButton value="all">全部</Radio.RadioButton>
                                    <Radio.RadioButton value="todo">待处理</Radio.RadioButton>
                                    <Radio.RadioButton value="doing">处理中</Radio.RadioButton>
                                    <Radio.RadioButton  value="done">已完成</Radio.RadioButton>
                                </Radio.RadioGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={1} sm={2} className="text-right">
                                <Label>类型:</Label>
                            </Col>
                            <Col md={3} sm={4}>
                                <Radio.RadioGroup
                                    name="type"
                                    selectedValue={this.state.type}
                                    onChange={this.typeChange.bind(this)}>
                                    <Radio.RadioButton value="all">全部</Radio.RadioButton>
                                    <Radio.RadioButton value="project">问题</Radio.RadioButton>
                                    <Radio.RadioButton value="suggest">建议</Radio.RadioButton>
                                    <Radio.RadioButton  value="experience">体验</Radio.RadioButton>
                                </Radio.RadioGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={1} sm={2} className="text-right">
                                <Label>程度:</Label>
                            </Col>
                            <Col md={3} sm={4}>
                                <Radio.RadioGroup
                                    name="degree"
                                    selectedValue={this.state.degree}
                                    onChange={this.degreeChange.bind(this)}>
                                    <Radio.RadioButton value="all">全部</Radio.RadioButton>
                                    <Radio.RadioButton value="common">一般</Radio.RadioButton>
                                    <Radio.RadioButton value="serious">严重</Radio.RadioButton>
                                    <Radio.RadioButton  value="urgent">紧急</Radio.RadioButton>
                                </Radio.RadioGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={1} sm={2} className="text-right">
                                <Label>名称:</Label>
                            </Col>
                            <Col md={3} sm={4}>
                                <FormControl placeholder="请输入名称"/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col md={1} sm={2} className="text-right">
                                <Label>编码:</Label>
                            </Col>
                            <Col md={3} sm={4}>
                                <FormControl placeholder="请输入编码"/>
                            </Col>
                        </FormGroup>
                    </Row>
                </div>
            )
        }
        return (
            <SearchPanel
                searchHead='基础示例'
                searchContent={searchContent()}
                searchClick={this.search}
                clearClick={this.clear}
            />
        )
    }
}
export default Demo1;