import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

import type { TCommentItem } from 'src/types/comment';

export const updateNestedComments = (
  comments: TCommentItem[],
  parentId: string,
  newReply: TCommentItem
): TCommentItem[] =>
  comments.map((comment) => {
    if (comment.id === parentId) {
      return { ...comment, comments: [...comment.comments, newReply] };
    } else if (comment.comments.length > 0) {
      return {
        ...comment,
        comments: updateNestedComments(comment.comments, parentId, newReply),
      };
    }
    return comment;
  });

export const generateComment = (content: string): TCommentItem => ({
  id: uuidv4(),
  author: 'Current User',
  content,
  timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  comments: [],
});
