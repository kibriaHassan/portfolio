import React, { useState } from "react";
import PortfolioWebsite from "../picture/Portfolio Website.PNG";
import ToDoProject from "../picture/To-Do Project.PNG";
import TeamAProject4 from "../picture/Team A Project 4 Task 1.PNG";
import TeamAProject2 from "../picture/Team A Project 2.PNG";
import TeamAProject2Task1 from "../picture/Team A Project 2 Task 1.PNG";
import ShopEase from "../picture/ShopEase.PNG";
import Project3MainAll from "../picture/Project 3 MainAll.PNG";
import Project2Main from "../picture/Project 2 Main.PNG";
import LandingPage from "../picture/Landing Page.PNG";
import FinsweetProject from "../picture/Finsweet Project.PNG";
import EcommerceWebsite from "../picture/E-commerce Website.PNG";
import APIProject from "../picture/API Project.PNG";
import AdminPanel from "../picture/Admin Panel.PNG";

const projects = [
  { title: "Portfolio Website", link: "https://tringportfolio.netlify.app/", img: PortfolioWebsite },
  { title: "To-Do Project", link: "https://first-todoproject.netlify.app/", img: ToDoProject },
  { title: "Admin Panel", link: "https://admin-panel-p.netlify.app/", img: AdminPanel },
  { title: "Landing Page", link: "https://landing-page19.netlify.app/", img: LandingPage },
  { title: "E-commerce Website", link: "https://e-commerce-web13.netlify.app/", img: EcommerceWebsite },
  { title: "Shop Project", link: "https://new-shop1.netlify.app/", img: ShopEase },
  { title: "Team A Project 2", link: "https://team-a-peoject-2-task.netlify.app/", img: TeamAProject2 },
  { title: "Team A Project 2 Task 1", link: "https://team-a-project-2-task-1.netlify.app/", img: TeamAProject2Task1 },
  { title: "Team A Project 4 Task 1", link: "https://team-a-project-4-task1.netlify.app/", img: TeamAProject4 },
  { title: "Finsweet Project", link: "https://finsweet-p4-main.netlify.app/", img: FinsweetProject },
  { title: "API Project", link: "https://api-projectnew.netlify.app/", img: APIProject },
  { title: "Project 3 MainAll", link: "https://project-3-mainall.netlify.app/", img: Project3MainAll },
  { title: "Project 2 Main", link: "https://project-2-main.netlify.app/", img: Project2Main },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#030b3d] to-[#000000]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-[moveStars_60s_linear_infinite]" />
      </div>

      {/* Projects Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-300 mb-14 text-center drop-shadow-[0_0_10px_rgba(0,0,255,0.6)]">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,0,50,0.4)] hover:shadow-[0_0_40px_rgba(0,128,255,0.6)] transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">{project.title}</h3>
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
