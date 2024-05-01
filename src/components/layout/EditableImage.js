import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({ link, setLink }) {
  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);

      const uploadPromise = fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        if (response.ok) {
          return response.json().then((link) => {
            setLink(link);
          });
        }
        throw new Error("Something Went Wrong");
      });

      await toast.promise(uploadPromise, {
        loading: "Uploading...",
        success: "Image Uploaded!",
        error: "Failed",
      });
    }
  }
  return (
    <>
      {link && (
        <Image
          className="rounded-xl mb-2 w-full h-full"
          src={link}
          width={250}
          height={250}
          alt={"Image"}
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-xl mb-1">
          No Image
        </div>
      )}

      <label className="flex justify-center">
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="text-center changeimage cursor-pointer">
          Change Image
        </span>
      </label>
    </>
  );
}
