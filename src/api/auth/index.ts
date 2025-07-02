import axiosBaseInstance from "@/lib/axiosBaseInstance";
import { handleStreamingContent } from "@/lib/helpers";
import { WaitlistDTO } from "@/types/data";

// EDDD53

export const joinWaitlist = async (data: WaitlistDTO) => {
  try {
    const response = await axiosBaseInstance.post("/users/waitlist", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
