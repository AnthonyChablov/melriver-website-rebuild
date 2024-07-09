"use client";
import React, { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import HeaderText from "../Text/HeaderText";
import ParagraphText from "../Text/ParagraphText";
import Spacer from "../Spacer";
import linkIcon from "../../../public/link-icon.svg";

interface ProjectCardProps {
  imageUrl: StaticImageData;
  linkUrl: string;
  headerText: string;
  paragraphText: string;
}

const ProjectCard = ({
  imageUrl,
  linkUrl,
  headerText,
  paragraphText,
}: ProjectCardProps) => {
  /* Refs */
  const projectCardRef = useRef(null);
  const imageRef = useRef(null);
  const iconRef = useRef(null);
  const overlayRef = useRef(null);
  const subparagraphRef = useRef(null);

  /* Tween references */
  const projectTween = useRef<gsap.core.Tween>();
  const imageTween = useRef<gsap.core.Tween>();
  const iconTween = useRef<gsap.core.Tween>();
  const overlayTween = useRef<gsap.core.Tween>();
  const subparagraphTween = useRef<gsap.core.Tween>();

  useGSAP(
    () => {
      if (projectCardRef.current && imageRef.current) {
        projectTween.current = gsap.to(projectCardRef.current, {
          duration: 0.35,
          ease: "power1.inOut",
          rotate: "-1.25deg",
          scale: 0.95,
          paused: true,
        });
        imageTween.current = gsap.to(imageRef.current, {
          duration: 0.35,
          ease: "power1.inOut",
          scale: 1.1,
          paused: true,
        });
        iconTween.current = gsap.to(iconRef.current, {
          duration: 0.6,
          ease: "power1.inOut",
          paused: true,
          scale: 1.05,
          fill: "white",
        });
        overlayTween.current = gsap.to(overlayRef.current, {
          duration: 0.35,
          ease: "power1.out",
          opacity: "30%",
          paused: true,
        });
        subparagraphTween.current = gsap.to(subparagraphRef.current, {
          duration: 0.6,
          ease: "power1.inOut",
          color: "white",
          paused: true,
        });
      }
    },
    { scope: projectCardRef }
  );

  const onMouseEnter = () => {
    projectTween.current?.play();
    imageTween.current?.play();
    iconTween.current?.play();
    overlayTween.current?.play();
    subparagraphTween.current?.play();
  };

  const onMouseLeave = () => {
    projectTween.current?.reverse();
    imageTween.current?.reverse();
    iconTween.current?.reverse();
    overlayTween.current?.reverse();
    subparagraphTween.current?.reverse();
  };

  return (
    <Link
      href={linkUrl}
      passHref
      target="_blank"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        ref={projectCardRef}
      >
        <Image
          ref={imageRef}
          src={imageUrl}
          alt="Project Image"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover"
        />
        {/* Faded Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-5 rounded-lg"
          ref={overlayRef}
        ></div>
        {/* Card Content */}
        <div className="absolute top-7 right-5 ">
          <svg
            width="30"
            height="30"
            ref={iconRef}
            viewBox="0 0 42 42"
            fill="rgb(161 161 170)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38.5858 2L1.41422 2V0H41.4142V2V42H39.4142V4L1.41422 42L0 40.5858L38.5858 2Z"
            />
          </svg>
        </div>
        <div className="absolute bottom-7 left-5 text-left">
          <ParagraphText
            mode="xl"
            text={headerText}
            className="text-white font-medium"
          />
          <Spacer spaceingAmount={1} />
          <ParagraphText
            ref={subparagraphRef}
            text={paragraphText}
            className="text-zinc-400 font-semibold"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
