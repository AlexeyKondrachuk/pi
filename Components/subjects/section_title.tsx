import React from 'react';
import '../../styles/main/SectionTitle.scss'

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return (
   
      <div className="section-title">
      <svg width="50px" height="50px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path fill="#444" d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path>
</svg>
        <h3>{title}</h3>
      </div>
 
  );
};

export default SectionTitle;
