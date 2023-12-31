import { usePost } from "../../context/postContext";
import { FaFilter } from "../../utils/icons";
import { useState } from "react";
import { FilterModal } from "../filterModal/FilterModal";

export const SortPost = () => {
  const {
    postState: { filterType, allPosts },
  } = usePost();
  const [filterModal, setFilterModal] = useState(false);
  const [filter, setFilter] = useState("latest");

  const filterHandler = (e) => {
    setFilterModal(true);
  };

  const closeModal = () => {
    setFilterModal(false);
  };

  const capitalizeFirstLetter = (word) => {
    const [firstLetter, ...rest] = word;
    return `${firstLetter.toUpperCase()}${rest.join("")}`;
  };

  return (
    <div className="p-3">
      <div className="flex flex-row justify-between items-center border border-gray-300 rounded-lg shadow-md bg-white p-3 ml-10 mr-2 h-12">
        <p className="text-gray-700 text-lg font-medium mx-3 flex-grow-1">
          {capitalizeFirstLetter(filter)}
        </p>
        {filterModal ? (
          <div className="mt-2 -mr-1 z-10">
            <FilterModal
              onClose={closeModal}
              filter={filter}
              setFilter={setFilter}
              className="w-full"
            />
          </div>
        ) : (
          <FaFilter
            onClick={filterHandler}
            className="w-6 h-6 mx-3 text-gray-600 cursor-pointer hover:text-emerald-400"
          />
        )}
      </div>
    </div>
  );
};
