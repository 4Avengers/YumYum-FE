import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const useQueryKey = (key, atom) => {
  const setQueryKey = useSetRecoilState(atom);

  useEffect(() => {
    setQueryKey(key);
  }, [setQueryKey, key]);

  return;
};

export default useQueryKey;
