import { useEffect, useRef, useState } from "react";

export default function BarChart() {
  const canvasRef = useRef(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, value: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const data = [65, 59, 800, 1, 406, 55, 40, 30, 75, 90, 85, 70];
    const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    const barWidth = 30;
    const gap = 15;
    const chartHeight = 280;

    function drawChart() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      data.forEach((value, index) => {
        const x = index * (barWidth + gap);
        const y = chartHeight - value;

        ctx.fillStyle = "#4338CA";
        ctx.fillRect(x, y, barWidth, value); // Desenha a barra

        // Labels no eixo X
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.fillText(labels[index], x + barWidth / 2, chartHeight + 15);
      });
    }

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      let found = false;

      data.forEach((value, index) => {
        const x = index * (barWidth + gap);
        const y = chartHeight - value;

        if (mouseX >= x && mouseX <= x + barWidth && mouseY >= y && mouseY <= chartHeight) {
          setTooltip({ show: true, x: mouseX, y: mouseY, value });
          found = true;
        }
      });

      if (!found) {
        setTooltip((prev) => ({ ...prev, show: false }));
      }
    }

    drawChart();
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} width={450} height={320} className=""></canvas>

      {/* Tooltip */}
      {tooltip.show && (
        <div
          className="absolute bg-black text-white text-xs px-2 py-1 rounded"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 30,
          }}
        >
          {`R$ ${tooltip.value},00`}
        </div>
      )}
    </div>
  );
}
