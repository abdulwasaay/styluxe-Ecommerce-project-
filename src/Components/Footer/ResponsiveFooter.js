import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import styles from "./Footer.module.css"
const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const ResFooter = ({value , button}) => {
    const items = value;
    const menupropsOnstatus = {
        items,
        onClick: handleMenuClick
    }
    return (
        <>
            <Dropdown menu={menupropsOnstatus}>
                <Button style={{width:"130px"}} className={styles.menu}>
                    <Space>
                        {button}
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown><br />
        </>
    )

}
export default ResFooter;