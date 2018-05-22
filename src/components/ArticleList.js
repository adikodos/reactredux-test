import ArticlePreview from './ArticlePreview';
import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }
  
  let i = 0;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
        {
          props.articles.map(article => {
            i++;
            return (
              <ArticlePreview article={article} key={article.id} count={i} />
            );
          })
        }
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
