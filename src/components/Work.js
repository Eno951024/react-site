import { workText } from '../constants';

const Work = () => {
  return (
    <section id="work">
      <div className="work_inner">
        <h2 className="work_title">Work</h2>
        <div className="work_wrap">
          {workText.map((work, index) => (
            <article className="work_item" key={index}>
              <span className="num">{index + 1}.</span>
              <div className="title">
                <div>{work.title}</div>
              </div>
              <div className="btn">
                {work.code && (
                  <a href={work.code} target="_blank" rel="noopener noreferrer">
                    code
                  </a>
                )}
                {work.view && (
                  <a href={work.view} target="_blank" rel="noopener noreferrer">
                    view
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
