import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function LightboxGallery({ images }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Work ${i + 1}`}
          className="cursor-pointer rounded"
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
        />
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
}

export default LightboxGallery;
