import { type FC } from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import useHomeAction from './Home.action';
import CommentItem from 'src/components/comment-item';
import CommentForm from 'src/components/comment-form';

const Home: FC = () => {
  const { posts, handleReply, handlePost } = useHomeAction();

  return (
    <VStack align="start" gap={6} maxWidth="600px">
      <Heading size="lg">Community Page</Heading>
      <CommentForm
        placeholder="Write a post..."
        onSubmit={handlePost}
        buttonText="Post"
      />

      {posts.map((post) => (
        <CommentItem key={post.id} comment={post} onReply={handleReply} />
      ))}
    </VStack>
  );
};

export default Home;
