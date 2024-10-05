const Crew = () => {
  return (
    <div>
      <div className="crewCon">
        <div className="firstCrewCon">
          <p className="dev">01 Meet your crew</p>
          <article className="crewDetails">
            <h3 className="crewRole">{}</h3>
            <h1 className="name">{}</h1>
            <p className="bio">{}</p>
          </article>
          <div className="dotButtons">
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
          </div>
        </div>
        <div className="secondCrewCon">
          <img src={""} alt="" className="crewImg" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
