import React from 'react';
import image1 from "../../src/resources/images/300x200-pict1.jpg";
import image2 from "../../src/resources/images/300x200-pict2.jpg";
import image3 from "../../src/resources/images/300x200-pict3.jpg";

const ArticlePreview = props => {
  const article = props.article;
  const count = props.count;
  const images = [image1, image2, image3];
  
  function shuffleArray() {
    let i = images.length - 1;
    const j = Math.floor(Math.random() * (i + 1));
    return images[j];
  }

  const shuffleImage = shuffleArray();

  return (
    <div className={"" + (count <= 2 ? 'col-md-6' : 'col-md-4')}>
      <div className="card">
        <img className="card-img-top img-fluid" src={shuffleImage} alt="Card detail pict" />
        <div className="card-block text-center">
          <h5 className="card-title text-md-center">{article.title}</h5>
          <p className="card-text text-md-center">{article.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
