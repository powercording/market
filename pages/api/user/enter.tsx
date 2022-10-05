import client from "@libs/server/client";
import twilio from "twilio";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = phone ? { phone: +phone } : email ? email : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MESSAGE_TEST_SID,
      to: process.env.TWILIO_PHONE!,
      body: `Your Login Token is ${payload}`,
    });
    console.log("트윌로 메세지:", message);
  }



  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymouse",
            ...user,
          },
        },
      },
    },
  });

  console.log("token : ", token);

  return res.json({
    ok: true,
  });
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
