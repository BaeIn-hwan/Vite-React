import { Link } from 'react-router-dom';
import logo from '@/assets/images/common/ico_header_logo.svg';

const Header = () => {
  const gnbList: { id: number; title: string; link: string }[] = [
    {
      id: 1,
      title: '게시판01',
      link: '/notice/list',
    },
    {
      id: 2,
      title: '게시판02',
      link: '/faq/list',
    },
    {
      id: 3,
      title: '게시판03',
      link: '/qna/list',
    },
  ];

  return (
    <header id="header" className="header">
      <h1 className="logo">
        <Link to="/" className="logo__link">
          <img src={logo} alt="" className="logo__img" />
        </Link>
      </h1>

      <nav className="gnb">
        <h2 className="blind">GNB</h2>

        <ul className="gnb__list">
          {gnbList.map((list, index) => (
            <li className="gnb__item" key={index}>
              <Link to={list.link} className="gnb__link">
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
