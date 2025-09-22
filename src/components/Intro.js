import aboutImg from '../assets/img/about.jpg';
import { introText } from '../constants';

const Intro = () => {
  const linesCount = 7;

  return (
    <section id="intro">
      <div className="intro_inner">
        <div className="intro_lines" aria-hidden="true">
          {[...Array(linesCount)].map((_, i) => (
            <span key={i} className="line"></span>
          ))}
        </div>
        <div className="intro_text">
          <div className="text">
            {introText.desc.map((desc, idx) => (
              <div key={idx}>{desc}</div>
            ))}
          </div>
          <div className="img">
            <img src={aboutImg} alt="About" />
          </div>
        </div>
        <div className="intro_lines bottom" aria-hidden="true">
          {[...Array(linesCount)].map((_, i) => (
            <span key={i} className="line"></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
