import { useState } from "react"
import { CreateCategory } from "../../managers/CategoryManager"



export const CategoryCreator = () => {

    const [category, setCategory] = useState({
        label: ""
    })

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        if (category.label === "") {
            window.alert("Please enter a category label")
        }
        else {
            CreateCategory(category)
                .then(() => {
                    window.alert("Category created")
                    setCategory({
                        label: ""
                    })
                })
        }
    }

    const changeCategoryState = (domEvent) => {
        const copy = { ...category };
        copy[domEvent.target.id] = domEvent.target.value;
        setCategory(copy);
    }
    
    return <>
    <h5 className="mb-2 text-3xl font-bold tracking-tight text-ronBurgundy">Create New Category</h5>
    <form className="grid grid-cols-1 gap-3 m-auto">
        <div className="mb-6">
            <label className="block mb-2 text-xl font-bold">Category Label</label>
            <input onChange={changeCategoryState} type="text" id="label" placeholder="Enter new category here" value={category.label} className="bg-gray-50 text-sm rounded-lg focus:ring-ronBurgundy focus:border-ronBurgundy block w-full p-2.5 " />
        </div>
        <button onClick={handleSaveButtonClick} className="text-white bg-ronBurgundy justify-self-end font-medium rounded-full text-sm px-5 py-2.5 text-center hover:bg-darkRonBurgundy">
            Create
        </button>
    </form>
    </>
}