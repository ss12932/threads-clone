interface ThreadCardProps {
  id: string;
  currentUserId: string | undefined;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: { author: { image: string } }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
}: ThreadCardProps) => {
  return (
    <article>
      <h2></h2>
    </article>
  );
};

export default ThreadCard;
