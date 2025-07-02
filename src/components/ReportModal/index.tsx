import Image from "next/image";
import { Dialog } from "radix-ui";
import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import DownloadCSV from "../DownloadCSV";

const ReportModal = ({
  isOpen,
  setIsOpen,
  isLoading,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      {/* <Dialog.Trigger asChild>
        <button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
          Edit profile
        </button>
      </Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/45 data-[state=open]:animate-overlayShow" />
        <Dialog.Content
          className="fixed  sm:max-w-[500px] bg-white border-zinc-800 text-black left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <Dialog.Title className="p-6 border-b border-zinc-800 m-0 text-[17px] font-medium text-mauve12 hidden">
            Edit profile
          </Dialog.Title>

          <Image
            src="/images/report-iilustration.jpg"
            width={100}
            height={100}
            alt="analysis"
            className="w-4/5 h-full mx-auto mb-4 rounded-lg"
            quality={100}
            unoptimized={true}
          />

          <div className="flex flex-col items-center">
            <DownloadCSV data="" isLoading={isLoading} />
            {!isLoading && (
              <a
                href="/analysis"
                className="underline text-center mt-2 mx-auto text-xs"
              >
                View intelligent insights
              </a>
            )}
          </div>

          <div className="mt-[25px] flex justify-end">
            {/* <Dialog.Close asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none">
                Save changes
              </button>
            </Dialog.Close> */}
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              {/* <Cross2Icon /> */}
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ReportModal;
