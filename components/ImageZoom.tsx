import { FunctionComponent } from "react";
import ImageZoom from "react-medium-image-zoom";

interface IImagesProps {
  image?: string;
  alt?: string;
  zoomImage?: string;
  className?: string;
}

const ImageZoomLayout: FunctionComponent<IImagesProps> = ({
  image,
  alt,
  zoomImage,
  className,
}) => {
  return (
    <ImageZoom
      image={{
        className: className,
        src: image ?? "",
        alt: alt ?? "images",
      }}
      zoomImage={{
        src: zoomImage ?? "",
        alt: alt ?? "images",
      }}
    />
  );
};

export default ImageZoomLayout;
