import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { useRouter } from "../../../node_modules/next/router";

interface Comment {
  id: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

const Post = ({ comments }: CommentsProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <h1>Single Post {router.query.id} </h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

//Generate static pages
export const getStaticProps: GetStaticProps<CommentsProps> = async (
  context
) => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
  const comments = await response.json();
  return {
    props: { comments },
    revalidate: 5,
  };
};

export default Post;
