import { mindsetText } from '../constants';

const Mindset = () => {
  return (
    <section id="mindset">
      <div className="mindset_inner">
        <h2 className="mindset_title">Mindset</h2>
        <div className="mindset_desc">
          {mindsetText.map((item, index) => (
            <div className="mindset_item" key={index}>
              <span>{index + 1}.</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mindset;
