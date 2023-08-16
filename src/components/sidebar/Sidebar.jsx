import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  AiFillHome,
  MdExplore,
  BiSolidBookmark,
  BiSolidUser,
  MdAddCircle,
} from "../../utils/icons";
import { useAuth } from "../../context/authContext";
import { socialLogo } from "../../utils/constants";
import { UserAvatar } from "../UserAvatar";
import { NewPostModal } from "../newPostModal/NewPostModal";

export function Sidebar() {
  const { loginUser, logoutHandler } = useAuth();
  const [newPost, setNewPost] = useState(false);

  function openModal() {
    setNewPost(true);
  }

  function closeModal() {
    setNewPost(false);
  }
  return (
    <aside className="sticky top-0">
      <div className="flex flex-col items-center">
        <div className="flex sm:items-start justify-center px-5 py-15 sm:py-4 sm:flex-col gap-3 sm:gap-2 tracking-wide grow space-y-1.5">
          <li className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={socialLogo}
                alt="social-pulse-logo"
                className="w-6 h-6"
              />
              <span className="ml-2 font-bold text-2xl p-2 text-emerald-400">
                Social Pulse
              </span>
            </Link>
          </li>
          <li className="flex items-center">
            <NavLink
              to="/"
              className="flex items-center text-gray-600 hover:text-emerald-400"
            >
              <AiFillHome className="w-6 h-6" />
              <span className="ml-2 text-xl">Home</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink
              to="/explore"
              className="flex items-center text-gray-600 hover:text-emerald-400"
            >
              <MdExplore className="w-6 h-6" />
              <span className="ml-2 text-xl">Explore</span>
            </NavLink>
          </li>

          <li className="flex items-center">
            <NavLink
              to="/bookmark"
              className="flex items-center text-gray-600 hover:text-emerald-400"
            >
              <BiSolidBookmark className="w-6 h-6" />
              <span className="ml-2 text-xl">Bookmarks</span>
            </NavLink>
          </li>

          <li className="flex items-center">
            <NavLink
              to={`/profile/${loginUser?.username}`}
              className="flex items-center text-gray-600 hover:text-emerald-400"
            >
              <BiSolidUser className="w-6 h-6" />
              <span className="ml-2 text-xl">Profile</span>
            </NavLink>
          </li>

          <li className="flex items-center">
            <NavLink className="flex items-center">
              <button
                className="flex items-center px-4 py-2 rounded-md transition-colors duration-300 ease-in-out bg-emerald-400 text-white hover:bg-emerald-500 hover:text-white"
                onClick={openModal}
              >
                <MdAddCircle className="w-6 h-6" />
                <span className="ml-2">New Post</span>
              </button>
            </NavLink>
          </li>
        </div>
      </div>
      {newPost && (
        <div className="fixed z-40">
          <NewPostModal onClose={closeModal} />
        </div>
      )}
    </aside>
  );
}
