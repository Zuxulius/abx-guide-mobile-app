import React, { createContext, useState, useContext } from 'react';

const ModalVisibilityContext = createContext();

export function useModalVisibility() {
  return useContext(ModalVisibilityContext);
}

export const ModalVisibilityProvider = ({ children }) => {
  const [greenNavVisible, setGreenNavVisible] = useState(false);
  const [redNavVisible, setRedNavVisible] = useState(false);

  const toggleGreenNavVisibility = () => {
    setGreenNavVisible(!greenNavVisible);
  };

  const toggleRedNavVisibility = () => {
    setRedNavVisible(!redNavVisible);
  };

  return (
    <ModalVisibilityContext.Provider value={{ greenNavVisible, redNavVisible, toggleGreenNavVisibility, toggleRedNavVisibility }}>
      {children}
    </ModalVisibilityContext.Provider>
  );
};
