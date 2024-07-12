import React, { useEffect, useState } from 'react';
import myuser_svg from '@/assets/svg/myuser.svg';
import Image from "next/image";
import network from '@/assets/svg/network.svg';
import { useStore } from '@/store/useStore';

const Table = ({ isReset, data, columns, useData, setUseData }) => {
  const { price, setPrice } = useStore();
  const handleSelect = (index) => {

  };

  const [isSelected, setIsSelected] = useState();
  const [deviceid, setDeviceid] = useState('')

  const selectRadio = (item, index) => {
    setIsSelected(index);
    setUseData({ ...useData, device_id: item.device_id })
    setPrice(item.calculation_point
    )
  };

  useEffect(() => {
    setIsSelected(null);
    setUseData({ ...useData, device_id: '' })
    setPrice(0)

  }, [isReset])

  return (
    <table className="table-auto w-full text-textdefault" style={{ background: '#fafafc' }}>
      <thead>
        <tr style={{ border: '1px solid #D9D9D9' }}>
          {/* <th className="text-xl font-medium h-15 pl-10 py-2 text-left" >选择</th> */}
          {columns.map((item, index) => (
            <th key={item.key} className="text-xl font-medium h-15 px-4 py-2 text-left">{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} className={`h-15 border ${isSelected === rowIndex && 'isSelect'} border-d9d9d9   borderw hover:bg-white`} onClick={() => handleSelect(rowIndex)}>
            {/* <td className="pl-10 py-2 font-normal">
              <input id='select' onChange={() => { selectRadio(item, rowIndex) }} className='w-5 h-5 cursor-pointer' type="radio" checked={rowIndex === isSelected} />
            </td> */}
            {columns.map((column, colIndex) => (
              <td onClick={() => { selectRadio(item, rowIndex) }} key={colIndex} className=" cursor-pointer px-4 py-2 text-xl font-normal" style={{ fontWeight: '400' }}>

                {/* <Image src={logo_png} className=" cursor-pointer shrink-0 w-10 h-10  aspect-square" alt="Company Logo" /> */}
                {column.dataIndex == 'net' ? <Image src={network} className="aspect-square" alt="Company Logo" /> : item[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
