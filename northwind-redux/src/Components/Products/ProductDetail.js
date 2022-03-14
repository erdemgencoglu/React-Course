import React from "react"
import TextInput from "../Toolbox/TextInput"

const ProductDetail = (categories, product, onSave, onChange, key) => {
  return (
    <form onSubmit={onSave}>
      <h3>{product.id ? "Güncelle" : "Ekle"}</h3>
      <TextInput name="productName" label="Product Name" value={product.productName} onChange={onChange} error="Hata" />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  )
}

export default ProductDetail
