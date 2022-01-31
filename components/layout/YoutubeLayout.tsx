import React from "react";

interface YoutubeProp {
  embedId: string;
}

const YoutubeLayout = ({ embedId }: YoutubeProp) => {
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
