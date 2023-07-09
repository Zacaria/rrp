import { User } from "@clerk/nextjs/dist/types/server/clerkClient";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profilePicture: user.profileImageUrl,
  };
};
