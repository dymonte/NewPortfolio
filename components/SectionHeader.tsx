import { Anton } from "next/font/google";
import BarCode from "@/components/BarCode"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});


type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <header className="mb-3.5 p-10">
      <h2 className={`${anton.className} leading-[0.9] text-[#DE424A] text-[clamp(3rem,7vw,7rem)] m-0`}>
        {title}
      </h2>

    <BarCode content={subtitle}></BarCode>
    </header>
  );
}