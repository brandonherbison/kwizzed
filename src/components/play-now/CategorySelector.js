import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetCategories } from "../../managers/CategoryManager"



export const CategorySelector = ({ token }) => {

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({
        id: 0
    })

    const navigate = useNavigate()

    useEffect(() => {
        GetCategories().then(setCategories)
    }, [])

    const changeCategoryState = (domEvent) => {
        const copy = { ...category };
        copy[domEvent.target.id] = parseInt(domEvent.target.value);
        setCategory(copy);
    };


    return <>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Category</label>
        <select onChange={changeCategoryState} id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value={0}>Choose Category</option>
            {
                categories.map(category => {
                    return <option key={category.id} value={category.id}>{category.label}</option>
                }
                )
            }

        </select>
        {/* make button direct to play-now */}
        <button onClick={() => navigate(`/play-now/${category.id}`)}
            type="button"
            className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Play Now</button>

    </>
}

