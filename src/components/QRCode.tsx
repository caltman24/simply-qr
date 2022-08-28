import { QRSize } from "../App";

interface IQRCodeProps {
  data: string;
  size: QRSize;
}
const QRCode = ({ size, data }: IQRCodeProps) => {
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}!&size=${size}&color=255-138-0&bgcolor=235-235-235`;
  return (
    <div className="qr-code">
      <img src={url} alt="QR-Code" />
    </div>
  );
};

export default QRCode;
