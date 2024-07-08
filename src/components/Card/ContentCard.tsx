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
  description?: ReactNode; // ReactNode allows rendering of any JSX or text content
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
    <Card>
      <div className="text-center ">
        <HeaderText
          text={title}
          mode="h2"
          className="text-md py-4 font-medium"
        />
      </div>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default ContentCard;
