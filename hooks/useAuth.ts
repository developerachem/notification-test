import { useSelector } from "react-redux";

/**
 * @description this hook handles the logic for checking if the user is authenticated
 */
function useAuth() {
  // * get the auth state from redux store
  const { isLoggedIn, token, user } = useSelector((state: any) => state.auth);

  // * check if user is authenticated
  const isAuthorize = isLoggedIn && token;

  // * return the auth state
  if (isLoggedIn && token) {
    return true;
  } else {
    return false;
  }
}

// * export the custom hook
export default useAuth;
