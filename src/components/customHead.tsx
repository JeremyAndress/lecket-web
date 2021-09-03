import Head from 'next/head';
import favicon from '../public/favicon.ico';

type Props = {
  title?: string;
  description?: string;
};

const CustomHead = ({
  title = 'Lecket',
  description = 'Watch and download Movies and Series in Latin, Spanish, Subtitled and English, the latest releases in the best HD quality without cuts.',
}: Props) => (
  <Head>
    <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={`${description} Lecket Online`} />
  </Head>
);

export default CustomHead;
