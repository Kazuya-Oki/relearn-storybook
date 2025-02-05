import { type FunctionComponent, useState } from "react";

type AvatarType = "robot" | "dog" | "duck";
export type ProfileType = {
  /**
   * User Name
   */
  name: string;

  /**
   * Emoji
   */
  avatar: AvatarType;

  /**
   * Number of followers
   */
  follower: number;

  /**
   * Profile color
   */
  backgroundColor: string;

  /**
   * description
   */
  description: string;
};

export const Profile: FunctionComponent<ProfileType> = ({
  name,
  avatar,
  follower,
  backgroundColor,
  description,
}) => {
  const getEmoji = (avatar: AvatarType) => {
    switch (avatar) {
      case "dog":
        return "🐕";
      case "duck":
        return "🦆";
      case "robot":
        return "🤖";
    }
  };

  const [follow, setFollow] = useState(false);

  const followUser = () => setFollow(true);
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #E6E6E6",
        padding: 20,
        borderRadius: 8,
        backgroundColor: backgroundColor,
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          lineHeight: 1,
          paddingBottom: 12,
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 36,
          }}
        >
          {getEmoji(avatar)}
        </div>
        <p
          style={{
            margin: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </p>
      </div>
      <div>
        <button
          data-testid={"follow-button"}
          style={{
            backgroundColor: follow ? "black" : "white",
            color: follow ? "white" : "black",
            border: "1px solid white",
            borderRadius: 4,
            padding: "4px 8px",
            cursor: "pointer",
          }}
          disabled={follow}
          onClick={followUser}
        >
          {follow ? "フォロー中" : "フォローする"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 12,
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "8px 0",
          }}
        >
          フォロワー: {follower}
        </p>
      </div>
      <div
        style={{
          fontSize: 12,
          paddingBottom: 4,
          borderBottom: "1px solid white",
        }}
      >
        説明
      </div>
      <p
        style={{
          fontSize: 12,
          paddingTop: 4,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
};
