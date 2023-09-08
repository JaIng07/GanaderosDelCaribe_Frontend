import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function FooterLogin({text, wordlink, path}) {
  return (
    <p className="mt-6 text-sm text-center text-gray-400">
   {text}
    <Link to={path} className="text-primary hover:underline pl-2">
      {wordlink}
    </Link>
  </p>
  )
}

export default FooterLogin