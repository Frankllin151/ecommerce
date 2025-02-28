import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
export default function Geral({DadoForm , openModal, setDadoForm ,categoria})
{



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

  return(
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
    <InputLabel className='mt-2'>
    Categoria: <select name="categoria" id="" value={DadoForm.categoria}
    onChange={HandleInputChange}
    className='rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 '>
      {categoria.map((item) =>{
        return <option value={item.nome}key={item.id}>{item.nome}</option>
      })}
     
    </select>
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
  )
}