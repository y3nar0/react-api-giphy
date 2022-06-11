import { useState } from "react"
import AddCategory from "./AddCategory"
import GifGrid from "./GifGrid"

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
          {
            categories.map( category => (
              <GifGrid key={category} category={category}/>
            ))
          }
        </ol>
    </>
  )
}

export default GifExpertApp