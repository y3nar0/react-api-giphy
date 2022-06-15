import { useState } from "react"
import AddCategory from "./AddCategory"
import GifGrid from "./GifGrid"

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return
    
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        {/* <AddCategory setCategories={setCategories}/> */}
        <AddCategory onAddCategory={onAddCategory}/>
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