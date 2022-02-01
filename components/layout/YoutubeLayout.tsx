import React, { FunctionComponent } from "react";

interface IYoutubeProp {
  embedId: string;
}

const YoutubeLayout: FunctionComponent<IYoutubeProp> = ({ embedId }) => {
  return (
    <iframe
      className="youtube"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="C-Check App"
    />
  );
};

export default YoutubeLayout;
