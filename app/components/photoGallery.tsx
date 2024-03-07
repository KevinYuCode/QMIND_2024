"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Card } from "./ui/card";
import PLUS from "@/assets/icons/add-image.png";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import CLOSE from "@/assets/icons/Close.png";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

function PhotoGallary({ project, images }: any) {
  const [uploadImages, setUploadImages] = useState<any>([]);
  const [errorMessages, setErrorMessages] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [showProjectImage, setShowProjectImage] = useState(-1);
  const [showUploadImage, setShowUploadImage] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const handleAddPhotos = (e: any) => {
    const curErrorMessages = [];
    const files = Array.from(e.target.files);
    const allowedTypes = ["image/png", "image/jpeg"];
    // @ts-ignore
    let curImages = files.filter((file) => allowedTypes.includes(file?.type));

    // Show error message if any invalid files are selected
    if (files.length !== curImages.length) {
      curErrorMessages.push("Only PNG and JPG files are allowed.");
    }

    // Remaining number of images allowed to be uploaded
    const remainingUploads =
      6 - project.projectImages.length - uploadImages.length - curImages.length;

    // Check if adding more files exceeds the limit of 6
    if (remainingUploads < 0) {
      curImages = curImages.filter(
        (_, i: any) =>
          i <= 5 - project.projectImages.length - uploadImages.length
      );
      curErrorMessages.push(
        `You can only upload 6 images TOTAL to your project.`
      );
    }

    setErrorMessages(curErrorMessages);
    setUploadImages((prevImages: any) => [...prevImages, ...curImages]);
  };

  const removeUploadedImage = (imageIdx: any) => {
    setUploadImages((prevImages: any) =>
      prevImages.filter((image: any, i: any) => i !== imageIdx)
    );
  };

  const handleUploadImage = async () => {
    setErrorMessages([]);
    setLoading(true);

    // Checks for spaces in file name
    for (let image of uploadImages) {
      if (image.name.includes(" ")) {
        alert("Can't have spaces in file name.");
        setLoading(false);
        return;
      }
    }

    for (let image of uploadImages) {
      const fileUploadRes = await supabase.storage
        .from("projects")
        .upload(`project_images/${image.name}`, image);

      if (fileUploadRes.error) {
        // @ts-ignore
        if (fileUploadRes?.error?.statusCode === "409")
          alert("Uploaded duplicate image");
        else alert("Error Uploading " + image.name);

        setLoading(false);
        continue;
      }
    }

    let filteredImages = Array.from(
      new Set([
        ...project.projectImages,
        ...uploadImages.map((file: any) => "project_images/" + file.name),
      ])
    );

    const fileNames = filteredImages;

    const projectUploadRes = await supabase
      .from("projects")
      .update({ projectImages: fileNames })
      .eq("id", project.id);

    if (projectUploadRes.error) {
      alert("Error Uploading Image File");
    }

    setUploadImages([]);
    setShowUploadImage(false);
    router.refresh();
    setLoading(false);
  };

  const handleDeleteImage = async (delIdx: string) => {
    setLoading(true);
    const deletingImageName = project.projectImages[delIdx];

    const fileNames = project.projectImages.filter(
      (imageName: string) => imageName !== deletingImageName
    );

    const fileDeleteFromList = await supabase
      .from("projects")
      .update({
        projectImages: fileNames,
      })
      .eq("id", project.id);

    if (fileDeleteFromList.error) {
      alert("Error removing image name");
      setLoading(false);
      return;
    }

    const fileDeleteRes = await supabase.storage
      .from("projects")
      .remove([deletingImageName]);

    if (fileDeleteRes.error) {
      alert("Error deleting image File");
    }

    setTimeout(() => {
      setLoading(false);
      router.refresh();
      setShowProjectImage(-1);
    }, 300);
  };

  const uploadRef = useRef(null);
  return (
    <div className="w-full">
      <div className="users-img-title">PHOTO & VIDEO GALLERY</div>
      <div className="users-img">
        {/* Add Project Image */}
        {images.length <= 6 && (
          <Dialog open={showUploadImage} onOpenChange={setShowUploadImage}>
            <DialogTrigger>
              <Card className="min-w-[338px] min-h-[256px] xxs:w-[150px] rounded-[12px] border-[1.5px] border-[#4E4E4E] flex justify-center items-center cursor-pointer hover:scale-[1.01]">
                <Image src={PLUS} alt="add" height={30} width={30} />
              </Card>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload project Photos</DialogTitle>
              </DialogHeader>
              <Label htmlFor="image">Select images:</Label>
              <Button
                variant={"outline"}
                className="relative"
                onClick={() => {
                  // @ts-ignore
                  if (uploadRef) uploadRef?.current?.click();
                }}
              >
                <Input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  multiple
                  className="absolute invisible"
                  onChange={handleAddPhotos}
                  ref={uploadRef}
                />
                Upload Images
              </Button>

              {/* Uploaded Images List */}
              <div className="flex flex-col gap-[15px]">
                {uploadImages.map((image: any, key: any) => (
                  <div
                    className="flex gap-[10px] items-center justify-between "
                    key={key}
                  >
                    <Label>{image?.name}</Label>
                    <Button
                      variant={"outline"}
                      className="p-[10px] flex h-auto"
                      onClick={() => {
                        removeUploadedImage(key);
                      }}
                    >
                      <Image src={CLOSE} height={6} width={6} alt="close" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Error Message */}
              {errorMessages.map((errorMessage: any, key: any) => (
                <Label key={key} className="text-destructive">
                  {errorMessage}
                </Label>
              ))}

              <Button
                disabled={uploadImages.length <= 0 || loading}
                onClick={handleUploadImage}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#202020"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="#202020"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </Button>
            </DialogContent>
          </Dialog>
        )}

        {/* Project Images */}
        {images.map((image: any, index: any) => (
          <Dialog
            open={index == showProjectImage}
            onOpenChange={(status) => {
              setShowProjectImage(status ? index : -1);
            }}
            key={index}
          >
            <DialogTrigger>
              <div className="min-w-[338px] h-[256px] xxs:w-[150px] relative">
                <Image
                  className=" rounded-[12px] border-[1.5px] border-[#4E4E4E] object-cover"
                  src={image.publicUrl}
                  alt="Project Image"
                  fill
                  unoptimized
                />
              </div>
            </DialogTrigger>
            {/* Content of the modal */}
            <DialogContent className="rounded-[10px] max-w-[80vw] lg:max-w-[50vw] max-h-[80vh] overflow-auto">
              <DialogHeader>
                <DialogTitle>
                  Image {index + 1} / {images.length}
                </DialogTitle>
              </DialogHeader>
              <div className="relative max-h-[90vh] max-w-[90vw] w-[100%] min-h-[50vh]">
                <Image
                  className=" rounded-[12px] shadow-lg object-contain"
                  src={image.publicUrl}
                  alt="Project Image"
                  fill
                  unoptimized
                />
              </div>
              <Button
                variant={"destructive"}
                onClick={() => handleDeleteImage(index)}
                disabled={loading}
              >
                Delete
              </Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallary;
