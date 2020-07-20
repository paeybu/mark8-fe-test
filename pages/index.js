import Link from 'next/link';
import Layout from '../components/Layout';
import BulkUploadForm from '../components/BulkUploadForm';

const Home = () => {
  return (
    <Layout>
      <BulkUploadForm />
    </Layout>
  );
};

export default Home;
