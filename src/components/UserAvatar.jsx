import { DefaultUserAvatar } from "../utils/constants";

export function UserAvatar({ user }) {
  const avatar = user?.profileAvatar;

  return (
    <span>
      {avatar ? (
        <img
          src={avatar}
          alt={user?.firstName}
          className="w-10 h-10 rounded-full object-cover border-4 border-emerald-400"
        />
      ) : (
        <img
          src={DefaultUserAvatar}
          alt={user?.firstName}
          className="w-10 h-10 rounded-full object-cover border-4 border-emerald-400"
        />
      )}
    </span>
  );
}
