import { VscLoading as Loading } from 'react-icons/vsc'

export default async function About() {
  return (
    <div className="h-2/3 bg-gradient-to-b from-gradient-foreground to-gradient">
      <div className="container">
        <div className="flex items-center justify-center gap-4 p-6 text-lg font-medium">
          <Loading className="h-5 w-5 animate-spin" />
          Comming Soon...
        </div>
      </div>
    </div>
  )
}
