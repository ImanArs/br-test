import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'

const {
   Header, Content, Footer, Sider,
} = Layout

const {
   token: { colorBgContainer },
} = theme.useToken()
export const Sidebar = () => (

   <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
         console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
         console.log(collapsed, type)
      }}
   >
      <div className="demo-logo-vertical" />
      <Menu 
         theme={colorBgContainer}
         mode="inline"
         defaultSelectedKeys={['4']}
         items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
               key: String(index + 1),
               icon: React.createElement(icon),
               label: `nav ${index + 1}`,
            }),
         )}
      />
   </Sider>
)
