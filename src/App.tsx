
import './App.css'
import Header from './assets/Header'
import { useEffect } from 'react'

const formatDate = date =>
  `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
    date.getSeconds(),
  ).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

async function fetchPokemon(name) {
  const pokemonQuery = `
    query PokemonInfo($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `

  const response = await window.fetch('https://graphql-pokemon2.vercel.app/', {
    // learn more about this API here: https://graphql-pokemon2.vercel.app/
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      query: pokemonQuery,
      variables: {name: name.toLowerCase()},
    }),
  })

  const {data, errors} = await response.json()
  if (response.ok) {
    const pokemon = data?.pokemon
    if (pokemon) {
      // add fetchedAt helper (used in the UI to help differentiate requests)
      console.log(pokemon)
      pokemon.fetchedAt = formatDate(new Date())
      return pokemon
    } else {
      return Promise.reject(new Error(`No pokemon with the name "${name}"`))
    }
  } else {
    // handle the graphql errors
    const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
    return Promise.reject(error)
  }
}



async function fetchData(){
  const response = await fetch("https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/10?start=2022-07-01T00:00:00&end=2022-07-02T00:00:00" , {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
  })
  console.log(response)
}

function App() {
  // useEffect(() => {
  //   const data = async () => {
  //   fetchData()
  //   console.log(data)
  //   }
  // }, []

  // )
fetchPokemon("pikachu")
fetchData()
  return (
    <>
     <Header /> 
    </>
  )
}

export default App
