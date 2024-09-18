import Link from "next/link";

interface LinkProps {
  ariaLabel?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export default function MyLink({
  ariaLabel = "",
  href,
  children,
  className = "",
}: LinkProps) {
  return (
    <Link 
      href={href} 
      aria-label={ariaLabel} 
      className={`text-center text-sm p-2 px-4 rounded-full hover:bg-white hover:bg-opacity-10 ${className}`}>
      {children}
    </Link>
  );
}
