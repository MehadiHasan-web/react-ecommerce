import { CiEdit } from "react-icons/ci";


function Profile() {
    return (
        <div>
            <div className="container mx-auto">
                {/* profile  */}
                <div className="p-4  rounded-[20px] flex justify-between w-5/12 border-[1px]">
                    <div className="flex justify-between gap-2 items-center">
                        <img className="w-20 h-20 rounded-full border shadow-lg" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <strong>Mehadi Hasan</strong>
                            <p className="text-slate-500">Team Manager</p>
                            <p className="text-slate-500">Leeds, United Kingdom</p>
                        </div>
                    </div>
                    <div>
                        <button className=" btn py-1 px-2 rounded-[50px] bg-slate-100 shadow-md btn-sm">Edit <CiEdit /></button>
                    </div>
                </div>

                <div className="p-4  rounded-[20px]  w-5/12 border-[1px] mt-4 ">
                    <div className="flex justify-between p-2 w-full">
                        <strong>Personal Information</strong>
                        <button className=" btn py-1 px-2 rounded-[50px] bg-slate-100 shadow-md btn-sm">Edit <CiEdit /></button>
                    </div>
                    <div className="flex justify-between">
                        <div className="p-2">
                            <span className="text-color-red">First Name</span>
                            <p className="font-bold">Mehadi</p>
                        </div>
                        <div className="p-2">
                            <span className="text-color-red">Last Name</span>
                            <p className="font-bold">Hasan</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="p-2 ">
                            <span className="text-color-red">Email address</span>
                            <p className="font-bold">mhshakil06@gmail.com</p>
                        </div>
                        <div className="p-2  ">
                            <span className="text-color-red ">Phone</span>
                            <p className="font-bold">+01811280662</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="p-2 ">
                            <span className="text-color-red ">Bio</span>
                            <p className="font-bold">Team Manager</p>
                        </div>

                    </div>
                </div>

                <div className="p-4  rounded-[20px]  w-5/12 border-[1px] mt-4 ">
                    <div className="flex justify-between p-2 w-full">
                        <strong>Address</strong>
                        <button className=" btn py-1 px-2 rounded-[50px] bg-slate-100 shadow-md btn-sm">Edit <CiEdit /></button>
                    </div>
                    <div className="flex justify-between">
                        <div className="p-2">
                            <span className="text-color-red">Country</span>
                            <p className="font-bold">United Kingdom</p>
                        </div>
                        <div className="p-2">
                            <span className="text-color-red">City/Stote</span>
                            <p className="font-bold">Leeds, East London</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="p-2 ">
                            <span className="text-color-red">Postal Code</span>
                            <p className="font-bold">ERT 2354</p>
                        </div>
                        <div className="p-2  ">
                            <span className="text-color-red ">TAX ID</span>
                            <p className="font-bold">ARD-0662</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
