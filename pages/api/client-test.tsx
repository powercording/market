import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      name: "hola!",
      email: "user",
    },
  });
  res.json({  
    ok: "I dont know what I'm doing now here  in gangnam",
    data: "이게 뭔데",
  });
}
