import { FunctionComponent } from "react";
import ImageZoom from "react-medium-image-zoom";
import { assetPrefix } from "../next.config";

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
        src: image ? `${assetPrefix}${image}` : "",
        alt: alt ?? "images",
      }}
      zoomImage={{
        src: zoomImage ? `${assetPrefix}${zoomImage}` : "",
        alt: alt ?? "images",
      }}
    />
  );
};

export default ImageZoomLayout;
