import { FaArrowRight } from 'react-icons/fa';
import { contact } from '../data/resume';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <h3 className="contact__heading">Let&apos;s work together.</h3>
      <p className="contact__text">
        I&apos;m open to back-office, administrative, and customer support opportunities. Feel free to
        send me an email, and I&apos;ll get back to you as soon as I can.
      </p>

      <a className="button button--dark" href={`mailto:${contact.email}`}>
        Say hello <FaArrowRight aria-hidden="true" />
      </a>

      <p className="contact__phone">
        Or call / text: <a href={contact.phoneLink}>{contact.phone}</a>
      </p>
    </Section>
  );
}
