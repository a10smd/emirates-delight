import { authOptions } from "../auth/[...nextauth]/route";
import { isAdmin } from "@/libs/authUtils";
import mongoose from "mongoose";
import { Order } from "../../../models/Order";
import { getServerSession } from "next-auth";

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (_id) {
    return Response.json(await Order.findById(_id));
  }

  if (admin) {
    return Response.json(await Order.find());
  }

  if (userEmail) {
    return Response.json(await Order.find({ userEmail }));
  }
}
