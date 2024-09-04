import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export function useAuth() {
  const context = useContext(AuthContext);
  console.log(context)
  /*if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }*/

  return context;
}