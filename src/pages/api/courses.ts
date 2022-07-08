// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
  NextApiRequest,
  NextApiResponse,
} from "../../../node_modules/next/dist/shared/lib/utils";

const courses = (request: NextApiRequest, response: NextApiResponse) => {
  const courses = [
    { id: 1, name: "Next.js com typescript" },
    { id: 2, name: "React.js com typescript" },
    { id: 3, name: "Wordpress" },
    { id: 4, name: "SASS" },
    { id: 5, name: "Styled Components" },
  ];

  return response.json(courses);
};

export default courses;

/**
 * This file create an API endpoint with adress  http://localhost:3000/api/courses
 */
