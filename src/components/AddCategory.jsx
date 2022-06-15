import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ onAddCategory }) => {
  
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if(inputValue.trim().length <= 1) return

    // setCategories( cats => [ inputValue, ...cats ])
    onAddCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    </form>
  )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}

export default AddCategory