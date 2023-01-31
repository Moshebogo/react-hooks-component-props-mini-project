import Article from "./Article"

function ArticleList ({posts}) {
   const articles = posts.map(post => <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} key={post.id} />)
    return (
        <main>
           {articles}
        </main>
    )
}

export default ArticleList