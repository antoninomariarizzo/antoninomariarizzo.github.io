import { publications } from "../data/publications.js";
import ItemCard from "./ItemCard.jsx";

function groupByYear(items) {
  const years = [...new Set(items.map((item) => item.year))];
  return years.map((year) => ({
    year,
    items: items.filter((item) => item.year === year),
  }));
}

function Publications() {
  const groups = groupByYear(publications);

  return (
    <section className="panel" id="publications">
      <h2>Publications</h2>
      {groups.map((group) => (
        <div key={group.year} className="year-group">
          <h3 className="group-year">{group.year}</h3>
          {group.items.map((publication) => (
            <ItemCard
              key={publication.title}
              image={publication.image}
              imageHref={publication.links[0]?.url}
              title={publication.title}
              titleHref={publication.links[0]?.url}
              meta={publication.venue}
              description={publication.description}
              links={publication.links}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Publications;
