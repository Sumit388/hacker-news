type CommentType = {
  author: string;
  children: Comment[];
  created_at: string;
  created_at_i: number;
  id: number;
  options: any[];
  parent_id: number | null;
  points: number | null;
  story_id: number;
  text: string | null;
  title: string | null;
  type: string;
  url: string | null;
};

type StoryType = {
  author: string;
  children: Comment[];
  created_at: string;
  created_at_i: number;
  id: number;
  options: any[];
  parent_id: null;
  points: number;
  story_id: number;
  text: null;
  title: string;
  type: string;
  url: string;
};

type DetailsDataType = Story | Comment;
