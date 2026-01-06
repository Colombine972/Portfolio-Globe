import "../styles/AboutMe.css"
import { Link } from "react-router";

export default function AboutMe() {
  return (
    <main className="cindy-page">
      {/* Décor subtil */}
      <div className="cindy-bgMap" aria-hidden="true" />
      <div className="cindy-grain" aria-hidden="true" />

      {/* Header */}
      <header className="cindy-header">
        <h1 className="cindy-title">
          À propos de Cindy
        </h1>
        <p className="cindy-subtitle">
          Développeuse web – un parcours guidé par la curiosité
        </p>
      </header>

      {/* Carte */}
      <section className="cindy-card" aria-label="À propos de Cindy">
        <div className="cindy-cardInner">
          {/* Colonne gauche : photo */}
          <aside className="cindy-left">
            <div className="cindy-photoFrame">
              {/* Remplace par ton image (idéalement .webp / .png) */}
              <img
                className="cindy-photo"
                src="/cindy.png"
                alt="Portrait de Cindy"
              />
            </div>
          </aside>

          {/* Colonne droite : texte */}
          <article className="cindy-right">
            <div className="cindy-block">
              <h2 className="cindy-h2">Avant</h2>
              <p className="cindy-p">
                J’ai débuté ma carrière dans un univers{" "}
                <strong>administratif</strong>, mais la{" "}
                <span className="cindy-accent">spontanéité</span> et la{" "}
                <span className="cindy-accent">curiosité</span> m’ont poussée à
                explorer de nouveaux horizons.
              </p>
            </div>

            <div className="cindy-block">
              <h2 className="cindy-h2">Aujourd’hui</h2>
              <p className="cindy-p">
                Après une formation passionnante à la{" "}
                <strong>Wild Code School</strong>, j’ai plongé dans le
                développement web. J’aime créer des interfaces élégantes, avec
                une attention particulière à l’{" "}
                <strong>expérience utilisateur</strong> et aux technologies :
                <span className="cindy-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                </span>
              </p>
            </div>

            <div className="cindy-block">
              <h2 className="cindy-h2">Demain</h2>
              <p className="cindy-p">
                Je continue d’apprendre chaque jour, avec l’envie de{" "}
                <strong>construire</strong> des projets qui ont du sens, au sein
                d’une équipe où la <strong>créativité</strong> et l’{" "}
                <strong>innovation</strong> sont au cœur de tout.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sed, error magnam nesciunt ratione voluptatibus? Quis beatae quos recusandae quam amet neque fugit, obcaecati rem ab corrupti minima corporis veniam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi cumque tempore beatae libero obcaecati, corrupti veniam consequuntur laudantium tenetur soluta minus officiis nulla maiores ut adipisci, porro a delectus.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti architecto aperiam nesciunt nam beatae, qui eos consectetur magnam eaque molestias quae sapiente error, officia voluptates odit sequi ipsum dolorem sunt!
              </p>
            </div>

            
          </article>
        </div>

        {/* Décor bas */}
        <footer className="cindy-footerDecor" aria-hidden="true">
          <img
            className="cindy-laptop"
            src="/ordi.png"
            alt=""
            loading="lazy"
          />
        </footer>
      </section>
      <div className="cindy-actions">
              <Link className="cindy-btn" to="/">
                ✈︎ Retour à l'accueil
              </Link>
            </div>
    </main>
  );
}
