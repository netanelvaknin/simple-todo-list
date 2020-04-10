import React from 'react';
import { Typography } from 'antd';

const About = () => {
    const { Paragraph } = Typography;

    return (
      <div style={{ width: '50rem', margin: '0 auto' }}>
        <h1>About page</h1>
        <Paragraph
          ellipsis={{ rows: 7 }}
        >
          Hi, my name is Netanel Vaknin. As part of learning React, I decided to build this simple todo
          applicaction. Although this is not a "unique" project, it may be
          possible to understand the level of my code writing (including my UX & UI level). <span style={{ fontWeight: 'bold' }}>The technologies I used in this app:</span>
        </Paragraph>

        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Styled-components</li>
          <li>Ant-design</li>
          <li>React router dom</li>
        </ul>

        <Paragraph style={{ fontWeight: 'bold' }}>Wishing all of us good luck down the road :)</Paragraph>
      </div>
    );
}

export default About;