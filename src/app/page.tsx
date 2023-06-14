"use client";
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Row, Col, Card, Avatar } from 'antd';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
import { useTranslation } from './i18n'
import Banner from '@/assets/images/banner.svg'
export default async function Page({ params: { lng } }: { params: any }) {
  const { t }: { t: any } = await useTranslation(lng)
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
        <div className="demo-logo" >
          JOEL BOLIVAR
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          // defaultSelectedKeys={['2']}
          style={{ width: '30%' }}
          items={[
            {
              key: 'TECNOLOGÍAS',
              label: `TECNOLOGÍAS`,
            },
            {
              key: 'SOBRE MI',
              label: `SOBRE MI`,
            },
            {
              key: 'PROYECTOS',
              label: `PROYECTOS`,
            },
          ]}
        />
        <div className="demo-logo" >
          JOEL BOLIVAR
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>

        <div className="site-layout-content" style={{ background: 'red' }}>
          <Row className="home">
            <Col span={12}>
              <h1>FULL STACK DEVELOPER JAVASCRIPT </h1>
              <p>Soy Full Stack Developer con experiencia en React.js, Node.js, y React Native, mi objetivo profesional es trabajar en un entorno dinámico donde pueda aplicar mis habilidades y conocimientos para desarrollar soluciones innovadoras.</p>
            </Col>
            <Col span={12}>
              <Image src={Banner} />
            </Col>
          </Row>
          <div className="tecnology">

            <h2>TECNOLOGÍAS</h2>
            <Row>
              <Col span={7}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <div className="about">
            <h2>SOBRE MI</h2>
            Soy  T.S.U.  en Informática  graduado en venezuela ,  Inicie mi carrera profesional como programador en el 2011. Estuve trabajando 8 años con diferentes tecnologías.
            En el 2019 me traslade a peru y he trabajado en multiples empresas desarrollando paginas web, sistemas administrativos, sistemas de facturacion entre otros utilizando nodejs y reactjs.
          </div>
          <div className="project">
            <h2>TECNOLOGÍAS</h2>
            <Row>
              <Col span={7}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className="about">
          <h2>OTRA HABILIDADES</h2>
          <p>Software Libre y GNU-Linux</p>
          <p>Inkscape y Figma</p>
          <p>Php</p>
          <p>Laravel</p>
          <p>Vuejs</p>
          <p>Srum</p>
          <p>Trello</p>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <p>© 2023 JOEL BOLÍVAR.</p>
        <Link href={'https://www.linkedin.com/in/joel-jos%C3%A9-bol%C3%ADvar-guti%C3%A9rrez-395806127/'}>linkedin</Link>
      </Footer>
    </Layout>
  )
}




