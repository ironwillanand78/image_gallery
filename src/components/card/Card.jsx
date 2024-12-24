import { useState } from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    const [selectedImages, setSelectedImages] = useState([]); 

    const handleSelect = () => {
        setSelectedImages((prev) => [...prev, props.imageUrl]); 
    };

    return (
        <div>

            <div className={styles.cardDiv} onClick={handleSelect}>
                <img src={props.imageUrl}/>
            </div>

            {selectedImages.map((image, index) => (
                <div key={index} className={styles.selectedDiv}>
                    <h2>Selected Image</h2>
                    <div className={styles.selectedCard}>
                        <img src={image} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
