import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  text: string;
  className?: string;
};

const CustomLink = ({ href, text, className = "secondary-color" }: Props) => {
  const router = useRouter();
  const definitiveClassName =
    router.pathname === href ? `${className} active` : className;
  return (
    <Link href={href}>
      <a className={definitiveClassName}>{text}</a>
    </Link>
  );
};

export default CustomLink;
