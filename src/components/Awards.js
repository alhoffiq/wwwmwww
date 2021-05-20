import Image from 'react-bootstrap/Image';

function Awards({ title, link, image, alt }) {
    return (
        <div>
            <h5 className="text-center">{title}</h5>
            <a href={link} target="_blank" rel="noreferrer"><Image src={image} alt={alt} fluid rounded /></a>
        </div>
    );
}

export default Awards;