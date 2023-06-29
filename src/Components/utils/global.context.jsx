import { createContext, useState } from "react";

export const initialState = {
  temas: {
    light : {
      nav : 'linear-gradient(to right top, #dc1e8a, #d0219e, #be2cb3, #a439c6, #8047d8, #6247ca, #4545bb, #2341ab, #24327d, #1f2353, #16162c, #010101)',
      home: 'grey',
      footer: 'linear-gradient(to right top, #dc1e8a, #d0219e, #be2cb3, #a439c6, #8047d8, #6247ca, #4545bb, #2341ab, #24327d, #1f2353, #16162c, #010101)',
      letras:'black',
      contact: 'grey',
      favs: 'red'
      
    },
    dark: {
      nav: 'pink',
      home: 'black',
      footer: 'pink',
      letras: 'white',
      contact: 'green',
      favs:'blue'
    
    }
  }
}
export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [tema, setTema] = useState(initialState.temas.light)

  const handleTheme = ()=> {
    setTema((t) => (t === initialState.temas.light ? initialState.temas.dark : initialState.temas.light ) )
  } 
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  return (
    <ContextGlobal.Provider value={{tema, handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
