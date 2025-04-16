import Stats from "./Stats";
const Section = () => {
  return (
    <section className="bg-black text-white mt-4 py-5  ">
      <main className=" grid-cols-1 md:grid-cols-2 gap-10 grid">
        <Stats heading={"experience"} description={`+120 Hours`} />
        <Stats heading={"Projects"} description={`+20 completed`} />
        <Stats heading={"Work"} description={`+120 Hours`} />
        <Stats heading={"experience"} description={`+120 Hours`} />
      </main>
    </section>
  );
};

export default Section;
