import { GridItem } from "./../GridItem/GridItem";
import css from "./PhotosGalleryItem.module.css";

export const PhotosGalleryItem = ({ urls, alt, avg_color, openModal }) => {
  return (
    <>
      <GridItem>
        <div
          style={{ borderColor: avg_color, backgroundColor: avg_color }}
          className={css.thumb}
          onClick={() => openModal(urls.regular, alt)}
        >
          <img src={urls.small} alt={alt} />
        </div>
      </GridItem>
    </>
  );
};
