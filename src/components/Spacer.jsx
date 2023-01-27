const Spacer = ({ space }) => {
  return (
    <>
      <span style={{ height: `${space}%` }}> ㅤ</span>
    </>
  );
};

Spacer.defaultProps = {
  space: "10%",
};

export default Spacer;
