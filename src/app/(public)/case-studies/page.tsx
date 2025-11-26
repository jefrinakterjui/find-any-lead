import CaseStudies from "@/components/modules/Home/CaseStudies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Find Any Lead",
  description: "Explore how we have helped B2B companies generate millions in pipeline through cold email infrastructure.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudies />
    </>
  );
}