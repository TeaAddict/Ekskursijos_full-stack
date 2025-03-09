const Hero = () => {
  return (
    <div className={`h-[calc(100vh-65px)] relative`}>
      <div className="h-full w-[50vw] bg-my-orange/90 absolute"></div>
      <div className="h-full w-full bg-linear-to-t from-white/10 absolute"></div>
      <img
        src="src/assets/heroImg.jpg"
        alt="Hero img"
        className="w-full h-full object-cover"
      />

      <div className="absolute w-[35vw] top-1/2 -translate-y-1/2 left-[7vw] flex flex-col gap-10 text-white">
        <h1 className="text-7xl">Discover Unforgettable Adventures</h1>
        <p className="text-lg">
          Explore breathtaking destinations and create lifelong memories with
          our expertly curated excursions. Whether you seek thrilling outdoor
          adventures, cultural experiences, or relaxing getaways, we have the
          perfect trip for you. Start your journey today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
