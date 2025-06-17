type HomeProps = {
  name: string;
  title: string;
  bio: string;
};

function Home({ name, title, bio }: HomeProps) {
  return (
    <section
      className="flex h-screen"
      style={{ backgroundColor: "oklch(26.9% 0 0)" }}
    >
      <div id="leftCard" className="w-1/2 bg-neutral-200 rounded-md m-6 p-2">
        Left Side Content
      </div>

      <div className="w-1/2 flex flex-col items-end p-8 text-right font-serif">
        <div className="bg-grid-pattern bg-neutral-200 rounded-md m-6 p-2">
          <h1 className="text-4xl font-bold">{name}</h1>
          <h2 className="text-2xl text-gray-600">{title}</h2>
          <p className="text-base mt-4 max-w-md">{bio}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
