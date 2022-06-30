//#region import
import { getImageUrl } from '@/composables/common';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Aside from '@/layouts/aside';

import gnb from '@/json/gnb.json';
//#endregion import

interface SubDepth {
  depth: number | string;
  title: string;
  link: string;
}

interface Gnb {
  depth: number | string;
  title: string;
  link: string;
  subDepth?: SubDepth[];
}

const Header = () => {
  const [gnbList, setGnbList] = useState<Gnb[] | []>([]);

  useEffect(() => {
    setGnbList(gnb.gnb);
  }, []);

  return (
    <header id="header" className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <Link to="/" className="header__logo-link">
            LOGO
          </Link>
        </h1>

        <nav className="util">
          <h2 className="blind">Util Menu</h2>

          <ul className="util__list">
            <li className="util__item">OOO님</li>
            <li className="util__item">Logout</li>
          </ul>
        </nav>
      </div>

      {/* aside */}
      <Aside />
    </header>
  );
};

export default Header;
