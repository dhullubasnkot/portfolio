export default function About() {
  const WhatIdo = [
    {
      id: 1,
      title: "DESIGN",
      description:
        "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
      icon: "/design.png",
    },
    {
      id: 2,
      title: "DEVELOPMENT",
      description:
        "I develop fully responsive and performant websites using modern web technologies suited to your business needs.",
      icon: "/design.png",
    },
    {
      id: 3,
      title: "MAINTENANCE",
      description:
        "I offer ongoing support and updates, ensuring your website stays up-to-date, secure, and continues performing optimally.",
      icon: "/design.png",
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-200 py-20 px-6 md:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest border-y-4 inline-block py-2 px-6 mb-8">
          ABOUT ME
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          I provide services tailored to your needs. From UI/UX design to
          development and ongoing maintenance, I help bring your vision to life.
        </p>

        <div className="flex justify-center mb-12">
          <button className="border-x-2 border-black px-6 py-1 font-semibold tracking-wide">
            EXPLORE
          </button>
        </div>

        <div className="flex justify-center mb-16">
          <img src="/sep.png" alt="separator" className="w-36 sm:w-48" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 text-left">
          {WhatIdo.map((item) => (
            <div key={item.id} className="relative   p-6  shadow-md rounded-md">
              <div className="flex items-start gap-4">
                <img src={item.icon} alt={item.title} className="w-12 h-12 " />

                <div>
                  <h3 className="text-xl font-bold tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <img src="/sep.png" alt="separator" className="w-36 sm:w-48" />
        </div>
      </div>
    </section>
  );
}
