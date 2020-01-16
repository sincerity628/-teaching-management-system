import React, { useState, useEffect, createContext } from 'react';

export const UIContext = createContext();

const initMessage = {
  isMessage: false,
  content: {
    title: '',
    description: ''
  }
};

const UIContextProvider = (props) => {
  const [message, setMessage] = useState(initMessage);

  useEffect(() => {
    console.log('check');
  }, [message]);

  return (
    <UIContext.Provider value={{ message, setMessage }}>
      { props.children }
    </UIContext.Provider>
  );
};

export default UIContextProvider;
