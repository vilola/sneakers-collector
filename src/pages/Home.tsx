import { Button } from "../components";

const Home = () => {
  return (
    <main id="home">
      <section className="hero">
        <img className="hero__img" src="/assets/home.svg" alt="" />
      </section>
      <section className="content text-center md-text-left md-text-center">
        <h1>Welcome to a sneaker collector</h1>
        <p className="mb-69 md-mb-56">
          This tool not only lets you showcase your prized sneaker collection
          but also provides you with the tools to curate, organize, and
          catalogue your sneakers like never before.{" "}
        </p>
        <Button className="m-auto md-m-0" type="link" to="/collection">
          Start your new collection
        </Button>
      </section>
    </main>
  );
};

export default Home;
