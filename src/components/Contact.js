import { contactText} from '../constants';

const Contact = () => { 
    const renderLines = () => (
        <>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </>
    );
    return (
        <section id="contact">
            <div className="contact_inner">
                <h2 className="contact_title">Contact</h2>
                <div className="contact_lines top" aria-hidden="true">
                    {renderLines()}
                </div>
                <div className="contact_text">
                    <div className="text">
                        {contactText.map((item, key) => (
                            <div key={key}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact_lines" aria-hidden="true">
                    {renderLines()}
                </div>
            </div>
        </section>
    );
};

export default Contact;