import { createContext } from "react";

const UserContext = createContext({
  logedInUser: "Default User",
});

export default UserContext;
