import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import  {useState, useEffect}  from 'react';
import { Head, usePage } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import Geral from '@/Components/Gera';
import Estoque from '@/Components/Estoque';
import Entrega from '@/Components/Entrega';
import ProdutoRelacionado from '@/Components/ProdutoRelacionado';
import Atributos from '@/Components/Atributos';

//import Atributos from '@/Components/Atributos';



export default function AdicionarProduto() {
 const [selectDado , setSelectDado] = useState("simple");
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectImagem , SetSelectImagem] = useState(null);
 const [atributo, setAtributo] = useState("");
 const [containerAtributo, setContainerAtributo] = useState([]);
 const [listagem, setListagem] = useState("Geral");
 const [isCheckedEstoque , setIsCheckedEstoque] = useState(false);
 const [limitarCompras, setLimitarCompras] = useState(false);
 const itemsListagems = ["Geral", "Estoque", "Entrega", "Produtos Relacionados", "Atributos"];
 const [DadoForm, setDadoForm] = useState([
  {
    nome: "",
    sku: "",
    categoria: "Sem categoria",
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
    upsells: [],
    vendaCruzada: [],
    permissao: "Não permitir",
    dimensao:[
     {comprimento:""},
     {largura:""}, 
     {altura: ""}, 
     {peso: ''}
    ],
    atributos: []
  }
]);

const categoria = usePage().props.categorias

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
const handleInputSelectUpSell = (e) => {
  if(Array.isArray(e)){
    const selectedValues = e.map(option => ({
    id: option.value ,
    nome:option.label
    }))

    setDadoForm((prevState) =>{
      let newForm = [...prevState];

      // Atualizando a propriedade vendaCruzada com os IDs selecionados
      newForm[0] = { ...newForm[0], upsells: selectedValues };

      return newForm;
    })
  }
}

 const HandleInputChange = (e) => {
 
  
  if (Array.isArray(e)) {
    // Caso seja um Select multi seleção, e será um array de objetos
    const selectedValues = e.map(option => ({
      id: option.value,
      nome: option.label
    })); 

    
    setDadoForm((prevState) => {
      let newForm = [...prevState];

      // Atualizando a propriedade vendaCruzada com os IDs selecionados
      newForm[0] = { ...newForm[0], vendaCruzada: selectedValues };

      return newForm;
    });
  } else {
    // Para campos normais (inputs de texto)
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
            if (name === "peso" && index === 3) return {...dim , peso:value}
            return dim;
          })
        };
      } else {
        // Caso seja um campo normal (ex: nome, sku, preco, etc.)
        newForm[0] = { ...newForm[0], [name]: value };
      }

      return newForm;
    });
  }
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

const handleAddAtributosbutton = () => {
if(atributo.trim() === "") return;
setContainerAtributo([...containerAtributo, 
  {id:containerAtributo.length +1 , nome_atributo:atributo, valor: "", 
  nome:"", isVisible:false}]);
  setAtributo("")

}


const toggleContainerVisibility = (id) => {  
const updatepContainer = containerAtributo.map(item =>{
  if(item.id === id){
    return {...item, isVisible: !item.isVisible}
  }
  return item;
});
setContainerAtributo(updatepContainer);
}

const handleChangeValorAndNomeAtributo = (id, value, campo) => {
  setContainerAtributo(prevState =>
    prevState.map(item =>
      item.id === id ? { ...item, [campo]: value } : item
    )
  );
 
};

const handleSalveAtribute = (index) =>{
setDadoForm((prevState) => prevState.map((item)=>({
  ...item, 
  atributos:[
    ...item.atributos.filter(attr => attr.id !== index.id), //Evita dados duplicatos
    {id:index.id , nome_atributo:index.nome , valor:index.valor}
  ]
})))
 
  
}



  return (
    <AuthenticatedLayout>
      <Head title="Adicionar Produto" />
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
    <Geral DadoForm={DadoForm} openModal={openModal} setDadoForm={setDadoForm} categoria={categoria}/>
    }
    {listagem === "Estoque" && 
    <Estoque  DadoForm={DadoForm} setDadoForm={setDadoForm} HandleInputChange={HandleInputChange} handleCheckedEstoque={handleCheckedEstoque} 
    isCheckedEstoque={isCheckedEstoque} StatusEstoque={StatusEstoque}
    CheckLimitarCompras={CheckLimitarCompras} typePermissao={typePermissao}
    />
   } 
   {listagem === "Entrega" && 
   <Entrega DadoForm={DadoForm} HandleInputChange={HandleInputChange}/>
   }
   {listagem === "Produtos Relacionados" && 
  <ProdutoRelacionado
  DadoForm={DadoForm} handleInputSelectUpSell={handleInputSelectUpSell}
  HandleInputChange={HandleInputChange}
  />
   }
   {listagem === "Atributos" && 
  <Atributos  atributo={atributo}
  setAtributo={setAtributo}
  handleAddAtributosbutton={handleAddAtributosbutton}
  containerAtributo={containerAtributo}
  handleSalveAtribute={handleSalveAtribute}
  toggleContainerVisibility={toggleContainerVisibility}
  handleChangeValorAndNomeAtributo={handleChangeValorAndNomeAtributo}
  />
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
