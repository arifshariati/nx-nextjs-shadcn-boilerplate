type SampleTitleContainerProps = {
  title: string;
  subTitle?: string;
};

export const SampleTitleContainer = ({
  title,
  subTitle,
}: SampleTitleContainerProps) => {
  return (
    <div className="flex flex-col bg-slate-100 p-10 rounded-xl">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};
