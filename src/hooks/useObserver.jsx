import { useEffect, useRef, useState } from "react";

// const useObserver = ({ ref, root, callback }) => {
//   const targetRef = useRef(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!ref.current) return;
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (
//             entry.isIntersecting &&
//             entry.intersectionRatio === 1 &&
//             !loading
//           ) {
//             setLoading(true);
//             callback();
//             setLoading(false);
//           }
//         });
//       },
//       {
//         root,
//         threshold: [1],
//       }
//     );

//     io.observe(ref.current);

//     return () => {
//       io.disconnect();
//     };
//   }, [callback, loading, root, ref]);
//   return [targetRef];
// };

// export default useObserver;

const useObserver = (callback) => {
  const targetRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio === 1 &&
            !loading
          ) {
            setLoading(true);
            callback();
            setLoading(false);
          }
        });
      },
      {
        root: targetRef?.current?.parentElement?.parentElement,
        threshold: [1],
      }
    );

    io.observe(targetRef.current);

    return () => {
      io.disconnect();
    };
  }, [callback, loading]);
  return [targetRef];
};

export default useObserver;
