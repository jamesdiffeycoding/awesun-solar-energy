
import './App.css'
import Header from './assets/Header'
import { useEffect } from 'react'


// const formatDate = date =>
//   `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
//     date.getSeconds(),
//   ).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

// async function fetchPokemon(name) {
//   const pokemonQuery = `
//     query PokemonInfo($name: String) {
//       pokemon(name: $name) {
//         id
//         number
//         name
//         attacks {
//           special {
//             name
//             type
//             damage
//           }
//         }
//       }
//     }
//   `

//   const response = await window.fetch('https://graphql-pokemon2.vercel.app/', {
//     // learn more about this API here: https://graphql-pokemon2.vercel.app/
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json;charset=UTF-8',
//     },
//     body: JSON.stringify({
//       query: pokemonQuery,
//       variables: {name: name.toLowerCase()},
//     }),
//   })

//   const {data, errors} = await response.json()
//   if (response.ok) {
//     const pokemon = data?.pokemon
//     if (pokemon) {
//       // add fetchedAt helper (used in the UI to help differentiate requests)
//       console.log(pokemon)
//       pokemon.fetchedAt = formatDate(new Date())
//       return pokemon
//     } else {
//       return Promise.reject(new Error(`No pokemon with the name "${name}"`))
//     }
//   } else {
//     // handle the graphql errors
//     const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
//     return Promise.reject(error)
//   }
// }



async function fetchData(){
  try {
    const response = await fetch("http://localhost:3000/solar");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

function App() {


  // useEffect(() => {
  //   const response = async () => {
      
  //   fetch("http://localhost:3000/solar")
  //   console.log(response)
  //   }
  // }, []); 

 const data = fetchData()
 console.log(data)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://api.solar.sheffield.ac.uk/pvlive/api/v4/gsp/0", {
  //         method: 'GET',
  //         // mode: 'no-cors',
  //         headers: {
  //           'content-type': 'application/json',
  //         },
  //       });
  //       if(response.ok) {
  //       console.log(response)
  //     } if(!response.ok) {
  //       console.log("error fetching data")
  //       console.error(Error)
  //       // console.log(response)
  //       // console.log(fetchData)
  //     }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }; 
  // }, []);

// fetchPokemon("pikachu")
// fetchData()
  return (
    <>
     <Header /> 
    </>
  )
}

export default App
