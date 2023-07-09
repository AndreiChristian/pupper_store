import React from "react";

interface PageIdProps {
  params: {
    id: string;
  };
}

const PageId: React.FC<PageIdProps> = ({ params }) => {
  return <div>{params.id}</div>;
};

export default PageId;
