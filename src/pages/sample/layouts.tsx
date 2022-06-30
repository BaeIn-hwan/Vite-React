import { getImageUrl } from '@/composables/common';
import Pagination from '@/components/ui/CPagination';
import { useState } from 'react';

const SampleLayout = () => {
  const [paging, setPaging] = useState({
    id: '',
    current: '',
    rowCount: '',
    listCount: '',
    totalCount: '',
  });

  return (
    <div>
      <section>
        <img src={getImageUrl(`/common/ico_header_logo.svg`)} alt="" />
      </section>

      <section>
        {/* id={paging.id}
        current={paging.current}
        rowCount={}
        listCount={}
        totalCount={}
        handleClick={} */}
        <Pagination />
        <button type="button">qweqwe</button>
      </section>
    </div>
  );
};

export default SampleLayout;
