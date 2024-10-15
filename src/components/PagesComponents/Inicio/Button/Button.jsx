import { Link } from "react-router-dom"
import "../Button/button.css"
import useTheme from "../../../Hooks/useTheme"

export default function Button({ name, type, style, route, handle }) {
    const { styleDarkHome, darkResumen } = useTheme()


    return <button type={type} className={`${style} buttonAnimated ${styleDarkHome} ${darkResumen} border  border-[1px]  p-2  rounded-md text-sm font-semibold`} onClick={handle} ><Link to={route}>{name}</Link></button>
}
