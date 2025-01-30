export type TCommentItem = {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  comments: Array<TCommentItem>;
};

export type TCommentForm = {
  parentId: string;
  onReply: (parentId: string, reply: string) => void;
};

export type TCommentItemWithForm = {
  comment: TCommentItem;
  onReply: TCommentForm['onReply'];
};
