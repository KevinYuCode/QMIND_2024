"use client";
import { useGlobalContext } from "@/Context/store";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

function Tags({ project }: any) {
  const {
    isEditing,
    tags,
    setTags,
    tagName,
    setTagName,
    showUpdateTag,
    setShowUpdateTag,
    showAddTag,
    setShowAddTag,
  } = useGlobalContext();
  const handleUpdateTag = (key: any) => {
    const newTags = tags.map((tag: any, idx: any) => {
      if (idx === key) {
        return tagName;
      } else {
        return tag;
      }
    });

    setTags(newTags);
    setShowUpdateTag(-1);
  };

  const handleDeleteTag = (key: any) => {
    const filteredTags = tags.filter((tag: any, idx: any) => idx !== key);
    setTags(filteredTags);
    setShowUpdateTag(-1);
  };

  const handleAddTag = () => {
    setTags([...tags, tagName]);
    setTagName("");
    setShowAddTag(false);
  };

  const handleShowUpdateTag = (isOpen: any, key: any) => {
    if (!isEditing) return;

    if (isOpen) setShowUpdateTag(key);
    else setShowUpdateTag(-1);
  };

  useEffect(() => {
    if (isEditing) {
      setTags(project.tags);
      setTagName("");
    }
  }, [isEditing]);

  useEffect(() => {
    setTags(project.tags);
  }, []);
  return (
    <div className="users-tech">
      {tags &&
        tags.map((tag: any, key: any) => (
          <Dialog
            open={key === showUpdateTag}
            onOpenChange={(e) => handleShowUpdateTag(e, key)}
          >
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className={cn(`users-tech-item h-auto`, {
                  "cursor-default": !isEditing,
                })}
                key={key}
                onClick={() => setTagName(tag)}
              >
                {tag}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tag Title</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Tag Name"
                onChange={(e) => setTagName(e.target.value)}
                value={tagName}
              />
              <div className=" flex gap-[20px] w-full">
                <Button
                  onClick={() => {
                    handleDeleteTag(key);
                  }}
                  variant={"destructive"}
                  className="w-full"
                >
                  Delete Tag
                </Button>
                <Button
                  onClick={() => {
                    handleUpdateTag(key);
                  }}
                  variant={"default"}
                  className="w-full"
                >
                  Update Tag
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}

      {isEditing && tags.length < 6 && (
        <>
          <Dialog open={showAddTag} onOpenChange={setShowAddTag}>
            <DialogTrigger asChild>
              <Button
                onClick={() => setTags([...tags])}
                variant="ghost"
                className="users-tech-item bg-transparent h-auto border-[#6E6E6E] !text-[#6E6E6E]"
              >
                Add Tag
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tag Title</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Tag Name"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
              />
              <Button onClick={() => handleAddTag()}>Add Tag</Button>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}

export default Tags;
