import React, { useState } from 'react';
import BaseInput from '@/components/form/BaseInput'

const FormSample = () => {
  var str = '1'
  return (
    <article>
      <h2>Form 샘플</h2>
      <section>
        <h3>Input 컴포넌트</h3>
        <BaseInput type="text" placeholder="id" /><br />
        <BaseInput type="password" placeholder="password" />
      </section>
      <a className="'wqeqwe'" />
      <a className='"qwe"' />
    </article>
  );
};

export default FormSample;