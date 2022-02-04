import Image from "next/image";

import styles from "./PhotoGrid.module.scss";

const PhotoGrid = ({ photos }) => (
    <div className={styles.photoGrid}>
        {photos.map(photo => (
            <div key={photo.id} className={styles.photo}>
                {console.log("Photo: ", photo)}
                <Image src={photo.File.url} layout="fill" objectFit="contain" alt={photo.Title}/>
            </div>
        ))}
    </div>
)

export default PhotoGrid;