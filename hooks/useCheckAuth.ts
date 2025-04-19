import { useGetMeQuery } from "@/features/auth/auth-api";
import { loginState, logout } from "@/features/auth/auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useDispatch } from "react-redux";
/**
 * @description Custom hook to check if authentication is done
 * @returns {} isLoggedIn
 */

export interface AuthProps {
  isChecked: boolean;
}

const useAuthCheck = () => {
  // * action dispatcher
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // * get updated auth slice
  const { data, status, isLoading, isFetching, isSuccess } = useGetMeQuery(
    null,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  // * see auth check status
  React.useEffect(() => {
    if (!isLoading && !isFetching && status !== "pending") {
      if (isSuccess) {
        if (isLoggedIn) {
          dispatch(loginState(data));
        }
      } else {
        dispatch(logout());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, isLoading, isFetching, data?.token]);

  React.useEffect(() => {
    AsyncStorage.getItem("isLoggedIn").then((res) => {
      if (res) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  // * return the authentication check status
  return isLoading;
};

export default useAuthCheck;
