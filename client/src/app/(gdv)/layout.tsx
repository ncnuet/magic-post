"use client"


import { profileState } from "@/redux/features/profile.slice";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

type IProps = {
  children: React.ReactNode;
};

const GdvLayout = ({ children }: IProps) => {
  const [showContent, setContent] = useState(false);
  const user = useAppSelector(profileState)

  useEffect(() => {
    if (user && user.isLogin) setContent(true);
  }, [user])

  return (
    showContent && children ||
    <div className="h-screen w-screen bg-blue-50 flex flex-col justify-center items-center">
      <p className="animate-bounce">Loading...</p>
      <p className="">Đợi chờ là hạnh phúc</p>
    </div>
  );
};

export default GdvLayout;
