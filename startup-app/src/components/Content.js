import React from "react";
import CourseModules from "./Modules";
import InstructorSection from "./InstructorSection";
import Testimonials from "./Testimonials";
import Plan from "./Plan";

function Content() {
  return (
    <section className="justify-items-center py-12">
      <CourseModules />
      <InstructorSection />
      <Testimonials />
      <Plan />
    </section>
  );
}

export default Content;
