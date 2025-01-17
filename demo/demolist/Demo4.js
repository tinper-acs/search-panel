/**
 *
 * @title 多语示例
 * @description 使用tinper-bee的locale组件或者传locale属性。此处为使用locale属性示例
 *
 */
import React, {Component} from 'react';
import SearchPanel from '../../src';
import { Input, Row, Col, Form } from '@tinper/next-ui';
let HeadContainer = SearchPanel.HeadContainer;
let AdvancedContainer = SearchPanel.AdvancedContainer;

const FormItem = Form.Item;

class Demo4 extends Component {
    constructor(props){
        super(props);
        this.state={
            expanded: true
        }
    }
    search=()=>{
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log(err);
            } else {
                console.log('提交成功', values)
            }
        });
    }
    clear=()=>{
        this.props.form.resetFields()
    }
    onChange = () => {
        this.setState({expanded: !this.state.expanded})
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        let locale = {
            'title': 'screening conditions',
            'resetName': 'reset',
            'searchName': 'submit',
            'down':'open',
            'up':'close',
        }
        return (<div className="demo1">
            <SearchPanel
                locale={locale}
                onSearch={this.search}
                onReset={this.clear}
                expanded={this.state.expanded}
                onChange={this.onChange}
                onPanelChangeStart={status => {
                    console.log(status, "start")
                }}
                onPanelChangeIng={status => {
                    console.log(status, "ing")
                }}
                onPanelChangeEnd={status => {
                    console.log(status, "end")
                }}>
                <HeadContainer>
                    <div className='demo-head'>
                        <Form>
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="名称">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('name', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="电话">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('phone', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </HeadContainer>
                
                <AdvancedContainer>
                    <div className='demo-body'>
                        <Form>
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="联系人">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('people', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="供应商">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('supplier', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col> 
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="地址">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('address', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col> 
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="车牌">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('carNumber', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="备注">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('remark', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="编号">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('id', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>                 
                </AdvancedContainer>
            </SearchPanel>
            </div>
        )
    }
}
export default Form.createForm()(Demo4);