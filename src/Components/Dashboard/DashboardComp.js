import { useRef, useState } from "react";
import styles from "./Dashboard.module.css";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    border: "5px solid red",
    position: "relative",
    bottom: "25px",

};

export default function DashboardComp() {
    const [image, setImage] = useState();
    const [item, setItem] = useState(false);
    const titleRef = useRef();
    const priceRef = useRef();
    const idRef = useRef();
    const imageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "my-product-image");
        setItem(true)
        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/doisnmyed/image/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setItem(false)
                const data = await response.json();
                setImage(data.secure_url);
            } else {
                console.error('Error uploading image to Cloudinary: ', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading image to Cloudinary: ', error);
        }
    }
    const addProductHandler = async (e) => {
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const id = idRef.current.value;
        if (title.length > 36) {
            alert("Product title is too Long!")
        }
        else {
            const response = await fetch("/api/DashboardApi/DashApi", {
                method: "POST",
                body: JSON.stringify({ id, title, price, image }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json();
            if (!response.ok) {
                if (data.error === "This Product Already Exists") {
                    alert(data.error)
                } else {
                    alert("Something went wrong, Please try again Later!");
                }
            }
            else {
                alert(data.message)
            }
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.imageHandle}>
                {
                    item ? (
                        <ClipLoader
                            color="blue"
                            loading={item}
                            cssOverride={override}
                            size={60}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        image ? (
                            <img src={image} alt="my-image" />
                        ) : (
                            <img src="/input.jpg" alt="my-image" />
                        )
                    )
                }
            </div>

            <form onSubmit={addProductHandler}>
                <input type="file" id="upload" className={styles.upload} onChange={imageUpload} />
                <label for="upload" className={styles.label}><CameraAltIcon /></label><br />
                <input type="text" placeholder="Enter Product Title" ref={titleRef} required /><br />
                <input type="text" placeholder="Enter Product Price in Dollars" ref={priceRef} required /><br />
                <input type="text" placeholder="Enter Product ID" ref={idRef} required /><br />
                <button type="Submit">Add Product</button>
            </form>
        </div>
    )
}