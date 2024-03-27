export default function PageContainer({ children }: { children: React.ReactNode }) {
    return <div className="max-w-full overflow-x-hidden overflow-y-scroll relative px-4 md:px-12 py-2 md:py-12 h-full">{children}</div>
}