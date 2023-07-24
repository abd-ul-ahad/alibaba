import Image from "next/image";
import { Roboto } from "next/font/google";
import { AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`min-h-screen ${roboto.className}`}>
      <div className="mb-5 lg:mb-0">
        <Hero />
      </div>
      <Overview />
      <WhyDoWeChooseNativeOperatingSystems />
    </main>
  );
}

const Hero = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
      }}
      className="w-full bg-[url(/hero-bg.jpg)] h-96"
    >
      <div className="w-full flex flex-col justify-start items-start space-y-8 py-9 sm:px-5 md:px-10 px-3 lg:px-24">
        <div className="w-full">
          <p className="text-[var(--dark)] text-sm flex justify-start items-center space-x-1">
            <a
              href="https://www.alibabacloud.com/?spm=a3c0i.17628883.5039522690.1.4544fbcfghgRo0"
              target="_blank"
              className="hover:text-[var(--orange)]"
            >
              Alibaba Cloud
            </a>
            <AiOutlineRight color="#999" />
            <a
              target="_blank"
              href="https://www.alibabacloud.com/product?spm=a3c0i.17628883.5039522690.2.4544fbcfghgRo0"
              className="hover:text-[var(--orange)]"
            >
              Products
            </a>
            <AiOutlineRight color="#999" />
            <a href="" className="hover:text-[var(--orange)]">
              Alibaba Cloud Linux 2
            </a>
          </p>
        </div>
        <div className="text-white space-y-7">
          <h2 className="text-4xl">
            <span>Alibaba Cloud Linux 2</span>
          </h2>
          <p>
            Alibaba Cloud Linux 2 is a free-to-use, native operating system that
            provides a stable, reliable,
            <br className="lg:block hidden" />
            and high-performance environment for your applications.
          </p>
          <div className="space-x-4">
            <a
              href="https://account.alibabacloud.com/login/login.htm?spm=a3c0i.17628883.5039522690.4.4544fbcfghgRo0&oauth_callback=https%3A%2F%2Fecs-buy.aliyun.com%2F%3F%26oauth_auto_callback%3Dauto"
              target="_blank"
              className="bg-[var(--orange)] hover:bg-[#f09554] px-5 py-2 border-[var(--orange)] border-2"
            >
              Use Now
            </a>
            <a
              target="_blank"
              href="https://www.alibabacloud.com/help/en/elastic-compute-service/latest/alibaba-cloud-linux-overview"
              className="bg-transparent border-2 px-5 py-2 hover:bg-[white] hover:text-[#1f2326]"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  const [open, setOpen] = useState<boolean>(false);

  try {
    window?.addEventListener("blur", () => setOpen(false));
    document?.addEventListener("blur", () => setOpen(false));
    document?.addEventListener("scroll", () => setOpen(false));

    document?.addEventListener("click", (e: Event) => {
      if (
        (e.target as Element)?.closest("[data-dropdown]") != null ||
        (e.target as Element)?.closest("[data-dropdown-button]") != null
      )
        return;

      setOpen(false);
    });
  } catch {}

  const ScrollToTop = () => {
    try {
      window?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch {}
  };
  return (
    <div className="w-full relative -top-[52px]">
      <div className="w-full hidden lg:flex px-24 sticky-button justify-center items-center">
        <button
          className="w-full hover:text-[var(--orange)] bg-[var(--dark-bg)] hover:bg-[#2c3034] text-white py-3"
          style={{
            borderTop: "4px solid var(--orange)",
          }}
          onClick={() => ScrollToTop()}
        >
          Overview
        </button>

        <a
          href="https://www.alibabacloud.com/help/en/elastic-compute-service/latest/alibaba-cloud-linux-overview"
          target="_blank"
          style={{
            borderTop: "4px solid #2c3034",
          }}
          className="w-full text-center hover:text-[var(--orange)] bg-[#2c3034] text-white py-3"
        >
          Documentation
        </a>
      </div>
      <div className="bg-[var(--dark-bg)] w-full py-3 lg:py-10 space-y-5">
        {/* mobile */}
        <div className="w-full lg:hidden block">
          <button
            data-dropdown-button
            onClick={() => setOpen(!open)}
            className={`text-center flex sticky-button justify-between hover:text-[var(--orange)] items-center w-full text-white text-base py-2 px-5`}
          >
            <p className="w-full text-lg">Overview</p>
            <BsChevronDown />
          </button>

          <div
            data-dropdown
            className={`bg-[#5f6367] space-y-2 py-3 ${
              open
                ? "opacity-1 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => ScrollToTop()}
              className="text-center w-full text-white text-base"
            >
              Overview
            </button>
            <a
              target="_blank"
              href="https://www.alibabacloud.com/help/en/elastic-compute-service/latest/alibaba-cloud-linux-overview"
              className="text-center w-full text-white text-base"
            >
              <button className="w-full">Documentation</button>
            </a>
          </div>
        </div>
        <p className="text-white lg:w-3/5 pb-10 px-3 md:px-10 lg:px-24">
          Alibaba Cloud Linux 2 is a next-generation Linux distribution released
          by Alibaba Cloud. It includes advanced features developed by the Linux
          community, and provides a stable and reliable environment for
          applications running on the cloud. Alibaba Cloud Linux 2 is deeply
          optimized based on the Alibaba Cloud infrastructure to provide the
          best experience for users. You can install Alibaba Cloud Linux 2 on
          all types of Alibaba Cloud Elastic Compute Service (ECS) instances,
          including ECS Bare Metal Instances.
        </p>
      </div>
    </div>
  );
};

const WhyDoWeChooseNativeOperatingSystems = () => {
  return (
    <div className="w-full">
      <h2 className="w-full text-center text-3xl px-10">
        Why do we choose native operating systems
      </h2>
      <div className="flex justify-between lg:flex-row flex-col items-start py-14 md:px-10 px-5 lg:px-24">
        <div className="lg:space-y-5">
          <div className="flex justify-center lg:flex-row flex-col lg:space-y-0 space-y-3 lg:mb-0 mb-5 items-start">
            <div className="lg:w-52">
              <Image
                src="/icons/security.webp"
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h6 className="text-[#383d42]">
                Security and Regulation Compliance
              </h6>
              <p className="lg:w-11/12 text-[#9b9ea0] text-sm">
                Alibaba Cloud Linux 2 is a 100% open-source Linux distribution.
                You are free to download and check the source code of all
                operating system components, and send any issues or suggestions
                to our community. Alibaba Cloud will continuously fix
                vulnerabilities in Alibaba Cloud Linux 2 to improve system
                security.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:flex-row flex-col lg:space-y-0 space-y-3 lg:mb-0 mb-5 items-start">
            <div className="lg:w-52">
              <Image
                src="/icons/customer.webp"
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <div className="flex justify-start items-start flex-col">
              <h6 className="text-[#383d42]">Customer Support Benefits</h6>
              <p className="lg:w-11/12 text-[#9b9ea0] text-sm">
                Unlike other free Linux distributions in Alibaba Cloud
                Marketplace, Alibaba Cloud Linux 2 is developed based on the
                latest Linux kernel. Alibaba Cloud Linux 2 users can get
                technical support and services through our ticket system, forum,
                or GitHub. All these services are free of charge.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex justify-center lg:flex-row flex-col lg:space-y-0 space-y-3 lg:mb-0 mb-5 items-start">
            <div className="w-60">
              <Image
                src="/icons/performance.webp"
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h6 className="text-[#383d42]">
                Security and Regulation Compliance
              </h6>
              <p className="lg:w-11/12 text-[#9b9ea0] text-sm">
                Alibaba Cloud Linux 2 is a 100% open-source Linux distribution.
                You are free to download and check the source code of all
                operating system components, and send any issues or suggestions
                to our community. Alibaba Cloud will continuously fix
                vulnerabilities in Alibaba Cloud Linux 2 to improve system
                security.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:flex-row flex-col lg:space-y-0 space-y-3 lg:mb-0 mb-5 items-start">
            <div className="lg:w-52 flex items-start justify-start">
              <Image
                src="/icons/ecosystem.webp"
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h6 className="text-[#383d42]">Customer Support Benefits</h6>
              <p className="lg:w-11/12 text-[#9b9ea0] text-sm">
                Unlike other free Linux distributions in Alibaba Cloud
                Marketplace, Alibaba Cloud Linux 2 is developed based on the
                latest Linux kernel. Alibaba Cloud Linux 2 users can get
                technical support and services through our ticket system, forum,
                or GitHub. All these services are free of charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
