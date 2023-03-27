import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";

const useQueryKey = (key, atom) => {
  const setQueryKey = useSetRecoilState(postQueryKeyAtom);

  useEffect(() => {
    setQueryKey(key);
  }, [setQueryKey, key]);

  return;
};

export default useQueryKey;
