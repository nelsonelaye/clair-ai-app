import { Skeleton } from "@mantine/core";
import React from "react";

const InsightCardLoader = () => {
  return (
    <div>
      {" "}
      {/* <Skeleton height={50} circle mb="sm" /> */}
      <Skeleton height={10} width="20%" radius="lg" />
      <Skeleton height={30} mt={6} radius="xl" />
      <Skeleton height={200} mt={6} radius="xl" />
      {/* <Skeleton height={20} mt={6} radius="xl" /> */}
      {/* <Skeleton height={10} mt={6} radius="xl" />
      <Skeleton height={10} mt={6} width="70%" radius="xl" /> */}
    </div>
  );
};

export default InsightCardLoader;
