import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';

export default function Home() {
  return (
    <Layout>
      <Header title="Evita" zoom />
      <br />
      <Link href="/s/start">
        <a>Proceed</a>
      </Link>
    </Layout>
  );
}
