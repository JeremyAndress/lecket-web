import Head from "next/head";

type Props = {
  title?: string;
};

const CustomHead = ({ title = "Lecket" }: Props) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default CustomHead;
