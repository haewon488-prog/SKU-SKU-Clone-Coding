import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProjectTabs from '../components/ProjectTabs'
import { projects as allProjects } from '../data/projects'

function Project() {
  const [projects, setProjects] = useState([])
  const [filtered, setFiltered] = useState([])
  const [tabs, setTabs] = useState([])
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'all')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab) {
      ['14', '13', '12', '11'].includes(tab) ? setActiveTab(tab) : setActiveTab('all')
    } else {
      setActiveTab('all')
    }
  }, [searchParams])

  useEffect(() => {
    setFiltered(activeTab === 'all' ? projects : projects.filter((p) => p.classTh === activeTab))
  }, [activeTab, projects])

  useEffect(() => {
    try {
      const data = allProjects
      setProjects(data)
      const classThs = [...new Set(data.map((p) => p.classTh))].sort().reverse()
      if (!classThs.includes('14')) classThs.unshift('14')
      setTabs(classThs)
    } catch (e) {
      console.error('프로젝트 가져오기 실패:', e)
    }
  }, [])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setFiltered(tab === 'all' ? projects : projects.filter((p) => p.classTh === tab))
  }

  const openProject = (url) => {
    if (url) window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen mx-auto bg-black">
      <div className="w-4/5 mx-auto py-30 md:py-40">
        <div className="pb-8 mx-auto text-center font-extrabold md:w-fit md:pb-12 md:pr-20 md:border-b-2 md:text-start md:mx-0">
          <div className="text-[25px] sm:text-[40px] text-[#3B79FF]">LIKELION</div>
          <div className="text-[40px] sm:text-[55px] text-white fontBold">PROJECTS</div>
          <div className="text-white text-sm sm:text-lg mt-2 font-medium">
            총 <span className="text-[#3B79FF] font-bold">{filtered.length}건</span>의 프로젝트가 있습니다.
          </div>
        </div>

        <ProjectTabs activeTab={activeTab} onTabClick={handleTabClick} tabs={tabs} />

        {filtered.length > 0 ? (
          <div className="grid w-full grid-cols-2 gap-5 mx-auto mt-8 text-white md:gap-8 sm:grid-cols-3 sm:w-full xl:gap-12 lg:grid-cols-4">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="mx-auto cursor-pointer w-full hover:shadow-xl duration-500 hover:-translate-y-1 group"
                onClick={() => openProject(p.projectUrl)}
              >
                <div className="relative">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full aspect-[17/10] rounded-md shadow-lg group-hover:opacity-30 transition-opacity duration-500 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 text-sm text-white bg-blue-500 rounded-md font-bold sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:text-base xl:px-5 xl:py-2 xl:text-lg">
                      사이트 보러가기
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="my-1 text-sm xl:my-2 font-bold min-[500px]:text-lg lg:text-xl xl:text-[23px]">{p.title}</div>
                  <div className="text-[#A2A2A2] text-xs sm:text-sm xl:text-lg">{p.subTitle}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full mt-24 mb-32">
            <div className="text-[20px] sm:text-[24px] text-[#A2A2A2] fontBold mb-4 text-center break-keep">
              아직 등록된 프로젝트가 없습니다.
            </div>
            <div className="text-[16px] sm:text-[18px] text-[#666666] fontRegular text-center break-keep">
              14기 운영진, 아기사자들의 멋진 아이디어가 곧 현실이 될 예정입니다. 기대해 주세요!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
