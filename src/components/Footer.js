import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer_inner">
        <div className="footer_info">
          <em>Built with React</em>
        </div>
        <div className="footer_link">
          <ul>
            {socialLinks.map((social, key) => {
              const Icon = social.icon;
              return (
                <li key={key}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon color="black" size={24} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
