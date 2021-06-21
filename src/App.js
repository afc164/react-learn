import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button,TimePicker } from 'antd'
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

class App extends Component {
    onChange = (time, timeString) => {
        console.log(time, timeString);
    }
    render() {
        return (
            <div>
                <Button type="primary">按钮</Button>
                <HomeOutlined />
                <SettingFilled />
                <SmileOutlined />
                <SyncOutlined spin />
                <SmileOutlined rotate={180} />
                <LoadingOutlined />
                <TimePicker use12Hours onChange={this.onChange} />
            </div>
        );
    }
}

export default App;