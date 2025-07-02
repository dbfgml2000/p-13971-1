export type PostDto = {
    id: number;
    createDate: string;
    modifyDate: string;
    title: string;
}

export type PostWithContentDto = PostDto & {
    content: string;
}

/*
export type PostWithContentDto = {
    id: number;
    title: string;
    content: string;
}

export type PostDto = Omit<PostWithContentDto, "content">;
*/

export type PostCommentDto = {
    id: number;
    createDate: string;
    modifyDate: string;
    content: string;
  };