import React from "react";
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
  return (
    <Link href={linkUrl} passHref>
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt="Project Image"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover"
        />
        {/* Faded Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="absolute top-7 right-5">
          <Image src={linkIcon} alt="Link Icon" />
        </div>
        <div className="absolute bottom-7 left-5 text-left">
          <ParagraphText
            mode="xl"
            text={headerText}
            className="text-white font-medium"
          />
          <Spacer spaceingAmount="1" />
          <ParagraphText
            text={paragraphText}
            className="text-zinc-500 font-bold"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
