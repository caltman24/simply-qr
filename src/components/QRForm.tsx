import { QRSize } from "../App";
import { useState } from "react";

interface IQRSizeOptions {
  value: QRSize;
  label: QRSize;
}

interface IQRFormProps {
  setSize: React.Dispatch<React.SetStateAction<QRSize>>;
  size: QRSize;
  generateQr: (data: string) => void;
}

const QRForm = ({ setSize, size, generateQr }: IQRFormProps) => {
  const [inputUrl, setInputUrl] = useState("");
  const [isError, setIsError] = useState(false);

  const sizeOptions: IQRSizeOptions[] = [
    { value: "100x100", label: "100x100" },
    { value: "200x200", label: "200x200" },
    { value: "300x300", label: "300x300" },
    { value: "400x400", label: "400x400" },
    { value: "500x500", label: "500x500" },
    { value: "600x600", label: "600x600" },
  ];

  const handleUrlChange = (e: any) => {
    setInputUrl(e.target.value);
  };

  const handleSizeChange = (e: any) => {
    setSize(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputUrl === "") {
      setIsError(true);
    } else {
      generateQr(inputUrl);
      setIsError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL"
        value={inputUrl}
        onChange={handleUrlChange}
      />
      <select
        name="size"
        id="size-select"
        defaultValue={size}
        onChange={handleSizeChange}
      >
        {sizeOptions.map((size, i) => {
          return (
            <option value={size.value} label={size.label} key={i}></option>
          );
        })}
      </select>
      {isError && <p className="error">Error: URL field is empty</p>}
      <button type="submit">Generate</button>
    </form>
  );
};

export default QRForm;
