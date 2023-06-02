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
  return (
    <Link href={href} className={isActive ? className + ' active' : className}>
      {children}
    </Link>
  );
}
