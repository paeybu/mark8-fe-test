import { useState } from 'react';
import { Card, Row, Col, Upload, Button } from 'antd';
import { ExclamationOutlined, UploadOutlined } from '@ant-design/icons';
import { CircleIconWrapper, RectangleIconWrapper } from './Icon';
import Papa from 'papaparse';

const BulkUploadForm = ({ onComplete }) => {
  const [fileList, setFileList] = useState([]);
  return (
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
              {fileList.length === 0 && (
                <div>
                  <p style={{ color: '#0089ff' }}>
                    You haven't uploaded any bulk data yet
                  </p>
                </div>
              )}
            </>
          }
        >
          <h2>
            <strong>Choose your input method</strong>
          </h2>
          <Card>
            <Row>
              <Col>
                <Upload
                  name='file'
                  action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                  onChange={({ file, fileList }) => {
                    setFileList(fileList.slice(-1));
                    file.status === 'done' &&
                      Papa.parse(file.originFileObj, {
                        complete: onComplete,
                        header: true,
                      });
                  }}
                  fileList={fileList}
                >
                  <RectangleIconWrapper>
                    <UploadOutlined
                      style={{
                        fontSize: ' 40px',
                        color: '#002240',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  </RectangleIconWrapper>
                </Upload>
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
  );
};

export default BulkUploadForm;
