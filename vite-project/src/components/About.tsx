import { about } from '../data/resume';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="about__summary">{about.summary}</p>

      <ul className="about__highlights">
        {about.highlights.map((item) => (
          <li key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
