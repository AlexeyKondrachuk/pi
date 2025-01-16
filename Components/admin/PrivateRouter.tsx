"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hook/redux";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.userAuth.isAuthenticated); // Обновляем селектор
  

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Пока пользователь не авторизован, ничего не рендерим
  }

  return <>{children}</>;
};

export default PrivateRoute;