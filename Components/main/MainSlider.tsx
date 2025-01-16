import React, { useState, useEffect, useRef } from "react";
import "../../styles/main/mainSlider.scss";

interface Quote {
  id: number;
  text: string;
  top?: string;
  left?: string;
}

const quotes: Quote[] = [
  { id: 1, text: "Математика — это язык, на котором говорят все точные науки." },
  { id: 2, text: "S = πr²" },
  { id: 3, text: "Если теорему так и не смогли доказать, она становится аксиомой." },
  { id: 4, text: "В математике есть своя красота, как в живописи и поэзии." },
  { id: 5, text: "Всякий знает, что такое кривая, пока не выучится математике настолько, что вконец запутается в бесконечных исключениях." },
  { id: 6, text: "Математика — это искусство называть разные вещи одним и тем же именем." },
  { id: 7, text: "c² = a² + b²" },
  { id: 8, text: 'Чтобы переварить знания, надо поглощать их с аппетитом.'},
  { id: 9, text: 'e ≈ 2,7182818284 5904523536 0287471352...'},
  { id: 10, text: 'cosn²x + sin²x = 1'}
];

// Массив с предсказуемыми позициями для цитат (в пикселях)
const positions = [
  { top: "50%", left: "50%" }, // Центр
  { top: "28%", left: "28%" }, // Левый верхний угол
  { top: "71%", left: "71%" }, // Правый нижний угол
  { top: "25%", left: "75%" }, // Верхний правый угол
  { top: "50%", left: "50%" }, // Центр
  { top: "71%", left: "28%" }, // Нижний левый угол
];

const MainSlider: React.FC = () => {
  const [activeQuotes, setActiveQuotes] = useState<Quote[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const quoteQueueRef = useRef<Quote[]>([...quotes]); // Очередь цитат

  // Индекс позиции для следующей цитаты
  const [positionIndex, setPositionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeQuotes.length >= 2) {
        // Удаляем старую цитату, если их больше двух
        setActiveQuotes((prev) => prev.slice(1));
      }

      const slider = sliderRef.current;
      if (slider) {
        const sliderWidth = slider.offsetWidth;
        const sliderHeight = slider.offsetHeight;

        // Получаем следующую цитату из очереди
        const nextQuote = quoteQueueRef.current.shift(); // Убираем первую цитату из очереди
        if (nextQuote) {
          // Получаем следующую позицию для цитаты
          const position = positions[positionIndex];

          // Если позиция в процентах, то конвертируем в пиксели
          const top = position.top.endsWith('%')
            ? `${(parseFloat(position.top) / 100) * sliderHeight}px`
            : position.top;

          const left = position.left.endsWith('%')
            ? `${(parseFloat(position.left) / 100) * sliderWidth}px`
            : position.left;

          // Обновляем позицию для следующей цитаты
          const newQuote = { ...nextQuote, top, left, id: Date.now() };

          // Добавляем цитату в активные
          setActiveQuotes((prev) => [...prev, newQuote]);

          // Возвращаем цитату в конец очереди
          quoteQueueRef.current.push(nextQuote);

          // Обновляем индекс для следующей позиции
          setPositionIndex((prevIndex) => (prevIndex + 1) % positions.length);
        }
      }
    }, 5000);

    return () => clearInterval(interval); // Очистка интервала
  }, [activeQuotes, positionIndex]); // Следим за состоянием активных цитат и позиций

  return (
    <div className="slider" ref={sliderRef}>
      {activeQuotes.map((quote) => (
        <div
          key={quote.id}
          className="quote"
          style={{
            position: "absolute",
            top: quote.top,
            left: quote.left,
          }}
        >
          {quote.text}
        </div>
      ))}
    </div>
  );
};

export default MainSlider;
