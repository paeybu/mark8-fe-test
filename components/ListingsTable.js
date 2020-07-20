import { Table, Tag, Row, Col, Popover, Typography, Button } from 'antd';
import { truncateString } from '../helper/truncate';
import { AMENITIES } from '../helper/const';
import { CaretDownOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Text } = Typography;

const TableInfo = ({ data }) => (
  <Row style={{ height: '100%', alignItems: 'center' }}>
    <Col
      style={{
        background: '#eee',
        width: '70px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 className='mb-0'>{data.length}</h2>
    </Col>
    <Col span={16}>
      <h2 style={{ marginLeft: '20px' }}>
        <strong>listings successfully and Ready to be published</strong>
      </h2>
    </Col>
    <Col span={3}>
      <p style={{ color: '#0089ff', marginBottom: '0' }}>Update data</p>
    </Col>
    <Col span={1}>Published</Col>
  </Row>
);

const ListingsTable = ({ data }) => {
  const [onHoverImg, setOnHoverImg] = useState(false);
  const [hoverImg, setHoverImg] = useState(false);
  const PopoverContent = (amenities) => {
    return amenities.map((a, i) => a && <p>{AMENITIES[i]}</p>);
  };

  const columns = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id, listing) => {
        const {
          'condo_name-EN': condoNameEn,
          rent_price,
          sale_price,
          bedroom,
          bath,
          'size (sq.m)': size,
          floor,
          photo1,
          title,
          description,
        } = listing;
        const hasRequiredFields =
          condoNameEn &&
          rent_price &&
          rent_price !== '0' &&
          sale_price &&
          sale_price !== '0' &&
          bedroom &&
          bedroom !== '0' &&
          bath &&
          bath !== '0' &&
          size &&
          size !== '0' &&
          floor &&
          floor !== '0' &&
          photo1 &&
          title &&
          description;
        return hasRequiredFields ? (
          <Text>{id}</Text>
        ) : (
          <Button type='danger'>
            <Text style={{ color: 'white' }}>{id}</Text>
          </Button>
        );
      },
    },
    {
      title: 'CONDO NAME',
      dataIndex: 'condo_name-EN',
      key: 'condo_name-EN',
      render: (value) => (value ? value : <Text type='danger'>Not found</Text>),
    },
    {
      title: 'RENT PRICE (Baht)',
      dataIndex: 'rent_price',
      key: 'rent_price',
      render: (value) => {
        if (!value) {
          return <Text type='danger'>Not found</Text>;
        } else if (value === '0') {
          return <Text type='danger'>Not found</Text>;
        } else {
          return value;
        }
      },
    },
    {
      title: 'SELL PRICE (Baht)',
      dataIndex: 'sale_price',
      key: 'sale_price',
      render: (value) => {
        if (!value) {
          return <Text type='danger'>Not found</Text>;
        } else if (value === '0') {
          return <Text type='danger'>Not found</Text>;
        } else {
          return value;
        }
      },
    },
    {
      title: 'BEDROOM',
      dataIndex: 'bedroom',
      key: 'bedroom',
      render: (value) => {
        if (!value) {
          return <Text type='danger'>Not found</Text>;
        } else if (value === '0') {
          return <Text type='danger'>Not found</Text>;
        } else {
          return value;
        }
      },
    },
    {
      title: 'BATHROOM',
      dataIndex: 'bath',
      key: 'bath',
      render: (value) => {
        if (!value) {
          return <Text type='danger'>Not found</Text>;
        } else if (value === '0') {
          return <Text type='danger'>Not found</Text>;
        } else {
          return value;
        }
      },
    },
    {
      title: 'SIZE (sqm.)',
      dataIndex: 'size (sq.m)',
      key: 'size (sq.m)',
      render: (value) => {
        if (!value) {
          return <Text type='danger'>Not found</Text>;
        } else if (value === '0') {
          return <Text type='danger'>Not found</Text>;
        } else {
          return value;
        }
      },
    },
    {
      title: 'FLOOR',
      dataIndex: 'floor',
      key: 'floor',
      render: (value) => {
        if (!value) {
          return <Text type='danger'>Not found</Text>;
        } else if (value === '0') {
          return <Text type='danger'>Not found</Text>;
        } else {
          return value;
        }
      },
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: (status, { accept_agent, agent_post }) => (
        <Row>
          <Col span={12}>
            {agent_post && (
              <Tag color='#ddf4e6' style={{ color: '#7dd4a1' }}>
                {'Agent post'}
              </Tag>
            )}
          </Col>
          <Col span={12}>
            {accept_agent && (
              <Tag color='#fcf2cf' style={{ color: '#f3cb54' }}>
                {'รับ Co-agent'}
              </Tag>
            )}
          </Col>
        </Row>
      ),
    },
    {
      title: 'PHOTO',
      dataIndex: 'photo1',
      key: 'photo1',
      render: (photo) =>
        photo ? (
          <Row style={{ alignItems: 'center' }}>
            <img
              src={photo}
              style={{ maxWidth: '30px' }}
              onMouseOver={() => {
                setOnHoverImg(true);
                setHoverImg(photo);
              }}
            />
            {onHoverImg && hoverImg === photo && (
              <a className='mb-0' onClick={() => 'Edit Photo'}>
                Edit Photo
              </a>
            )}
          </Row>
        ) : (
          <Text type='danger'>Not found</Text>
        ),
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
      render: (title) => truncateString(title, 20),
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: 'description',
      render: (title) => truncateString(title, 20),
    },
    {
      title: 'BENEFIT',
      dataIndex: 'benefit',
      key: 'benefit',
    },
    {
      title: 'AMENITIES',
      dataIndex: 'amenities',
      key: 'amenities',
      render: (amenities) => (
        <Popover
          title='Amenities'
          content={PopoverContent(amenities)}
          placement='bottomRight'
        >
          <Row justify='space-between'>
            <Col>{amenities.filter((a) => a).length}</Col>
            <Col>
              <CaretDownOutlined />
            </Col>
          </Row>
        </Popover>
      ),
    },
  ];

  let dataSource = [];
  data &&
    data.forEach((listing) => {
      const {
        id,
        'condo_name-EN': condoNameEn,
        rent_price,
        sale_price,
        bedroom,
        bath,
        'size (sq.m)': size,
        floor,
        status,
        photo1,
        agent_post,
        accept_agent,
        title,
        description,
        Aircon,
        'Bath tub': bathTub,
        'Electric stove': electricStove,
        Furniture,
        'Gas stove': gasStove,
        Refrigerator,
        'Washing machine': washingMachine,
        'Water heater': waterHeater,
      } = listing;
      dataSource.push({
        key: id,
        id,
        'condo_name-EN': condoNameEn,
        rent_price,
        sale_price,
        bedroom,
        bath,
        'size (sq.m)': size,
        floor,
        status,
        photo1,
        agent_post,
        accept_agent,
        title,
        description,
        amenities: [
          Aircon,
          bathTub,
          electricStove,
          Furniture,
          gasStove,
          Refrigerator,
          washingMachine,
          waterHeater,
        ],
      });
    });

  return (
    <div
      style={{
        marginTop: '55px',
        height: '75px',
        background: 'white',
        borderTop: 'solid 1px #e9e9e9',
        borderBottom: 'solid 2px #e9e9e9',
      }}
    >
      {data.length > 0 && <TableInfo data={data} />}
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default ListingsTable;
