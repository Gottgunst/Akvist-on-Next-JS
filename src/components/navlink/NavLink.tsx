'use client';
//################# LIBS #####################
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//############## INTERFACE ###################
interface INavLinkProps {
  href: string;
  className: string;
  children: string;
}

export default function NavLink({ href, className, children }: INavLinkProps) {
  const pathname = usePathname();

  let isActive = pathname === href;

  // switch (href) {
  //   case '/krasnodar':
  //   case '/stavropol':
  //   case '/pyatigorsk':
  //     // if (pathname href)
  //     isActive = pathname.split('/').some((part) => part === href.slice(1));
  //     break;
  //   default:
  //     break;
  // }

  return (
    <Link
      href={href}
      className={isActive ? className + ' link_active' : className}
    >
      {children}
    </Link>
  );
}
