import { useState } from "react"

export default () => {

  const [games, setGames] = useState([])
  const [title, setTile] = useState("")
  const [cover, setCover] = useState("")

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 100000)
    const game = { id, title, cover }
    // state é o valor atual, no caso o array atual.
    // o ...state(spread), fala que o array agora será todos os elementos ja existentes do array + novo elemento

    setGames(state => [...state, game])
  }


  const handleSubmit = ev => {
    ev.preventDefault()
    addGame({ title, cover })
    setCover("")
    setTile("")
  }



  return (
    <div id="App">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTile(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar a Biblioteca</button>
      </form>
      <div className="games" >
        {games.map(game => (
          <div key={game.id} style={{display: "flex", flexDirection: "column"}}>
            <h2>Title: {game.title}</h2>
            <img
              src={game.cover}
              alt="cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}