import { useEffect, useState } from "react";
import { DestinationData } from "../Types/DestinationData";
interface Props {
  destinations: DestinationData[];
}

const Destination = ({ destinations }: Props) => {
  const itemName1 = destinations[0];
  const itemName2 = destinations[1];
  const itemName3 = destinations[2];
  const itemName4 = destinations[3];

  const [chosenOne, setChosenOne] = useState<DestinationData | null>(
    destinations[0] || null
  );
  const handleChangeFunc = (name: string) => {
    const foundDestination = destinations.find((d) => d.name === name);
    setChosenOne(foundDestination || null);
  };
  useEffect(() => {
    setChosenOne(destinations[0]);
  }, [destinations]);
  return (
    <div className="destinationBox">
      <div className="desOne">
        <p className="pickText">
          <small>01</small>Pick your destination
        </p>
        <img src={chosenOne?.images.png} alt="" className="planetImg" />
      </div>
      <div className="desTwo">
        <div className="buttonDiv">
          <p className="bt">
            <button onClick={() => handleChangeFunc(itemName1.name)}>
              Moon
            </button>
          </p>
          <p>
            <button onClick={() => handleChangeFunc(itemName2.name)}>
              Mars
            </button>
          </p>
          <p>
            <button onClick={() => handleChangeFunc(itemName3.name)}>
              Europe
            </button>
          </p>
          <p>
            <button onClick={() => handleChangeFunc(itemName4.name)}>
              Titan
            </button>
          </p>
        </div>
        <header className="Moon">{chosenOne?.name}</header>
        <article className="planetDetails">{chosenOne?.description}</article>
        <div className="planetHrLine"></div>
        <div className="avg">
          <p className="avgText">AVG.DISTANCE ASD</p>
          <p>EST.TRAVEL TIME</p>
        </div>
        <section className="cal">
          <p className="calText">{chosenOne?.distance}</p>
          <p className="the">{chosenOne?.travel}</p>
        </section>
      </div>
    </div>
  );
};

export default Destination;
