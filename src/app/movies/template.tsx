import Loader from "@/src/components/loader";
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="h-full w-full relative"><Loader/>{children}</div>
  }
