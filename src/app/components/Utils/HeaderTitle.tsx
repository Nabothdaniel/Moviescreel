type headerTitle = {
    title:string
}

const HeaderTitle=({title}:headerTitle)=> {
  return (
    <div className="my-5 pl-5 text-2xl">{title}</div>
  )
}

export default HeaderTitle;