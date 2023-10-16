import React from 'react'

function Articles(articles) {
  console.log(articles)
  return (
    <div style={{color:'white'}}>
      <h1>These are from the API</h1>
      {articles.articles.map((article)=> {
        return <div key = {article.id}>
          <h2>{article.title}</h2>
          {article.fav ? <h1>Fav</h1> : <h1>No</h1>}
          </div>
      })
      }

    </div>
  )
}

export default Articles;