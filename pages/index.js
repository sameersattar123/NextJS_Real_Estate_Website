import { getProperty } from "@/Features/common/Home/Api/getProperty";
import FeaturedProperties from "@/Features/common/Home/components/FeaturedProperties";
import HeroBaneer from "@/Features/common/Home/components/HeroBaneer";
import MeetTheTeam from "@/Features/common/Home/components/MeetTheTeam";
import Partner from "@/Features/common/Home/components/Partner";
import Testonomial from "@/Features/common/Home/components/Testonomial";
import DefaultLayouts from "@/Features/common/layouts/DefaultLayouts";



export default function Home({ featuredProperties }) {
  return (
    <DefaultLayouts>
      <HeroBaneer />
      <FeaturedProperties featuredProperties={featuredProperties}  />
      <MeetTheTeam/>
      <Partner/>
      <Testonomial/>
    </DefaultLayouts>
  );
}

export async function getStaticProps() {
  const properties = await getProperty(5)
  return {
    props: { featuredProperties: properties },
  };
}
