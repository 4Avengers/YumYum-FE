import { useCallback, useState } from "react";

const useSlider = () => {
  const [dragging, setDragging] = useState(false);

  const handleBeforChange = useCallback(() => {
    setDragging(true);
  }, []);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, []);

  return [dragging, handleBeforChange, handleAfterChange];
};

export default useSlider;
