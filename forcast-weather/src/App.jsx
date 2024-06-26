import { useRef, useState } from 'react';
import moment from 'moment';

function App() {

  const apiKey = useRef('43b33ac99f53c5aaaeb9b90197ab218d');
  const [name, setName] = useState('');
  const [data, setData] = useState(null);

  function updateWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey.current}&units=metric&lang=vi`)
      .then(async res => {
        const data = await res.json();
        if(data?.cod === '404') {
          alert("Vui lòng nhập lại đúng tên thành phố của bạn")
        } else {
          setData(data);
          console.log("fetch: ", data);
        }
      })
  }
  return (
    <div className='text-white w-[400px] my-12 mx-auto rounded-md text-sm bg-gradient-to-tl from-cyan-500 to-blue-500'>
      <div className=''>
        <div className='w-1/2 my-0 mx-auto pt-5 flex relative justify-center items-center border-b border-b-white pb-1'>
          <input type='text' value={name} onChange={e => setName(e.target.value)} className='bg-transparent outline-none' spellCheck="false"/>
          <button onClick={updateWeather}><i className="fa-solid fa-magnifying-glass outline-none"></i></button>
          
        </div>
        <div className='flex flex-col justify-center items-center py-20 px-14'>
          <p className='text-xl mb-1'>{data?.name || "--"}</p>
          <p className='text-sm'>{data?.weather[0]?.description || "--"}</p>
          <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon || "10d"}@2x.png`} alt='weather icon' className='w-16 h-16'/>
          <p className="text-7xl relative after:content-['O'] after:absolute after:top-0 after:text-sm">{Math.round(data?.main?.temp) || "--"}</p>

        </div>
      </div>
      <div className='border-t border-t-white flex flex-col text-sm py-2 px-5'>
        <div className='mb-1 flex'>
          <div className='flex flex-col flex-1'>
            <div className=''>MT mọc</div>
            <div className=''>{data ? moment.unix(data?.sys?.sunrise).format("H:mm") : "--"}</div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className=''>MT lặn</div>
            <div className=''>{data ? moment.unix(data?.sys?.sunset).format("H:mm") : "--"}</div>
          </div>
        </div>
        <div className='mb-1 flex'>
          <div className='flex flex-col flex-1'>
            <div className=''>độ ẩm</div>
            <div className=''>{data ? `${data?.main?.humidity} %` : "--"}</div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className=''>gió</div>
            <div className=''>{data ? `${(data?.wind?.speed * 3.6).toFixed(2)} km/h` : "--"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
