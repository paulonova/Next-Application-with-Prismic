import { useRouter } from "next/router";
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

interface Comment {
  id: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

const Post = ({ comments }: CommentsProps) => {
  const router = useRouter();

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
  const response = await fetch("http://localhost:3333/posts");
  const posts = await response.json();

  const paths = posts.map((post) => {
    return {
      params: { id: String(post.id) },
    };
  });
  return {
    paths,
    fallback: false,
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
