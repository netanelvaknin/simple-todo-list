import React, { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const [current, setCurrent] = useState(history.location.pathname);

    const changeRoute = (e) => {
        setCurrent(e.key);
        history.push(e.key);
    }

    return (
      <Menu 
        selectedKeys={[current]} 
        mode="horizontal"
        onClick={changeRoute}>
        <Menu.Item key="/">Todos</Menu.Item>
        <Menu.Item key="/add-todos">Add todos</Menu.Item>
        <Menu.Item key="/about">About</Menu.Item>
      </Menu>
    );
}

export default Navbar;