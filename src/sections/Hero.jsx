function Hero() {
  return (
    <section
      id="hero"
      className="container min-h-svh flex items-center justify-center text-center leading-[150%]"
    >
      <div className="relative mb-60">
        <img
          src="/images/balloon-1.png"
          alt="Air balloon"
          className="absolute -bottom-20 -right-10 w-32 max-lg:w-24"
        />
        <p className="text-xl font-bold text-slate-100">Explore the World</p>
        <h1 className="text-blue-950 font-extrabold text-8xl max-lg:text-7xl mt-4 mb-12 max-lg:mb-10 font-sans">
          Beneath the Ocean
        </h1>
        <p className="text-base font-normal text-slate-200 max-w-[62ch] ms-auto me-auto">
          Explore the depths of our oceans, where 95% remains uncharted.
          Discover bioluminescent wonders and majestic giants as we unveil the
          secrets of these hidden realms. Join us in uncovering the
          extraordinary diversity thriving in the ocean's depths.
        </p>
      </div>
    </section>
  );
}

export default Hero;
