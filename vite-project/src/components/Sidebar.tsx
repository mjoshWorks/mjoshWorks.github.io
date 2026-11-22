import { FaDownload, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { contact, profile, sections, socials } from '../data/resume';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = sections.map((section) => section.id);

export default function Sidebar() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="sidebar">
      <div>
        <img className="sidebar__photo" src={profile.photo} alt={profile.name} width={112} height={112} />
        <h1 className="sidebar__name">{profile.name}</h1>
        <p className="sidebar__headline">{profile.headline}</p>
        <p className="sidebar__tagline">{profile.tagline}</p>

        <nav className="sidebar__nav" aria-label="Sections">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={active === section.id ? 'is-active' : ''}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="button" href={profile.cv} download>
          <FaDownload aria-hidden="true" /> Download CV
        </a>
      </div>

      <div className="sidebar__footer">
        <ul className="sidebar__contact">
          <li>
            <FaMapMarkerAlt aria-hidden="true" /> {profile.location}
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <FaEnvelope aria-hidden="true" /> {contact.email}
            </a>
          </li>
          <li>
            <a href={contact.phoneLink}>
              <FaPhoneAlt aria-hidden="true" /> {contact.phone}
            </a>
          </li>
        </ul>

        <ul className="sidebar__socials">
          <li>
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
