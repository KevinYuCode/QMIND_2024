"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  projects: any[];
  setProjects: Dispatch<SetStateAction<any>>;
  navOn: Boolean;
  setNavOn: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext<ContextProps>({
  user: {},
  setUser: () => {},
  projects: [],
  setProjects: () => {},
  navOn: false,
  setNavOn: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [navOn, setNavOn] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ user, setUser, projects, setProjects, navOn, setNavOn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);