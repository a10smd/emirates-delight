"use client";
import { useProfile } from "../../../components/UseProfile";
import EditableImage from "@/components/layout/EditableImage";
import UserTabs from "../../../components/layout/UserTabs";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Left from "../../../components/icons/Left";
import { redirect } from "next/navigation";
import MenuItemForm from "../../../components/layout/MenuItemForm";
import Image from "next/image";

export default function NewMenuItemPage() {
  const [redirectToItems, setRedirectToItems] = useState(false);
  const { loading, data } = useProfile();

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: "Saving Tasty Meal :)",
      success: "Saved!",
      error: "Failed :(",
    });
    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect("/menu-items");
  }

  if (loading) {
    return "Loading User Info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8">
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
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={"/menu-items"} className="buttoncreatemenu">
          <Left />
          <span>Show all Menu Item</span>
        </Link>
      </div>
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
}
