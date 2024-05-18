import { useEffect, useRef } from "react";

export const useMyMemo = (fn, deps) => {
  const memoizedRef = useRef({ val: null, deps: [] });

  function verifySameDeps(prevDeps, nextDeps) {
    if (prevDeps === null) return false;
    if (prevDeps.length !== nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++) {
      if (prevDeps[i] !== nextDeps[i]) return false;
    }
    return true;
  }

  if (!verifySameDeps(memoizedRef.current.deps, deps)) {
    console.log("Function executing");
    memoizedRef.current = {
      val: fn(),
      deps,
    };
  }

  useEffect(() => {
    return () => {
      memoizedRef.current = { val: null, deps: [] };
    };
  }, []);

  return memoizedRef.current.val;
};
