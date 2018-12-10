import React from 'react'

import moment from 'moment';
import {Row,Input,Card, Icon, Avatar,Col} from 'antd';
import 'moment/locale/zh-cn';
import "./content.less";
import "../../index.less";

moment.locale('zh-cn');


const Search = Input.Search;
const { Meta } = Card;
/**
 * 自定义内容主键
 */
class Content extends React.Component {
  constructor(props){
    super( props )
    this.state = {

    }
  }
  render() {
    return(
      <Row className="content_box">
          <Search
            className="content-search"
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <Row className="content-list" gutter={10}>
              <Col span={6}>
                  <Card
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                    <Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
              </Col>
              <Col span={6}>
                  <Card
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                    <Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
              </Col>


          </Row>
      </Row>
    );
  }
}

export default Content;

