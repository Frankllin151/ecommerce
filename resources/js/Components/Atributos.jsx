import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
export default function Atributos({atributo, setAtributo ,handleAddAtributosbutton ,
  containerAtributo, handleSalveAtribute , toggleContainerVisibility, handleChangeValorAndNomeAtributo,
 })
{
  return(
    <div className="mt-2">
    <TextInput 
    name="atributo"
    value={atributo}
    onChange={(e) => setAtributo(e.target.value)}
    placeholder="Add Atributo"
    />
    <PrimaryButton className="ml-2"
    onClick={handleAddAtributosbutton} 
    >Add</PrimaryButton>
    {containerAtributo.map((index) =>(
    <div key={index.id} className={`container ${index.nome_container}`}>
 
    <div className='mt-3 cursor-pointer w-[450px] rounded-sm bg-slate-200 p-3'
    onClick={() => toggleContainerVisibility(index.id)}>  
    <h5>{index.nome_atributo}</h5>
    </div>
   {index.isVisible && (
     <>
      <div className='mt-1 flex items-center w-full '>
     <InputLabel>
     Nome:
     <TextInput
       name="nome"
       value={index.nome}
       onChange={(e) => handleChangeValorAndNomeAtributo(index.id, e.target.value, "nome")}
       placeholder="ex.Tamanho ou Cor"
       />
     </InputLabel>
       <InputLabel>
       Valor(s): <textarea name="valor" id="valor"
       placeholder="Insira algum texto descritivo. Use '|' para separar valores diferentes." 
      
       value={index.valor}
       onChange={(e) => handleChangeValorAndNomeAtributo(index.id, e.target.value, "valor")}
       className='ml-2 w-[450px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
       ></textarea>
       </InputLabel>
      </div>
      <PrimaryButton 
      onClick={() => handleSalveAtribute(index)}>Salvar Atributo</PrimaryButton>
      </>
   )}
    </div>
    ))}
   
  </div>
  )
}