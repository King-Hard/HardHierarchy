# useEffects and useLayoutEffects

1, 

useEffects(() =>{

}, []) 

- Dito naman is once lang sya magru-run pag may ginawa tayo ng changes is hindi mag-unli run evrytime na may changes tayo


useEffects(() =>{

})

- Pag heto ginamit natin wala syang coma bracket it means evrytime na may changes is magru-run sya


2, useLayoutEffects(() =>{

})

- useLayoutEffects ginagamit natin to pag may something layout tayo na gusto ipakita kay user, like need na naka ayos agad sya bago ag show kay user yung UI na ginawa natin.




useState meron tayo 2 variables, first is handle a main variable and then sa second don natin sa loob na yon gagwin yung function then ire-return natin sya sa main variable natin bali ginamit lang natin sya as lalagyan ng function natin

useref is para syang qurey slector kikukuha nya yung element natin using ref, then const ref lang tayo then = useRef ngayon pwede na antin imanipulate yung element na kinuha natin using useRef. Pwede rin natin to gawin kat wala tayong element na kukunin example gusto lang natin syang gawing data container ganon variable = useRef then yung variable nato pwede na antin imanipulate. 

useEffects we have 2 types yung may bracket at wala first: yung merong bracket is once lang sya magru-run after matapos ng changes na ginawa natin
second: yung walang bracket is every change is magru-run yung tayo

