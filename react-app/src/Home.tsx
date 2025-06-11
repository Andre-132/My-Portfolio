type HomeProps = {
  name: string;
  title: string;
  bio: string;
};

function Home({ name, title, bio }: HomeProps) {
  return (
    <section className="home">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{bio}</p>
    </section>
  );
}

export default Home;
