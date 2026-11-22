import { experience } from '../data/resume';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="entries">
        {experience.map((job) => (
          <li key={job.company} className="entry">
            <p className="entry__date">
              {job.period}
              {job.current && <span className="badge">Current</span>}
            </p>

            <div>
              <h3 className="entry__title">{job.role}</h3>
              <p className="entry__subtitle">
                {job.company} · {job.location}
              </p>
              <ul className="entry__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
