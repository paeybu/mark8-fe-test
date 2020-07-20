import { Table, Tag, Row, Col, Popover } from 'antd';
import { truncateString } from '../helper/truncate';
import { AMENITIES } from '../helper/const';
import { CaretDownOutlined } from '@ant-design/icons';

const ListingsTable = ({ data }) => {
  const PopoverContent = (amenities) => {
    return amenities.map((a, i) => a && <p>{AMENITIES[i]}</p>);
  };

  const columns = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'CONDO NAME',
      dataIndex: 'condo_name-EN',
      key: 'condo_name-EN',
    },
    {
      title: 'RENT PRICE (Baht)',
      dataIndex: 'rent_price',
      key: 'rent_price',
    },
    {
      title: 'SELL PRICE (Baht)',
      dataIndex: 'sale_price',
      key: 'sale_price',
    },
    {
      title: 'BEDROOM',
      dataIndex: 'bedroom',
      key: 'bedroom',
    },
    {
      title: 'BATHROOM',
      dataIndex: 'bath',
      key: 'bath',
    },
    {
      title: 'SIZE (sqm.)',
      dataIndex: 'size (sq.m)',
      key: 'size (sq.m)',
    },
    {
      title: 'FLOOR',
      dataIndex: 'floor',
      key: 'floor',
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
      render: (photo) => <img src={photo} style={{ maxWidth: '30px' }} />,
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
      {data && (
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
      )}
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default ListingsTable;
