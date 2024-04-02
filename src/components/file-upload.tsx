"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res: { url: string | undefined }[]) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        // toast.error(`${error?.message}`);
      }}
    />
  );
};
