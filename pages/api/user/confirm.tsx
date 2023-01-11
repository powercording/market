import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;

  const userExist = await client.token.findUnique({
    where: { payload: token },
  });
  console.log("userExist :", userExist);
  if (!userExist) return res.status(404).end();

  req.session.user = {
    id: userExist.userId,
  };
  await req.session.save();
  res.json({ ok: true });
}

export default withApiSession(withHandler("POST", handler));
