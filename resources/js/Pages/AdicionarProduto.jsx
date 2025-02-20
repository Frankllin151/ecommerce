import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import  {useState}  from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';

export default function AdicionarProduto() {
 const [selectDado , setSelectDado] = useState("simple");
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectImagem , SetSelectImagem] = useState(null);
 const [listagem, setListagem] = useState("Geral");
 const itemsListagems = ["Geral", "Estoque", "Entrega", "Produtos Relacionados", "Atributos"];
 const [DadoForm, setDadoForm] = useState([
  {
    nome: "",
    sku: "",
    grupo: selectDado,  // Grupo começa com o valor de 'selectDado'
    descricao: "",
    quantidade: "",
    preco: "",
    promocional:"",
    imagem: "",
    atributos: [
      {
        tipo: "",  // Exemplo de tipo de atributo
        valores: "" // Exemplos de valores para o atributo
      },
      {
        tipo: "Cor",
        valores: ""
      }
    ]
  }
]);

const imgMedia = [
  { id: 1, img: "https://picsum.photos/150/150" },
  { id: 2, img: "https://picsum.photos/150/150" },
  { id: 3, img: "https://picsum.photos/150/150" },
  { id: 4, img: "https://picsum.photos/150/150" },
  { id: 5, img: "https://picsum.photos/150/150" },
  { id: 6, img: "https://picsum.photos/150/150" },
  { id: 7, img: "https://picsum.photos/150/150" },
  { id: 8, img: "https://picsum.photos/150/150" },
  { id: 9, img: "https://picsum.photos/150/150" },
  { id: 10, img: "https://picsum.photos/150/150" },
  { id: 11, img: "https://picsum.photos/150/150" }
]

const openModal = () =>{
  setIsModalOpen(true);
}
const closeModal = () => {
  setIsModalOpen(false);
}

 const HandleChangeSelect = (e) =>{
  setSelectDado(e.target.value);
  DadoForm.grupo =  selectDado
  
 }

 
 const HandleInputChange = (e) => {
  const { name, value } = e.target;

  
  // Atualiza o campo correspondente no formulário de maneira imutável
  setDadoForm(prevState => [
    {
      ...prevState[0],
      [name]: value
      
      
    }

    
  ]);

};

const handleSave = () =>{
 if(selectImagem !== null){
  const selectedImage = imgMedia.find((image) => image.id === selectImagem); 
  if(selectedImage ){
    DadoForm[0].imagem = selectedImage.img;
    setIsModalOpen(false);
  } else{
    alert("Nenhuma imagem selecionada!");
  }
   
 }
}

console.log(DadoForm);

  return (
    <AuthenticatedLayout>
     <div action="">
    
      <div className='px-3 py-3 bg-white shadow-sm sm:rounded-lg'>
        <div className='flex items-center justify-between'><h3 className='text-lg'>Dados do produto -</h3>
         <select name="" id="" value={selectDado} className='rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 '
         onChange={HandleChangeSelect}>
          <option value="simple">Produto simples</option>
          <option value="variavel">Produto Variável</option>
          <option value="grupo">Produto Grupo</option>
         </select>
         <a href="" className='inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900'>publicar</a>
        </div>
   <div className='flex '>
    <div className='w-64 '>
      <div>
        <ul className='bg-slate-50'>
          {itemsListagems.map((item) => (
            <li key={item} className={`p-4 cursor-pointer mt-1 border-b border-[#fff]
              ${ listagem === item ? "bg-slate-300" : ""}
              hover:bg-slate-300`}
              onClick={() => setListagem(item)}>{item}</li>
          ))}
         
        </ul>
      </div>
    </div>
    <div className='ml-5 '>
    {listagem === "Geral" && 
     <>
    <div className='flex '>
       <InputLabel className='text-[16px]'>Nome:
     <TextInput
     value={DadoForm[0].nome}
     onChange={HandleInputChange}
     className="ml-2" 
      placeholder="Nome do produto"
      id="nome"
      name="nome"
      type="text"
     />
    </InputLabel>

<InputLabel className='text-[16px]'>Preço:
<TextInput
className="ml-2" 
 placeholder="ex. 12.50"
 id="preco"
 value={DadoForm[0].preco}
     onChange={HandleInputChange}
 name="preco"
 type="text"
/>
</InputLabel>

<InputLabel className='text-[16px]'>Preço promocional:
<TextInput
className="ml-2" 
 placeholder="opcional ex.12.50"
 id="promocional"
 value={DadoForm[0].promocional}
     onChange={HandleInputChange}
 name="promocional"
 type="text"
/>
</InputLabel>
    </div>

    <InputLabel className='text-[16px]'>SKU:
<TextInput
className="ml-2 mt-2" 
 placeholder="sku"
 value={DadoForm[0].sku}
     onChange={HandleInputChange}
 id="sku"
 name="sku"
 type="text"
/>
</InputLabel>
<InputLabel className='text-[16px]'>Descrição:
<textarea
value={DadoForm[0].descricao}
onChange={HandleInputChange}
className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
 placeholder="Descricao do produto"
 id="descricao"
 name="descricao"
 type="text"
></textarea>
</InputLabel>
<InputLabel>
Escolher arquivo: 
<PrimaryButton onClick={openModal}>Escolher Imagem</PrimaryButton>
{DadoForm[0].imagem && 
<div className='flex justify-end'>
<img src={DadoForm[0].imagem} className='w-28 h-28' alt=""  />
</div>
}

</InputLabel>
   </>
    }
    {listagem === "Estoque" && 
    <div>estoque</div>
    }
   
      
    </div>
   </div>
   </div>
   <Modal show={isModalOpen} onClose={closeModal}>
   <div className='w-full h-96  p-5 overflow-y-scroll overflow-auto'>
    {/* Contêiner de imagens */}
    <div className="flex flex-wrap gap-4 h-full">
        {/* Imagens de exemplo do Unsplash */}
        {imgMedia.map((image) =>(
          <img key={image.id} src={image.img} alt={`Imagem ${image.img}`} 
          className={`${selectImagem === image.id ? 'border-2 border-solid border-[#ddd]' : ''}`}
          onClick={() => SetSelectImagem(image.id)}
          />
        ))}
    </div>
</div>


  <div className='flex p-4 justify-between'>
  <PrimaryButton onClick={closeModal}>Fechar</PrimaryButton>
  <PrimaryButton  onClick={handleSave} >Salvar</PrimaryButton>
  </div>
   </Modal>
   </div>
    </AuthenticatedLayout>
  );
}
