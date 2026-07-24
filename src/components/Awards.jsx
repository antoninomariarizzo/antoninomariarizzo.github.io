import { awards } from "../data/awards.js";

function Awards() {
  return (
    <section className="panel" id="awards">
      <h2>Awards</h2>
      <ul className="awards-list">
        {awards.map((award) => (
          <li key={award.description}>
            <strong>{award.year}</strong>: {award.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;
