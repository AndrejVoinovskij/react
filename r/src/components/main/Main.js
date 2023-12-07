import Article from "../article/Article"

const Main = ()=>{
    return(
        <div className="container">
            <main>
                <h1>Naujienos</h1>
                <p>React</p>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </main>
        </div>
  )
}
export default Main