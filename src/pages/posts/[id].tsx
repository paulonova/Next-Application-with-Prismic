import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <h1>Single Post {router.query.id} </h1>
      <p>{router.asPath}</p>
    </React.Fragment>
  );
};

export default Post;
