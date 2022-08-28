import BaseHeader from "./components/BaseHeader";
import BaseFooter from "./components/BaseFooter";
import QRForm from "./components/QRForm";
import QRCode from "./components/QRCode";
import { useState } from "react";

export type QRSize =
  | "100x100"
  | "200x200"
  | "300x300"
  | "400x400"
  | "500x500"
  | "600x600";

function App() {
  const [url, setUrl] = useState<string | null>(null);
  const [size, setSize] = useState<QRSize>("100x100");

  const generateQr = (data: string) => {
    setUrl(data);
  };

  return (
    <div className="App">
      <BaseHeader />
      <main>
        <QRForm size={size} setSize={setSize} generateQr={generateQr} />
        {url && <QRCode data={url} size={size} />}
      </main>
      <BaseFooter />
    </div>
  );
}

export default App;
