import { Link } from "react-router-dom";
import { menuData } from "../../constants/data";

const MenuBar = () => {
    return (
        <div>
            <button className='w-[60px] h-[60px]'>
                <img
                    src='https://www.funnyart.club/uploads/posts/2022-12/1671147675_www-funnyart-club-p-kartinki-medvedya-grizli-krasivo-2.jpg'
                    className='w-full h-full rounded-full object-cover'
                    alt='avatar'
                />
            </button>

            <div>
                {menuData.map((item) => (
                    <Link key={item.id} to={item.path}>
                        {item.icon}
                        <p>{item.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default MenuBar;
