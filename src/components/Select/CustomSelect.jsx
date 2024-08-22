const CustomSelect = ({data}) => {
    return (
        <>
            <select name='#' id='#' className='bg-[#D69E36] text-white border-none outline-none'>
                {data.map((item) => (
                    <option key={item.id}>{item.name}</option>
                ))}
            </select>
        </>
    );
};
export default CustomSelect;
