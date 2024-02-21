type HighlightResult = {
  author: {
    matchLevel: string;
    matchedWords: string[];
    value: string;
  };
  title: {
    fullyHighlighted: boolean;
    matchLevel: string;
    matchedWords: string[];
    value: string;
  };
  url: {
    fullyHighlighted: boolean;
    matchLevel: string;
    matchedWords: string[];
    value: string;
  };
};

type Hit = {
  _highlightResult: HighlightResult;
  _tags: string[];
  author: string;
  children: number[];
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url: string;
};

type ProcessingTimingsMS = {
  _request: {
    roundTrip: number;
  };
  afterFetch: {
    merge: {
      total: number;
    };
    total: number;
  };
  fetch: {
    query: number;
    total: number;
  };
  total: number;
};

type ListingDataType = {
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Hit[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  query: string;
  serverTimeMS: number;
};
