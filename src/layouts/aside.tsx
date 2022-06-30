import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gnb from '@/json/gnb.json';

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

const Aside = () => {
  const [gnbList, setGnbList] = useState<Gnb[] | []>([]);

  useEffect(() => {
    setGnbList(gnb.gnb);
  }, []);

  return (
    <aside id="aside" className="aside">
      <h2 className="blind">aside</h2>

      <nav className="gnb">
        <ul className="gnb__list">
          {gnbList.map((oneDepth, i) => {
            return (
              <li className="gnb__item" key={i}>
                <Link to={oneDepth.link} className="gnb__link">
                  {oneDepth.title}
                </Link>

                <ul>
                  <li>투뎁스</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
