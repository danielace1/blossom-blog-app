import { useRef } from "react";
import PropTypes from "prop-types";
import { IKContext, IKUpload } from "imagekitio-react";
import { toast } from "react-toastify";
import { API_URL } from "../api/api";

const authenticator = async () => {
  try {
    const response = await fetch(`${API_URL}/posts/upload-auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);

  const onError = (error) => {
    console.log(error);
    toast.error("Image upload failed!");
  };

  const onUploadProgress = (progress) => {
    console.log(progress);
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  const onSuccess = (res) => {
    const relativePath = res.filePath.replace(/^\/blogs\//, "");
    setData({ filePath: relativePath, fullPath: res.filePath });
    console.log(res);
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
        folder="/blogs"
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

Upload.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  setProgress: PropTypes.func,
  setData: PropTypes.func,
};

export default Upload;
