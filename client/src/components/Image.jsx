import Proptypes from "prop-types";
import { IKImage } from "imagekitio-react";

const IK_ENDPOINT = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;

const Image = ({ src, className, alt, w, h }) => {
  return (
    <IKImage
      urlEndpoint={IK_ENDPOINT}
      path={src}
      alt={alt || "Image"}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className={className}
      width={w}
      height={h}
      transformation={[]}
    />
  );
};

Image.propTypes = {
  src: Proptypes.string,
  className: Proptypes.string,
  alt: Proptypes.string,
  w: Proptypes.number,
  h: Proptypes.number,
};

export default Image;
