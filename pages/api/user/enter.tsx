import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const token = await client.token.create({
    data: {
      payload: "1234",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "Anonymouse",
            ...payload,
          },
        },
      },
    },
  });

  console.log("token : ", token);

  return res.status(200).end();
  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (user) console.log(`%c we found the user by email`, "color:red");
  //   if (!user) {
  //     console.log("the user dons't exist we will create a user");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymouse",
  //         email: email,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }
  // if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });
  //   if (user) console.log(`%c we found the user by phone number`, "color:red");
  //   if (!user) {
  //     console.log("user is not founded. we will create one");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymouse",
  //         phone: +phone,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }

  // const user = await client.user.upsert({
  //   where: {
  //     ...payload,
  //   },
  //   create: {
  //     name: "Anonymouse",
  //     ...payload,
  //   },
  //   update: {},
  // });
}

export default withHandler("POST", handler);
