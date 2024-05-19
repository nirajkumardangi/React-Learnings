

export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl h-screen">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
      <div>
        <button className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600">
          + Add Project
        </button>
      </div>
      <ul>

      </ul>
    </aside>
  )
}