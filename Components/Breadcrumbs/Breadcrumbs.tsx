'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import '../../styles/main/Breadcrumbs.scss'

// Словарь переводов
const translations: Record<string, string> = {
  subjects: "Предметы",
  math: "Математика",
  physics: "Физика",
  aboutus: 'О сервисе'
};

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const pathParts = pathname.split("/").filter((part) => part); // Разделяем путь на части

  // Если это главная страница ("/"), не отображаем хлебные крошки
  if (pathParts.length === 0 || pathname === '/cart') {
    return null;
  }

  return (
    <nav className="breadcrumbs">
      <button>
        <Link href="/">Главная</Link> {pathParts.length > 0 && " ➤ "}
      </button>
      {pathParts.map((part, index) => {
        // Создаем путь для текущей части
        const href = "/" + pathParts.slice(0, index + 1).join("/");

        // Получаем перевод из словаря или оставляем оригинал, если перевода нет
        const translatedPart = translations[part] || part;

        return (
          <button key={href} className="breadcrumbs_btn">
            <Link href={href}>{translatedPart}</Link>
            {index < pathParts.length - 1 && "➤"}
          </button>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

