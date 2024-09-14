import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ( event ) => {
    setInputValue( event.target.value)
  }

  const onSubmit = ( event ) => {
    event.preventDefault()
    if( inputValue.trim().length <= 1) return

    // addCategories( categories => [inputValue, ...categories] )
    onNewCategory( inputValue.trim())
    setInputValue('')
  }

  return (

    <form onSubmit={ (event) => onSubmit(event) }>
      <input 
        type="text"
        placeholder="agregar gif"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
