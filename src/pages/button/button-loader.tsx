import { ButtonLoader } from '~/ui/buttons';

const button = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full min-h-screen">
      <ButtonLoader />
      <p className="text-xs">Click 🔝</p>
    </div>
  );
};

export default button;
