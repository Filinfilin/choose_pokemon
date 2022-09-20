export const stringFilter = (APIData, searchInput) => {
  let result;
  if (searchInput !== "") {
    const filteredData = APIData?.filter((item) => {
      return Object.values(item["name"])
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    result = filteredData;
  } else {
    result = APIData;
  }
  return result;
};
