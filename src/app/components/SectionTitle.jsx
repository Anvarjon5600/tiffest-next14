import "../assets/styles/section-title.css";
const SectionTitle = ({ title, slot_contnent }) => {
  return (
    <div className="title__wrapp">
      <h2 className="">{title}</h2>
      <div>{slot_contnent}</div>
      <span className="section__title__line"></span>
    </div>
  );
};

export default SectionTitle;
