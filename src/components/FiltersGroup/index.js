import {FcSynchronize} from 'react-icons/fc'

import './index.css'

const FiltersGroup = props => {
  const {
    getSelectedCategoryProducts,
    getSelectedRatedProducts,
    getSearchedValue,
    searchInput,
  } = props

  const CategoryList = () => {
    const {categoryOptions} = props

    return (
      <>
        {categoryOptions.map(category => {
          console.log('category each item')
          const getSelectedCategory = () => {
            getSelectedCategoryProducts(category.categoryId)
          }

          return (
            <p
              className="eachCategoryItem"
              onClick={getSelectedCategory}
              key={category.name}
            >
              {category.name}
            </p>
          )
        })}
      </>
    )
  }
  const getCategoryItems = () => (
    <>
      <h1>Category</h1>
      <ul className="list-container">{CategoryList()}</ul>
    </>
  )

  const staredImagesList = () => {
    const {ratingsList} = props

    return (
      <>
        {ratingsList.map(rating => {
          console.log('rating')
          const getSelectedRating = () =>
            getSelectedRatedProducts(rating.ratingId)

          return (
            <li
              className="ratingUpto"
              onClick={getSelectedRating}
              key={rating.ratingId}
            >
              <img
                src={rating.imageUrl}
                alt={`rating ${rating.ratingId}`}
                className="rating-Image"
              />
              <p className="ratingUpto">&up</p>
            </li>
          )
        })}
      </>
    )
  }
  const getStaredProducts = () => (
    <>
      <h1>Rating</h1>
      <ul className="list-container">{staredImagesList()}</ul>
    </>
  )

  const onClickClearFilters = () => {
    const {clearFilters} = props
    clearFilters()
  }

  const onSearch = event => {
    console.log(event.target.value)
    getSearchedValue(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <input type="search" onChange={onSearch} value={searchInput} />

      {getCategoryItems()}
      {getStaredProducts()}
      <button type="button" onClick={onClickClearFilters}>
        Clear Filters
        <FcSynchronize />
      </button>
    </div>
  )
}

export default FiltersGroup
