const baseUrl = "https://jobs.github.com/positions.json?";
// params
// description - A search term, such as "ruby" or "java". This parameter is aliased to search.
const description = "description=";
// location — A city name, zip code, or other location search term.
// lat — A specific latitude. If used, you must also send long and must not send location.
// long — A specific longitude. If used, you must also send lat and must not send location.
// full_time — If you want to limit results to full time positions set this parameter to 'true'.

export const baseSearch = (query) => {
  return `${baseUrl}${description}query`;
};
