import ImageShow from './ImageShow';

function ImageList({ images }) {

    const renderedImages = images.map((image) => {
        return <ImageShow imagePath={image.urls.small} key={image.id} />;
      });
    
    return (
      <div>
        { renderedImages }
      </div>
    );
  }
  
  export default ImageList;