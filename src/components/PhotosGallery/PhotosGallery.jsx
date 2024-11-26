import { PhotosGalleryItem } from "..";
import { Grid } from "./../Grid/Grid";

export const PhotosGallery = ({ images, openModal }) => {
  return (
    <Grid>
      {images.map(({ id, urls, alt_description, color }) => (
        // <div key={id} onClick={openModal}>
        <PhotosGalleryItem
          key={id}
          urls={urls}
          alt={alt_description}
          avg_color={color}
          openModal={openModal}
        />
        // </div>
      ))}
    </Grid>
  );
};
