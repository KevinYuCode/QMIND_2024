export default function DefaultModal({ children }: any) {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-[blue]  flex justify-center items-center">
      <div className="">
        Helllo world
        {children}
      </div>
    </div>
  );
}
