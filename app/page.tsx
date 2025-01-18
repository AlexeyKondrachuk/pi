"use client"
import { Aboutus } from '@/Components/main/AboutUs/Aboutus';

import '../styles/main/homePage.scss'
import { Footer } from '@/Components/footer/footer';
import { MainTitle } from '@/Components/main/MainTitle';
import { Example } from '@/Components/main/example/Example';




export default function Home() {

  return (
   <main className="homepage-container">
    <MainTitle />
 
   
    <Aboutus />
    <Example />
  
   </main>
  );
}