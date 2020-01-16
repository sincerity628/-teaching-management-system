import React, { useState, useEffect, createContext } from 'react';
import { Notification } from 'rsuite';

export const UIContext = createContext();

const initMessage = {
  isMessage: false,
  title: '',
  description: ''
};

// type: success, warning, info, error

const UIContextProvider = (props) => {
  const [message, setMessage] = useState(initMessage);

  useEffect(() => {
    if(message.isMessage) {
      Notification[message.title]({
        title: message.title,
        description: message.description
      });
    }
  }, [message]);

  return (
    <UIContext.Provider value={{ message, setMessage }}>
      { props.children }
    </UIContext.Provider>
  );
};

export default UIContextProvider;
