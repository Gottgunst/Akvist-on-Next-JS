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

  const isActive = pathname === href;
  // href.indexOf('#') !== -1
  //   ? pathname === href.slice(0, href.indexOf('#'))
  //   : ;

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
      scroll={false}
    >
      {children}
    </Link>
  );
}

// ##############
// ##############
// плавный скролл
// ##############
// ##############

// function moveToAnchor(evt: any) {
//   evt.preventDefault();
//   const blockId = evt.target.href.slice(evt.target.href.indexOf('#') + 1);
//   const yOffset = 40;

//   const y =
//     document.getElementById(blockId).getBoundingClientRect().top - yOffset;

//   window.scrollTo({ top: y, behavior: 'smooth' });
// }
