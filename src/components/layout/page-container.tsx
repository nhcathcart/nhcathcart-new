export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-full overflow-x-hidden overflow-y-scroll relative px-4 md:px-12 py-2 md:py-12 h-full">
      <div className="mx-auto max-w-screen-xl px-2 pt-4 pb-12 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-screen-lg">{children}</div>
      </div>
    </div>
  );
}
