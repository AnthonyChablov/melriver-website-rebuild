import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ParagraphText from "../Text/ParagraphText";
import HeaderText from "../Text/HeaderText";

interface ContentCardProps {
  title: string; // ReactNode allows rendering of any JSX or text content
  description?: string; // ReactNode allows rendering of any JSX or text content
  footer?: ReactNode; // Optional footer
  children?: ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  footer,
  children,
}) => {
  return (
    <Card className="rounded-2xl ">
      <div className="text-center ">
        {title && (
          <HeaderText
            text={title}
            mode="h2"
            className="text-md py-6 font-semibold"
          />
        )}
        {description && (
          <ParagraphText
            text={description}
            mode="2xl"
            className="font-semibold"
          />
        )}
      </div>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default ContentCard;
