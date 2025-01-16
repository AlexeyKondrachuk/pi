import Filter from '@/Components/subjects/filter'
import SectionTitle from '@/Components/subjects/section_title'
import React from 'react'

export default function Physics() {
  return (
    <section className='subject_section-container'>
        <SectionTitle title='Разделы физики'/>
        <Filter />
       </section>
       
  )
}