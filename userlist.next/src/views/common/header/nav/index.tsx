'use client';
// Main
import { FC } from 'react';
// styles
import 'views/common/styles/index.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavMenu: FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="list">
        <li>
          <Link href="/" className={pathname === '/' ? 'list_li--active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/userlist" className={pathname === '/userlist' ? 'list_li--active' : ''}>
            Users list
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
