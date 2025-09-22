import { useEffect, useRef } from 'react';
import { otrText } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OfftheRecord = () => {
    const sectionRef = useRef(null);
    const matchMediaContext = useRef(null);

    useEffect(() => {

        matchMediaContext.current = ScrollTrigger.matchMedia({
            "(min-width: 801px)": function() {
                const horSection = gsap.utils.toArray(sectionRef.current.querySelectorAll(".otr_item"));
                const scrollAmountPerItem = 300;
                const totalScroll = horSection.length * scrollAmountPerItem;

                gsap.to(horSection, {
                    xPercent: -120 * (horSection.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 56px",
                        end: `+=${totalScroll}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                    },
                });
            },
        });

        const handleResize = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (matchMediaContext.current) {
                matchMediaContext.current.revert();
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="otr" ref={sectionRef}>
            <div className="otr_inner">
                <h2 className="otr_title">
                    Off the Record
                </h2>
                <div className="otr_wrap">
                    {otrText.map((otr, key) => (
                        <article className="otr_item" key={key}>
                            <span className="num">{key + 1}.</span>
                            <div className="img">
                                <img src={otr.img} alt={`OtR ${key + 1}`} />
                            </div>
                            <h3 className="title">{ otr.title }</h3>
                            <p className="desc">{ otr.desc }</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfftheRecord;