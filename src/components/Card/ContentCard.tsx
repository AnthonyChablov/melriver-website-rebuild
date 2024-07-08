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
    <Card className="rounded-3xl shadow-sm overflow-hidden py-0">
      <div className="text-center px-3 sm:container sm:px-10 w-11/12 mx-auto sm:max-w-2xl">
        {title && (
          <HeaderText
            text={title}
            mode="h2"
            className="text-md py-6 font-semibold "
          />
        )}
        {description && (
          <ParagraphText
            text={description}
            mode="2xl"
            className="font-semibold max-w-sm sm:max-w-md sm:text-3xl mx-auto "
          />
        )}
      </div>
      <CardContent className="p-4 pb-12">{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default ContentCard;
