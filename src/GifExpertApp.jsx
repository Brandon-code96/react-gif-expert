import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch'])

  const onAddCategory = ( newCategory) => {

    if( categories.includes( newCategory )) return
    setCategories( [newCategory, ...categories])
  }

  return (
    <>
      {/* {titulo} */}
      <h1>GifExpertApp</h1>

      {/* {Input} */}
      <AddCategory 
      // addCategories={ setCategories } 
        onNewCategory = { (value) => onAddCategory(value) }
      />

      {/* {Listado de Gif} */}
      {
        categories.map( (category) => (
          <GifGrid 
            key={ category } 
            category={ category }
          />
        ))
      }
    </>
  )
}

