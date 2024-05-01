"use client";

import { useProfile } from "../UseProfile";
import EditableImage from "./EditableImage";
import { useState } from "react";
import AddressInputs from "./AddressInputs";
export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName, value) {
    if (propName === "phone") setPhone(value);
    if (propName === "streetAddress") setStreetAddress(value);
    if (propName === "postalCode") setPostalCode(value);
    if (propName === "city") setCity(value);
    if (propName === "country") setCountry(value);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div>
        <div className="flex flex-col p-2 rounded-lg relative max-w-[200px] mx-auto">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="flex-grow"
        onSubmit={(ev) =>
          onSave(ev, {
            name: userName,
            image,
            phone,
            admin,
            streetAddress,
            postalCode,
            city,
            country,
          })
        }
      >
        <label className="text-sm text-gray-400">First And Last Name</label>
        <input
          type="text"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md"
        />
        <label className="text-sm text-gray-400">Email</label>
        <input
          type="email"
          value={user.email || ""}
          disabled={true}
          className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md"
        />
        <AddressInputs
          addressProps={{ phone, streetAddress, postalCode, city, country }}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData?.admin && (
          <div>
            <label
              htmlFor="adminCB"
              className="p-2 inline-flex items-center gap-2 mt-2"
            >
              <input
                id="adminCB"
                type="checkbox"
                className=" w-4 h-4"
                value={"1"}
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
              />
              <span className="">Admin</span>
            </label>
          </div>
        )}

        <button className="save-button mt-3 " type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
