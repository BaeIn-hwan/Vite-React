import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import locationJson from '@/json/locationPath.json';

interface LocationTypeDetail {
  name: string;
  originName: string;
}

interface LocationType {
  [key: string]: LocationTypeDetail[];
  depth01: LocationTypeDetail[];
  depth02: LocationTypeDetail[];
}

type Test = {
  name: string;
  originName: string;
};

const Breadcrumb = () => {
  const location = useLocation();
  const depthAll: string[] = location.pathname.substring(1).split('/');

  const [brc, setBrc] = useState<Test[]>([]);
  const locationPath: LocationType = locationJson;

  const setBreadCrumb = (): void => {
    const breadcrumbList = depthAll.map((depth, index) => {
      return locationPath[`depth0${index + 1}`].find(
        (path) => path.name === depth,
      );
    });

    console.log(breadcrumbList);

    setBrc(breadcrumbList);

    // setBrc((brc) => [...brc, breadcrumbList]);
  };

  useEffect(() => {
    setBreadCrumb();
  }, [location]);

  return (
    <nav id="breadcrumb" className="breadcrumb">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__item breadcrumb__item-home">
          <Link to="">Home</Link>
        </li>
        {brc.map((list, index) => (
          <li className="breadcrumb__item" key={index}>
            {index}
            <a href="#" className="breadcrumb__link">
              {list.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
