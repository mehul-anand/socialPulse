import { useUser } from "../../context/userContext";
import { ActionTypes } from "../../utils/constants";
import { BiSearch } from "../../utils/icons";
import { SearchedUserModal } from "./SearchedUserModal";

export function Searchbar() {
  const {
    userState: { searchInput },
    userDispatch,
  } = useUser();
  const { SearchUser } = ActionTypes;

  return (
    <div className="flex h-12">
      <div className="flex items-center relative rounded-lg w-full px-2">
        <div className="absolute left-2 top-4">
          <BiSearch className="text-emerald-400 w-6 h-6" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none text-gray-600 px-2 py-3 w-80 bg-slate-50 shadow-lg pl-10 rounded-lg"
          onChange={(e) =>
            userDispatch({ type: SearchUser, payload: e.target.value })
          }
        />
        {searchInput && (
          <div className="absolute top-12 z-20">
            <SearchedUserModal />
          </div>
        )}
      </div>
    </div>
  );
}
