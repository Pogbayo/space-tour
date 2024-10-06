import { useEffect, useState } from "react";
import { TechnologyData } from "../Types/TechnologyData";
interface Props {
  technology: TechnologyData[];
}
const Technology = ({ technology }: Props) => {
  const [chosenOne, setChosenOne] = useState<TechnologyData | null>(
    technology[0] || null
  );
  const technology1 = technology[0];
  const technology2 = technology[1];
  const technology3 = technology[2];
  const handleChangeFunc = (name: string) => {
    const foundDestination = technology.find((d) => d.name === name);
    setChosenOne(foundDestination || null);
  };
  useEffect(() => {
    setChosenOne(technology[0]);
  }, technology);
  return (
    <div className="techBox">
      <div className="firstTechBox">
        <div className="space">
          <p>
            <b>03</b> Space launch 101
          </p>
        </div>
        <div className="divider">
          <div className="vertical">
            <div
              onClick={() => handleChangeFunc(technology1.name)}
              className="rounded"
            >
              1
            </div>
            <div
              onClick={() => handleChangeFunc(technology2.name)}
              className="rounded"
            >
              2
            </div>
            <div
              onClick={() => handleChangeFunc(technology3.name)}
              className="rounded"
            >
              3
            </div>
          </div>
          <div className="ver2">
            <p>THE TERMINOLOGY...</p>
            <h1 className="techLargest">{chosenOne?.name}</h1>
            <div className="techDetails">{chosenOne?.description}</div>
          </div>
        </div>
      </div>
      <div className="secondTechBox">
        <img src={chosenOne?.images.portrait} alt="" className="techImg" />
      </div>
    </div>
  );
};

export default Technology;
