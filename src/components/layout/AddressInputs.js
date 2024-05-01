export default function AddressInputs({
  addressProps,
  setAddressProp,
  disabled = false,
}) {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <label className="text-sm text-gray-400">Phone Number</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="Phone Number"
        value={phone || ""}
        onChange={(ev) => setAddressProp("phone", ev.target.value)}
        className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md "
      />
      <label className="text-sm text-gray-400">Address</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Street Address"
        value={streetAddress || ""}
        onChange={(ev) => setAddressProp("streetAddress", ev.target.value)}
        className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md "
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-sm text-gray-400">Postal Code</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="Postal Code"
            value={postalCode || ""}
            onChange={(ev) => setAddressProp("postalCode", ev.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md "
          />
        </div>
        <div>
          <label className="text-sm text-gray-400">City</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="city"
            value={city || ""}
            onChange={(ev) => setAddressProp("city", ev.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md "
          />
        </div>
      </div>
      <label className="text-sm text-gray-400">Country</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Country"
        value={country || ""}
        onChange={(ev) => setAddressProp("country", ev.target.value)}
        className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md "
      />
    </>
  );
}
