import Layout from "@/src/layout/Layout";
import About from "@/src/components/About";
import Package from "@/src/components/Package";
import Testimonials from "@/src/components/Testimonials";
import Team from "@/src/components/Team";

export default function Home() {
  return (
    <Layout>
      <About />
      {/* <Package /> */}
      <Package />
      <Team />
      {/* Review */}
      <Testimonials />
    </Layout>
  );
}
