import React from 'react'
interface RevenueStatsProps{
  current:number, 
  previous: number , 
  thirdMonth: number
}
export default function RevenueStats({current, previous , thirdMonth }: RevenueStatsProps){
  const months = ["Mês Atual", "Mês Passado", "Há 2 Meses"];
  const sales = [current, previous, thirdMonth];

  // Determinando o maior valor de vendas
  const maxSales = Math.max(...sales);
  const maxSalesMonth = sales.indexOf(maxSales);


  return(
    <div className="flex justify-between gap-4 mt-3">
    {months.map((month, index) => (
      <div
        key={month}
        className={`cursor-pointer flex-1 p-4 text-center border rounded-lg shadow-sm ${
          index === maxSalesMonth ? "bg-green-100 border-green-600" : "bg-white"
        }`}
      >
        <h3 className={`text-lg font-semibold ${index === maxSalesMonth ? "text-green-700" : "text-gray-700"}`}>
          {month}
        </h3>
        <p
          className={`text-2xl font-bold ${
            index === maxSalesMonth ? "text-green-600" : "text-gray-500"
          }`}
        >
          R$ {sales[index].toLocaleString("pt-BR")}
        </p>
        {index === maxSalesMonth && (
          <div className="mt-2 text-sm text-green-600">Maior desempenho!</div>
        )}
      </div>
    ))}
  </div>
  )
}