import React from 'react';

const getWidth = () => {
  return document.documentElement.clientWidth;
};

function useCurrentSize() {
  const [size, setSize] = React.useState({
    width: getWidth(),
  });

  React.useEffect(() => {

    let timeOutId = null;

    const handleResize = () => { //debounce function
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        setSize({
          width: getWidth(),
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return size;
}

export default useCurrentSize;
