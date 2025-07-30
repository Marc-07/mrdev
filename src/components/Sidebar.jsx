import Navigation from "./Navigation"

const Sidebar = () => {
  return (
      <>
          <aside id="header"
              className="w-full md:w-64 bg-gray-900 text-white flex flex-col md:fixed md:top-0 md:left-0 md:h-full md:justify-center z-50">
                <Navigation/>
          </aside>
      </>
  )
}

export default Sidebar