# useState useRef
1, useState - Ang useState daw is meron tayong 2 variable then sa una sya yung parang function natin and then yung pangalawa don heto naman yung magiging container natin sa gagawin nating function sa loob ng variable.

 Ayun nga meron tayong count na laman is 0, using useState pwede natin ma change yung value nya depende sa gagwin nating function. Basta ganon may sincle data tayo tapos change natin sya into multiple using useState 

Example gawa tayo ng Count: heto dito natin ilalagay yung function natin then Sa setCount heto naman yung magiging container

import {useState} from 'react'

const App = () => {
    const {count, setCount} = useState(0)
    const Increment = setCount(count + 1)

    return{
        <div className='flex space-x-5'>
            <span>Count: {count}</span>
            <button onClick={Increment}>Increment</button>
        </div>
    }
}

export default App

1, useState - useState natin is single data sya na pwede natin paramihin using 2 variable, ngayon ang funtion nya is example may {count, setCount} tayo ibig sabihin nito is yung count natin is sya daw yung pinaka variable natin na tatawagin pag gagamitin natin yung function ngayon yung setCount dito natin gagawin yung function na laman ng count variable natin example () -> setCount(count + 1) pwede rin na gawin natin is setCount(prev => prev + 1) sa loob daw ng count natin may ginawa tayong function

import {useState} from 'react'
const {count, setCount}
<button onClick={() => setCount(count + 1)}> </button>

2, useRef - useRef natin is para syang ano natin varibale name na pwede natin i-get then imanipulate

Ang useRef natin is para syang document.querySelector kinukuha nya yung element ng isa nating element tag, which is dito ganon din pero need pa natin syang import useRef, gawa ngayon tayo example ng button lagya natin sya ng ref which is ayun yung magiging variable natin and then kunin lang natin sya using const startRef = useRef()

import {useRef} from 'react'
const startRef = useRef()

<button ref="startRef"> Start </button>

ngayon pwede na natin sya imanipulate using: 

if(startRef.current) - yung current nato ibig sabihin is kinukuha natin yung laman nya

setInterval - nagco-count sya everytime after the countdown na sinet natin unlimited to kay para ma stop sya meron tayong clearInterval

clearInterval - pang stop naman natin to nung setInterval natin na naka unlimited count





