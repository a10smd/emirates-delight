"use client";

import { useEffect, useState } from "react";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { dbTimeForHuman } from "../../libs/datetime";
import Link from "next/link";
import Image from "next/image";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const { loading, data: profile } = useProfile();
  useEffect(() => {
    fetchOrders();
  }, []);

  function fetchOrders() {
    setLoadingOrders(true);
    fetch("/api/orders").then((res) => {
      res.json().then((orders) => {
        setOrders(orders.reverse());
        setLoadingOrders(false);
      });
    });
  }
  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={profile.admin} />
      <div>
        <div className="absolute left-0 right-0 w-full justify-start">
          <div className="absolute left-0 -top-[-120px] text-left -z-10 lg:block hidden">
            <Image
              src={"/Design2.png"}
              width={150}
              height={250}
              alt={"Design1"}
            />
          </div>
          <div className="absolute -top-[140px] right-0 -z-10 lg:block hidden">
            <Image
              src={"/Design1.png"}
              width={150}
              height={250}
              alt={"Design2"}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        {loadingOrders && <div>Loading Orders...</div>}
        {orders?.length > 0 &&
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-gray-100 rounded-xl mb-2 p-4 flex flex-col md:flex-row  items-center  gap-6"
            >
              <div className="grow flex flex-col md:flex-row items-center gap-6">
                <div>
                  <div
                    className={
                      (order.paid ? "bg-green-500" : "bg-red-500") +
                      " p-2 rounded-xl text-sm w-24 text-center"
                    }
                  >
                    {order.paid ? "Paid" : "Not Paid"}
                  </div>
                </div>
                <div className="grow">
                  <div className="flex gap-2 items-center mb-1">
                    <div className="text-black grow">{order.userEmail}</div>
                    <div className="text-gray-500 text-sm">
                      {dbTimeForHuman(order.createdAt)}
                    </div>
                  </div>

                  <div className="text-gray-500 text-xs">
                    {order.cartProducts.map((p) => p.name).join(", ")}
                  </div>
                </div>
              </div>

              <div className="justify-end flex gap-2 items-center whitespace-nowrap">
                <Link href={"/orders/" + order._id} className="buttonmenu">
                  Show Order
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
