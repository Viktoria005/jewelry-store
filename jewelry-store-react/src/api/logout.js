import { useCallback } from 'react';

const useLogout = () => {
  const logout = useCallback(() => {
    sessionStorage.clear();
  }, []);

  return logout;
};

export default useLogout;