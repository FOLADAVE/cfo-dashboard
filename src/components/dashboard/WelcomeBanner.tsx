const WelcomeBanner = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" :
    hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div>
      <h1 className="text-white text-2xl md:text-3xl font-bold">
        {greeting}, Folarin Obajenihi 👋
      </h1>
      <p className="text-[#8a9bb0] text-sm mt-1.5">
        Here's what's happening with your business today.
      </p>
    </div>
  );
};

export default WelcomeBanner;