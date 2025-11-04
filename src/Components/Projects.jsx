import React, { useState } from "react";

const projects = [
  { title: "Portfolio Website", link: "https://tringportfolio.netlify.app/", img: "https://i.ibb.co/ZxM8sDx/portfolio.jpg" },
  { title: "To-Do Project", link: "https://first-todoproject.netlify.app/", img: "https://i.ibb.co/dcHnL0T/todo.jpg" },
  { title: "Admin Panel", link: "https://admin-panel-p.netlify.app/", img: "https://i.ibb.co/zZwfKcL/admin.jpg" },
  { title: "Landing Page", link: "https://landing-page19.netlify.app/", img: "https://i.ibb.co/FgCFdSR/landing.jpg" },
  { title: "E-commerce Website", link: "https://e-commerce-web13.netlify.app/", img: "https://i.ibb.co/3Th7cMm/ecommerce.jpg" },
  { title: "Shop Project", link: "https://new-shop1.netlify.app/", img: "https://i.ibb.co/VJkxLfh/shop.jpg" },
  { title: "Team A Project 2", link: "https://team-a-peoject-2-task.netlify.app/", img: "https://i.ibb.co/QJdvkQF/team1.jpg" },
  { title: "Team A Project 2 Task 1", link: "https://team-a-project-2-task-1.netlify.app/", img: "https://i.ibb.co/p0RwKvD/team2.jpg" },
  { title: "Team A Project 4 Task 1", link: "https://team-a-project-4-task1.netlify.app/", img: "https://i.ibb.co/pPSvMz2/team3.jpg" },
  { title: "Finsweet Project", link: "https://finsweet-p4-main.netlify.app/", img: "https://i.ibb.co/xsmwyjF/finsweet.jpg" },
  { title: "API Project", link: "https://api-projectnew.netlify.app/", img: "https://i.ibb.co/4ZQ9m8V/api.jpg" },
  { title: "Project 3 MainAll", link: "https://project-3-mainall.netlify.app/", img: "https://i.ibb.co/3F6qjR7/main3.jpg" },
  { title: "Project 2 Main", link: "https://project-2-main.netlify.app/", img: "https://i.ibb.co/mSbv4xn/main2.jpg" },
  { title: "ShopEase", link: "https://shopease123123.netlify.app/", img: "https://i.ibb.co/NTq1GRB/shopease.jpg" },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* === Animated Galaxy Background === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#030b3d] to-[#000000]">
        {/* Floating stars */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-[moveStars_60s_linear_infinite]" />
        {/* Glowing planets */}
        <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full blur-3xl animate-[spin_80s_linear_infinite] left-1/3 top-20 opacity-30"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl animate-[spin_100s_linear_infinite_reverse] right-1/4 bottom-24 opacity-20"></div>
        <div className="absolute w-40 h-40 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-2xl animate-[spin_120s_linear_infinite] left-10 bottom-32 opacity-25"></div>
      </div>

      {/* === Projects Section === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-300 mb-14 text-center drop-shadow-[0_0_10px_rgba(0,0,255,0.6)]">
          🌌 My Universe of Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,0,50,0.4)] hover:shadow-[0_0_40px_rgba(0,128,255,0.6)] transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600/80 text-white hover:bg-blue-700 font-medium px-5 py-2.5 rounded-full transition duration-300"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:opacity-90 transition duration-300"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      {/* === Keyframes === */}
      <style>{`
        @keyframes moveStars {
          from {background-position: 0 0;}
          to {background-position: 10000px 10000px;}
        }
      `}</style>
    </section>
  );
};

export default Projects;
