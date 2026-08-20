"use client";

import { useEffect, useRef, useState } from "react";

export function useMockData<T>(fetchFn: () => T, deps: unknown[] = []) {
  const depsKey = JSON.stringify(deps);
  const fetchRef = useRef(fetchFn);
  const [state, setState] = useState<{ key: string; data: T | null }>({ key: "", data: null });

  useEffect(() => {
    fetchRef.current = fetchFn;
  }, [fetchFn]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState({ key: depsKey, data: fetchRef.current() });
    }, 500);
    return () => clearTimeout(timer);
  }, [depsKey]);

  const loading = state.key !== depsKey;
  return { data: loading ? null : state.data, loading };
}
