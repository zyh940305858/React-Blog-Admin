import React,{ useState, useEffect } from 'react';
import { List, Row, Col, Modal, message, Button } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import '../static/css/ArticleList.css';
const { confirm } = Modal;

function ArticleList(props){
    const [list,setList]=useState([]);

    useEffect(()=>{
        getList()
    },[])

    const getList = () =>{
        axios.get(servicePath.getArticleList,{ withCredentials: true })
        .then(
            res=>{
                setList(res.data.list)
            }
        )
    }

    return (
        <div>
            <List 
                header={
                    <Row className="list_div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>
                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item=>(
                    <List.Item>
                        <Row className="list_div">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={4}>
                                {item.typeName}
                            </Col>
                            <Col span={4}>
                                {item.addTime}
                            </Col>
                            <Col span={4}>
                                {item.view_count}
                            </Col>
                            <Col span={4}>
                                <Button type="primary">修改</Button>
                                <Button>删除</Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ArticleList;