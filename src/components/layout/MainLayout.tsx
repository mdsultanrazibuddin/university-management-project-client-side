
import { Layout, Menu, } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: '1',
    label: 'Dashboard',
  },
  {
    key: '2',
    label: 'Dashboard',
    children: [
      {
        key: '21',
        label: 'Dashboard',
      },
      {
        key: '22',
        label: 'Dashboard',
      }
    ]
  },
  {
    key: '3',
    label: 'Dashboard',
  },
]

const MainLayout = () => {


  return (
    <Layout style={{height:"100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:'white', textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',height:'64px'}}>
           <h1>University</h1> 
           
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout ;