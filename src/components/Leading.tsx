import React           from "react"
import { ContentProp }  from "../interfaces/Types";
import wa from '../wa1.png';
import x from '../x1.png';
import c from '../c1.png';
import ScrollReveal from "scrollreveal";

export const Leading = ({ title, content, subTitle}: ContentProp): React.JSX.Element => {

  React.useEffect(() => {
    let sr = ScrollReveal();
    if (typeof window !== 'undefined') {
      sr.reveal(`#welcome`, {
        delay: 500,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true,
      });
    }

    return () => sr.destroy();
  }, []);

  return(
    <div  className="text-start p-2 p-lg-5 mb-5" id="welcome">
      <h3 className="main-header mb-4 text-white">{title}</h3>
      {subTitle&&<h4 className="mh-2 sub-header">{subTitle}</h4>}
      <div className="d-font-size mb-4">{content}</div>
      <div className="d-flex flex-start flex-column flex-lg-row">
        <div className=" me-2 mb-3 mb-lg-0">
          <a href="https://wa.me/2349034313685&text=Hi" target="__blank" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold p-2 px-3" type="button">&nbsp;
          <img src={wa} style={{maxWidth: 25, opacity: .8}}/> Let's talk
          </a>
        </div>
        <div className=" me-2 mb-3 mb-lg-0">
          <a href="https://twitter.com/messages/compose?recipient_id=1617808795408769025&text=Hi" target="__blank" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold p-2 px-3" type="button">&nbsp;
          <img src={x} className="rounded-circle" style={{maxWidth: 25, opacity: .8}}/> DM me on x 
          </a>
        </div>
        <div className="">
          <a href="tel:+2349034313685" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold p-2 px-3" type="button">&nbsp;
          <img src={c} className="rounded-circle" style={{maxWidth: 25, opacity: .8}}/> Call me 
          </a>
        </div>
      </div>

    </div>
  )
}