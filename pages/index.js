import Layout from "@/src/layout/Layout";
import About from "@/src/components/About";
import Package from "@/src/components/Package";
import Testimonials from "@/src/components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <About />
      {/* <Package /> */}
      <Package />
      {/* Review */}
      <Testimonials />
    </Layout>
  );
}
