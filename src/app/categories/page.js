"use client";
import { useEffect, useState } from "react";
import UserTabs from "../../components/layout/UserTabs";
import { useProfile } from "../../components/UseProfile";
import toast from "react-hot-toast";
import DeleteButton from "@/components/DeleteButton";
import Image from "next/image";

export default function CategoriesPage() {
  const [categoryName, setCategoryName] = useState("");
  const { loading: profileLoading, data: profileData } = useProfile();
  const [categories, setCategories] = useState([]);
  const [editedCategory, setEditedCategory] = useState(null);
  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }

  async function handleCategorySubmit(ev) {
    ev.preventDefault();
    const creationPromise = new Promise(async (resolve, reject) => {
      const data = { name: categoryName };
      if (editedCategory) {
        data._id = editedCategory._id;
      }
      const response = await fetch("/api/categories", {
        method: editedCategory ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      fetchCategories();
      setCategoryName("");
      setEditedCategory(null);
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(creationPromise, {
      loading: editedCategory
        ? "Updating category..."
        : "Creating your new category...",
      success: editedCategory ? "Category updated ;)" : "Category created ;)",
      error: "An Error has occurred!:( ",
    });
  }

  async function handleDeleteClick(_id) {
    const promise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/categories?_id=" + _id, {
        method: "DELETE",
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(promise, {
      loading: "Deleting Existing Category...",
      success: "Deleted",
      error: "Error... Please Try Again Later!",
    });

    fetchCategories();
  }

  if (profileLoading) {
    return "Loading...";
  }

  if (!profileData.admin) {
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
      <form className="mt-8" onSubmit={handleCategorySubmit}>
        <div className="flex gap-2 items-end ">
          <div className="grow">
            <label className="text-sm text-gray-400">
              {editedCategory ? "Update category" : "New category name"}
              {editedCategory && (
                <>
                  : <b>{editedCategory.name}</b>
                </>
              )}
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(ev) => setCategoryName(ev.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md"
            />
          </div>
          <div className="flex gap-1">
            <button type="submit" className="buttoncategories">
              {editedCategory ? "Update" : "Create"}
            </button>
            <button
              className="buttoncategoriesedit"
              type="button"
              onClick={() => {
                setCategoryName("");
                setEditedCategory(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className="ml-2 mt-8 text-sm text-gray-500">
          Existing Categories:
        </h2>
        {categories?.length > 0 &&
          categories.map((c) => (
            <div
              key={c._id}
              className="buttoncategoriesedit mt-2 flex gap-1 items-center"
            >
              <div className="grow ">{c.name}</div>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setEditedCategory(c);
                    setCategoryName(c.name);
                  }}
                  className="buttoneditdelete"
                >
                  Edit
                </button>
                <DeleteButton
                  label="Delete"
                  onDelete={() => handleDeleteClick(c._id)}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
