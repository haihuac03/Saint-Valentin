import React from 'react';
import HTMLFlipBook from "react-pageflip";

function Book() {
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
      width={500}        // Format carré - ajustez selon vos préférences
      height={500}       // Même valeur pour format carré
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}   // Active le mode couverture (front + back)
      size='fixed'
      className="book-flip"
      minWidth={300}     // Taille minimum si responsive
      maxWidth={800}     // Taille maximum si responsive
      minHeight={300}
      maxHeight={800}
    >
      {/* Couverture avant */}
      <div className="page page-cover" key={frontCover.id}>
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
        <div className="page" key={page.id}>
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

      {/* Page blanche (pour nombre pair : permet à la couverture arrière de se fermer correctement) */}
      <div className="page page-blank" key="page-blank">
        <div className="page-content" />
      </div>

      {/* Couverture arrière (15.png) */}
      <div className="page page-cover" key={backCover.id}>
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