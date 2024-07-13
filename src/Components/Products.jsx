
import { CiLocationOn } from "react-icons/ci";
import { Badge } from "@/components/ui/badge"

function Products() {
    return (
        <div >
            <div className="grid grid-cols-4  gap-2 mt-4 ">
                <div>
                    <div>
                        <div className='relative '>
                            <img className='rounded-[20px]' src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain" alt="" />
                            <button className='absolute top-0 right-0 mt-4 me-4 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </div>
                        <h2 className='font-bold text-lg mt-2'>STRAB</h2>
                        <span className="flex items-center text-slate-500	">
                            <CiLocationOn className="me-2" />
                            Noiseau 94880
                        </span>
                        <div className="flex items-center mt-2 gap-2">
                            <Badge variant="outline" className='inline-flex items-center  bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 rounded'>Badge</Badge>
                            <Badge variant="outline" className='inline-flex items-center  bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 rounded'>Badge</Badge>
                            <Badge variant="outline" className='inline-flex items-center  bg-red-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 rounded'>Badge</Badge>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Products
