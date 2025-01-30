import { useState } from 'react';
import postsData from 'src/data.json';

import type { TCommentItem } from 'src/types/comment';
import { generateComment, updateNestedComments } from 'src/utils/helper';

const useHomeAction = () => {
  const [posts, setPosts] = useState<TCommentItem[]>(postsData.posts);

  const handleReply = (parentId: string, replyText: string) => {
    const newReply = generateComment(replyText);

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === parentId) {
          return { ...post, comments: [...post.comments, newReply] };
        }
        return {
          ...post,
          comments: updateNestedComments(post.comments, parentId, newReply),
        };
      })
    );
  };

  const handlePost = (content: string) => {
    const newPost = generateComment(content);

    setPosts([newPost, ...posts]);
  };

  return {
    posts,
    handleReply,
    handlePost,
  };
};

export default useHomeAction;
