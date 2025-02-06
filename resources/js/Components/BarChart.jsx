// components/BarChart.js
import { useEffect, useRef } from 'react';

export default function BarChart () {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = [65, 59, 80, 81, 56, 55]; // Exemplo de dados
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    const barWidth = 50;
    const gap = 15;
    const chartHeight = 300;

    // Limpar o canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Desenhar barras
    data.forEach((value, index) => {
      const x = index * (barWidth + gap);
      const y = chartHeight - value;
      ctx.fillStyle = '#4338CA';
      ctx.fillRect(x, y, barWidth, value); // Desenhar barra
    });

    // Desenhar os labels no eixo X
    labels.forEach((label, index) => {
      const x = index * (barWidth + gap) + barWidth / 2;
      const y = chartHeight + 10;
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.fillText(label, x, y); // Desenhar label
    });
  }, []);

  return <canvas ref={canvasRef} width={400} height={320} className=''></canvas>;
};

