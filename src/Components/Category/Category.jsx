import React from 'react'
import CategoryCard from './CategoryCard'
import { categoryInfos } from './categoryFullInfos'
import classes from './Category.module.css'
function Category() {
  return (
    <section
        className={classes.category_container}>
{
categoryInfos.map((infos,i)=>(
    <CategoryCard data = {infos} key={i}/>
))
}
   
    </section>
   
  )
}

export default Category





