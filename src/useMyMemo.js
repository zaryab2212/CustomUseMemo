import { useEffect, useRef } from "react";

export const useMyMemo = (fn, depen) => {
  const memoizedRef = useRef(null);

  function VerifySameDep(prev, next) {
    if (prev === null) return false;
    if (prev.length !== next.length) return false;

    for (let i = 0; i < prev.length; i++) {
      if (prev[i] !== next[i]) return false;
    }
    return true;
  }

  if (!memoizedRef.current || !VerifySameDep(memoizedRef.current.dep, depen)) {
    memoizedRef.current = {
      val: fn(),
      dep: depen,
    };
  }

  useEffect(() => {
    return () => (memoizedRef.current = null);
  }, []);

  return memoizedRef.current.val;
};
