import Image from 'next/image';
      const Centerimage = () => {
    
        return (
        <div className='styles.images'>
           
        <Image 
        src="/images/image.png" // Assuming your image is in public/images
        alt="Description of the image"
        width={100} // Set the width as required
        height={150} // Set the height as required
        layout="responsive" // Optional: Adjusts image size to the parent element's width
      />
        </div>
      
    
      );
    };
    export default Centerimage;
    