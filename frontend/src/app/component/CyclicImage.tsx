import Image from 'next/image';

const CyclicImage = () => {
  const images = [
    { src: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/marketing.webp', altText: 'Image 1 Description', title: 'Marketing' },
    { src: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/illustration.webp', altText: 'Image 2 Description', title: 'Illustration' },
    { src: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/film_video.webp', altText: 'Image 3 Description', title: 'Film & Video' },
    { src: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/freelance.webp', altText: 'Image 4 Description', title: 'Freelance' },
    { src: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/fine_art.webp', altText: 'Image 5 Description', title: 'Fine Art' },
    { src: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/animation.webp', altText: 'Image 6 Description', title: 'Animation' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        {images.concat(images).map((imageObject, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <p className="absolute top-0 left-0 right-0 bg-transparent text-white text-center py-2 text-2g font-bold z-10">
                {imageObject.title}
              </p>
              <Image
                src={imageObject.src}
                alt={imageObject.altText}
                width={250}
                height={75}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyclicImage;
