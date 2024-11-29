// app/layout.js
import '../styles/globals.css';
import '../components/header/header.css';
import '../components/sidebar/sidebar.css';
import '../components/sidebar2/sidebar2.css';
import '../components/footer/footer.css';
import '../components/layout/mainLayout.css';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Sidebar2 from '../components/sidebar2/Sidebar2';
import Footer from '../components/footer/Footer';
import MainLayout from '../components/layout/MainLayout';

export default function Layout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>My Portfolio</title>
    </head>
    <body>
      <MainLayout>
        <Header />
        <Sidebar />
        <Sidebar2 />
        <main>{children}</main>
        <Footer />
      </MainLayout>
    </body>
  </html>
  );
}
