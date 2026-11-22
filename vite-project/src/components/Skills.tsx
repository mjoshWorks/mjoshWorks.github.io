import { skills } from '../data/resume';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((group) => (
          <div key={group.title} className="skills__group">
            <h3>{group.title}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
