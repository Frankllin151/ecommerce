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
  grupo: "simple", // variável para armazenar se o produto é grupo ou variável
});
const categories = [
  {id:1 , nome: "sapato"}
]

const handleChange = (e) => {
  const { name, value } = e.target;

  
  setFormData((prev) => ({ ...prev, [name]: value }));
  console.log(value);
  
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
      <a className='inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900' href={route("adicionarProduto")} >Add</a>
      </div>



    
    </AuthenticatedLayout>
    </>
  )
}