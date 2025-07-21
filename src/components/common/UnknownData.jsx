import { TbDeviceUnknownFilled } from "react-icons/tb";

function UnknownData({ message }) {
  return (
    <div className="UnknownData">
      <TbDeviceUnknownFilled />
      <h4>{message}</h4>
    </div>
  );
}

export default UnknownData;
