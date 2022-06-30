import { useEffect, useState } from 'react';

const CPagination = () => {
  const initPage = {
    id: null,
    current: 1,
    rowCount: 5,
    listCount: 20,
    totalCount: 1000,
  };

  const [page, setPage] = useState(initPage);
  const [paging, setPaging] = useState([]);

  const setPagination = () => {
    const pageCount = Math.ceil(initPage.totalCount / initPage.listCount);
    const pageDivide = Math.ceil(pageCount / initPage.rowCount);
    const pageArr = Array.from(new Array(pageCount), (x, i) => i + 1);

    let test: number[][] = [];

    for (let i = 0; i < pageDivide; i++) {
      test.push(
        pageArr.slice(i * initPage.rowCount, (1 + i) * initPage.rowCount),
      );
    }
    console.log('test', test);

    setPaging(test);
  };

  useEffect(() => {
    setPagination();
  }, []);

  const renderMap = (page, index) => {
    return (
      <li key={index}>
        <button key={`${page.current}-${index}`} type="button">
          {page}
        </button>
      </li>
    );
  };

  console.log('paging', paging, paging && paging[page.current]);
  return (
    // <div className="pagination">
    //   <button type="button"></button>
    //   <ul>
    //     {paging &&
    //       paging[page.current] &&
    //       paging[page.current].map((page, index) => renderMap(page, index))}
    //     <li></li>
    //   </ul>
    // </div>
    <div className="pagination">
      <button type="button"></button>
      <ul>
        {paging &&
          paging[page.current] &&
          paging[page.current].map((page, index) => renderMap(page, index))}
      </ul>
    </div>
  );
};

export default CPagination;
