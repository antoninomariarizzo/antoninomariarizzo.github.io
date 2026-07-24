import { education } from "../data/education.js";

function Education() {
  return (
    <section className="panel" id="education">
      <h2>Education</h2>
      <div className="degree-list">
        {education.map((entry) => (
          <div className="degree" key={entry.degree}>
            <h3>{entry.degree}</h3>
            <p className="degree-institution">{entry.institution}</p>
            {entry.subtitle && <p className="degree-subtitle">{entry.subtitle}</p>}
            <p className="degree-year">{entry.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
