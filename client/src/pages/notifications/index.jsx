import React, { useEffect, Fragment } from 'react';

// Material-UI Components
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Paper,
  Divider
} from '@material-ui/core';

// Material-UI Icons
import {
  DoneAll as DoneIcon
} from '@material-ui/icons'

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNotifications, markAsReadAllNotifications } from '../../actions/notificationActions';

//Other
import isEmpty from 'is-empty';

// Custom Components
import Template from '../../components/template';
import Title from '../../components/template/titleComponent'
import Notification from '../../components/notifications/notification'


const Notifications = props => {
  useEffect(() => props.fetchNotifications(), []);
  useEffect(() => props.markAsReadAllNotifications(), []);

  return (
    <Template>
      <Title title="Notificações" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}>
        <Typography variant="h4" component="h2">
          Notificações
        </Typography>
        <IconButton
          variant="outlined"
          color="secondary"
          onClick={() => props.markAsReadAllNotifications()}
        >
          <DoneIcon />
        </IconButton>
      </Box>

      <Paper>
        {!isEmpty(props.notifications) ? (
          <List>
            {props.notifications.map((notification, index) => (
              <Fragment key={notification._id}>
                {index > 0 && <Divider />}
                <ListItem>
                  <Notification notification={notification} />
                </ListItem>
              </Fragment>
            ))}
          </List>
        ) : (
            <Paper>
              <Box p={2}>
                Nenhuma notificação não encontrada.
            </Box>
            </Paper>
          )}
      </Paper>
    </Template>
  );
};

const mapStateToProps = state => ({
  notifications: state.notifications.notifications
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchNotifications, markAsReadAllNotifications }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);