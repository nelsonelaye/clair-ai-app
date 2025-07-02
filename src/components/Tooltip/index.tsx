import * as React from "react";
import { Popover } from "radix-ui";

import { Skeleton } from "@mantine/core";

interface Props {
  isLoading?: boolean;
  content: string;
  children: React.ReactNode;
  error?: any;
}
const ToolTip = ({ isLoading, children, content, error }: Props) => {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>{children}</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="w-[350px] text-sm md:w-[400px] bg-gray-100 rounded-xl shadow-lg  will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            <div className="border-b border-gray-200 py-4 px-5">
              <h2 className="text-sm text-center font-semibold text-gray-800">
                AI Insight
              </h2>
            </div>
            <div
              className="text-sm md:text-base font-medium my-6 px-5"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {isLoading && content.length == 0 ? (
                <>
                  <Skeleton
                    height={8}
                    radius="xl"
                    className="rainbow-skeleton"
                    mb="sm"
                  />
                  <Skeleton
                    height={8}
                    mt={6}
                    radius="xl"
                    color="orange"
                    className="rainbow-skeleton"
                    mb="sm"
                  />
                  <Skeleton
                    height={8}
                    mt={6}
                    width="70%"
                    radius="xl"
                    className="rainbow-skeleton"
                    mb="sm"
                  />
                </>
              ) : (
                content
              )}

              {error?.message?.length > 0 && (
                <span className="text-red-500 font-medium">
                  {" "}
                  An error occured. Please check your connect and try again
                </span>
              )}
            </div>

            <div className="space-y-3 border-t border-gray-300 py-4 px-5">
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900">
                {/* <span className="font-medium">Open in Dictionary</span> */}
                {/* <BookOpen className="w-4 h-4" /> */}
              </button>
            </div>

            <Popover.Arrow className="fill-gray-100" width={15} height={10} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};

export default ToolTip;
