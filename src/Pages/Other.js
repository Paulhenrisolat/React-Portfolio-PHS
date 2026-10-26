import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

const basePath = "/React-Portfolio-PHS";
const basePathImg = "/React-Portfolio-PHS/Images/";

// To add an image: copy a line, change img / title / size.
// size: "small" (1x1) | "wide" (2x1) | "tall" (1x2) | "big" (2x2)
// img is the file name inside the Images folder (ex: "Other/idea1.png")
const ITEMS = [
    { img: "Brouillon/bbbBrouillon1.jpg", title: "B.B.B Concept 2", size: "big" },
    { img: "Brouillon/bbbBrouillon2.jpg", title: "B.B.B Concept 2", size: "tall" },
    { img: "Brouillon/BBBTextures.png", title: "B.B.B Textures", size: "small" },
    { img: "Brouillon/beebrouillon1.jpg", title: "BeeFactroy Concept 1", size: "tall" },
    { img: "Brouillon/beebrouillon2.jpg", title: "BeeFactroy Concept 2", size: "wide" },
    { img: "Brouillon/beeWaifuBetaPreV1.png", title: "Bee Concept 1", size: "small" },
    { img: "Brouillon/beeWaifuBetaV1.png", title: "Bee Concept 2", size: "wide" },
    { img: "Brouillon/createEarthBrouillon1.jpg", title: "CreateEarth Concept 1", size: "wide" },
    { img: "Brouillon/mcTextureModBio.png", title: "MC TEXTURE MOD", size: "wide" },
    { img: "Brouillon/lightempierTITLE.png", title: "Light Empire Title", size: "small" },
    { img: "Brouillon/deity.png", title: "Deity", size: "tall" },
    { img: "Brouillon/portfolioBrouillon1.jpg", title: "Portfolio Concept 1", size: "small" },
    { img: "Brouillon/portfolioBrouillon2.jpg", title: "Portfolio Concept 2", size: "wide" },
    { img: "Brouillon/lightEmpireBrouillon1.jpg", title: "LightEmpire Concept 1", size: "wide" },
    { img: "Brouillon/lightEmpireBrouillon2.jpg", title: "LightEmpire Concept 1", size: "wide" },
    { img: "Brouillon/lightEmpireBrouillon3.jpg", title: "LightEmpire Concept 1", size: "wide" },
    { img: "Brouillon/lightEmpireBrouillon4.jpg", title: "LightEmpire Concept 1", size: "small" },
    { img: "Brouillon/lightEmpireBrouillon5.jpg", title: "LightEmpire Concept 1", size: "tall" },
    { img: "Brouillon/armonizer1.png", title: "Armonizer Concept 1", size: "tall" },
    { img: "Brouillon/banniereYt.png", title: "YT Banner V1", size: "wide" },
    { img: "Brouillon/cellwarBrouillon1.jpg", title: "CellWar Concept 1", size: "wide" },
    { img: "Brouillon/cellwarBrouillon2.jpg", title: "CellWar Concept 1", size: "tall" },
    { img: "Brouillon/leaderNo.png", title: "TankSoldier Concept 1", size: "small" },
    { img: "Brouillon/leader.png", title: "TankSoldier Concept 2", size: "small" },
    { img: "Brouillon/KarakazmaLogoYT2.png", title: "YT Logo V1", size: "wide" },
];

export default function Other() {
    // Index of the image shown in the viewer (null = viewer closed)
    const [selected, setSelected] = useState(null);

    const close = useCallback(() => setSelected(null), []);

    // Loop through the images
    const next = useCallback(() => {
        setSelected((i) => (i === null ? null : (i + 1) % ITEMS.length));
    }, []);

    const prev = useCallback(() => {
        setSelected((i) => (i === null ? null : (i - 1 + ITEMS.length) % ITEMS.length));
    }, []);

    // Keyboard controls while the viewer is open
    useEffect(() => {
        if (selected === null) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [selected, close, next, prev]);

    return (
        <div className="other-page">
            <h1>RAW SAMPLES, CONCEPTS & DRAFTS :</h1>
            <h2>Feel free to give a look to my weird ideas which was used on my {" "}
                <NavLink to={`${basePath}/projects`}>Projects !</NavLink>
            </h2>

            <div className="other-grid">
                {ITEMS.map((item, index) => (
                    <figure
                        key={index}
                        className={`other-card other-card--${item.size || "small"}`}
                        onClick={() => setSelected(index)}
                    >
                        <img src={`${basePathImg}${item.img}`} alt={item.title} loading="lazy" />
                        <figcaption className="other-card__title">{item.title}</figcaption>
                    </figure>
                ))}
            </div>

            {selected !== null && (
                <div className="other-viewer" onClick={close}>
                    <button
                        className="other-viewer__arrow other-viewer__arrow--left"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <div className="other-viewer__content" onClick={(e) => e.stopPropagation()}>
                        <img
                            className="other-viewer__img"
                            src={`${basePathImg}${ITEMS[selected].img}`}
                            alt={ITEMS[selected].title}
                        />
                        <p className="other-viewer__title">{ITEMS[selected].title}</p>
                    </div>

                    <button
                        className="other-viewer__arrow other-viewer__arrow--right"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}

