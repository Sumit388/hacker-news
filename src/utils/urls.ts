export const HOST_URL = process.env.NEXT_PUBLIC_SITEURL;

export const getListingData = (query: string) =>
  `http://hn.algolia.com/api/v1/search?${query}`;

export const getDetailsData = (id: string) =>
  `https://hn.algolia.com/api/v1/items/${id}`;
