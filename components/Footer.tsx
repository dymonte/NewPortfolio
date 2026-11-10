import { anton, baiJamjuree } from '@/fonts';


export default function Footer() {
    return (
        <footer className="w-full border-t border-[#DE424A]/30 bg-[#151515] py-8 px-8">

            <div className={`${baiJamjuree.className} mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row`}>

                <h2 className={`${anton.className} text-2xl text-[#DE424A]`}>
                    DYLAN&apos;S PORTFOLIO
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-6 text-[#A6D4DD]">

                    <a
                        href="/attachments/CV-MonteneriDylan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#DE424A]"
                    >
                        My CV ↗
                    </a>

                    <a
                        href="tel:+33769350067"
                        className="transition-colors hover:text-[#DE424A]"
                    >
                        +33 7 69 35 00 67
                    </a>

                    <a
                        href="mailto:dylan.monteneri@gmail.com"
                        className="transition-colors hover:text-[#DE424A]"
                    >
                        Email ↗
                    </a>

                </div>
            </div>
        </footer>
    );
}
