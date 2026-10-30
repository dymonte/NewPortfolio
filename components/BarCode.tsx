import { Libre_Barcode_39 } from "next/font/google";

const barcodeFont = Libre_Barcode_39({
  subsets: ["latin"],
  weight: "400",
});

type BarCodeProps = {
    content: string;
}

export default function BarCode({
    content
}: BarCodeProps) {
    return(     
    <p
        className={`${barcodeFont.className} p-1 tracking-[0.1rem] text-5xl text-[#DE424A] text-[clamp(1rem,3vw,3rem)]`}
      >
        {content}
    </p>
    );
}