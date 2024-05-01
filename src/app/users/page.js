"use client";

import Link from "next/link";
import UserTabs from "../../components/layout/UserTabs";
import { useProfile } from "../../components/UseProfile";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UsersPage() {
  const { loading, data } = useProfile();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users").then((response) => {
      response.json().then((users) => setUsers(users));
    });
  }, []);

  if (loading) {
    return "Loading User Info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
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
        {users?.length > 0 &&
          users.map((user) => (
            <div
              key={user._id}
              className="bg-gray-100 rounded-xl mb-2 p-1 px-4 flex items-center justify-between"
            >
              <div className="flex gap-4">
                <div className="text-gray-500">
                  {!!user.name && <span>{user.name}</span>}
                  {!user.name && <span className="italic">No Name</span>}
                </div>
                <span className="text-black">{user.email}</span>
              </div>
              <div>
                <Link href={"/users/" + user._id} className="buttoneditdelete">
                  Edit
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
