import { createContext, useContext, useEffect, useState } from 'react';

const StoryContext = createContext();

function useRandomCharacter() {
  let [character, setCharacter] = useState(null);

  return character;
}

export function AppContext({ children }) {
  let character = useRandomCharacter();

  return (
    <StoryContext.Provider value={{ character }}>
      {children}
    </StoryContext.Provider>
  );
}

export function useAppContext() {
  return useContext(StoryContext);
}
