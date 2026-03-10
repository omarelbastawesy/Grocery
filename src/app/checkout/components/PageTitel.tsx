type PageTitelProps = {
  track: string;
  current_page: string;
};
export default function PageTitel({ track, current_page }: PageTitelProps) {
  return (
    <div className="bg-white mt-4 sm:mt-6 px-4 lg:ml-[152] font-medium text-sm sm:text-base lg:text-xl text-[#BCB8B1]">
      {track}
      <span className="text-[#014162]"> {current_page}</span>
    </div>
  );
}
