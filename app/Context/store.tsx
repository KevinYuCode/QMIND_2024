"use client";

import { createClient } from "@/utils/supabase/client";
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
  loading: Boolean;
  setLoading: Dispatch<SetStateAction<any>>;
  isEditing: Boolean;
  setIsEditing: Dispatch<SetStateAction<any>>;
  githubUrl: string;
  setGithubUrl: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext<any>({
  user: {},
  setUser: () => {},
  projects: [],
  setProjects: () => {},
  navOn: false,
  setNavOn: () => {},
  loading: false,
  setLoading: () => {},
  isEditing: false,
  setIsEditing: () => {},
  githubUrl: "",
  setGithubUrl: () => {},
  tags: [],
  setTags: () => {},
  tagName: "",
  setTagNames: () => {},
  showUpdateTag: -1,
  setShowUpdateTag: () => {},
  showAddTag: false,
  setShowAddTag: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [navOn, setNavOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [tags, setTags] = useState();
  const [tagName, setTagName] = useState("");
  const [showUpdateTag, setShowUpdateTag] = useState(-1);
  const [showAddTag, setShowAddTag] = useState(false);
  const [shortDescription, setShortDescription] = useState("");
  const [impactDescription, setImpactDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [showSaveChanges, setShowSaveChanges] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [memberErrorMessages, setMemberErrorMessages] = useState([]);
  const [category, setCategory] = useState("");
  const [projectMembers, setProjectMembers] = useState([]);
  const [published, setPublished] = useState(false);
  const [navLoading, setNavLoading] = useState(true);
  const supabase = createClient();

  const handleSaveProject = async (project) => {
    if (!githubUrl.includes("https://github.com/")) {
      alert("Invalid GitHub Url");
      return;
    }

    const { data, error } = await supabase
      .from("projects")
      .upsert({
        ...project,
        projectTitle,
        category,
        tags,
        githubUrl,
        shortDescription,
        impactDescription,
        fullDescription,
        published,
        setPublished,
      })
      .select();

    setIsEditing(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        projects,
        setProjects,
        navOn,
        setNavOn,
        loading,
        setLoading,
        isEditing,
        setIsEditing,
        githubUrl,
        setGithubUrl,
        tags,
        setTags,
        tagName,
        setTagName,
        showUpdateTag,
        setShowUpdateTag,
        showAddTag,
        setShowAddTag,
        shortDescription,
        setShortDescription,
        impactDescription,
        setImpactDescription,
        fullDescription,
        setFullDescription,
        showSaveChanges,
        setShowSaveChanges,
        handleSaveProject,
        projectTitle,
        setProjectTitle,
        category,
        setCategory,
        memberErrorMessages,
        setMemberErrorMessages,
        projectMembers,
        setProjectMembers,
        published,
        setPublished,
        navLoading,
        setNavLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
