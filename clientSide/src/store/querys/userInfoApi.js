import { baseApi } from "./baseApi";

export const userInfoApi = baseApi.injectEndpoints({
  reducerPath: "userInfoApi",
  // tagTypes: ["UserInfo"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => `/user/getMe`,
      providesTags: (_) => ["UserInfo"],
    }),
    updateUserInfo: builder.mutation({
      query: (body) => ({
        url: `/user/update`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_) => ["UserInfo"],
    }),
    userImage: builder.mutation({
      query: (body) => ({
        url: `/upload`,
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
