import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetCategories } from "../../managers/CategoryManager"



export const CategorySelector = () => {

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


    const buttonClick = (evt) => {
        evt.preventDefault()
        if (category.id === 0) {
            window.alert("Please select a category")
        }
        else {
            navigate(`/play-now/${category.id}`)
        }
    }

    return <>

        <div className="grid grid-cols-1 gap-3 w-4/5 lg:w-1/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <label htmlFor="categories" className="  mb-2 text-sm font-luckiest text-3xl text-center text-ronBurgundy">Select a Category</label>
            <select onChange={changeCategoryState} id="id" className="bg-gray-50 border border-gray-300 text-ronBurgundy text-sm rounded-lg focus:ring-ronBurgundy focus:border-ronBurgundy block w-full p-2.5 ">
                <option value={0}>Choose Category</option>
                {
                    categories.map(category => {
                        return <option key={category.id} value={category.id}>{category.label}</option>
                    }
                    )
                }

            </select>
            <button onClick={(evt) => buttonClick(evt)}
                type="button"
                className="justify-self-end text-white font-luckiest bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-full text-sm px-5 py-2.5 text-center hover:bg-darkRonBurgundy">
                Play Now</button>
        </div>

    </>
}

