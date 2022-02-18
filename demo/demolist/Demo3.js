/**
 *
 * @title 提取所有输入信息
 * @description 针对表头中的搜索内容，进行提取键入的信息数据。【查看console的输出】
 *
 */
import React, {Component} from 'react';
import SearchPanel from '../../src';
import { Form, Checkbox, Radio, Select, Col, Row, Input } from '@tinper/next-ui';
const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const HeadContainer = SearchPanel.HeadContainer;
const AdvancedContainer = SearchPanel.AdvancedContainer;

class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            orderTypes:[
                {
                    'code':'001',
                    'name':'类型1'
                },
                {
                    'code':'002',
                    'name':'类型2'
                },
                {
                    'code':'003',
                    'name':'类型3'
                },
            ]
        };
    }
    clear = () =>{
        this.props.form.resetFields();
    }
    onChange = () => {
        this.setState({expanded: !this.state.expanded})
    }

    search =()=>{
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log(err);
            } else {
                console.log('提交成功', values)
            }
        });
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        let self = this;
        return (<div className="demo3">
            <SearchPanel
                title='条件筛选'
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
                                    <FormItem label="订单编号">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('orderCode', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="供应商名称">
                                            <Input size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
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
                                    <FormItem label="订单类型">
                                            <Select size="sm"
                                                {
                                                ...getFieldProps('type', {
                                                    initialValue: '',
                                                }
                                                )}>
                                                <Option value="">请选择</Option>
                                                {
                                                    self.state.orderTypes.map((item, index) => {
                                                        return (
                                                            <Option key={index} value={item.code}>{item.name}</Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="采购组">
                                            <CheckboxGroup 
                                                    {
                                                        ...getFieldProps('purchasingGroup',{
                                                            initialValue:['2']
                                                        })
                                                    }
                                                >
                                                    <Checkbox value='1'>人力</Checkbox>
                                                    <Checkbox value='2'>财务</Checkbox>
                                            </CheckboxGroup>
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem label="审批">
                                            <Radio.Group
                                                    {
                                                    ...getFieldProps('approvalState', {
                                                        initialValue: '1',
                                                        valuePropName:"selectedValue"
                                                    }
                                                    )}
                                                >
                                                <Radio value="0" >未审批</Radio>
                                                <Radio value="1" >已审批</Radio>
                                            </Radio.Group>
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

export default Form.createForm()(Demo3);