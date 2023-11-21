import { Option, Select } from "@material-tailwind/react";
import { useForm } from "../../hooks/useForm";
import ModalLayout from "../../layout/ModalLayout";
import { useState } from "react";
import { updateProduct } from "../../services/ecommerce.services";

const ModalEditProduct = ({
  isOpen,
  onClose,
  productToEdit = {},
  setReloadData,
}) => {

  const { formState, onInputChange, onResetForm } = useForm(productToEdit);
  const { productName, price, stock, description } = formState;
  const [unit, setUnit] = useState(formState.unit);

  const handleSave = async () => {

    const payload = {
      productName: productName.trim(),
      price: price,
      stock: stock,
      unit: unit,
      description: description.trim(),
      date: new Date().toLocaleDateString().slice(0, 10),
    };

    console.log(payload)

    await updateProduct(productToEdit.id, payload);
    onResetForm();
    onClose();
    setReloadData((prev) => !prev);
  };


  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel de edición de empleado"
    >
      <form className="text-black" onSubmit={handleSave}>
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
          <Select onChange={ (value) => setUnit(value) } >
            <Option value="Cabezas" >Cabezas</Option>
            <Option value="Litros" >Litros</Option>
            <Option value="Kilogramos" >Kilogramos</Option>
            <Option value="Gramos" >Gramos</Option>
            <Option value="Docenas" >Docenas</Option>
            <Option value="Metros cuadrados" >Metros cuadrados</Option>
            <Option value="Unidades" >Unidades</Option>
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
          type="button"
          className={
            "py-2 px-4 rounded bg-primary text-white hover:bg-primary/60"
          }
          onClick={handleSave}
        >
          Editar
        </button>
      </form>
    </ModalLayout>
  );
};

export default ModalEditProduct;
