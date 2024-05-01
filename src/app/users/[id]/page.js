"use client";

import UserForm from "@/components/layout/UserForm";
import UserTabs from "../../../components/layout/UserTabs";
import { useProfile } from "../../../components/UseProfile";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

export default function EditUserPage() {
  const { loading, data } = useProfile();
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/profile?_id=" + id).then((res) => {
      res.json().then((user) => {
        setUser(user);
      });
    });
  }, []);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _id: id }),
      });
      if (res.ok) resolve();
      else reject();
    });
    await toast.promise(promise, {
      loading: "Saving...",
      success: "User Saved! :)",
      error: "Error Occurred :(",
    });
  }

  if (loading) {
    return "Loading User Info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8 mx-auto max-w-2xl">
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
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
