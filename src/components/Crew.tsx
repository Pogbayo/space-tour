import { useEffect, useState } from "react";
import { CrewMember } from "../Types/CrewMember";
interface Props {
  crew: CrewMember[];
}
const Crew = ({ crew }: Props) => {
  const [chosenOne, setChosenOne] = useState<CrewMember | null>(
    crew[0] || null
  );
  const crew1 = crew[0];
  const crew2 = crew[1];
  const crew3 = crew[2];
  const crew4 = crew[3];
  const handleChangeFunc = (name: string) => {
    const foundDestination = crew.find((d) => d.name === name);
    setChosenOne(foundDestination || null);
  };
  useEffect(() => {
    setChosenOne(crew[0]);
  }, [crew]);
  return (
    <div>
      <div className="crewCon">
        <div className="firstCrewCon">
          <p className="dev">01 Meet your crew</p>
          <article className="crewDetails">
            <h3 className="crewRole">{chosenOne?.role}</h3>
            <h1 className="name">{chosenOne?.name}</h1>
            <p className="bio">{chosenOne?.bio}</p>
          </article>
          <div className="dotButtons">
            <button
              onClick={() => handleChangeFunc(crew1.name)}
              className="dot"
            ></button>
            <button
              onClick={() => handleChangeFunc(crew2.name)}
              className="dot"
            ></button>
            <button
              onClick={() => handleChangeFunc(crew3.name)}
              className="dot"
            ></button>
            <button
              onClick={() => handleChangeFunc(crew4.name)}
              className="dot"
            ></button>
          </div>
        </div>
        <div className="secondCrewCon">
          <img src={chosenOne?.images.png} alt="" className="crewImg" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
