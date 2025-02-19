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
        <PrimaryButton><a href={route("adicionarProduto")} >Add</a></PrimaryButton>
      </div>



    
    </AuthenticatedLayout>
    </>
  )
}