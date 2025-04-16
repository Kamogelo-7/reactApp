const Hero = () => {
  return (
    <div className="relative h-[50vh] flex flex-col justify-center items-center border-b-2 border-black">
      <section className="hero-bg"></section>
      {/* Lines behind the text */}
      <div className="lines">
        <div className="line"></div>

        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* Blurred background effect on the sides */}
      <div className="blurEffect"></div>
      {/* Text content */}
    </div>
  );
};

export default Hero;
