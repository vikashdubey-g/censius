import { Avatar, Card, Grid, Typography } from "@mui/material";
import { map } from "lodash";
// helper
import { getUserInitials } from "../utils/component.helper";

// userData Interface
import { UserData } from "./userConfigue";

interface UserCardProps {
  userList: UserData[];
}

const UserCard = ({ userList }: UserCardProps) => {
  return (
    <Grid container spacing={4}>
      {map(userList, ({ name, profession }) => (
        <Grid item xs={2.25}>
          <Card>
            <Avatar
              sx={{
                bgcolor: "#2563EB",
                height: 96,
                width: 96,
                fontWeight: 600,
              }}
            >
              {getUserInitials(name)}
            </Avatar>
            <Typography variant="body2">{name}</Typography>
            <Typography variant="caption">{profession}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCard;
