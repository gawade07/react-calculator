import style from "./Dispaly.module.css"
const Display = ({calValue}) => {
  return <input id={style.display} type="text" value={calValue}  readOnly/>
};

export default Display;
