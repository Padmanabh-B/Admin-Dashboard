import { Inter } from "@next/font/google";
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import { Sidebar } from "../components/Sidebar";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Admin Dashboard | Padmanabh B</title>
      </Head>
      Home
    </Layout>
  );
}
