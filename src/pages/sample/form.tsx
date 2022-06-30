import CInput from '@/components/form/CInput';
import { useState } from 'react';

const TestComponent = () => {
  const useInput = (init: string) => {
    const [value, setValue] = useState(init);

    const onChange = (e: any) => {
      const {
        target: { value },
      } = e;

      setValue(value);

      console.log(e.target);
    };

    return { value, onChange };
  };

  const name = useInput('Mr.');
  return <input type="text" placeholder="name" {...name} />;
};

const SampleForm = () => {
  const [inputValue01, setInputValue01] = useState('');
  const initFormData = {
    id: '',
    pw: '',
  };

  const [formData, setFormDate] = useState(initFormData);

  const test = () => {
    return {
      data: [],
    };
  };

  const onSubmit = async () => {
    try {
      const response = await test();

      console.log('response', response);
      console.log('formData', formData);
    } catch (ex) {
      console.error('onSubmit error.. ', ex);
    }
  };

  return (
    <div className="sample-form">
      <section>
        <h2>input</h2>

        <div>
          <CInput type="text" handleChange={setInputValue01} />
        </div>

        <div>
          <CInput
            type="text"
            name="id"
            placeholder="아이디"
            handleChange={setFormDate}
            isError={false}
            errorMsg="아이디를 입력해 주세요."
          />
          <br />

          <CInput
            type="password"
            name="pw"
            placeholder="비밀번호"
            handleChange={setFormDate}
            isError={false}
            errorMsg="비밀번호를 입력해 주세요."
          />
          <button type="button" onClick={onSubmit}>
            저장
          </button>
        </div>
      </section>

      <section style={{ marginTop: '100px' }}>
        <TestComponent />
        <TestComponent />
        <TestComponent />
      </section>
    </div>
  );
};

export default SampleForm;
