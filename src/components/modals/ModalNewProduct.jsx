import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState, useRef } from "react";
import { Option, Select } from "@material-tailwind/react";
import { createProduct } from "../../services/ecommerce.services";

const ModalNewProduct = ({ isOpen, onClose, setReloadDataUsers }) => {
  const [isActive, setIsActive] = useState(false);

  const selectRef = useRef();

  const { formState, onInputChange, onResetForm } = useForm({
    productName: "",
    price: "",
    stock: "",
    description: "",
  });

  const { productName, price, stock, description } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      productName: productName.trim(),
      price: price.trim(),
      stock: stock,
      unit: selectRef?.current?.innerText,
      description: description.trim(),
      date: new Date().toLocaleDateString().slice(0, 10),
    };

    console.log(selectRef)
    console.log(payload);
    const res = await createProduct(payload);

    if (res.ok) {
      setReloadDataUsers((prev) => !prev);
      onResetForm();
      setIsActive(false);
      onClose();
    }
  };

  // habilita el boton guardar cuando todos los campos estan llenos
  useEffect(() => {
    if (
      productName.trim() &&
      price.trim() &&
      stock.trim() &&
      selectRef?.current?.innerText  !== '' &&
      description.trim()
    )
      setIsActive(true);
  }, [productName, price, stock, selectRef?.current?.innerText, description]);

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel registro nuevo producto"
    >
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre del producto
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="productName"
            onChange={onInputChange}
            placeholder="Leche de vaca"
            type="text"
            value={productName}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Precio
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="price"
            min={0}
            onChange={onInputChange}
            placeholder="123.3"
            type="number"
            value={price}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cantidad disponible
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="stock"
            min={0}
            onChange={onInputChange}
            placeholder="4"
            type="number"
            value={stock}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Unidad de medida
          </label>
          <Select  ref={selectRef}>
            <Option>Cabezas</Option>
            <Option>Litros</Option>
            <Option>Kilogramos</Option>
            <Option>Gramos</Option>
            <Option>Docenas</Option>
            <Option>Metros cuadrados</Option>
            <Option>Unidades</Option>
          </Select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripción
          </label>
          <textarea
            className="w-full border rounded-md py-2 px-3"
            name="description"
            onChange={onInputChange}
            placeholder="ingrese una descripcion del producto"
            type="text"
            cols={30}
            value={description}
          />
        </div>

        <button
          className={`py-2 px-4 rounded ${
            isActive
              ? "bg-primary text-white hover:bg-primary/60"
              : "bg-gray-400 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isActive}
          type="submit"
        >
          Guardar
        </button>
      </form>
    </ModalLayout>
  );
};

export default ModalNewProduct;
