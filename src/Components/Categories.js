import Category from "./Category";
import Poses from "./Poses";
import { useState,useEffect} from "react";
export default function Categories(){
    let [categories,setCategories]=useState([])
    let [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(()=>{
    fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
    .then((response)=>response.json())
    .then((data)=>{
    setCategories(data)
    console.log(data);
     })
    .catch((err)=>{
        console.log(err);
     })
},[])

    const categoryClick = (categoryId) => {
         setSelectedCategory(categoryId);
    };

    return(
        <div className="categories"> 
        {
            
            categories.map((category,index)=>{
                return(
                    <Category name={category.category_name} 
                    des={category.category_description} 
                    imageKey={index % 12} 
                    key={index}
                    id={category.id}

                    ></Category>  
              )
            })
        }
        {selectedCategory && (
                <Poses id={selectedCategory} />
            )}
     </div>
    )
}