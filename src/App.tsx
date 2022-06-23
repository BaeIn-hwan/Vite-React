import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';
import Header from '@/layouts/Header';
import Breadcrumb from '@/layouts/Breadcrumb';
import Footer from '@/layouts/Footer';
import '@/assets/scss/_styles.scss';

const App = () => {
  const str = `123`;

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main id="container" className="container">
          <Breadcrumb />
          <Router />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// function App() {
//   const [count, setCount] = useState(0);
//   const str01 = '123';
//   const str02 = '456';
//   const str03 = `test"123"${str01}`;

//   const a = () => {
//     const obj: { a: number; b: number } = {
//       a: 1,
//       b: 2,
//     };
//     console.log(123);
//     console.log(obj);
//   };

//   console.log(a());
//   const test = (a: any): void => {
//     console.log(a);
//   };

//   test(1);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button
//             type="button"
//             onClick={() =>
//               setCount((count) => count + count + count + count + 1)
//             }
//           >
//             count is: {count}
//             <span></span>
//           </button>
//         </p>
//         <p>
//           {str01} {str02} {str03}
//         </p>
//         <p>
//           Edit <code>App.tsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//       <div className="test">
//         <p className="test__test">
//           aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//         </p>
//       </div>
//     </div>
//   );
// }
