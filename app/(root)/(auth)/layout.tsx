import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-center min-h-screen w-full">{children}</div>;
};
export default Layout;
