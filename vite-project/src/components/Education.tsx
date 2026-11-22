import { FaAward } from 'react-icons/fa';
import { education } from '../data/resume';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="entry">
        <p className="entry__date">{education.period}</p>

        <div>
          <h3 className="entry__title">{education.degree}</h3>
          <p className="entry__subtitle">
            {education.school} · {education.location}
          </p>
          <p className="honor">
            <FaAward aria-hidden="true" /> {education.honor}
          </p>
        </div>
      </div>
    </Section>
  );
}
