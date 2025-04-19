import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://carepro-testing-api.arcapps.org/carepro-api",
    prepareHeaders: async (headers) => {
      // * Get Token from async storage
      const token = await AsyncStorage.getItem("token");

      headers.set("authorization", `Bearer ${token || null}`);
      return headers;
    },
  }),
  tagTypes: [""],
  endpoints: () => ({}),
});
