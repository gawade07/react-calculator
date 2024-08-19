import style from "./Buttons.module.css";
const Buttons = ({onClickButton}) => {
  const buttonName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "9",
    "00",
    ".",
    "=",
  ];
  return (
    <div id={style.buttonsContainer}>
      {buttonName.map((btn) => (
        <button key={btn} className={style.btn} onClick={()=>onClickButton(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
