export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full max-w-full overflow-x-hidden overflow-y-scroll px-4 py-2 md:px-12 md:py-12">
      <div className="mx-auto max-w-screen-xl px-2 pb-12 pt-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-screen-lg">{children}</div>
      </div>
    </div>
  );
}
