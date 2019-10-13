const capitalString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalString };

export const foo = "bar";
export const bar = "foo";


//import everything from a file
import * as capitalString from "capital_String";

//export fallback 
//export only the particular one from the file 
export default function subtract(x,y) {
    return x - y;
}

//import a default export 
//no curly braces around the element
import subtract from "math_functions";

subtract(7,4)
 