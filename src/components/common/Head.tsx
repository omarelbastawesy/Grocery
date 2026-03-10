export default function Head({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
