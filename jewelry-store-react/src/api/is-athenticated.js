import { useState, useEffect } from 'react';

const IsAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const userID = sessionStorage.getItem('userID');

    if (userID) {
      setAuthenticated(true);
    }
  }, []);

  return { authenticated };
};

export default IsAuthenticated;