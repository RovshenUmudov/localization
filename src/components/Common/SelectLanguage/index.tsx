import { Select } from 'antd';
import React, { FC, useEffect, useState } from 'react';

import i18next from 'i18next';
import { useSearchParams } from 'react-router-dom';
import { Option } from '../../../types';

const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'es',
    name: 'Español',
  },
];

interface SelectLanguageProps {
  defaultValue: string;
}

const SelectLanguage: FC<SelectLanguageProps> = ({ defaultValue }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setOptions(
      languages.map(({ code, name }): Option => ({ label: name, value: code })),
    );
  }, []);

  useEffect(() => {
    setSearchParams({ lng: i18next.language });
  }, []);

  return (
    <Select
      style={{ width: '100%', marginTop: 20, padding: '0 5px' }}
      options={options}
      placeholder="Languages"
      defaultValue={defaultValue}
      onChange={(value) => {
        i18next.changeLanguage(value);
        setSearchParams({ lng: value });
      }}
    />
  );
};

export default SelectLanguage;
