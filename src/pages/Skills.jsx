export default function Skills() {
  const skillSet = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  const learning = [
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  const otherSkills = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  const SkillGrid = ({ title, skills }) => (
    <>
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-left w-full">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12 w-full">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  shadow-md p-4 rounded-lg hover:scale-105 transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-3 object-contain"
            />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gray-200 py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest border-y-4 inline-block py-2 px-6 mb-12">
          SKILLS
        </h2>

        <div className="flex flex-col items-center">
          <SkillGrid title="Core Skills" skills={skillSet} />
          <SkillGrid title="Currently Learning" skills={learning} />
          <SkillGrid title="Other Tools" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
}
