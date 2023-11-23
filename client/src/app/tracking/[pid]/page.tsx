"use client"

import Image from "next/image";
import Summary from "./components/Summary";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useGetParcelDetailsQuery } from "@/redux/services/parcel.api";
import { ParcelDetail } from "@/redux/services/queries/details.parcel";
import Details from "./components/Details";

export default function Main() {
    const { pid } = useParams();
    const [parcel, setParcel] = useState<ParcelDetail>()

    const { data, isSuccess } = useGetParcelDetailsQuery({ pid: pid as string })

    useEffect(() => {
        setParcel(data?.data.parcels[0])
    }, [data])

    return (
        <main className="flex flex-col gap-5 h-full overflow-y-scroll p-7 list">
            <Summary
                pid={parcel && parcel.pid.slice(0, 14) || ""}
                weight={0}
                receiving_add={parcel && parcel.receiving_add.province.name || ""}
                sending_add={parcel && parcel.sending_add.province.name || ""}
            />

            <Details />
            <section className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Ngày nhận</span>
                        <span className="font-semibold">20/12/2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Giờ nhận</span>
                        <span className="font-semibold">18:00</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Địa chỉ nhận</span>
                        <span className="font-semibold">làng Mây</span>
                    </div>
                </div>
            </section>
            <section>
                <label className="text-sm block mb-2 font-semibold">Ghi chú của khách hàng</label>
                <textarea
                    disabled defaultValue="Hello babae"
                    className="bg-cgray-100 rounded-xl w-full"></textarea>
            </section>
            <section>
                <label className="text-sm block mb-2 font-semibold">Danh sách bưu gửi</label>
                <div className="p-5 grid grid-cols-6 bg-cgray-100 rounded-lg w-full text-cgray-600">
                    <div className="col-span-5">
                        <span className="text-sm text-cgray-400">Headphone</span>
                        <p className="font-semibold">IPhone Promax 15 Gold</p>
                    </div>
                    <div className="col-span-1 text-right">
                        <span className="text-sm text-cgray-400">Cân nặng</span>
                        <p className="font-semibold">400 x 1</p>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm text-cgray-400">Headphone</span>
                        <p className="font-semibold">IPhone Promax 15 Gold</p>
                    </div>
                    <div className="col-span-1 text-right">
                        <span className="text-sm text-cgray-400">Cân nặng</span>
                        <p className="font-semibold">400 x 1</p>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm text-cgray-400">Headphone</span>
                        <p className="font-semibold">IPhone Promax 15 Gold</p>
                    </div>
                    <div className="col-span-1 text-right">
                        <span className="text-sm text-cgray-400">Cân nặng</span>
                        <p className="font-semibold">400 x 1</p>
                    </div>
                </div>
            </section>

            <section>
                <label className="text-sm block mb-2 font-semibold">Tracking link</label>
                <div className="flex justify-center items-center flex-col">
                    <Image
                        alt="qrcode"
                        height={100} width={100}
                        src={`https://api.qrserver.com/v1/create-qr-code/?data=${"http://localhost:3000/tracking/asasxa"}&size=100x100`} />

                    <div className="px-4 py-2 rounded-full bg-cyellow-500 w-1/2 mt-5 flex items-center cursor-pointer">
                        <span className="font-semibold truncate">http://localhost:3000/tracking/asasxa</span>
                        <span className="material-symbols-rounded ml-3">
                            content_copy
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}