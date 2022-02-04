import Image from "next/image";

import styles from "./PhotoGrid.module.scss";

const PhotoGrid = ({ photos }) => (
    <div className={styles.photoGrid}>
        {photos.map(photo => (
            <div>
                <Image src={photo.File.url} layout="fill" objectFit="contain" />
            </div>
        ))}
        Photogrid!
        {console.log("Photos", photos)}
    </div>
)

export default PhotoGrid;