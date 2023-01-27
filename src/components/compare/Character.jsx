import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import imgPlaceHolder from "../../placeholder.png";

const Character = ({ Chosen, setChosen }) => {
  const onDelete = () => {
    setChosen({
      name: "",
      image: "../../placeholder.png",
      status: "Not Specified",
    });
  };

  let statusClassName = "";
  switch (Chosen?.status) {
    case "Alive":
      statusClassName = "alive";
      break;
    case "Dead":
      statusClassName = "dead";
      break;
    default:
      statusClassName = "";
      break;
  }

  return (
    <>
      {Chosen?.name === "" ? (
        <div className="Character">
          <h3>Not Selected</h3>
          <img src={imgPlaceHolder} alt="No Character Chosen" />
          <div>Species: Empty</div>
          <div>Status : Empty</div>
        </div>
      ) : (
        <div className={`Character`}>
          <h3>{Chosen?.name}</h3>
          <img src={Chosen?.image} alt="Character " />
          <div>{Chosen?.species}</div>
          <div className={`${statusClassName} StatusAndXBtn`}>
            Status:{`${Chosen?.status}`}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete()}
            />
          </div>
        </div>
      )}
    </>
  );
};

Character.propTypes = {
  // title: PropTypes.string,
  Chosen: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
  }),
};

// i wanted to have default props but had bugs with it and
// dont have the time fixing it

// https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
// this component is rendered twice due to strict mode keep in mind

export default Character;
