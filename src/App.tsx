import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';

import Header from '@/layouts/header';
import BreadCrumb from '@/layouts/breadCrumb';
import Footer from '@/layouts/footer';
import Loading from '@/layouts/loading';

import '@/assets/scss/_styles.scss';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        {/* header */}
        <Header />

        {/* container */}
        <main id="container" className="container">
          <BreadCrumb />

          <div id="contents" className="contents">
            <Router />
          </div>
        </main>

        {/* footer */}
        {false && <Footer />}
      </div>

      {/* @TODO: state를 통해 show/hide 기능 구현 */}
      {false && <Loading />}
    </BrowserRouter>
  );
}

export default App;
