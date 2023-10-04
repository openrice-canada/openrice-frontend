import React, { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='min-h-screen'>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout