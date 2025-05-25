import React from "react";
import Hero from "../components/Hero";

import FeatureJobs from "../components/FeatureJobs";
import FeatureResume from "../components/FeatureResume";
import FeatureMentor from "../components/FeatureMentor";
import FeatureConnect from "../components/FeatureConnect";
import FeaturePeople from "../components/FeaturePeople";
import FeatureQuestions from "../components/FeatureQuestions";

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <FeatureJobs />
      <FeatureResume />
      <FeatureMentor />
      <FeatureConnect />
      <FeaturePeople />
      <FeatureQuestions />
    </div>
  );
};

export default LandingPage;
