import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import styles from "./Search.module.css"
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function SearchBar() {
    return (
        <Space direction="vertical">
            <Search placeholder="Search Products" onSearch={onSearch} enterButton className={styles.search}/>
        </Space>
    )
}