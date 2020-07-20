import Link from 'next/link';
import Layout from '../components/Layout';
import BulkUploadForm from '../components/BulkUploadForm';
import ListingsTable from '../components/ListingsTable';

import { useState } from 'react';

const Home = () => {
  const [listings, setListings] = useState([]);

  const onComplete = (res) => {
    console.log(res.data);
    setListings(res.data);
  };
  return (
    <Layout>
      <BulkUploadForm onComplete={onComplete} />
      <ListingsTable data={listings} />
    </Layout>
  );
};

export default Home;
