import React           from "react"
import { ContentProp }  from "../interfaces/Types";
import ScrollReveal from "scrollreveal";
import wa from '../wa1.png';
import x from '../x1.png';
import l from '../ln1.png';
import g from '../git1.png';

export const Profile = ({ title, pdf, subTitle}: ContentProp): React.JSX.Element => {

  React.useEffect(() => {
    let sr = ScrollReveal();
    if (typeof window !== 'undefined') {
      sr.reveal(`#about-me`, {
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
    <div className="text-start p-2 p-lg-5 mb-5 lone-bg border-secondary rounded-4" id="about-me">
      <h3 className="main-header mb-4 text-white">{title}</h3>
      {subTitle&&<h4 className="mh-2 sub-header">{subTitle}</h4>}
      <div className="d-font-size mb-4" style={{height: 600+'px', minWidth: "100%" }}>
      {/*<iframe className="rounded" src={pdf} width="100%" height="600px" />*/}
      <embed 
        src={pdf} 
        className="rounded-3 bg-white text-dark"
        type="application/pdf" 
        width="100%" 
        height="600px" 
        />
      </div>
      <div className="d-flex flex-start flex-column flex-lg-row">
        <div className="mb-3 mb-lg-0 me-2">
          <a href="https://www.linkedin.com/in/nicholas-mberev-bb278062/" target="__blank" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold p-2 px-3" type="button">&nbsp;
          <img src={l} className="rounded-circle" style={{maxWidth: 25, opacity: .8}}/> LinkedIn
          </a>
        </div>
        <div className="mb-3 mb-lg-0 me-2">
          <a href="https://github.com/proffnick" target="__blank" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold p-2 px-3" type="button">&nbsp;
          <img src={g} className="rounded-circle" style={{maxWidth: 25, opacity: .8}}/> Github
          </a>
        </div>
        <div className=" me-2 mb-3 mb-lg-0">
          <a href="https://wa.me/2349034313685&text=Hi" target="__blank" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold p-2 px-3" type="button">&nbsp;
          <img src={wa} style={{maxWidth: 25, opacity: .8}}/> Whatsapp
          </a>
        </div>
        <div className=" me-2">
          <a href="https://twitter.com/nick_mberev" target="__blank" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold p-2 px-3" type="button">&nbsp;
          <img src={x} className="rounded-circle" style={{maxWidth: 25, opacity: .8}}/> Twitter (x)
          </a>
        </div>
        
      </div>
    </div>
  )
}