import WeatherInfo from "./components/Info/WeatherInfo";
import Main from "./components/Main/Main";
import CustomSelect from "./components/Select/CustomSelect";
import { Icons } from "./constants/Icons";

const data = [
    {
        id: 1,
        name: "Uzbek",
    },
    {
        id: 2,
        name: "Qozoq",
    },
];
const App = () => {
    return (
        <div className='bg-[#D69E36] h-screen px-[45px] pt-[50px] pb-[30px]'>
            <div className='flex'>
                <div>
                    <Icons.location />
                </div>
                <CustomSelect data={data} />
            </div>
            <WeatherInfo />
            <Main />
        </div>
    );
};
export default App;
