import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  text: string;
  className?: string;
};

const CustomLink = ({ href, text, className = "secondary-color" }: Props) => {
  const router = useRouter();
  if (router.pathname == href) className = `${className} active`;
  return (
    <Link href={href}>
      <a className={className}>{text}</a>
    </Link>
  );
};

export default CustomLink;
