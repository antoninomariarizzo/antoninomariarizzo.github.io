import { projects } from "../data/projects.js";
import ItemCard from "./ItemCard.jsx";

function groupByYear(items) {
  const years = [...new Set(items.map((item) => item.year))];
  return years.map((year) => ({
    year,
    items: items.filter((item) => item.year === year),
  }));
}

function Projects() {
  const groups = groupByYear(projects);

  return (
    <section className="panel" id="projects">
      <h2>Projects</h2>
      {groups.map((group) => (
        <div key={group.year} className="year-group">
          <h3 className="group-year">{group.year}</h3>
          {group.items.map((project) => (
            <ItemCard
              key={project.title}
              image={project.image}
              imageHref={project.links[0]?.url}
              title={project.title}
              titleHref={project.links[0]?.url}
              tags={project.tags}
              description={project.description}
              links={project.links}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Projects;
