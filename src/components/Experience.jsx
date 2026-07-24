import { experience } from "../data/experience.js";
import { formatPeriod, formatTotalDuration } from "../utils/duration.js";

function Experience() {
  return (
    <section className="panel" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((entry) => (
          <div className="timeline-entry" key={entry.company}>
            <h3 className="timeline-company">{entry.company}</h3>
            <p className="timeline-meta">
              {entry.location}
              {entry.employmentType
                ? ` · ${entry.employmentType} · ${formatTotalDuration(entry.roles)}`
                : ""}
            </p>
            {entry.roles.map((role) => (
              <div className="timeline-role" key={role.title + role.start}>
                <h4>{role.title}</h4>
                <p className="timeline-period">
                  {formatPeriod(role.start, role.end)}
                  {role.subtitle ? ` · ${role.subtitle}` : ""}
                </p>
                <p>{role.description}</p>
                {role.link && (
                  <a
                    href={role.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-link"
                  >
                    {role.link.label} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
