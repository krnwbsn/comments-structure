import { type FC, memo } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { dayFormatter } from 'src/utils/formatter';
import CommentForm from 'src/components/comment-form';
import 'src/styles/CommentItem.scss';

import type { TCommentItemWithForm } from 'src/types/comment';

const CommentItem: FC<TCommentItemWithForm> = ({ comment, onReply }) => (
  <VStack align="start" className="comment-item">
    <Box className="comment-content">
      <Text className="comment-author">{comment.author}</Text>
      <Text>{comment.content}</Text>
      <Text className="comment-timestamp">
        {dayFormatter(comment.timestamp)}
      </Text>
    </Box>

    <CommentForm
      placeholder="Write a reply..."
      onSubmit={(text) => onReply(comment.id, text)}
      buttonText="Reply"
    />

    {comment.comments.length > 0 && (
      <Box className="comment-replies">
        {comment.comments.map((reply) => (
          <CommentItem key={reply.id} comment={reply} onReply={onReply} />
        ))}
      </Box>
    )}
  </VStack>
);

export default memo(CommentItem);
