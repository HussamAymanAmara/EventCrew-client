import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/OpportunityImages.css";

function OpportunityImages(props) {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                `http://localhost:5000/api/opportunities/${props.opportunityId}/images`
            )
            .then((response) => {
                setImages(response.data);

                if (response.data.length > 0) {
                    setSelectedImage(response.data[0].image_url);
                }

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [props.opportunityId]);

    if (loading) {
        return (
            <div className="eventcrew-opportunity-images">
                <p>Loading images...</p>
            </div>
        );
    }

    if (images.length === 0) {
        return null;
    }

    return (
        <div className="eventcrew-opportunity-images">

            <div className="eventcrew-main-image">
                <img
                    src={selectedImage}
                    alt="Opportunity"
                />
            </div>

            {images.length > 1 && (
                <div className="eventcrew-image-thumbnails">

                    {images.map((image) => (
                        <button
                            type="button"
                            key={image.image_url}
                            className={
                                selectedImage === image.image_url
                                    ? "eventcrew-image-thumbnail active"
                                    : "eventcrew-image-thumbnail"
                            }
                            onClick={() =>
                                setSelectedImage(image.image_url)
                            }
                        >
                            <img
                                src={image.image_url}
                                alt="Opportunity"
                            />
                        </button>
                    ))}

                </div>
            )}

        </div>
    );
}

export default OpportunityImages;