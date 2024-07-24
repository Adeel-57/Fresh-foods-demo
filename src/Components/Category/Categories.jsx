import './Category.css'
import { category_list } from '../../assets/assets.js'

const Categories = ({ category, setCategory }) => {

    return (
        <div className='catg'>
            <div className="catg-content">
                {
                    category_list.map((catg, i) =><div key={i} className={`category ${category === catg.category_name ? "active" : ''}`} onClick={() =>setCategory(prev=>prev===catg.category_name?"":catg.category_name)}>
                        <img src={catg.category_image} />
                        <p>{catg.category_name}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Categories