import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import  {useState}  from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';
import Checkbox from '@/Components/Checkbox';
export default function AdicionarProduto() {
 const [selectDado , setSelectDado] = useState("simple");
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectImagem , SetSelectImagem] = useState(null);
 const [listagem, setListagem] = useState("Geral");
 const [isCheckedEstoque , setIsCheckedEstoque] = useState(false);
 const [limitarCompras, setLimitarCompras] = useState(false);
 const itemsListagems = ["Geral", "Estoque", "Entrega", "Produtos Relacionados", "Atributos"];
 const [DadoForm, setDadoForm] = useState([
  {
    nome: "",
    sku: "",
    grupo: selectDado,  // Grupo começa com o valor de 'selectDado'
    descricao: "",
    quantidade: "",
    preco: "",
    comprarlimitar: limitarCompras,
    limiarEstoque: "",
    status: "Em estoque",
    promocional:"",
    imagem: "",
    peso: "",
    permissao: "Não permitir",
    dimensao:[
     {comprimento:""},
     {largura:""}, 
     {altura: ""}
    ],
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
const typePermissao = [
  {id:1 , permitir:"Não permitir"}, 
  {id:2 , permitir:"Permitir, mas informar o cliente"},
  {id:3 , permitir:"Permitir"},

]
const StatusEstoque = [
  {id:1, estoque:"Em Estoque"}, 
  {id:2 , estoque:"Fora de estoque"},
  {id:3 , estoque:"Sob encomenda"}
]
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

  setDadoForm((prevState) => {
    let newForm = [...prevState]; // Copia o estado anterior

    // Se o campo pertence à estrutura `dimensao`
    if (["comprimento", "largura", "altura"].includes(name)) {
      newForm[0] = {
        ...newForm[0],
        dimensao: newForm[0].dimensao.map((dim, index) => {
          if (name === "comprimento" && index === 0) return { ...dim, comprimento: value };
          if (name === "largura" && index === 1) return { ...dim, largura: value };
          if (name === "altura" && index === 2) return { ...dim, altura: value };
          return dim;
        })
      };
    } else {
      // Caso seja um campo normal (ex: nome, sku, preco, etc.)
      newForm[0] = { ...newForm[0], [name]: value };
    }

    return newForm;
  });
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

const CheckLimitarCompras = () => {
  setLimitarCompras(!limitarCompras); 
}

const handleCheckedEstoque = () =>{
  setIsCheckedEstoque(!isCheckedEstoque);
  
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
    <div className='mt-3'>
      <InputLabel className='text-[16px]'>Estoque quantidade:
     <TextInput
     value={DadoForm[0].quantidade}
     onChange={HandleInputChange}
     className="ml-2" 
      placeholder="ex. 99"
      id="quantidade"
      name="quantidade"
      type="text"
     />
    </InputLabel>

    <InputLabel className='text-[16px]'>Gestão de Estoque:
    < Checkbox className='ml-2'
    onChange={handleCheckedEstoque}
    /> &nbsp; Acompanhe a quantidade de estoque para este produto
    </InputLabel>
    {isCheckedEstoque === true && 
    <div>
     <InputLabel className='mt-2'>
      Limiar estoque baixo: 
      <TextInput
      value={DadoForm[0].limiarEstoque}
      onChange={HandleInputChange}
      name="limiarEstoque"
      id="limiarEstoque" 
      type="number"
      placeholder="Limiar esse produto(2)"
      />
     </InputLabel>
  
      <InputLabel className='flex mt-2'>
      <p>Permitir Encomendas? </p>
      <div className='ml-2'>
        <select name="permissao"  id="permisao" className='  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
        onChange={HandleInputChange}
        value={DadoForm[0].permissao}
        
        >
        {typePermissao.map((permissao) =>(
          <option key={permissao.id}>{permissao.permitir}</option>
        ))}
        </select>
      </div>
      </InputLabel>
    
    </div>
    }
    {isCheckedEstoque === false && 
     <div className='mt-2'>
      <InputLabel>
      Status do Estoque:
      <select name="status" id="status"
      onChange={HandleInputChange}
      className='ml-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
      value={DadoForm[0].status}
      >
        {StatusEstoque.map((statusE) =>(
          <option key={statusE.id} value={statusE.estoque}>{statusE.estoque}</option>
        ))}
      </select>
      </InputLabel>
      <InputLabel className='mt-2'> 
      Vendido  individualmente <Checkbox onChange={CheckLimitarCompras}/> Limitar compras 1 item por pedido
      </InputLabel>
     </div>
    }
   
    </div>
   } 
   {listagem === "Entrega" && 
    <div className='mt-3'>
      <InputLabel className='flex items-center'>
       <p>Peso (KG):</p>
       <TextInput 
       name="peso"
       id="peso"
       onChange={HandleInputChange}
       value={DadoForm[0].peso}
       className="mt-1"
       placeholder="0"
       type="text"
       />
      </InputLabel>
      <InputLabel className='flex items-center'>
       <p>Dimensões (cm):</p> <div className='flex'>
       <TextInput  className="m-1"
       placeholder="comprim"
       name="comprimento"
      id="comprimento"
       value={DadoForm[0].dimensao[0].comprimento}
       onChange={HandleInputChange}
       />
       <TextInput  className="m-1"
       placeholder="Largura"
       name="largura"
       value={DadoForm[0].dimensao[0].largura}
       onChange={HandleInputChange}
       id="largura"
       />
       <TextInput  className="m-1"
        name="altura"
       id="altura"
       value={DadoForm[0].dimensao[0].altura}
       onChange={HandleInputChange}
       placeholder="Altura"/>
       </div>
      </InputLabel>
    </div>
   }
   {listagem === "Produtos Relacionados" && 
   <div className='mt-3'>
    Produto Relacionado
   </div>
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
