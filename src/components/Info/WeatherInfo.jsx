import { Icons } from "../../constants/Icons";

const WeatherInfo = () => {
    return (
        <div className='text-white flex justify-between items-center'>
            <div className='flex flex-col gap-[80px]'>
                <h1 className='text-5xl font-bold'>Cloudy</h1>
                <div>
                    <h1 className='text-5xl font-bold'>
                        {26}
                        <sup>∘</sup>C
                    </h1>
                    <p>Sunday | 12 Dec 2023 .</p>
                </div>
            </div>
            <div>
                <Icons.cloudIcon />
            </div>
        </div>
    );
};
export default WeatherInfo;
