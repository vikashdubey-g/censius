import { Avatar, Card, Grid, Typography } from "@mui/material";
import { map } from "lodash";
import { colors } from "../theme/colors";
// helper
import { getUserInitials } from "../utils/component.helper";

// userData Interface
import { UserData } from "../configue/userConfigue";

interface UserCardProps {
  userList: UserData[];
}

const UserCard = ({ userList }: UserCardProps) => {
  return (
    <Grid container spacing={4}>
      {map(userList, ({ name, profession }, ind) => (
        <Grid item xs={2.25} key={name}>
          <Card>
            <Avatar
              sx={{
                bgcolor: colors.blue,
                height: 96,
                width: 96,
                fontWeight: 600,
              }}
            >
              {getUserInitials(name)}
            </Avatar>
            <Typography data-testid={`userName-${ind}`} variant="body2">
              {name}
            </Typography>
            <Typography variant="caption">{profession}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCard;
