
// eslint-disable-next-line react/prop-types
function FooterLogin({text, wordlink, path}) {
  return (
    <p className="mt-6 text-sm text-center text-gray-400">
   {text}
    <a href={path} className="text-primary hover:underline pl-2">
      {wordlink}
    </a>
  </p>
  )
}

export default FooterLogin