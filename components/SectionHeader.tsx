import { anton } from '@/fonts';
import BarCode from '@/components/BarCode';


type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: Readonly<SectionHeaderProps>) {
  return (
    <header className="ml-10 mb-5">
      <h2 className={`${anton.className} leading-[0.9] text-[#DE424A] text-[clamp(2rem,5vw,5rem)] m-0`}>
        {title}
      </h2>

      <BarCode content={subtitle}></BarCode>
    </header>
  );
}