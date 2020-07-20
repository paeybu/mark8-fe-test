import React from 'react';
import { Layout as AntdLayout } from 'antd';
import styled from 'styled-components';

const { Header: AntdHeader, Content: AntContent } = AntdLayout;

export const Header = styled(AntdHeader)`
  height: 55px;
  background: #002240;
  display: flex;
`;

export const Content = styled(AntContent)`
  padding-top: 65px;
`;

const Logo = styled.img`
  margin-left: 450px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <AntdLayout>
        <Header>
          <Logo src='/images/mark8_nav.svg' />
        </Header>
        <Content>{children}</Content>
      </AntdLayout>
    </>
  );
};

export default Layout;
