import { baseApi } from "./baseApi";

export const userInfoApi = baseApi.injectEndpoints({
  reducerPath: "userInfoApi",
  // tagTypes: ["UserInfo"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => `/onlineStore/user/getMe`,
      providesTags: (_) => ["UserInfo"],
    }),
    updateUserInfo: builder.mutation({
      query: (body) => ({
        url: `/onlineStore/user/update`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_) => ["UserInfo"],
    }),
    userImage: builder.mutation({
      query: (body) => ({
        url: `/onlineStore/upload`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_) => ["UserInfo"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useUserImageMutation,
} = userInfoApi;
