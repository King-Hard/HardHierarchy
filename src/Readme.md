# Components

- Sa react.js ang una nating gagawin mag create tayo ng 3 folders na Components, Pages, and Shared. Sa shared folder natin kaylangan na maglagay tayo ng another folder na Components, Partial and Layout. Sa loob ng Partial folder dito natin ilalagay lahat ng mga reusable components natin. And sa Layout dito naman ilalagay yung mga layout na gagwin natin

Example:
Components
Pages
Folder - Shared sa loob merong components folder
Fol - Components - sa loob merong partial and layput
Fol - Partial - dito mga usable jsx components natin
Fol - Layout - dito tayo mag layout 

1, Para magamit natin yung mga jsx files na ginawa natin import lang natin sila sa main file ng jsx natin kung san natin sila need using import name ng file from sang folder nakalagay using ./folder/file. And then para ma use natin sya don sa loob ng main jsx file natin need lang natin sya i-call using <File /> file and slash

Example: 
import file from './folder/file'

<file />

2, 