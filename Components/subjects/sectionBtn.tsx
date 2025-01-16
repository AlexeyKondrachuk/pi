
import React, { useState } from "react";
import '../../styles/main/filter_btns.scss'

interface MathSection {
  id: number;
  title: string;
  description: string;
}

interface MathSectionsProps {
  sections: MathSection[];
}

const FilterButtons: React.FC<MathSectionsProps> = ({ sections }) => {
  const [activeButton, setActiveButton] = useState<number | null>(null); // Сравниваем по id

  const handleButtonClick = (id: number) => {
    setActiveButton(id); // Устанавливаем текущую активную кнопку
  };

  return (
    <div className="filter-buttons">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`filter-button ${
            activeButton === section.id ? "active" : ""
          }`} // Добавляем класс "active" для выбранной кнопки
          onClick={() => handleButtonClick(section.id)}
        >
          <span>{section.title}</span>
          <p>{section.description}</p>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
