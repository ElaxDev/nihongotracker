function ProgressBar({
  progress,
  maxProgress,
}: {
  progress: number | undefined;
  maxProgress: number | undefined;
}) {
  return (
    <>
      <progress
        className="progress progress-error w-56"
        value={progress ? progress : 0}
        max={maxProgress ? maxProgress : 100}
      ></progress>
    </>
  );
}

export default ProgressBar;