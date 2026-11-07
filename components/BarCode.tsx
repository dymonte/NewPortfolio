import { barcodeFont } from '@/fonts';

type BarCodeProps = {
    content: string;
}

export default function BarCode({
    content
}: Readonly<BarCodeProps>) {
    return (
        <p
            className={`${barcodeFont.className} p-1 tracking-[0.1rem] text-5xl text-[#DE424A] text-[clamp(1rem,3vw,3rem)]`}
        >
            {content}
        </p>
    );
}