import Layout from "@/src/layout/Layout";
import About from "@/src/components/About";
import Package from "@/src/components/Package";
import Testimonials from "@/src/components/Testimonials";
import Team from "@/src/components/Team";
import ContactUs from "@/src/components/ContactUs";
import Footer from "@/src/components/Footer";
import Portfolio from "@/src/components/Portfolio";
import Link from "next/link";
import FacebookMsg from "@/src/components/FacebookMsg";

export default function Home() {
  return (
    <Layout>
      {/* <Link
        href="https://wa.me/995592005978?text=I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more."
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-whatsapp 
          text-white fixed bottom-0 right-0 mb-5 mr-5 h-[55px] z-20 animate-bounce"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="rgb(37,211,102)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
        </svg>
      </Link> */}
      <About />
      <Package />
      <Team />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
      <FacebookMsg />
    </Layout>
  );
}
