import React, { useEffect } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = React.useState('carregando');

  const validate = () => {
    setInterval(() => {
      if(localStorage.getItem('token')){
        if(localStorage.getItem('token') == state){
          return setState(true);
        }else{
          setState(true);
        }
      }else{
        return setState(false);
      }
    }, 100);
  }

  useEffect(() => {
    validate();
  }, [state])

  return(
    <AuthContext.Provider value={[state, setState]}> 
      {children}
    </AuthContext.Provider>
  );
}
