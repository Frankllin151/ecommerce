import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import TextInput from '@/Components/TextInput';
export default function TodoProduto()
{
 const [showModal, setShowModal] = useState(false);

 const [formData, setFormData] = useState({
  nome: "",
  descricao: "",
  preco: "",
  sku: "",
  quantidade: "",
  categoria: "",
  grupo: "", // variável para armazenar se o produto é grupo ou variável
});
const categories = [
  {id:1 , nome: "sapato"}
]

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Dados enviados:", formData);
  // Aqui você pode fazer um fetch para o backend do Laravel
};


  return (
    <>
    <AuthenticatedLayout>
      <div className='flex justify-between px-4'>
        <h3 className='text-2xl'>Produtos</h3>  
        <PrimaryButton onClick={() => setShowModal(true)}>Add</PrimaryButton>
      </div>
      <Modal show={showModal} onClose={() =>setShowModal(false)}>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md shadow-md">
            <TextInput name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
            <TextInput name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descrição" />
            <TextInput name="preco" type="number" value={formData.preco} onChange={handleChange} placeholder="Preço" />
            <TextInput name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" />
            <TextInput name="quantidade" type="number" value={formData.quantidade} onChange={handleChange} placeholder="Quantidade" />

            {/* Select para categoria */}
            <select
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className="border-gray-300 rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full"
            >
                <option value="">Selecione a categoria</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.nome}
                    </option>
                ))}
            </select>

            {/* Radio para definir grupo ou variável */}
            <div className="flex gap-4">
                <label>
                    <input type="radio" name="grupo" value="grupo" checked={formData.grupo === "grupo"} onChange={handleChange} /> Grupo
                </label>
                <label>
                    <input type="radio" name="grupo" value="variavel" checked={formData.grupo === "variavel"} onChange={handleChange} /> Variável
                </label>
            </div>

            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md">
                Enviar
            </button>
        </form>
      </Modal>
    </AuthenticatedLayout>
    </>
  )
}