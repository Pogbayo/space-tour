const Destination = () => {
  return (
    <div className="destinationBox">
      <div className="desOne">
        <p className="pickText">
          <small>01</small>Pick your destination
        </p>
        <img src="" alt="" className="planetImg" />
      </div>
      <div className="desTwo">
        <div className="buttonDiv">
          <p className="bt">
            <button>Moon</button>
          </p>
          <p>
            <button>Mars</button>
          </p>
          <p>
            <button>Europe</button>
          </p>
          <p>
            <button>Titan</button>
          </p>
        </div>
        <header className="Moon">MOON</header>
        <article className="planetDetails">
          See our planet as you’ve never seen it before. <br /> A perfect
          relaxing trip away to help regain perspective <br />
          and come back refreshed. While you’re there, take in <br />
          some history by visiting the Luna 2 and Apollo 11 landing sites.
        </article>
        <div className="planetHrLine"></div>
        <div className="avg">
          <p className="avgText">AVG.DISTANCE</p>
          <p>EST.TRAVEL TIME</p>
        </div>
        <section className="cal">
          <p className="calText">384,400 KM</p>
          <p className="the">3 DAYS</p>
        </section>
      </div>
    </div>
  );
};

export default Destination;
