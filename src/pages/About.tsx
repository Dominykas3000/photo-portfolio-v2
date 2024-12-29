const About = () => {
  return (
    <section className="pb-4 flex md:flex-row gap-8 flex-col">
      <div className="m-auto max-w-52 md:max-w-lg animate-tada">
        <img
          src={
            import.meta.env.VITE_IS_PRODUCTION == "true"
              ? "img_4632.jpeg"
              : "/public/IMG_4632.jpeg"
          }
          alt="benita"
        />
      </div>

      <article className="mx-5 md:mx-0 flex flex-col justify-center">
        <div className="text-sm md:text-base flex justify-center m-auto flex-col">
          <p className=" text-left max-w-lg ">
            I am Lithuanian visual creator part time based in Berlin, Germany.
            Started my path as an analog photographer being 15 years old. This
            passion started from capturing architecture and digging deeper into
            my courtier’s history, identity.
          </p>

          <p className="mt-3 text-left max-w-lg">
            The breaking point of my aesthetic evolution was moving to Berlin
            for studies of Creative management.
          </p>

          <p className="mt-3 text-left max-w-lg">
            At the moment, I’m deeply inspired by fashion and music trends, as
            well as the people behind these artistic disciplines. I’m exploring
            the trigger points within myself and my environment, trying to
            understand them through my enduring passion for the subtleties of
            analog photography.
          </p>

          <p className="mt-3 text-left max-w-lg">PROFESSIONAL EXPERIENCE</p>
          <ul className="mt-3 ml-4 text-left max-w-lg  list-disc">
            <li>Assistant of Lithuanian photographer Elena Krukonytė</li>
            <li>
              Assisting video creator Till Milius for a “
              <a
                className="underline"
                target="_blank"
                href="https://www.youtube.com/watch?v=BT7vGZIM4e4"
              >
                Animals
              </a>
              ” music video
            </li>
            <li>
              <a
                className="underline"
                target="_blank"
                href="https://www.facebook.com/events/655026489453517/?active_tab=discussion"
              >
                Art Cue Valakampiai 2023 (poster photographer)
              </a>
            </li>
            <li>
              <a
                className="underline"
                target="_blank"
                href="https://www.facebook.com/events/346465574938740?active_tab=about"
              >
                Art Cue x Gallery 1986 (poster creative director)
              </a>
            </li>

            <li>
              BLŪMĒ band video “
              <a
                className="underline"
                target="_blank"
                href="https://www.youtube.com/watch?v=9n3coVTxPzo"
              >
                Thin ice
              </a>
              ” stylist
            </li>
            <li>
              <a
                className="underline"
                target="_blank"
                href="https://www.facebook.com/events/1600314504095974"
              >
                Thrift N Load
              </a>{" "}
              promo photoshoot stylist and creative director
            </li>
          </ul>
          <p className="mt-3 text-left max-w-lg">EXHIBITIONS</p>
          <ul className="mt-3 ml-4 text-left max-w-lg  list-disc">
            <li>
              2018-10 Solo exhibition “Periodai” in Lithuanian Artists’
              Association gallery
            </li>
            <li>
              2023-07 “Coordinates” collective exhibition in Berlin, Germany.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default About;
