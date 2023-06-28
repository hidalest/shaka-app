import { useState } from 'react';

const useBoolean = (initialValue = false) => {
  const [status, setStatus] = useState(initialValue);

  const toggler = () => setStatus(!status);

  const handler = {
    toggler,
    on() {
      setStatus(true);
    },
    off() {
      setStatus(false);
    },
  };

  return { status, handler };
};

export default useBoolean;
