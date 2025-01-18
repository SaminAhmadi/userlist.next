// Main
import { FC } from 'react';
// styles
import 'views/common/styles/index.scss';
import Link from 'next/link';

const NavMenu: FC = () => {
  return (
    <nav>
      <ul className="list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/userlist">Users list</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
