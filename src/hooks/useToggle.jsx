import { useCallback, useState } from "react";

const useToggle = (defaultValue = false) => {
  const [toggle, setToggle] = useState(defaultValue);

  const onChangeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return [toggle, onChangeToggle];
};

export default useToggle;
