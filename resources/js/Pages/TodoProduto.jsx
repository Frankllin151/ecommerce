import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
export default function TodoProduto()
{
  const [openmodal , setOpenModal] = useState(false);
  const [categoria , setCategoria] = useState({
    categoria: ""
  });
  const {props}= usePage()
 
   
  const handleOpenModal = () =>{
setOpenModal(true)
  }
  const handleCloseModal = () =>{
    setOpenModal(false)
  }
  const handleChangeCategoria = (e) => {
const key= e.target.name;
 const valueCategoria = e.target.value;
 setCategoria(categoria =>({
  ...categoria, [key]: valueCategoria
 }))

  }
  
  const handleSubmitCategoria = (e) => {
  e.preventDefault()
  router.post("/todoproduto/add-post-categoria", categoria)
  setOpenModal(false)
  }
  return (
    <>
    <AuthenticatedLayout>
      <div className='flex justify-between px-4'>
        <h3 className='text-2xl'>Produtos</h3>  
    <div className='flex'>
    <a className='inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900' href={route("adicionarProduto")} >Add</a>
 <PrimaryButton className='ml-1'
 onClick={handleOpenModal}
 >Categoria</PrimaryButton>
    </div>
      </div>
      


    <Modal className="p-6"
    show={openmodal}
    onClose={handleCloseModal}
    >
     <div className='p-6'>
     <InputLabel>
      Adicionar Categoria : 
      <TextInput 
      value={categoria.categoria}
      onChange={handleChangeCategoria}
      name="categoria"
      placeholder="Digite Categoria"
      />
      </InputLabel>
    <div className='flex justify-between'>
    <PrimaryButton onClick={handleCloseModal}>Fechar</PrimaryButton>
    <PrimaryButton onClick={handleSubmitCategoria}>Salvar</PrimaryButton>
    </div>
     </div>
    </Modal>
    </AuthenticatedLayout>
    </>
  )
}