import {forwardRef}           from "react"
import { PortfolioProp, Ref }  from "../interfaces/Types";
import ios  from '../ios1.png';
import android from '../android1.png';

export const Portfolio = forwardRef<Ref, PortfolioProp>( (props, ref) => {
  const { title, content, subTitle, image, iosLink, androidLink, isLast = false, index, is_app} = props;

  return(
    <div
      ref={(index === 0)? ref: null}  
      className={`text-start p-2 p-lg-5 mb-5 port-reveal lone-bg rounded-3 position-absolute ${(index === 0) ? "d-block current-slide":"d-none"}`} id={`${index + 1}`}
       style={{
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
        right: 0,
        zIndex: 9
       }}
      >
      <div className="row m-0 p-0 mb-lg-3 align-items-center">
        <div className="col-12 col-lg-6 mb-0 mb-lg-3 port-image-module position-relative">
          <img src={image} className="rounded-3 img img-fluid d-block mx-auto me-lg-auto" style={{maxHeight: 300}} />
        </div>
        <div className="col-12 col-lg-6 ps-0 ps-lg-3">
          <h3 className="port-header mb-3 text-white">{title}</h3>
          {subTitle&&<h4 className="mh-2 sub-header">{subTitle}</h4>}
          <div className="d-font-size mb-4">{content}</div>
          <div className="d-flex flex-start flex-column flex-lg-row">
            <div className=" me-1 mb-3 mb-lg-0">
              <a href={androidLink} target="__blank" className={`p-2 px-3 ${!is_app? 'btn btn-lg btn-outline-secondary text-light fw-bold fs-6': ''}`} type="button">
                {!is_app&&<span>visit website </span>}
                {is_app&&<img src={android} className="shadow-sm rounded-3" style={{maxWidth: 140, opacity: .8}}/>}
                </a>
            </div>
            {is_app&&<div className="ms-1">
              <a href={iosLink} target="__blank" className="p-2 px-3" type="button"><img src={ios} className="shadow rounded-3 border border-white" style={{maxWidth: 140, opacity: .8}}/></a>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
} )