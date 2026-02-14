import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from "react-pageflip";

function Book() {
  const bookRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  // Ajustement des dimensions selon l'écran (même ratio, juste plus petit)
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth < 480) {
        // Petit mobile : 300x300
        setDimensions({ width: 300, height: 300 });
      } else if (screenWidth < 768) {
        // Mobile/Tablette : 350x350
        setDimensions({ width: 350, height: 350 });
      } else {
        // Desktop : 500x500
        setDimensions({ width: 500, height: 500 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Couverture avant
  const frontCover = { id: 1, image: "/images/1.png", alt: "Couverture avant" };
  
  // Pages intérieures (2-14)
  const bookPages = [
    { id: 2, image: "/images/2.png", alt: "Page 2" },
    { id: 3, image: "/images/3.png", alt: "Page 3" },
    { id: 4, image: "/images/4.png", alt: "Page 4" },
    { id: 5, image: "/images/5.png", alt: "Page 5" },
    { id: 6, image: "/images/6.png", alt: "Page 6" },
    { id: 7, image: "/images/7.png", alt: "Page 7" },
    { id: 8, image: "/images/8.png", alt: "Page 8" },
    { id: 9, image: "/images/9.png", alt: "Page 9" },
    { id: 10, image: "/images/10.png", alt: "Page 10" },
    { id: 11, image: "/images/11.png", alt: "Page 11" },
    { id: 12, image: "/images/12.png", alt: "Page 12" },
    { id: 13, image: "/images/13.png", alt: "Page 13" },
    { id: 14, image: "/images/14.png", alt: "Page 14" },
  ];
  
  // Couverture arrière
  const backCover = { id: 15, image: "/images/15.png", alt: "Couverture arrière" };

  return (
    <HTMLFlipBook 
      ref={bookRef}
      width={dimensions.width}
      height={dimensions.height}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
      className="book-flip"
      mobileScrollSupport={true}
      swipeDistance={30}
      flippingTime={600}
    >
      {/* Couverture avant */}
      <div className="page page-cover" data-density="hard">
        <div className="page-content">
          <img 
            src={frontCover.image} 
            alt={frontCover.alt}
            className="page-image"
            onError={(e) => {
              console.error(`Erreur de chargement: ${frontCover.image}`);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Pages intérieures */}
      {bookPages.map((page) => (
        <div className="page" key={page.id} data-density="soft">
          <div className="page-content">
            <img 
              src={page.image} 
              alt={page.alt}
              className="page-image"
              onError={(e) => {
                console.error(`Erreur de chargement: ${page.image}`);
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      ))}

      {/* Page blanche avant la couverture arrière */}
      <div className="page page-blank" data-density="soft">
        <div className="page-content" />
      </div>

      {/* Couverture arrière (15.png) */}
      <div className="page page-cover page-back" data-density="hard">
        <div className="page-content">
          <img 
            src={backCover.image} 
            alt={backCover.alt}
            className="page-image"
            onError={(e) => {
              console.error(`Erreur de chargement: ${backCover.image}`);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default Book;