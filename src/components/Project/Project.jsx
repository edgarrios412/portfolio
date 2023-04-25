import style from "./Project.module.css"
import {AnimatePresence, m} from "framer-motion"

const Project = ({title,color,deploy, github, id, fn, desc}) => {
  return(
    <AnimatePresence>
      <m.div layoutId={id} className={style.container} style={{backgroundColor:`${color}`}}>
            <m.h2 className={style.title}>{title}</m.h2>
            <m.div className={style.buttons}>
              {deploy && <m.a href={deploy} rel="noopener noreferrer" target="_blank"><m.img alt="img" className={style.icon} src="./web.png" /></m.a>}
              {github && <m.a href={github} rel="noopener noreferrer" target="_blank"><m.img alt="img" className={style.icon} src="./github.png" /></m.a>}
              {desc && <m.img alt="img" onClick={() => fn(id)} className={style.icon} src="./informacion.png" />}
            </m.div>
      </m.div>
      </AnimatePresence>
  )
};

export default Project