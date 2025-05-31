# Components 
- Sa paggawa natin ng components meron tayong mga kaylangan na folder and file structure na susundin.

1, Una - gawa tayo ng App.jsx bali heto yung naka run sa browser natin.

2, Pangalawa - gumawa na tayo ng folder structure natin na Components, Pages, and Shared. Sa shared meron tayong 2 folders pa na Partial and Layout

Example: 

├── Folder
└── File

└──App.jsx

├── /Components
    └── Header.jsx
    └── Footer.jsx
├── /Pages
    └──
├── /Shared
    ├── /Partial
        └── Header.jsx
        └── Header.jsx
    ├── /Layout
        └── RootLayout.jsx

Ngayon meron na tayong maayos na file structure.

3, Pangatlo - ang gagwin naman natin next is yung mga ginawa natin na components ilagay lang natin sa loob ng shared to partial and then punta na tayo sa RootLayour natin para import yung mga to.

4, Pangapat - importing sa loob ng root natin 

example: 

import Head from "../Partial/Head"
import Foot from "../Partial/Foot"

const RootLayout = ({child}) => {
    <Head />
        {child}
    <Foot />
}

export default RootLayout


Explanation neto is inimport natin sa RootLayout yung mga components na need natin then gumawa na tayo ng:

const variable = ({child}) => {
    <>
        {child}
    </>
}

Yung child nato heto yung mga magiging contianer ng mga ilalagay pa natin na mga functions don sa loob ng App.jsx natin bali

Kaya natin to ginagawa kase dederetsyo na natin sya don sa loob ng App.jsx natin sya yung magiging body natin bali mangyayari non is sa loob ng return natin meron <RootLayout> </RooutLayout> indicator na nakuha na natin yung laman neto then trinasfer lang natin sya para maganda yung format natin and standard.

import RootLayout from "./Shared/Layout/RootLayout"

const App = () => {
    <RootLayout>
        <div>Hello World</div>
    </RootLayout>
}

export default App

