import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const response = {
    email: "abijay440@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/abijay440/my-nextjs-app/"
  };
  res.status(200).json(response);
}