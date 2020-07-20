import Link from 'next/link';
import Layout from '../components/Layout';
import { Card, Row, Col, Upload, Button } from 'antd';
import { ExclamationOutlined, UploadOutlined } from '@ant-design/icons';
import { CircleIconWrapper, RectangleIconWrapper } from '../components/Icon';
const Home = () => {
  return (
    <Layout>
      <Row justify='center'>
        <Col span={12}>
          <Card
            title={
              <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h2 style={{ marginBottom: 0 }}>
                    <strong>Bulk Upload Form</strong>
                  </h2>
                  <CircleIconWrapper>
                    <ExclamationOutlined style={{ color: 'white' }} />
                  </CircleIconWrapper>
                </div>
                <div>
                  <p style={{ color: '#0089ff' }}>
                    You haven't uploaded any bulk data yet
                  </p>
                </div>
              </>
            }
          >
            <h2>
              <strong>Choose your input method</strong>
            </h2>
            <Card>
              <Row>
                <Col>
                  <RectangleIconWrapper>
                    <UploadOutlined
                      style={{
                        fontSize: '40px',
                        color: '#002240',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  </RectangleIconWrapper>
                </Col>
                <Col style={{ marginLeft: '15px' }}>
                  <p>
                    <strong>via CSV file</strong>
                  </p>
                  <p>อัปเดตข้อมูลจากไฟล์ CSV</p>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
