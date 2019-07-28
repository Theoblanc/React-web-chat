import { useState } from "react";

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    e.stopPropagation() // event 버블링 막기
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};