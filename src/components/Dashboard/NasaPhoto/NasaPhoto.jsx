import style from'./NasaPhoto.module.css';

function NasaPhoto(props) {

    const buildPhotoCards = () => {

        if(props.photos === null)
            return null;

        return props.photos.map((photo) => {
            return (
                <li key={photo.id} className={style.photoCard}>
                    <span>Taken Date {photo.earth_date}. Taken by {photo.rover.name}</span>
                    <img src={photo.img_src} alt="Nasa" width="250" height="250" />
                </li>
            )
        });
    }

    return (
        <div>
            <h1>Photos coming from space!</h1>
            <ul>
                {buildPhotoCards()}
            </ul>
        </div>
    )

}

export default NasaPhoto;