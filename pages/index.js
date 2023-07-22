import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>As a tech enthusiast with a strong foundation in front-end development, I am excited to embark on a new career journey as a Front-End Developer. My knowledge of HTML, CSS, JavaScript, and React JS allows me to craft immersive and user-friendly web experiences. I also possess advanced analytical skills in Excel and VBA, enabling me to streamline processes and automate repetitive manual tasks.</p>

        <p>Currently living in New Jersey, I am preparing for a relocation to Asheville, NC in October. Whether contributing to a software development team or using my analytical skills in data-driven projects, I am committed to delivering high-quality solutions that drive business growth and user satisfaction.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}