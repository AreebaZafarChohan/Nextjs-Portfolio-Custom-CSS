import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="about-container">
        <h2 className="about-title">
          About{" "}
          <span className="highlight-text">Me</span>
        </h2>

        <div className="about-grid">
          <Image
            src="/images/about.jpg"
            alt="About Section Image"
            width={500}
            height={500}
            className="about-image"
          />

          <div className="about-text">
            <div className="info-box">
              <p className="text-content">
                I am Areeba Zafar, a passionate front-end web developer with a
                strong foundation in TypeScript, JavaScript, HTML, CSS, and Node.js.
                <br />{" "}
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
                I completed my matriculation at Little Citizen Secondary School,
                achieving an A grade with a 71% score from 2018 to 2020. <br /> Later, I
                pursued intermediate in commerce at Government College for Women,
                Korangi 4, Karachi, where I graduated with an A+ grade and an 80%
                score from 2020 to 2022.
                <br />
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
                I thrive on new challenges and love working on innovative projects.
                My hobbies include exploring new technologies, playing logical games, and teaching others. I find great joy in motivating people and helping them learn new skills with a strong dedication to learning and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;