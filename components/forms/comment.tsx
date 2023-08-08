interface CommentProps {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: CommentProps) => {
  return (
    <div>
      <h1 className="text-white bg-red-500 p-10">Comment Form</h1>
    </div>
  );
};

export default Comment;
