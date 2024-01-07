import React,{useRef} from "react";
import { Leading }    from "../components/Leading";
import { Profile }    from "../components/Profile";
import content        from '../data/content.json';
import pdf            from '../Mberev_Nicholas_2024_resume.pdf';
import { Portfolio }  from "../components/Portfolio";
import { Contacts }   from "../components/Contacts";
// portfolios
import ss             from '../projects/ss.png';
import mt             from '../projects/mt.png';
import ps             from '../projects/psa.jpg';
import ScrollReveal   from "scrollreveal";

// animate

const MainContents = () => {
  const [totalSlides, setTotalSlides] = React.useState(content.projects.length);
  const SR            = ScrollReveal();

  const reveal = (element:any, animation:string, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.getElementById(element);

    node?.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event:any) {
      event.stopPropagation();
      node?.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node?.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  const moveLeft = () => {
    const current       = document.getElementsByClassName('current-slide')?.[0];
    const currentId:number = (typeof current?.id === 'string') ? parseInt(current?.id): 1;
    const currentClassList  = current?.classList;
    // we are not at the end, then move to the next
    const prevChild = document.getElementById(`${currentId - 1}`);


    if(currentId > 1){
      // remove class from current
      reveal(`${currentId - 1 }`, `zoomIn`);

      currentClassList?.remove("d-block");
      currentClassList?.remove("current-slide");
      currentClassList?.add("d-none");
      // add class to next
      prevChild?.classList.remove("d-none");
      prevChild?.classList.add("d-block");
      prevChild?.classList.add("current-slide");
      // update reference
    }
  };
  const moveRight = () => {
    const current       = document.getElementsByClassName('current-slide')?.[0];
    const currentId:number = (typeof current?.id === 'string') ? parseInt(current?.id): 1;
    const currentClassList  = current?.classList;


    console.log(current, currentId, currentClassList);
    // we are not at the end, then move to the next
    const nextChild = document.getElementById(`${currentId+1}`);


    if(currentId < totalSlides){

      // reveal
      reveal(`${currentId+1}`, `zoomIn`);

      // remove class from current
      currentClassList?.remove("d-block");
      currentClassList?.remove("current-slide");
      currentClassList?.add("d-none");
      // add class to next
      nextChild?.classList.remove("d-none");
      nextChild?.classList.add("d-block");
      nextChild?.classList.add("current-slide");
      // update reference
      // reveal the nest chil
      SR.destroy();
    }

    
  };


  React.useEffect(() => {
    let sr = ScrollReveal();
    if (typeof window !== 'undefined') {
      sr.reveal(`#my-projects`, {
        delay: 500,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true,
      });
    }

    return () => sr.destroy();

  }, []);

  const returnImage = (id:(string | undefined)) => {
    switch(id){
      case 'ss':{ return ss;}
      case 'ps':{ return ps;}
      case 'mt':{ return mt;}
    }
  }
  return(
    <section className="col-12 col-lg-9 pt-3 h-100 section-module main-content-container">
        <div className="col-lg-9">
          <Leading title={content.leading.title} content={content.leading.content} subTitle={content.leading.sub_title} />
          <Profile content="" title={"Read About Me"} pdf={pdf} />
          <div className="p-2 p-lg-5 mb-1">
            <h3 className="main-header text-white">Recent Projects</h3>
          </div>
          <div 
              className="mb-5 rounded-4 py-5 d-flex align-items-center" 
              id="my-projects" 
              style={{ 
                position: "relative",
                height: "auto",
                overflow: "hidden" 
              }}
            >
            <div style={{
              zIndex: 99,
              width: 60,
              left: 0,
              top: 0
              }} className="position-absolute left-nav">
                <div 
                  onClick={moveLeft}
                  style={{
                  width: "auto",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 0
                  }} className="position-absolute btn btn-outline-light border-0 text-start">
                    <i style={{fontSize: "2.5rem"}} className="bi bi-chevron-compact-left text-white-30"/>
                </div>
            </div>

            {content.projects.map((project, index) => {
              const isLast = (index === (content.projects.length -  1));
              return <Portfolio
                index={index} 
                key={index} 
                image={project.is_app? returnImage(project.id): project.id} 
                title={project.title} 
                content={project.content}
                subTitle={project.subTitle}
                iosLink={project.iosLink}
                androidLink={project.androidLink}
                isLast={isLast}
                is_app={project.is_app}
                />
            })}

            <div style={{
              zIndex: 99,
              width: 60,
              right: 0,
              top: 0
              }} className="position-absolute right-nav">
                <div
                  onClick={moveRight} 
                  style={{
                  width: "auto",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: 0
                  }} className="position-absolute btn btn-outline-light border-0 text-end">
                    <i style={{fontSize: "2.5rem"}} className="bi bi-chevron-compact-right text-white-30"/>
                </div>
            </div>
          </div>
          <Contacts title={content.contact.title} content={content.contact.content} subTitle={content.contact.subTitle} />
        </div>

    </section>
  )
}

export default MainContents;