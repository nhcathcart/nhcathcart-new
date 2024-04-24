import Loader from '../../components/loader';
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full">
      <Loader />
      {children}
    </div>
  );
}
