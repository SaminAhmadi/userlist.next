// Main
import { FC } from 'react';
// Styles
import 'views/layout/style/index.scss';
import 'views/common/styles/index.scss';
// Components
import NavMenu from 'views/common/header/nav';
import Footer from 'views/common/footer';
// Types
import { MainLayoutProps } from 'views/layout/types';

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <header>
        <NavMenu />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
