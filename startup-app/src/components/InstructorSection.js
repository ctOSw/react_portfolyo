import React from "react";
import instructor1 from "../imgs/instructor1.png";
import instructor2 from "../imgs/instructor2.png";
import instructor3 from "../imgs/instructor3.png";

const instructors = [
  {
    name: "Ahmet Yılmaz",
    bio: "10+ yıllık deneyime sahip full-stack geliştirici, birçok startup’ta eğitmenlik yaptı.",
    photo: instructor1,
  },
  {
    name: "Elif Kaya",
    bio: "Frontend uzmanı, React ve UI/UX odaklı projelerde danışmanlık verdi.",
    photo: instructor2,
  },
  {
    name: "Mert Demir",
    bio: "Backend ve bulut teknolojilerinde uzman, farklı hackathonlarda mentorluk yaptı.",
    photo: instructor3,
  },
];

function InstructorSection() {
  return (
    <div className="p-6 mb-12  mt-5 wave-background justify-items-center ">
      <h1 className="uppercase font-firaSans font-bold text-3xl my-3">
        eğitmenlerimiz
      </h1>
      <div className="flex flex-col  lg:flex-row lg:flex-wrap  justify-center gap-4 ">
        {instructors.map((item, idx) => (
          <div
            key={idx}
            className=" bg-[#F6F1F1] rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">
              <img src={item.photo} alt={item.bio} />
            </div>
            <div>
              <h1 className="text-lg font-semibold font-firaSans text-[#065084] mb-2">
                {item.name}
              </h1>
              <p className="text-md font-semibold text-[#0F828C] font-libertinus">
                {item.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorSection;
