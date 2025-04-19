import { API } from "@/features/API/API";

const authApi = API.injectEndpoints({
  endpoints: (builder) => ({
    clientLogin: builder.mutation({
      query: (data) => ({
        url: "/client-login",
        method: "POST",
        body: data,
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "/logged-in-clients",
        method: "GET",
      }),
    }),
  }),
});

export const { useClientLoginMutation, useGetMeQuery } = authApi;
