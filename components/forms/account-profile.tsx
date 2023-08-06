"use client";

interface AccountProfileProps {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: AccountProfileProps) => {
  return <div>Account Profile</div>;
};

export default AccountProfile;
